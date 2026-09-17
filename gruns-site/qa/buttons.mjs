import puppeteer from "puppeteer-core";

const URL = process.argv[2] || "http://localhost:5173/?nogame=1";
const browser = await puppeteer.launch({
  executablePath: "/usr/local/bin/google-chrome",
  headless: "new",
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto(URL, { waitUntil: "networkidle0", timeout: 90000 });
const res = await page.evaluate(() => {
  const out = [];
  for (const b of document.querySelectorAll("button, input[type=email], input[type=text]")) {
    const cs = getComputedStyle(b);
    if (cs.borderTopStyle !== "none" || cs.backgroundColor === "rgb(239, 239, 239)" || cs.backgroundColor === "buttonface") {
      out.push({ cls: b.className, bg: cs.backgroundColor, border: cs.borderTopStyle + " " + cs.borderTopColor });
    }
  }
  return out;
});
console.log(JSON.stringify(res, null, 2));
await browser.close();
