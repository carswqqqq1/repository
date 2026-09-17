import { Link } from 'react-router-dom';
import { homeFaves } from '../data/site.js';

export default function HomeFave() {
  return (
    <section className="fave">
      <div className="fave__inner page">
        <h2 className="fave__heading d5">Find Your Flavor</h2>
        <div className="fave__grid">
          {homeFaves.map((card) => (
            <article className="fave-card" key={card.href}>
              <Link to={card.href} className="fave-card__media">
                {card.badge && (
                  <span
                    className="fave-card__badge label-3"
                    style={{ background: card.badgeColor, color: card.badgeText ?? '#fff' }}
                  >
                    {card.badge}
                  </span>
                )}
                <img src={card.image} alt={card.title} loading="lazy" />
              </Link>
              <h3 className="fave-card__title label-1">{card.title}</h3>
              <p className="fave-card__price">
                Starts at <strong>{card.price}</strong> <span className="fave-card__compare">{card.compare}</span>
              </p>
              <Link to={card.href} className="fave-card__cta label-2">
                Add to Cart
              </Link>
              <Link to={card.href} className="fave-card__link label-2">
                Learn More
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
