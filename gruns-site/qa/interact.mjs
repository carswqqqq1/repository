import puppeteer from "puppeteer-core";

// Interaction QA: flip cards until a match-3 win, assert the win banner appears.
const URL = process.argv[2] || "http://localhost:5174/";
const browser = await puppeteer.launch({
  executablePath: "/usr/local/bin/google-chrome",
  headless: "new",
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});
const page = await browser.newPage();
const errors = [];
page.on("pageerror", (e) => errors.push(`PAGEERROR: ${e.message}`));
await page.setViewport({ width: 1440, height: 900 });
for (let attempt = 0; attempt < 3; attempt++) {
  try {
    await page.goto(URL, { waitUntil: "domcontentloaded", timeout: 60000 });
    break;
  } catch (e) {
    if (attempt === 2) throw e;
    await new Promise((r) => setTimeout(r, 2000));
  }
}
await page.waitForSelector(".card", { timeout: 30000 });
await new Promise((r) => setTimeout(r, 1200));

// read hidden prizes from the DOM, pick a prize occurring >= 3x, click those cards
const result = await page.evaluate(() => {
  const fronts = [...document.querySelectorAll(".card .card-front")].map((el) => el.textContent.trim());
  const idx = {};
  fronts.forEach((p, i) => { (idx[p] = idx[p] || []).push(i); });
  const winner = Object.entries(idx).find(([, v]) => v.length >= 3);
  return { fronts, winner };
});
const cards = await page.$$(".card");
for (const i of result.winner[1].slice(0, 3)) await cards[i].click();
await new Promise((r) => setTimeout(r, 500));
const banner = await page.$eval(".game-status", (el) => el.textContent.trim());
const winCount = await page.$$eval(".card.is-win", (els) => els.length);
console.log(JSON.stringify({ prize: result.winner[0], banner, winCount, errors }, null, 1));
await browser.close();
if (!/won/i.test(banner) || winCount < 3 || errors.length) process.exit(1);
console.log("INTERACTION PASS");
