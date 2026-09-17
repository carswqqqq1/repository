import { Link } from 'react-router-dom';
import Stars from '../components/Stars.jsx';
import { brandAssets } from '../data/site.js';

const PROPS = [
  { value: '60', sup: '+', label: 'Ingredients', note: 'Including whole fruits and veggies' },
  { value: '21', label: 'Vitamins & Minerals' },
  { value: '6g', label: 'of Fiber' },
];

export default function ThreePropHero() {
  return (
    <section className="hero">
      <div className="hero__inner page">
        <div className="hero__copy">
          <p className="hero__rating body-4">
            <Stars size={15} />
            <span>
              <strong>4.8</strong> stars <span className="hero__rating-from">from</span> <strong>100,000</strong>{' '}
              reviews • <strong>1,000,000+</strong> members
            </span>
          </p>

          <h1 className="hero__headline h2">
            60+ Ingredients in One Pack <span className="accent-green">You'll Actually Crave</span>
          </h1>

          <Link to="/products/gruns" className="btn btn-primary hero__cta">
            Save 55% + Free Shipping
          </Link>

          <p className="hero__trust body-5">
            <span>
              <svg viewBox="0 0 20 20" aria-hidden="true">
                <path
                  d="M10 2.5l6 2.2v5c0 4-2.6 6.4-6 7.8-3.4-1.4-6-3.8-6-7.8v-5l6-2.2Z"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  fill="none"
                />
              </svg>
              30-day guarantee
            </span>
            <span>
              <svg viewBox="0 0 20 20" aria-hidden="true">
                <path
                  d="M3 6.5h14v9H3v-9Zm0 3h14"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  fill="none"
                  strokeLinejoin="round"
                />
              </svg>
              Cancel anytime
            </span>
          </p>

          <ul className="hero__props">
            {PROPS.map((p) => (
              <li key={p.label}>
                <span className="hero__prop-value">
                  <span className="hero__prop-blob" aria-hidden="true" />
                  <span className="hero__prop-number">
                    {p.value}
                    {p.sup && <span className="hero__prop-sup">{p.sup}</span>}
                  </span>
                </span>
                <p className="hero__prop-label">{p.label}</p>
                {p.note && <p className="hero__prop-note body-5">{p.note}</p>}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__media">
          <img
            className="hero__badge"
            src={brandAssets.heroBadge}
            alt='A green scalloped badge reading "We Lowered Our Price"'
            width={155}
            height={155}
          />
          <img
            className="hero__image"
            src={brandAssets.heroLifestyle}
            alt="A smiling woman in a white t-shirt pours dark green gummies from a Grüns daily pack into her hand"
            width={884}
            height={662}
          />
        </div>
      </div>
    </section>
  );
}
