import puppeteer from "puppeteer-core";

const URL = process.argv[2] || "http://localhost:5173/?nogame=1";
const browser = await puppeteer.launch({
  executablePath: "/usr/local/bin/google-chrome",
  headless: "new",
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});
const page = await browser.newPage();
const bad = [];
page.on("requestfailed", (r) => bad.push(r.url()));
page.on("response", (r) => r.status() >= 400 && bad.push(`${r.status()} ${r.url()}`));
await page.setViewport({ width: 390, height: 844, isMobile: true });
await page.goto(URL, { waitUntil: "networkidle0", timeout: 90000 });
await page.evaluate(() => document.querySelector('[aria-label="Menu"]')?.click());
await new Promise((r) => setTimeout(r, 800));
const info = await page.evaluate(() => {
  const panel = document.querySelector(".site-nav-drawer__panel");
  const out = { panel: panel ? panel.getBoundingClientRect() : null, children: [] };
  if (panel) {
    for (const c of panel.children) {
      const r = c.getBoundingClientRect();
      out.children.push({ cls: c.className, h: Math.round(r.height), top: Math.round(r.top) });
    }
  }
  const promo = document.querySelector(".nav-promo img");
  out.promo = promo ? { src: promo.src, nw: promo.naturalWidth, h: promo.getBoundingClientRect().height } : null;
  out.scrollH = panel ? panel.scrollHeight : null;
  return out;
});
console.log(JSON.stringify({ info, bad: bad.slice(0, 20) }, null, 2));
await browser.close();
