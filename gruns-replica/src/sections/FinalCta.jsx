import { Link } from 'react-router-dom';
import Stars from '../components/Stars.jsx';
import { finalCta } from '../data/site.js';

function Check() {
  return (
    <span className="finalcta__check" aria-hidden="true">
      <svg viewBox="0 0 12 12" fill="none">
        <path d="M2.5 6.2 4.8 8.5 9.6 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export default function FinalCta() {
  return (
    <section className="finalcta">
      <div className="finalcta__panel page">
        <div className="finalcta__copy">
          <div className="finalcta__rating">
            <Stars size={14} className="accent" />
            <span>
              <strong>4.8</strong> stars from <strong>100,000</strong> reviews | <strong>1,000,000+</strong> members
            </span>
          </div>

          <h2 className="finalcta__heading d5">
            {finalCta.heading[0]}
            <br />
            {finalCta.heading[1]}
          </h2>

          <ul className="finalcta__points">
            {finalCta.points.map((point) => (
              <li key={point}>
                <Check />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="finalcta__ctas">
            <Link to="/products/gruns" className="btn btn-secondary">
              Shop Adults
            </Link>
            <Link to="/products/gruns-kids" className="btn btn-secondary">
              Shop Kids
            </Link>
          </div>
        </div>

        <div className="finalcta__media">
          <img src={finalCta.image} alt="A Grüns daily pack beside a bear gummy in a birthday hat." loading="lazy" />
        </div>
      </div>
    </section>
  );
}
