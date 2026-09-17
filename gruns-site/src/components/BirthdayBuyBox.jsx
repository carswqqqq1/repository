import { useState } from 'react';
import Stars from './Stars.jsx';
import { buyBoxFlavors, buyBoxGallery, buyBoxTrust, img } from '../data/site.js';

const FAQS = [
  {
    q: 'Why Grüns?',
    a: 'Comprehensive nutrition that works. Grüns replaces handfuls of health products at a fraction of the cost. Delicious, portable, no mess no stress.',
  },
  {
    q: 'Ingredients & Allergies',
    a: 'Gluten-free, dairy-free, nut-free, vegan. No synthetic sweeteners or dyes. Pectin base (fruit fiber), no gelatin.',
  },
  {
    q: 'Low Sugar vs. Sugar-Free',
    a: 'Low Sugar has 8g added sugar and tastes like a treat. Sugar-Free has 0g sugar, same 60+ ingredients.',
  },
  {
    q: 'Science & Certifications',
    a: 'Clinically tested for nutrient absorption. Made in NSF, GMP, FDA-registered facilities. Third-party tested for heavy metals and contaminants.',
  },
  { q: 'Directions', a: 'Take no more than one pack per day. Rip. Tip. Enjoy. No water or shaker needed.' },
  { q: 'Benefits', a: 'Mental clarity + energy, immunity + stress relief, digestion and gut health.' },
];

const TASTES = [
  { label: 'Fresh & Light', emoji: '🌿' },
  { label: 'Strawberry', emoji: '🍓' },
  { label: 'Sweet Greens', emoji: '🥬' },
];

const PACKED = [
  { label: 'Whole Veggies', emoji: '🥦' },
  { label: 'Whole Fruits', emoji: '🍇' },
  { label: 'Vitamins and Minerals', emoji: '🎨' },
  { label: 'Adaptogens', emoji: '🧠' },
  { label: 'Herbs', emoji: '🌿' },
  { label: 'Antioxidants', emoji: '🫐' },
  { label: 'Prebiotics', emoji: '🧬' },
  { label: 'Super Mushrooms', emoji: '🍄' },
];

export default function BirthdayBuyBox() {
  const [shot, setShot] = useState(0);
  const [flavor, setFlavor] = useState('original');
  const [sugar, setSugar] = useState('low');
  const [adults, setAdults] = useState(1);
  const [plan, setPlan] = useState('sub');
  const [open, setOpen] = useState(-1);

  const active = buyBoxFlavors.find((f) => f.id === flavor);

  return (
    <section className="buybox-section" id="buy" aria-label="Birthday sale buy box">
      <div className="page">
        <h2 className="buybox-section__title d5">
          It&rsquo;s Our Birthday!
          <br />
          We Lowered Our Prices to Celebrate.
        </h2>

        <div className="buybox-grid">
          <div className="gallery">
            <div className="gallery__row">
              <ul className="gallery__thumbs">
                {buyBoxGallery.map((g, i) => (
                  <li key={g.src}>
                    <button
                      type="button"
                      className={`gallery__thumb${i === shot ? ' is-active' : ''}`}
                      aria-label={g.alt}
                      aria-current={i === shot}
                      onClick={() => setShot(i)}
                    >
                      <img src={g.src} alt="" loading="lazy" />
                    </button>
                  </li>
                ))}
              </ul>

              <div className="gallery__main">
                <img src={buyBoxGallery[shot].src} alt={buyBoxGallery[shot].alt} />
                {shot === 0 && (
                  <div className="gallery__flag">
                    <span className="body-4">Save Up to</span>
                    <strong className="d6">55% Off</strong>
                    <span className="body-4">Your First Order</span>
                  </div>
                )}
              </div>
            </div>

            <button type="button" className="btn btn-outline btn-block gallery__label-cta">
              View Nutrition Label
            </button>

            <div className="lab-note">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="lab-note__check">
                <path d="M4 12.5l5 5L20 6" stroke="#4a7ddb" strokeWidth="2.6" fill="none" strokeLinecap="round" />
              </svg>
              <p className="body-5">
                Tested by Light Labs in <mark>JUL 2026</mark>
                <br />
                35 substances tested for quality →
              </p>
            </div>
          </div>

          <div className="buybox">
            <p className="buybox__rating body-4">
              <Stars size={15} color="var(--color-yellow-strong)" />
              <u>4.8/5.0 (100,000), 1M+ Customers</u>
            </p>

            <h3 className="buybox__name h2">Grüns Superfood Gummies</h3>
            <p className="buybox__tagline body-3">
              <strong>60+ potent ingredients to revive whole body vitality in great tasting gummies.</strong>
            </p>

            <ul className="buybox__points">
              {[
                'Promotes mental clarity + energy',
                'Supports immunity + stress relief',
                'Supports digestion and gut health',
                'Clinically tested for nutrient absorption',
              ].map((p) => (
                <li className="body-4" key={p}>
                  <img src={img('checkmark.svg')} alt="" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>

            <h4 className="opt-label">
              Select Flavor: <span>{active.name}</span>
            </h4>
            <p className="opt-note body-4">
              <em>{active.note}</em>
            </p>
            <div className="opt-grid" role="radiogroup" aria-label="Flavor">
              {buyBoxFlavors.map((f) => (
                <button
                  type="button"
                  key={f.id}
                  role="radio"
                  aria-checked={flavor === f.id}
                  className={`swatch${flavor === f.id ? ' is-active' : ''}`}
                  onClick={() => setFlavor(f.id)}
                >
                  {f.tag && <span className="swatch__tag label-3">{f.tag}</span>}
                  <img src={f.swatch} alt="" loading="lazy" />
                  <span className="label-2">{f.name}</span>
                </button>
              ))}
            </div>

            <h4 className="opt-label">Select Sugar Level</h4>
            <div className="opt-grid" role="radiogroup" aria-label="Sugar level">
              {[
                { id: 'low', label: 'Low Sugar' },
                { id: 'free', label: 'Sugar-Free' },
              ].map((s) => (
                <button
                  type="button"
                  key={s.id}
                  role="radio"
                  aria-checked={sugar === s.id}
                  className={`pillbox${sugar === s.id ? ' is-active' : ''}`}
                  onClick={() => setSugar(s.id)}
                >
                  {s.label}
                </button>
              ))}
            </div>

            <h4 className="opt-label">
              How many Adults? <span className="save-chip label-3">Buy More. Save More.</span>
            </h4>
            <div className="qty-row" role="radiogroup" aria-label="How many adults">
              {[1, 2].map((n) => (
                <button
                  type="button"
                  key={n}
                  role="radio"
                  aria-checked={adults === n}
                  className={`qty${adults === n ? ' is-active' : ''}`}
                  onClick={() => setAdults(n)}
                >
                  {n}
                </button>
              ))}
            </div>

            <h4 className="opt-label">Autoship and Save:</h4>
            <button
              type="button"
              className={`plan${plan === 'sub' ? ' is-active' : ''}`}
              role="radio"
              aria-checked={plan === 'sub'}
              onClick={() => setPlan('sub')}
            >
              <span className="plan__banner label-3">MOST POPULAR: GET UP TO 55% OFF</span>
              <span className="plan__body">
                <span className="plan__label">
                  <span className={`radio${plan === 'sub' ? ' is-on' : ''}`} aria-hidden="true" />
                  <span>
                    <strong>Subscribe &amp; Save</strong>
                    <small>28 packs each 4 weeks</small>
                  </span>
                </span>
                <span className="plan__price">
                  <strong>$29.99</strong> <s>$66.65</s>
                  <small>$1.07/day</small>
                </span>
              </span>
              <span className="plan__perks">
                {['Free Shipping Today', 'Pause Or Cancel Any Time', '30-Day Money-Back Guarantee'].map((p) => (
                  <span key={p}>
                    <img src={img('checkmark.svg')} alt="" aria-hidden="true" />
                    {p}
                  </span>
                ))}
              </span>
            </button>

            <button
              type="button"
              className={`plan${plan === 'once' ? ' is-active' : ''}`}
              role="radio"
              aria-checked={plan === 'once'}
              onClick={() => setPlan('once')}
            >
              <span className="plan__body">
                <span className="plan__label">
                  <span className={`radio${plan === 'once' ? ' is-on' : ''}`} aria-hidden="true" />
                  <span>
                    <strong>One Time Purchase</strong>
                    <small>28 packs delivered once</small>
                  </span>
                </span>
                <span className="plan__price">
                  <strong>$66.65</strong>
                  <small>$2.38/day</small>
                </span>
              </span>
            </button>

            <button type="button" className="btn btn-primary btn-block buybox__start">
              Start Now
            </button>
            <p className="buybox__renews body-5">Renews at $49.99 each 4 weeks. Cancel anytime.</p>
            <p className="buybox__auto label-2">◈ DISCOUNT AUTO-APPLIED</p>
            <p className="buybox__guarantee body-5">
              <strong>Less than 1%</strong> of customers use our Money-Back Guarantee
            </p>

            <ul className="buybox__trust">
              {buyBoxTrust.map((t) => (
                <li key={t.label}>
                  <img src={t.icon} alt="" loading="lazy" />
                  <span className="body-5">{t.label}</span>
                </li>
              ))}
            </ul>

            <div className="accordions">
              {FAQS.map((f, i) => (
                <div className="acc" key={f.q}>
                  <button
                    type="button"
                    className="acc__head"
                    onClick={() => setOpen(open === i ? -1 : i)}
                    aria-expanded={open === i}
                  >
                    <span className="h6">{f.q}</span>
                    <span aria-hidden="true">{open === i ? '−' : '+'}</span>
                  </button>
                  {open === i && <p className="acc__body body-4">{f.a}</p>}
                </div>
              ))}
            </div>

            <h4 className="buybox__subhead h4">Tastes Like</h4>
            <ul className="taste-row">
              {TASTES.map((t) => (
                <li key={t.label}>
                  <span className="taste-row__dot" aria-hidden="true">
                    {t.emoji}
                  </span>
                  <span className="body-5">{t.label}</span>
                </li>
              ))}
            </ul>

            <h4 className="buybox__subhead h4">Packed With</h4>
            <ul className="packed-list">
              {PACKED.map((p) => (
                <li key={p.label}>
                  <span className="packed-list__dot" aria-hidden="true">
                    {p.emoji}
                  </span>
                  <span className="body-4">{p.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
