import { Link } from 'react-router-dom';
import { homeFaves } from '../data/site.js';

export default function HomeFave() {
  return (
    <section className="fave">
      <div className="fave__inner page">
        <h2 className="fave__heading d5">Find Your Flavor</h2>
        <ul className="fave__grid">
          {homeFaves.map((p) => (
            <li className="fave-card" key={p.title}>
              <Link to={p.href} className="fave-card__media">
                {p.badge && (
                  <span
                    className="fave-card__badge label-2"
                    style={{ background: p.badgeColor, color: p.badgeText || '#fff' }}
                  >
                    {p.badge}
                  </span>
                )}
                <img src={p.image} alt={p.title} loading="lazy" />
              </Link>
              <h3 className="fave-card__title h6">{p.title}</h3>
              <p className="fave-card__price body-4">
                <span>Starts at</span> <strong>{p.price}</strong>{' '}
                <span className="fave-card__compare">{p.compare}</span>
              </p>
              <button className="fave-card__cta label-2">Add to Cart</button>
              <Link to={p.href} className="fave-card__link label-2">
                Learn More
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
