import puppeteer from "puppeteer-core";

const browser = await puppeteer.launch({
  executablePath: "/usr/local/bin/google-chrome",
  headless: "new",
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
const urls = new Set();
page.on("response", (r) => {
  const t = r.request().resourceType();
  if (t === "image") urls.add(r.url().split("?")[0]);
});
await page.goto("https://gruns.co/", { waitUntil: "networkidle2", timeout: 90000 });
await new Promise((r) => setTimeout(r, 5000));

const modal = await page.evaluate(() => {
  const res = [];
  document.querySelectorAll("[role=dialog], .modal, [class*=game], [class*=popup], [class*=scratch]").forEach((el) => {
    if (el.offsetHeight > 200) {
      res.push({
        cls: (el.className || "").toString().slice(0, 100),
        html: el.outerHTML.slice(0, 4000),
      });
    }
  });
  return res;
});
console.log(JSON.stringify({ images: [...urls], modal }, null, 1));
await browser.close();
