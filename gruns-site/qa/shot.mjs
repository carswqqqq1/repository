import puppeteer from "puppeteer-core";

const OUT = process.argv[2] || "/opt/cursor/artifacts";
const TAG = process.argv[3] || "r1";
const URL = process.argv[4] || "http://localhost:4173/";

const browser = await puppeteer.launch({
  executablePath: "/usr/local/bin/google-chrome",
  headless: "new",
  args: ["--no-sandbox", "--disable-dev-shm-usage", "--force-device-scale-factor=1"],
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto(URL, { waitUntil: "networkidle0", timeout: 60000 });
await new Promise((r) => setTimeout(r, 1500));

// full page
await page.screenshot({ path: `${OUT}/${TAG}_full.jpg`, type: "jpeg", quality: 82, fullPage: true });

// viewport bands every 900px (mirrors home_band_N refs)
const height = await page.evaluate(() => document.body.scrollHeight);
const bands = Math.min(7, Math.ceil(height / 900));
for (let i = 0; i < bands; i++) {
  await page.evaluate((y) => window.scrollTo(0, y), i * 900);
  await new Promise((r) => setTimeout(r, 400));
  await page.screenshot({ path: `${OUT}/${TAG}_band_${i}.jpg`, type: "jpeg", quality: 82 });
}
console.log(JSON.stringify({ height, bands, out: OUT, tag: TAG }));
await browser.close();
