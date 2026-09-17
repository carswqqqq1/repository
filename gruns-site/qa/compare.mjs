import fs from "node:fs";
import puppeteer from "puppeteer-core";

/**
 * Capture full-page + banded screenshots for a URL at desktop and mobile widths.
 * usage: node qa/compare.mjs <outDir> <tag> <url> [bandCount]
 */
const OUT = process.argv[2] || "/opt/cursor/artifacts";
const TAG = process.argv[3] || "shot";
const URL = process.argv[4] || "http://localhost:5173/";
const MAXBANDS = Number(process.argv[5] || 10);

fs.mkdirSync(OUT, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: "/usr/local/bin/google-chrome",
  headless: "new",
  args: [
    "--no-sandbox",
    "--disable-dev-shm-usage",
    "--force-device-scale-factor=1",
    "--hide-scrollbars",
  ],
});

async function capture(label, width, height, mobile) {
  const page = await browser.newPage();
  await page.setViewport({ width, height, isMobile: mobile, hasTouch: mobile });
  await page.setUserAgent(
    mobile
      ? "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1"
      : "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36"
  );
  try {
    await page.goto(URL, { waitUntil: "networkidle2", timeout: 90000 });
  } catch {
    await page.goto(URL, { waitUntil: "domcontentloaded", timeout: 90000 });
  }
  await new Promise((r) => setTimeout(r, 2500));

  // dismiss popups/overlays that lock scrolling
  for (let attempt = 0; attempt < 3; attempt++) {
    await page.keyboard.press("Escape");
    await page.evaluate(() => {
      const wants = /close|dismiss|no thanks|skip/i;
      document.querySelectorAll("button,a,[role=button]").forEach((el) => {
        const txt = `${el.getAttribute("aria-label") || ""} ${el.textContent || ""} ${el.className || ""}`;
        if (wants.test(txt) && el.offsetParent !== null) {
          const r = el.getBoundingClientRect();
          if (r.width < 120 && r.height < 120) el.click();
        }
      });
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.position = "";
    });
    await new Promise((r) => setTimeout(r, 700));
  }
  await new Promise((r) => setTimeout(r, 800));

  // trigger lazy loads
  await page.evaluate(async () => {
    const step = window.innerHeight;
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 150));
    }
    window.scrollTo(0, 0);
  });
  await new Promise((r) => setTimeout(r, 1200));

  const metrics = await page.evaluate(() => ({
    scrollHeight: document.documentElement.scrollHeight,
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
    overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
  }));

  await page.screenshot({
    path: `${OUT}/${TAG}_${label}_full.jpg`,
    type: "jpeg",
    quality: 78,
    fullPage: true,
  });

  const bands = Math.min(MAXBANDS, Math.ceil(metrics.scrollHeight / height));
  for (let i = 0; i < bands; i++) {
    await page.evaluate((y) => window.scrollTo(0, y), i * height);
    await new Promise((r) => setTimeout(r, 450));
    await page.screenshot({
      path: `${OUT}/${TAG}_${label}_b${String(i).padStart(2, "0")}.jpg`,
      type: "jpeg",
      quality: 78,
    });
  }
  await page.close();
  return { label, bands, ...metrics };
}

const out = [];
out.push(await capture("desk", 1440, 900, false));
out.push(await capture("mob", 390, 844, true));
console.log(JSON.stringify({ tag: TAG, url: URL, results: out }, null, 2));
await browser.close();
