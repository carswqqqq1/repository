import puppeteer from "puppeteer-core";

const browser = await puppeteer.launch({
  executablePath: "/usr/local/bin/google-chrome",
  headless: "new",
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});
const page = await browser.newPage();
const fonts = new Set();
const css = new Set();
page.on("response", (r) => {
  const t = r.request().resourceType();
  if (t === "font") fonts.add(r.url());
  if (t === "stylesheet") css.add(r.url());
});
await page.setViewport({ width: 1440, height: 900 });
await page.goto("https://gruns.co/", { waitUntil: "networkidle2", timeout: 90000 });
await new Promise((r) => setTimeout(r, 3000));

const faceRules = await page.evaluate(() => {
  const out = [];
  for (const sheet of document.styleSheets) {
    let rules;
    try {
      rules = sheet.cssRules;
    } catch {
      continue;
    }
    for (const rule of rules) {
      if (rule.type === CSSRule.FONT_FACE_RULE) out.push(rule.cssText);
    }
  }
  return out;
});
console.log(JSON.stringify({ fonts: [...fonts], css: [...css], faceRules }, null, 1));
await browser.close();
