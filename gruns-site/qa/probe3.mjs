import puppeteer from "puppeteer-core";
const b = await puppeteer.launch({executablePath:"/usr/local/bin/google-chrome",headless:"new",args:["--no-sandbox","--disable-dev-shm-usage"]});
const p = await b.newPage();
await p.setViewport({width:1440,height:900});
await p.goto("http://localhost:5173/?nogame=1",{waitUntil:"networkidle0"});
console.log(JSON.stringify(await p.evaluate(()=>{
  const el=document.querySelectorAll('.site-header__icon')[0];
  const cs=getComputedStyle(el);
  const svg=el.querySelector('svg');
  const scs=getComputedStyle(svg);
  return {
    btn:{bg:cs.backgroundColor,shadow:cs.boxShadow,outline:cs.outline,appearance:cs.appearance,filter:cs.filter,backdrop:cs.backdropFilter,mix:cs.mixBlendMode,opacity:cs.opacity},
    svg:{fill:scs.fill,stroke:scs.stroke,color:scs.color,bg:scs.backgroundColor,shadow:scs.boxShadow,border:scs.borderTopWidth+scs.borderTopStyle+scs.borderTopColor,radius:scs.borderRadius,w:scs.width,h:scs.height},
    sheets:[...document.styleSheets].map(s=>s.href)
  };
}),null,2));
await b.close();
