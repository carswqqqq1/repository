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
await page.evaluate(async () => {
  for (let y = 0; y < document.body.scrollHeight; y += 400) {
    window.scrollTo(0, y);
    await new Promise((r) => setTimeout(r, 80));
  }
});
await new Promise((r) => setTimeout(r, 3000));

const data = await page.evaluate(() => {
  const imgs = [...document.querySelectorAll("img")].map((i) => ({
    src: i.currentSrc || i.src,
    alt: i.alt,
    w: i.naturalWidth,
    h: i.naturalHeight,
    cls: i.className,
  }));
  const bgs = [...document.querySelectorAll("*")]
    .map((el) => getComputedStyle(el).backgroundImage)
    .filter((b) => b && b.startsWith("url("))
    .map((b) => b.slice(4, -1).replace(/["']/g, ""));
  return { imgs, bgs: [...new Set(bgs)] };
});
console.log(JSON.stringify(data, null, 1));
await browser.close();
