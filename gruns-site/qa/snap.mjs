import puppeteer from "puppeteer-core";

/* Capture desktop bands + a 390px mobile pass (closed and open drawer). */

const OUT = process.argv[2] || "/tmp/gruns-shots";
const TAG = process.argv[3] || "now";
const URL = process.argv[4] || "http://localhost:5173/";

const browser = await puppeteer.launch({
  executablePath: "/usr/local/bin/google-chrome",
  headless: "new",
  args: ["--no-sandbox", "--disable-dev-shm-usage", "--force-device-scale-factor=1"],
});

const errors = [];
const page = await browser.newPage();
page.on("pageerror", (e) => errors.push(String(e)));
page.on("console", (m) => m.type() === "error" && errors.push(m.text()));

await page.setViewport({ width: 1440, height: 900 });
await page.goto(URL, { waitUntil: "networkidle0", timeout: 90000 });
await new Promise((r) => setTimeout(r, 1200));

const height = await page.evaluate(() => document.body.scrollHeight);
const bands = Math.min(9, Math.ceil(height / 900));
for (let i = 0; i < bands; i++) {
  await page.evaluate((y) => window.scrollTo(0, y), i * 900);
  await new Promise((r) => setTimeout(r, 350));
  await page.screenshot({ path: `${OUT}/${TAG}_d${i}.jpg`, type: "jpeg", quality: 80 });
}

await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 1, isMobile: true });
await page.goto(URL, { waitUntil: "networkidle0", timeout: 90000 });
await new Promise((r) => setTimeout(r, 1000));

const overflow = await page.evaluate(() => {
  const wide = [];
  for (const el of document.querySelectorAll("body *")) {
    const r = el.getBoundingClientRect();
    if (r.width > 0 && (r.right > window.innerWidth + 1 || r.left < -1)) {
      wide.push({
        tag: el.tagName.toLowerCase(),
        cls: (el.className && el.className.baseVal !== undefined ? el.className.baseVal : el.className) || "",
        left: Math.round(r.left),
        right: Math.round(r.right),
      });
    }
  }
  return { docWidth: document.documentElement.scrollWidth, inner: window.innerWidth, wide: wide.slice(0, 25) };
});

const mh = await page.evaluate(() => document.body.scrollHeight);
const mbands = Math.min(14, Math.ceil(mh / 844));
for (let i = 0; i < mbands; i++) {
  await page.evaluate((y) => window.scrollTo(0, y), i * 844);
  await new Promise((r) => setTimeout(r, 300));
  await page.screenshot({ path: `${OUT}/${TAG}_m${i}.jpg`, type: "jpeg", quality: 80 });
}

await page.evaluate(() => window.scrollTo(0, 0));
await new Promise((r) => setTimeout(r, 300));
const opened = await page.evaluate(() => {
  const btn = document.querySelector('[aria-label="Menu"], [aria-label="Open navigation menu"]');
  if (!btn) return false;
  btn.click();
  return true;
});
await new Promise((r) => setTimeout(r, 700));
await page.screenshot({ path: `${OUT}/${TAG}_menu.jpg`, type: "jpeg", quality: 80 });
await page.screenshot({ path: `${OUT}/${TAG}_menu_full.jpg`, type: "jpeg", quality: 80, fullPage: true });

console.log(JSON.stringify({ height, bands, mh, mbands, opened, overflow, errors: errors.slice(0, 10) }, null, 2));
await browser.close();
