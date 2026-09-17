import puppeteer from "puppeteer-core";

const CLASSES = [
  "d1","d2","d3","d4","d5","d6",
  "h1","h2","h3","h4","h5","h6",
  "body-1","body-2","body-3","body-4","body-5",
  "label-1","label-2","label-3","label-4",
  "eyebrow-1","eyebrow-2","eyebrow-3","eyebrow-4",
  "btn","btn-primary","btn-secondary","btn-sm","page",
];

const browser = await puppeteer.launch({
  executablePath: "/usr/local/bin/google-chrome",
  headless: "new",
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto("https://gruns.co/", { waitUntil: "networkidle2", timeout: 90000 });
await new Promise((r) => setTimeout(r, 1500));

const res = await page.evaluate((classes) => {
  const probe = document.createElement("div");
  probe.textContent = "Ag";
  document.body.appendChild(probe);
  const out = {};
  for (const c of classes) {
    probe.className = c;
    const cs = getComputedStyle(probe);
    out[c] = {
      font: cs.fontFamily,
      size: cs.fontSize,
      weight: cs.fontWeight,
      lh: cs.lineHeight,
      ls: cs.letterSpacing,
      tt: cs.textTransform,
      color: cs.color,
      bg: cs.backgroundColor,
      radius: cs.borderRadius,
      pad: cs.padding,
      maxw: cs.maxWidth,
      display: cs.display,
    };
  }
  probe.remove();
  // also grab @font-face families actually loaded
  const faces = [...document.fonts].map((f) => `${f.family} ${f.weight} ${f.style} ${f.status}`);
  return { out, faces: [...new Set(faces)] };
}, CLASSES);
console.log(JSON.stringify(res, null, 1));
await browser.close();
