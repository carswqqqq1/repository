import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Stars from '../components/Stars.jsx';
import Footer from '../components/Footer.jsx';
import { img } from '../data/site.js';

const BULLETS = ['60+ Ingredients. 21 Vitamins & Minerals.', '6g Fiber. 3x More Than Leading Greens Powders.', '3rd Party & Clinically Tested.'];

const TESTIMONIALS = [
  {
    title: 'Finally Back on Track',
    body: 'I recommend Grüns to any moms who are needing some energy or looking to get their health back on track.',
    name: 'Nicole M.',
  },
  {
    title: 'My Body Is Finally Working With Me.',
    body: 'Within 5 days, I was going to the bathroom every single day. By day 14, I felt lighter and more energized and honestly, my body is finally working with me then against me.',
    name: 'Chelsea W.',
  },
  {
    title: 'Easier to Win the Day',
    body: "I'm always on the go and I don't let that stop me. Grüns is so much easier than a bunch of pills and powders.",
    name: 'Marcus T.',
  },
  {
    title: 'A Habit I Actually Keep',
    body: 'It tastes like a treat, so I never forget it. Three months in and my energy is night and day.',
    name: 'Priya S.',
  },
];

const PILLARS = [
  { icon: 'Icon-Gut.svg?v=1770663388', title: 'Gut Health', copy: 'Prebiotics feed good bacteria to boost nutrient absorption and digestion.' },
  { icon: 'Icon-shield.svg?v=1770663388', title: 'Immunity', copy: 'Immune support and occasional stress support from Vitamin C, D, Zinc, antioxidants, and adaptogens.' },
  { icon: 'Icon-bicep.svg?v=1770663388', title: 'Energy & Body', copy: 'Support recovery, strength, weight management, and metabolism.' },
  { icon: 'Icon-brain.svg?v=1770663388', title: 'Brain Health', copy: 'B-Vitamins, Vitamin C, and Vitamin D support brain health.' },
];

const PRESS = [
  'bon-appetit-logo-press.webp?v=1770663388',
  'Forbes_logo_2.svg?v=1770663388',
  'presslogo-yahoolife-white.svg?v=1770663388',
  'theSkimm-press-logo.webp?v=1770663388',
  'glamour-press-logo.webp?v=1770663388',
];

function useCountdown(start = 4 * 3600 + 39 * 60 + 37) {
  const [left, setLeft] = useState(start);
  useEffect(() => {
    const id = setInterval(() => setLeft((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, []);
  const h = String(Math.floor(left / 3600)).padStart(2, '0');
  const m = String(Math.floor((left % 3600) / 60)).padStart(2, '0');
  const s = String(left % 60).padStart(2, '0');
  return [h, m, s];
}

export default function FirstOrder() {
  const [h, m, s] = useCountdown();
  const [slide, setSlide] = useState(1);

  return (
    <div className="fo">
      <div className="fo-salebar">
        <div className="fo-salebar__inner">
          <div className="fo-salebar__copy">
            <p className="fo-salebar__title">☀️ END OF SUMMER SALE ☀️</p>
            <p className="fo-salebar__sub">UP TO 61% OFF W/ FREE GIFTS</p>
          </div>
          <div className="fo-clock">
            <span className="fo-clock__digits">
              {h}.{m}.{s}
            </span>
            <span className="fo-clock__labels">
              <span>HRS</span>
              <span>MIN</span>
              <span>SEC</span>
            </span>
          </div>
          <span className="fo-salebar__info" aria-hidden="true">
            ⓘ
          </span>
        </div>
      </div>

      <section className="fo-hero">
        <div className="fo-hero__inner page">
          <div className="fo-hero__copy">
            <div className="fo-hero__social">
              <img src={img('reviews-customers-image.webp?v=1770663388', 200)} alt="" width={80} height={35} />
              <div>
                <p className="fo-hero__stars">
                  <Stars size={14} />
                  <strong>4.8 stars</strong>
                </p>
                <p className="fo-hero__members body-5">
                  <strong>100,000</strong> reviews • <strong>1,000,000+</strong> members
                </p>
              </div>
            </div>

            <h1 className="fo-hero__headline">
              You Have Nutrition Gaps.
              <br />
              <span className="accent-green">Grüns Fills Them.</span>
            </h1>

            <ul className="fo-hero__bullets">
              {BULLETS.map((b) => (
                <li key={b}>
                  <svg viewBox="0 0 20 20" aria-hidden="true">
                    <circle cx="10" cy="10" r="9" fill="var(--color-green)" />
                    <path d="M6 10.3l2.6 2.6L14 7.4" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" />
                  </svg>
                  {b}
                </li>
              ))}
            </ul>

            <p className="fo-hero__kicker">No Powder. No Pills. No Blender. Just Daily Tasty Gummies.</p>

            <div className="fo-hero__cta">
              <span className="fo-hero__pill label-3">2B+ GUMMIES SOLD</span>
              <Link to="/products/gruns" className="btn btn-primary fo-hero__btn">
                Save 61% + Free Gifts
              </Link>
            </div>

            <p className="fo-hero__risk body-4">
              <svg viewBox="0 0 20 20" aria-hidden="true">
                <circle cx="10" cy="10" r="9" fill="var(--color-green)" />
                <path d="M6 10.3l2.6 2.6L14 7.4" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" />
              </svg>
              Try It <u>Risk-Free For 30 Days</u>
            </p>
          </div>

          <div className="fo-hero__media">
            <img
              className="fo-hero__badge"
              src={img('lowered-price-badge-bday.webp?v=1786465175', 175)}
              alt=""
              width={130}
              height={130}
            />
            <img
              src={img('hero_frontrow-mobile_379b7ec0-3b85-48d7-894b-1ddc68e81406.webp?v=1770663388', 1000)}
              alt="Grüns pouch with gummies and a Clinicians' Choice endorsement"
            />
          </div>
        </div>
      </section>

      <section className="fo-quotes">
        <div className="fo-quotes__track" style={{ '--slide': slide }}>
          {TESTIMONIALS.map((t, i) => (
            <figure className={`fo-quote${i === slide ? ' is-active' : ''}`} key={t.name}>
              <figcaption className="fo-quote__title">“{t.title}</figcaption>
              <blockquote className="fo-quote__body body-4">{t.body}”</blockquote>
              <div className="fo-quote__by">
                <span className="fo-quote__avatar" aria-hidden="true" />
                <div>
                  <Stars size={12} color="var(--color-yellow)" />
                  <p className="body-5">
                    <strong>{t.name}</strong>
                  </p>
                </div>
              </div>
            </figure>
          ))}
        </div>
        <div className="fo-quotes__nav">
          <button aria-label="Previous" onClick={() => setSlide((n) => (n - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}>
            ←
          </button>
          <span className="fo-quotes__dots">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.name}
                className={i === slide ? 'is-active' : ''}
                aria-label={`Slide ${i + 1}`}
                onClick={() => setSlide(i)}
              />
            ))}
          </span>
          <button aria-label="Next" onClick={() => setSlide((n) => (n + 1) % TESTIMONIALS.length)}>
            →
          </button>
        </div>
      </section>

      <section className="fo-press">
        <div className="fo-press__track">
          {[...PRESS, ...PRESS, ...PRESS].map((p, i) => (
            <img key={`${p}-${i}`} src={img(p, 400)} alt="" loading="lazy" />
          ))}
        </div>
      </section>

      <section className="fo-transform">
        <h2 className="fo-transform__title">Transform Your Health</h2>
        <p className="fo-transform__sub body-3">Over 35,000 research publications support the ingredients in Grüns.</p>
        <div className="fo-transform__grid">
          <div className="fo-transform__col">
            {PILLARS.slice(0, 1).concat(PILLARS.slice(2, 3)).map((p) => (
              <div className="fo-pillar" key={p.title}>
                <img src={img(p.icon, 96)} alt="" loading="lazy" />
                <h3>{p.title}</h3>
                <p className="body-5">{p.copy}</p>
              </div>
            ))}
          </div>
          <img
            className="fo-transform__bear"
            src={img('BearWithStaticShadow_0053fabc-639e-405e-b1bd-4cae4871b2e1.webp?v=1770663388', 700)}
            alt="A single Grüns gummy bear"
            loading="lazy"
          />
          <div className="fo-transform__col">
            {[PILLARS[1], PILLARS[3]].map((p) => (
              <div className="fo-pillar" key={p.title}>
                <img src={img(p.icon, 96)} alt="" loading="lazy" />
                <h3>{p.title}</h3>
                <p className="body-5">{p.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="fo-final">
        <div className="page fo-final__inner">
          <h2 className="d5">Start your first order with 61% off.</h2>
          <p className="body-3">Free gifts, free shipping, and a 30-day money-back guarantee.</p>
          <Link to="/products/gruns" className="btn btn-secondary">
            Claim My Offer
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
