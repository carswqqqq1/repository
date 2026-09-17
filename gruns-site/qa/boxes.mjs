import puppeteer from "puppeteer-core";

/** Dump geometry + key computed styles for a list of selectors. */
const URL = process.argv[2];
const WIDTH = Number(process.argv[3] || 1440);
const SELECTORS = process.argv.slice(4);

const browser = await puppeteer.launch({
  executablePath: "/usr/local/bin/google-chrome",
  headless: "new",
  args: ["--no-sandbox", "--disable-dev-shm-usage", "--hide-scrollbars"],
});
const page = await browser.newPage();
await page.setViewport({ width: WIDTH, height: 900 });
await page.goto(URL, { waitUntil: "networkidle2", timeout: 90000 });
await new Promise((r) => setTimeout(r, 2500));

const out = await page.evaluate((selectors) => {
  return selectors.map((sel) => {
    const el = document.querySelector(sel);
    if (!el) return { sel, missing: true };
    const r = el.getBoundingClientRect();
    const cs = getComputedStyle(el);
    return {
      sel,
      x: Math.round(r.x),
      y: Math.round(r.y + window.scrollY),
      w: Math.round(r.width),
      h: Math.round(r.height),
      bg: cs.backgroundColor,
      color: cs.color,
      pad: cs.padding,
      radius: cs.borderRadius,
      size: cs.fontSize,
      gap: cs.gap,
    };
  });
}, SELECTORS);
out.forEach((o) =>
  console.log(
    o.missing
      ? `MISSING ${o.sel}`
      : `${o.sel}\n   box x=${o.x} y=${o.y} w=${o.w} h=${o.h} | bg=${o.bg} color=${o.color} pad=${o.pad} r=${o.radius} size=${o.size} gap=${o.gap}`
  )
);
await browser.close();
