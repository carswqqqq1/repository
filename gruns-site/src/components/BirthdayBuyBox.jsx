import { useState } from "react";

/* Pack shots, gallery thumbs and flavour swatches are cropped out of the
   gruns.co PDP captures — see scripts/crop-screenshots.py. */
const FLAVORS = [
  {
    id: "original",
    name: "Original",
    note: "Where fresh strawberries meets clean greens.",
    shot: "/images/pack-shot-original.jpg",
    swatch: "/images/swatch-original.jpg",
  },
  {
    id: "shrek",
    name: "Berry Far Far Away",
    note: "Where juicy raspberry meets fresh blueberry.",
    tag: "Brand New",
    shot: "/images/pack-shot-shrek.jpg",
    swatch: "/images/swatch-shrek.jpg",
  },
];

const THUMBS = [
  { src: "/images/gallery-thumb-1.jpg", alt: "Grüns pack birthday price drop" },
  { src: "/images/gallery-thumb-2.jpg", alt: "Supplement facts panel" },
  { src: "/images/gallery-thumb-3.jpg", alt: "Trusted by 1,000,000+ customers" },
  { src: "/images/gallery-thumb-4.jpg", alt: "What to expect after taking Grüns" },
  { src: "/images/gallery-thumb-5.jpg", alt: "Customer survey results" },
  { src: "/images/gallery-thumb-6.jpg", alt: "Digestion, immunity and focus benefits" },
];

const FAQS = [
  { q: "Why Grüns?", a: "Comprehensive nutrition that works. Grüns replaces handfuls of health products at a fraction of the cost. Delicious, portable, no mess no stress." },
  { q: "Ingredients & Allergies", a: "Gluten-free, dairy-free, nut-free, vegan. No synthetic sweeteners or dyes. Pectin base (fruit fiber), no gelatin." },
  { q: "Low Sugar vs. Sugar-Free", a: "Low Sugar has 8g added sugar and tastes like a treat. Sugar-Free has 0g sugar, same 60+ ingredients." },
  { q: "Science & Certifications", a: "Clinically tested for nutrient absorption. Made in NSF, GMP, FDA-registered facilities. Third-party tested for heavy metals and contaminants." },
  { q: "Directions", a: "Take no more than one pack per day. Rip. Tip. Enjoy. No water or shaker needed." },
  { q: "Benefits", a: "Mental clarity + energy, immunity + stress relief, digestion and gut health." },
];

export default function BirthdayBuyBox() {
  const [flavor, setFlavor] = useState("original");
  const [sugar, setSugar] = useState("low");
  const [adults, setAdults] = useState(1);
  const [plan, setPlan] = useState("sub");
  const [open, setOpen] = useState(0);

  const active = FLAVORS.find((f) => f.id === flavor);

  return (
    <section className="birthday" id="buy" aria-label="Birthday sale buy box">
      <h2 className="birthday-title">It&rsquo;s Our Birthday!<br />We Lowered Our Prices to Celebrate.</h2>
      <div className="buy-grid">
        {/* gallery */}
        <div className="gallery">
          <div className="gallery-row">
            <ul className="thumbs">
              {THUMBS.map((t, i) => (
                <li key={t.src} className={i === 0 ? "is-active" : ""}>
                  <img src={t.src} width="67" height="81" loading="lazy" alt={t.alt} />
                </li>
              ))}
            </ul>
            <div className="main-shot">
              <img
                className="main-photo"
                src={active.shot}
                width="640"
                height="640"
                alt={`Grüns Superfood Gummies — ${active.name}`}
              />
            </div>
          </div>
          <button className="btn btn--ghost btn--block">View Nutrition Label</button>
          <div className="lab-note">
            <span className="lab-check">✔</span>
            <p>Tested by Light Labs in <mark>JUL 2025</mark><br />35 substances tested for quality →</p>
          </div>
        </div>

        {/* buy box */}
        <div className="buybox">
          <p className="buy-rating">★★★★★ <u>4.8/5.0 (100,000), 1M+ Customers</u></p>
          <h3 className="buy-name">Grüns Superfood Gummies</h3>
          <p className="buy-tag"><strong>60+ potent ingredients to revive whole body vitality in great tasting gummies.</strong></p>
          <ul className="buy-points">
            <li>Promotes mental clarity + energy</li>
            <li>Supports immunity + stress relief</li>
            <li>Supports digestion and gut health</li>
            <li>Clinically tested for nutrient absorption</li>
          </ul>

          <h4 className="opt-label">Select Flavor: <span>{active.name}</span></h4>
          <p className="opt-note"><em>{active.note}</em></p>
          <div className="flavor-row" role="radiogroup" aria-label="Flavor">
            {FLAVORS.map((f) => (
              <button
                key={f.id}
                role="radio"
                aria-checked={flavor === f.id}
                className={`flavor ${flavor === f.id ? "is-active" : ""}`}
                onClick={() => setFlavor(f.id)}
              >
                {f.tag && <span className="flavor-tag">{f.tag}</span>}
                <img className="flavor-swatch" src={f.swatch} width="80" height="80" loading="lazy" alt="" />
                {f.name}
              </button>
            ))}
          </div>

          <h4 className="opt-label">Select Sugar Level</h4>
          <div className="sugar-row" role="radiogroup" aria-label="Sugar level">
            <button role="radio" aria-checked={sugar === "low"} className={`sugar ${sugar === "low" ? "is-active" : ""}`} onClick={() => setSugar("low")}>Low Sugar</button>
            <button role="radio" aria-checked={sugar === "free"} className={`sugar ${sugar === "free" ? "is-active" : ""}`} onClick={() => setSugar("free")}>Sugar-Free</button>
          </div>

          <h4 className="opt-label">How many Adults? <span className="save-chip">💰 Buy More. Save More.</span></h4>
          <div className="qty-row" role="radiogroup" aria-label="How many adults">
            {[1, 2].map((n) => (
              <button key={n} role="radio" aria-checked={adults === n} className={`qty ${adults === n ? "is-active" : ""}`} onClick={() => setAdults(n)}>{n}</button>
            ))}
          </div>

          <h4 className="opt-label">Autoship and Save:</h4>
          <div className={`plan ${plan === "sub" ? "is-active" : ""}`} onClick={() => setPlan("sub")} role="radio" aria-checked={plan === "sub"} tabIndex={0}>
            <div className="plan-banner">MOST POPULAR: GET UP TO 55% OFF</div>
            <div className="plan-body">
              <label><input type="radio" checked={plan === "sub"} readOnly /> <strong>Subscribe &amp; Save</strong><br /><small>28 packs each 4 weeks</small></label>
              <div className="plan-price"><strong>$29.99</strong> <s>$66.65</s><br /><small>$1.07/day</small></div>
            </div>
            <ul className="plan-perks">
              <li>Free Shipping Today</li>
              <li>Pause Or Cancel Any Time</li>
              <li>30-Day Money-Back Guarantee</li>
            </ul>
          </div>
          <div className={`plan ${plan === "once" ? "is-active" : ""}`} onClick={() => setPlan("once")} role="radio" aria-checked={plan === "once"} tabIndex={0}>
            <div className="plan-body">
              <label><input type="radio" checked={plan === "once"} readOnly /> <strong>One Time Purchase</strong><br /><small>28 packs delivered once</small></label>
              <div className="plan-price"><strong>$66.65</strong><br /><small>$2.38/day</small></div>
            </div>
          </div>

          <button className="btn btn--green btn--xl btn--block">Start Now</button>
          <p className="auto-note">◈ DISCOUNT AUTO-APPLIED</p>
          <p className="guarantee-note"><strong>Less than 1%</strong> of customers use our Money-Back Guarantee</p>

          <div className="mini-trust">
            <span>30-Day Money-Back Guarantee</span>
            <span>Clinically and 3rd party tested</span>
            <span>HSA/FSA eligible with <u>Truemed</u></span>
          </div>

          <div className="accordions">
            {FAQS.map((f, i) => (
              <div className="acc" key={f.q}>
                <button className="acc-head" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                  {f.q}<span>{open === i ? "−" : "+"}</span>
                </button>
                {open === i && <p className="acc-body">{f.a}</p>}
              </div>
            ))}
          </div>

          <h4 className="taste-title">Tastes Like</h4>
          <ul className="taste-row">
            <li>🍃<span>Fresh &amp; Light</span></li>
            <li>🍓<span>Strawberry</span></li>
            <li>🥬<span>Sweet Greens</span></li>
          </ul>
          <h4 className="taste-title">Packed With</h4>
          <ul className="packed">
            <li>🥦 Whole Veggies</li>
            <li>🍇 Whole Fruits</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
