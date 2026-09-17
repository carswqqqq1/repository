import { useState } from 'react'
import './first-order.css'

const cdn = (file, width = 1200) =>
  `https://gruns.co/cdn/shop/files/${file}?width=${width}`

const benefits = [
  ['Icon-Gut.svg', 'Gut Health', 'Prebiotics feed good bacteria to boost nutrient absorption and digestion.'],
  ['Icon-shield.svg', 'Immunity', 'Immune and occasional stress support from Vitamin C, D, Zinc, antioxidants, and adaptogens.'],
  ['Icon-bicep.svg', 'Energy & Body', 'Support recovery, strength, weight management, and metabolism.'],
  ['Icon-brain.svg', 'Brain Health', 'B-Vitamins, Vitamin C, and Vitamin D support brain health.'],
]

const questions = [
  ['When will my gummies arrive?', "We're fast! Orders typically ship within 24 hours and on average arrive 3–5 days later."],
  ["What's inside each order? What am I getting?", 'Each pouch contains 28 individually packed daily servings of delicious Grüns gummies.'],
  ['When will I feel something?', 'Everyone is different, but consistent daily use is essential for the best results.'],
  ['How do you handle returns?', 'Your first order is covered by our simple 30-day money-back guarantee.'],
]

function Button({ children = 'Save 61% + Free Gifts' }) {
  return <a className="fo-button" href="#offers">{children}</a>
}

function Stars() {
  return <span className="fo-stars" aria-label="4.8 out of 5 stars">★★★★★</span>
}

function FirstOrderHeader() {
  return (
    <>
      <div className="fo-sale">☀️ <b>END OF SUMMER SALE</b> ☀️ <span>UP TO 61% OFF W/ FREE GIFTS</span></div>
      <header className="fo-header">
        <a className="fo-logo" href="/">grüns</a>
        <nav><a href="#offers">Shop</a><a href="#science">Science</a><a href="#reviews">Reviews</a></nav>
        <a className="fo-shop" href="#offers">Shop Now</a>
      </header>
    </>
  )
}

function Hero() {
  return (
    <>
      <section className="fo-hero">
        <div className="fo-hero-copy">
          <div className="fo-rating">
            <img src={cdn('reviews-customers-image.webp', 160)} alt="" />
            <span><Stars /> <b>4.8 stars</b><br /><b>100,000</b> reviews • <b>1,000,000+</b> members</span>
          </div>
          <h1>You Have Nutrition Gaps. <em>Grüns Fills Them.</em></h1>
          <ul className="fo-checks">
            <li>60+ Ingredients. 21 Vitamins & Minerals.</li>
            <li>6g Fiber. 3x More Than Leading Greens Powders.</li>
            <li>3rd Party & Clinically Tested.</li>
          </ul>
          <strong>No Powder. No Pills. No Blender. Just Daily Tasty Gummies.</strong>
          <Button />
          <small>✓ Try It <u>Risk-Free For 30 Days</u></small>
        </div>
        <div className="fo-hero-art">
          <img className="fo-hero-product" src={cdn('hero_frontrow-mobile_379b7ec0-3b85-48d7-894b-1ddc68e81406.webp', 1000)} alt="Grüns Superfoods Greens Gummies" />
          <img className="fo-price-badge" src={cdn('lowered-price-badge-bday.webp', 350)} alt="We lowered our price" />
          <div className="fo-clinicians"><b>❧ Clinicians' Choice ❧</b><span><b>1,500+ clinicians</b> shared this with their patients without compensation.</span></div>
        </div>
      </section>
      <section className="fo-reviews" id="reviews">
        <article className="muted">“Get Your Health Back on Track”<p>Moms who need energy can get their health back on track.</p></article>
        <article><b>“My Body Is Finally Working With Me.</b><p>Within 5 days, I was going to the bathroom <strong>every single day.</strong> By day 14, I felt <strong>lighter and more energized</strong>.</p><div>◯ <Stars /> <b>Chelsea W.</b></div></article>
        <article className="muted">“Easier to Win the Day with Grüns”<p>Easy to pack rather than a bunch of pills and powders.</p></article>
        <div className="fo-dots">←　 ● ● ● ●　 →</div>
      </section>
    </>
  )
}

function Benefits() {
  return (
    <>
      <section className="fo-benefits">
        <h2>Transform Your Health</h2>
        <p>Over 35,000 research publications support the ingredients in Grüns.</p>
        <div className="fo-benefit-layout">
          <img src={cdn('BearWithStaticShadow_0053fabc-639e-405e-b1bd-4cae4871b2e1.webp', 800)} alt="Green gummy bear" />
          <div className="fo-benefit-grid">
            {benefits.map(([icon, title, text]) => <article key={title}><img src={cdn(icon, 60)} alt="" /><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>
      <section className="fo-science" id="science">
        <div className="fo-modern">
          <div><h2>Modern Living Leaves Our Bodies Deficient</h2><p>Grüns is the first smart gummy that fills the gaps.</p>
            <div className="fo-big-stats"><span><b>90%</b>of U.S. adults don't meet recommended daily nutrient intake.</span><span><b>61%</b>of Americans experience weekly digestive issues.</span></div>
            <Button />
          </div>
          <img src={cdn('LifestyleImage-HandSatchet_2x_2e155675-186a-42d7-b8a7-2ccd7bcc42b3.webp', 800)} alt="Hand holding a daily Grüns sachet" />
        </div>
        <div className="fo-tested">
          <h2>Snackable, Packable, Tested</h2>
          <p>Here's what thousands of customers reported after 3 months of Grüns.</p>
          <div>{[['95%','take Grüns at least 4–6x per week'],['67%','say their overall health improved'],['67%','experienced better digestion'],['52%','feel more energized']].map(([n,t])=><span key={t}><b>{n}</b>{t}</span>)}</div>
          <hr /><h2>Quality You Can Trust</h2><p>Every lot is tested to ensure label claims are accurate and clear of contaminants.</p>
          <ul><li>70 Different pesticides</li><li>4 types of heavy metals</li><li>16 different contaminants</li><li>9 Microbial contaminants</li></ul>
        </div>
      </section>
    </>
  )
}

function Buybox() {
  const [flavor, setFlavor] = useState('Original')
  const [plan, setPlan] = useState('subscribe')
  return (
    <section className="fo-buybox" id="offers">
      <h2>It’s Our Birthday!<br />We Lowered Our Prices to Celebrate.</h2>
      <div className="fo-product-grid">
        <div className="fo-gallery">
          <img className="fo-main-shot" src={cdn('og_adults_ls_52_2x_307df677-3dc9-4152-a629-7aaa003da9c9.webp', 1000)} alt="Grüns gummy pouch and sachets" />
          <div className="fo-thumb-row"><span /><span /><span /><span /><span /></div>
          <button>View Nutrition Label</button>
          <div className="fo-lab-card">✓ Tested by Light Labs in JUL 2025<br /><b>35 substances tested for quality</b></div>
        </div>
        <div className="fo-product-form">
          <p><Stars /> <u>4.8/5.0 (100,000), 1M+ Customers</u></p>
          <h2>Grüns Superfood Gummies</h2>
          <p><b>60+ potent ingredients to revive whole body vitality in great tasting gummies.</b></p>
          <ul className="fo-product-points"><li>Promotes mental clarity + energy</li><li>Supports immunity + stress relief</li><li>Supports digestion and gut health</li><li>Clinically tested for nutrient absorption</li></ul>
          <hr /><h4>Select Flavor: <span>{flavor}</span></h4><p><i>Where fresh strawberries meets clean greens.</i></p>
          <div className="fo-flavors">{['Original','Berry Far Far Away','Popsicle® Firecracker'].map(f=><button onClick={()=>setFlavor(f)} className={flavor===f?'active':''} key={f}>{f}</button>)}</div>
          <hr /><h4>Select Sugar Level</h4><div className="fo-toggle"><button className="active">Low Sugar</button><button>Sugar-Free</button></div>
          <hr /><h4>How many Adults? <span>Buy More, Save More.</span></h4><div className="fo-qty"><button className="active">1</button><button>2</button></div>
          <h4>Autoship and Save:</h4>
          <button className={`fo-plan ${plan==='subscribe'?'active':''}`} onClick={()=>setPlan('subscribe')}><b>◉ Subscribe & Save</b><span><b>$29.99</b><s>$66.65</s></span><small>28 packs each 4 weeks</small><ul><li>Free Shipping Today</li><li>Pause Or Cancel Any Time</li><li>30-Day Money-Back Guarantee</li></ul></button>
          <button className={`fo-plan once ${plan==='once'?'active':''}`} onClick={()=>setPlan('once')}><b>○ One Time Purchase</b><span><b>$66.65</b></span></button>
          <Button children="Start Now" />
          <p className="fo-auto">◆ DISCOUNT AUTO-APPLIED</p>
          <div className="fo-assurances"><span>◉<br />30-Day Money-Back Guarantee</span><span>⌁<br />Clinically and 3rd party tested</span><span>✚<br />HSA/FSA eligible</span></div>
          <div className="fo-details">{['Why Grüns?','Ingredients & Allergies','Low Sugar vs. Sugar-Free','Science & Certifications','Directions','Benefits'].map(x=><details key={x}><summary>{x}<b>＋</b></summary><p>Comprehensive, convenient daily nutrition made from clean, carefully tested ingredients.</p></details>)}</div>
          <h3>Packed With</h3><div className="fo-packed">🥦 Whole Veggies　🍇 Whole Fruits　💊 Vitamins & Minerals　🍄 Super Mushrooms</div>
          <section className="fo-supplement">
            <header><h3>Grüns</h3><b>Supplement Facts</b><span>Serving size: One Pack (20g)</span></header>
            {[['Calories','50'],['Dietary Fiber','6g'],['Vitamin A','100%'],['Vitamin C','103%'],['Vitamin D3','100%'],['Vitamin E','100%'],['Vitamin B6','100%'],['Vitamin B12','100%'],['Biotin','100%'],['Folate','100%'],['Iron','25%'],['Zinc','25%'],['Selenium','25%'],['Vitamin K2','120mcg']].map(([name,value])=><div key={name}><span>{name}</span><b>{value}</b></div>)}
            <p><b>Core Nutrients Blend</b><br />Whole food fruits and vegetables, organic greens, adaptogens, antioxidants, prebiotics, super mushrooms, vitamins and minerals.</p>
          </section>
        </div>
      </div>
    </section>
  )
}

function LowerSections() {
  return (
    <>
      <section className="fo-evidence">
        <div className="fo-evidence-heading"><p>REAL PEOPLE. REAL ROUTINES.</p><h2>Small habit.<br />Whole-body difference.</h2><p>Grüns makes comprehensive nutrition easy enough to take every day and powerful enough to notice.</p></div>
        <div className="fo-evidence-cards">
          <article><b>95%</b><h3>stay consistent</h3><p>Most members take Grüns at least four to six times per week.</p></article>
          <article><b>67%</b><h3>feel healthier</h3><p>Customers report improved overall health and well-being.</p></article>
          <article><b>67%</b><h3>digest better</h3><p>Daily users report better, more regular digestion.</p></article>
        </div>
        <div className="fo-evidence-strip"><span>60+ INGREDIENTS</span><span>21 VITAMINS & MINERALS</span><span>6G FIBER</span><span>ONE DAILY PACK</span></div>
      </section>
      <section className="fo-shrek">
        <div><h2>Going fast.<br />No restocks planned.</h2><p>Stock up on Berry Far Far Away Adults before it's gone.</p><Button children="Shop Now" /></div>
        <img src={cdn('Group_1984079150.webp', 800)} alt="Shrek x Grüns" />
      </section>
      <section className="fo-voices">
        <p className="fo-kicker">OVER 100,000 FIVE-STAR REVIEWS</p>
        <h2>Feeling good looks<br />different on everyone.</h2>
        <div className="fo-voice-grid">
          {[
            ['“No afternoon crash”','I have steady energy and feel more focused through busy workdays.'],
            ['“My easiest healthy habit”','One pack goes everywhere with me. No powders and no cleanup.'],
            ['“My gut finally feels calm”','I feel lighter, less bloated, and much more regular.'],
            ['“They actually taste great”','Like fruit snacks, except I know I am filling real nutrition gaps.'],
            ['“Replaced my vitamin shelf”','One delicious pack instead of a handful of pills every morning.'],
            ['“Worth sticking with”','I am finally consistent because taking Grüns never feels like a chore.'],
          ].map(([title,text],i)=><article key={title}><div className={`fo-voice-image v${i+1}`}><span>grüns</span></div><Stars /><h3>{title}</h3><p>{text}</p><b>{['Taylor M.','Amelia R.','Jordan K.','Chris L.','Morgan S.','Jamie W.'][i]}</b></article>)}
        </div>
      </section>
      <section className="fo-story">
        <h2>Grüns fit into<br />real lives & routines.</h2>
        <div className="fo-story-grid">{['Convenient and delicious','Better energy every day','All my essentials in one pack','A habit I finally stick with','Travel-ready nutrition','My whole family loves them'].map((x,i)=><article key={x}><div className={`fo-photo p${i+1}`}>grüns</div><Stars /><h3>{x}</h3><p>“Easy, effective, and something I genuinely look forward to every day.”</p></article>)}</div>
      </section>
      <section className="fo-compare">
        <div><h2>Us vs. Them</h2><p>Not overhyped or overpriced. Just comprehensive nutrition made enjoyable and for everyone.</p></div>
        <img src={cdn('UsVsThem_Adults.png', 1200)} alt="Grüns comparison table" />
      </section>
      <section className="fo-birthday">
        <div><h2>Same Grüns.<br />New Lower Price.<br />Subs Now Start at $29.99.</h2><p>It's our third birthday, and we're lowering prices—not just for a week but indefinitely.</p><Button children="Shop Now" /></div>
        <img src={cdn('Group_1984079021.webp', 1000)} alt="Grüns birthday pouch" />
      </section>
      <section className="fo-shaun">
        <img src={cdn('Lifestyle-ShaunWhite.webp', 1000)} alt="Shaun White holding Grüns" />
        <div><h2>“I love that it makes better health accessible to everyone”</h2><p>“Grüns uses clean ingredients that actually deliver, whether you're training at the highest level or just trying to make good choices every day.”</p><b>Shaun White</b><small>3x Olympic Gold Medalist, Snowboarding Icon</small><Button children="Shop Now" /></div>
      </section>
      <section className="fo-final">
        <div><Stars /><p>4.8 stars • 100K+ reviews • 1M+ members</p><h2>It's Our Birthday.<br />We Lowered Our Price.</h2><ul><li>✓ 30-day money-back guarantee</li><li>✓ Clinically and 3rd party tested</li><li>✓ HSA/FSA eligible</li></ul><Button children="Shop Now" /></div>
        <img src={cdn('pouch_w_gummies.webp_3.webp', 1200)} alt="Grüns pouch and gummy bear" />
      </section>
      <section className="fo-faq">
        <h2>Any last questions?</h2>
        <div>{questions.map(([q,a])=><details key={q}><summary>{q}<b>＋</b></summary><p>{a}</p></details>)}</div>
      </section>
      <footer className="fo-footer"><a className="fo-logo" href="/">grüns</a><div><b>Learn</b><a href="#">Reviews</a><a href="#science">Our Science</a><a href="#">How Grüns Works</a><a href="/pages/help-center">FAQs</a></div><div><b>Connect</b><a href="#">Partners & Influencers</a><a href="#">Careers</a><a href="#">Contact Us</a></div><div><b>Rewards</b><a href="#">VIP Access</a><a href="#">Refer a Friend</a><a href="#">Exclusives 101</a></div><p>© 2026, Grüns　 Privacy Policy　 Terms Of Service　 Accessibility</p><strong>THE BEAR<br />NECESSITIES</strong></footer>
    </>
  )
}

export default function FirstOrder() {
  return <div className="first-order"><FirstOrderHeader /><main><Hero /><Benefits /><Buybox /><LowerSections /></main></div>
}
