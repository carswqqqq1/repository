import puppeteer from "puppeteer-core";

const URL = process.argv[2] || "https://gruns.co/";
const browser = await puppeteer.launch({
  executablePath: "/usr/local/bin/google-chrome",
  headless: "new",
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto(URL, { waitUntil: "networkidle2", timeout: 90000 });
await new Promise((r) => setTimeout(r, 2500));

const data = await page.evaluate(() => {
  const out = { fonts: {}, sections: [], vars: {} };
  const rootStyle = getComputedStyle(document.documentElement);
  for (const name of rootStyle) {
    if (name.startsWith("--")) out.vars[name] = rootStyle.getPropertyValue(name).trim();
  }
  const pick = (sel) => {
    const el = document.querySelector(sel);
    if (!el) return null;
    const cs = getComputedStyle(el);
    return {
      sel,
      font: cs.fontFamily,
      size: cs.fontSize,
      weight: cs.fontWeight,
      lh: cs.lineHeight,
      color: cs.color,
      ls: cs.letterSpacing,
    };
  };
  out.fonts.h1 = pick("h1");
  out.fonts.h2 = pick("h2");
  out.fonts.body = pick("p");
  out.fonts.btn = pick("a.btn, button");

  document.querySelectorAll("body > *, main > *, main section, body section").forEach((el) => {
    const r = el.getBoundingClientRect();
    const cs = getComputedStyle(el);
    if (el.offsetHeight < 60) return;
    out.sections.push({
      tag: el.tagName.toLowerCase(),
      cls: (el.className || "").toString().slice(0, 80),
      id: el.id,
      top: Math.round(r.top + window.scrollY),
      h: Math.round(r.height),
      bg: cs.backgroundColor,
      bgImage: cs.backgroundImage.slice(0, 120),
    });
  });
  return out;
});
console.log(JSON.stringify(data, null, 1));
await browser.close();
