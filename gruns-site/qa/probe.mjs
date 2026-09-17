import puppeteer from "puppeteer-core";

const URL = process.argv[2] || "http://localhost:5174/";
const browser = await puppeteer.launch({
  executablePath: "/usr/local/bin/google-chrome",
  headless: "new",
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});
const page = await browser.newPage();
const errors = [];
page.on("console", (m) => { if (m.type() === "error") errors.push(m.text()); });
page.on("pageerror", (e) => errors.push(`PAGEERROR: ${e.message}`));
page.on("requestfailed", (r) => errors.push(`REQFAIL: ${r.url()} ${r.failure()?.errorText}`));
await page.setViewport({ width: 1440, height: 900 });
await page.goto(URL, { waitUntil: "networkidle0", timeout: 60000 });
await new Promise((r) => setTimeout(r, 1200));
const probe = await page.evaluate(() => {
  const root = document.getElementById("home-page-root");
  const hero = document.querySelector(".hero");
  const grid = document.querySelector(".card-grid");
  const sheets = [...document.styleSheets].map((s) => {
    try { return `${s.href || "inline"} rules=${s.cssRules.length}`; }
    catch { return "blocked"; }
  });
  const cs = (el, p) => (el ? getComputedStyle(el)[p] : "NO-EL");
  return {
    hasRoot: !!root,
    heroDisplay: cs(hero, "display"),
    heroBg: cs(hero, "backgroundImage").slice(0, 80),
    gridDisplay: cs(grid, "display"),
    bodyFont: getComputedStyle(document.body).fontFamily.slice(0, 60),
    sheets,
  };
});
console.log(JSON.stringify({ probe, errors: errors.slice(0, 20) }, null, 1));
await browser.close();
