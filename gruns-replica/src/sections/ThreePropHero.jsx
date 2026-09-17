import { Link } from 'react-router-dom';
import Stars from '../components/Stars.jsx';
import { hero } from '../data/site.js';

function GuaranteeIcon() {
  return (
    <svg viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M8.75 1.75V2.917M4.083 1.75v1.167M1.75 5.25h9.333" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M11.083 5.833v-1.75c0-.967-.783-1.75-1.75-1.75H3.5c-.967 0-1.75.783-1.75 1.75v5.25c0 .966.783 1.75 1.75 1.75h2.333"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M10.146 9.323v1.026l.806.492" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M10.208 12.833a2.625 2.625 0 1 1 0-5.25 2.625 2.625 0 0 1 0 5.25Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CancelIcon() {
  return (
    <svg viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M7 12.25A5.25 5.25 0 1 0 7 1.75a5.25 5.25 0 0 0 0 10.5ZM3.28 3.28l7.44 7.44"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ThreePropHero() {
  return (
    <section className="hero">
      <div className="hero__inner page">
        <div className="hero__copy">
          <div className="hero__rating">
            <span className="hero__rating-stars">
              <Stars size={14} className="accent-green" />
              <span>
                <strong className="accent-green">4.8</strong> stars
              </span>
            </span>
            <span>
              from <strong className="accent-green">100,000</strong> reviews • <strong className="accent-green">1,000,000+</strong>{' '}
              members
            </span>
          </div>

          <h1 className="hero__headline h1">
            {hero.headline}
            <strong className="accent-green">{hero.headlineAccent}</strong>
          </h1>

          <div className="hero__cta-group">
            <a href="#offers" className="btn btn-primary hero__cta">
              {hero.cta}
            </a>
            <div className="hero__trust">
              <span>
                <GuaranteeIcon /> 30-day guarantee
              </span>
              <span>
                <CancelIcon /> Cancel anytime
              </span>
            </div>
          </div>

          <ul className="hero__props">
            {hero.props.map((p) => (
              <li key={p.label}>
                <div className="hero__prop-value">
                  <span className="hero__prop-blob" aria-hidden="true" />
                  <span className="hero__prop-number">
                    {p.value}
                    {p.sup && <span className="hero__prop-sup">{p.sup}</span>}
                  </span>
                </div>
                <p className="hero__prop-label">{p.label}</p>
                {p.note && <p className="hero__prop-note">{p.note}</p>}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__media">
          <Link to="/products/gruns" className="hero__media-link" aria-label={hero.cta}>
            <img className="hero__image" src={hero.image} alt="A smiling woman pouring Grüns gummies from a green pouch." width="700" height="523" />
            <img className="hero__badge" src={hero.badge} alt="" width="155" height="155" />
          </Link>
        </div>
      </div>
    </section>
  );
}
