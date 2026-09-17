import puppeteer from "puppeteer-core";
const b = await puppeteer.launch({executablePath:"/usr/local/bin/google-chrome",headless:"new",args:["--no-sandbox","--disable-dev-shm-usage"]});
const p = await b.newPage();
await p.setViewport({width:1440,height:900});
await p.goto("http://localhost:5173/?nogame=1",{waitUntil:"networkidle0"});
console.log(JSON.stringify(await p.evaluate(()=>{
  const out=[];
  for(const el of document.querySelectorAll('.site-header__icon, .site-header__actions, .site-header__logo')){
    const cs=getComputedStyle(el);
    out.push({cls:el.className, bg:cs.backgroundColor, bw:cs.borderTopWidth, bs:cs.borderTopStyle, bc:cs.borderTopColor, color:cs.color, r:el.getBoundingClientRect()});
  }
  return out;
}),null,2));
await b.close();
