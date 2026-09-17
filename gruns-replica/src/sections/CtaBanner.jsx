import { Link } from 'react-router-dom';
import { ctaBanner } from '../data/site.js';

export default function CtaBanner() {
  return (
    <section className="ctabanner">
      <picture>
        <source media="(min-width: 993px)" srcSet={ctaBanner.background} />
        <img className="ctabanner__bg" src={ctaBanner.backgroundMobile} alt="" loading="lazy" aria-hidden="true" />
      </picture>

      <div className="ctabanner__inner page">
        <div className="ctabanner__copy">
          <h2 className="ctabanner__heading d5">
            {ctaBanner.heading[0]}
            <br />
            {ctaBanner.heading[1]}
          </h2>
          <p className="ctabanner__body">{ctaBanner.body}</p>
          <Link to={ctaBanner.href} className="btn btn-primary ctabanner__cta">
            {ctaBanner.cta}
          </Link>
        </div>
        <div className="ctabanner__media">
          <img src={ctaBanner.product} alt="A Grüns pouch wearing a birthday hat." loading="lazy" />
        </div>
      </div>
    </section>
  );
}
