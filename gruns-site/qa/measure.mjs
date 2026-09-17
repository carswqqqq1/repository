import puppeteer from "puppeteer-core";

/** Report geometry + type for text nodes matching given phrases, so the
 *  replica's headings/containers can be matched against gruns.co. */
const URL = process.argv[2] || "https://gruns.co/";
const WIDTH = Number(process.argv[3] || 1440);

const PHRASES = [
  "60+ Ingredients in One Pack",
  "Save 55% + Free Shipping",
  "4.8 stars",
  "Ingredients",
  "Find Your Flavor",
  "Original Adults",
  "Add to Cart",
  "We made daily nutrition",
  "Delicious Flavor",
  "60+ INGREDIENTS",
  "3rd party-tested",
  "We Lowered Our Prices",
  "Grüns Superfood Gummies",
  "Same Grüns.",
  "getting around",
  "21 VITAMINS",
  "It's Our Birthday.",
  "Sign Up for 55% Off",
  "Shop Now",
];

const browser = await puppeteer.launch({
  executablePath: "/usr/local/bin/google-chrome",
  headless: "new",
  args: ["--no-sandbox", "--disable-dev-shm-usage", "--hide-scrollbars"],
});
const page = await browser.newPage();
await page.setViewport({ width: WIDTH, height: 900 });
await page.goto(URL, { waitUntil: "networkidle2", timeout: 90000 });
await new Promise((r) => setTimeout(r, 2500));
await page.evaluate(async () => {
  for (let y = 0; y < document.body.scrollHeight; y += 600) {
    window.scrollTo(0, y);
    await new Promise((r) => setTimeout(r, 60));
  }
  window.scrollTo(0, 0);
});
await new Promise((r) => setTimeout(r, 1200));

const out = await page.evaluate((phrases) => {
  const res = [];
  for (const phrase of phrases) {
    const needle = phrase.toLowerCase();
    const matches = [...document.querySelectorAll("h1,h2,h3,h4,p,a,span,button,li,div")].filter((el) => {
      const t = (el.textContent || "").trim().toLowerCase();
      if (!t.includes(needle)) return false;
      // only the tightest element containing the phrase
      return ![...el.children].some((c) => (c.textContent || "").toLowerCase().includes(needle));
    });
    const el = matches[0];
    if (!el) {
      res.push({ phrase, missing: true });
      continue;
    }
    const r = el.getBoundingClientRect();
    const cs = getComputedStyle(el);
    const parent = el.parentElement?.getBoundingClientRect();
    res.push({
      phrase,
      tag: el.tagName.toLowerCase(),
      cls: (el.className || "").toString().slice(0, 70),
      x: Math.round(r.x),
      right: Math.round(r.right),
      w: Math.round(r.width),
      h: Math.round(r.height),
      font: cs.fontFamily.split(",")[0].replace(/"/g, ""),
      size: cs.fontSize,
      weight: cs.fontWeight,
      lh: cs.lineHeight,
      ls: cs.letterSpacing,
      align: cs.textAlign,
      color: cs.color,
      parentW: parent ? Math.round(parent.width) : null,
      parentX: parent ? Math.round(parent.x) : null,
    });
  }
  return res;
}, PHRASES);

for (const r of out) {
  if (r.missing) {
    console.log(`MISSING  ${r.phrase}`);
    continue;
  }
  console.log(
    `${r.phrase}\n   ${r.tag}.${r.cls}\n   x=${r.x} right=${r.right} w=${r.w} h=${r.h} | ${r.font} ${r.size}/${r.lh} w${r.weight} ls${r.ls} ${r.align} ${r.color} | parent x=${r.parentX} w=${r.parentW}`
  );
}
await browser.close();
