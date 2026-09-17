import { Link } from 'react-router-dom';
import Stars from '../components/Stars.jsx';
import { brandAssets } from '../data/site.js';

const POINTS = ['30-day money-back guarantee', 'Clinically and 3rd party tested', 'HSA/FSA eligible'];

export default function FinalCta() {
  return (
    <section className="finalcta">
      <div className="page">
        <div className="finalcta__panel">
          <div className="finalcta__copy">
            <p className="finalcta__rating body-4">
              <Stars size={15} color="var(--color-yellow)" />
              <span>
                <strong>4.8</strong> stars from <strong>100,000</strong> reviews | <strong>1,000,000+</strong> members
              </span>
            </p>
            <h2 className="d5 finalcta__heading">It's Our Birthday. We Lowered Our Price.</h2>
            <ul className="finalcta__points">
              {POINTS.map((p) => (
                <li className="body-3" key={p}>
                  <svg viewBox="0 0 20 20" aria-hidden="true">
                    <circle cx="10" cy="10" r="9" fill="var(--color-yellow)" />
                    <path d="M6 10.3l2.6 2.6L14 7.5" stroke="#00381d" strokeWidth="2" fill="none" strokeLinecap="round" />
                  </svg>
                  {p}
                </li>
              ))}
            </ul>
            <div className="finalcta__ctas">
              <Link to="/products/gruns" className="btn btn-secondary btn-sm">
                Shop Adults
              </Link>
              <Link to="/products/gruns-kids" className="btn btn-secondary btn-sm">
                Shop Kids
              </Link>
            </div>
          </div>
          <div className="finalcta__media">
            <img src={brandAssets.finalCtaPouch} alt="Grüns pouch with gummies" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
