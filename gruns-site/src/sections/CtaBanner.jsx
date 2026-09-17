import { Link } from 'react-router-dom';
import { img } from '../data/site.js';

export default function CtaBanner() {
  return (
    <section className="ctabanner">
      <img
        className="ctabanner__bg"
        src={img('LTO-Banner-BDAYPromo-Gruns-Desktop.webp?v=1786463615', 1920)}
        alt=""
        loading="lazy"
      />
      <div className="ctabanner__inner page">
        <div className="ctabanner__copy">
          <h2 className="d5 ctabanner__heading">Same Grüns. New Lower Price. Subs Now Start at $29.99.</h2>
          <p className="body-4 ctabanner__body">
            It's our third birthday, and we're lowering prices. Not just for a week but indefinitely. Happy Birthday to
            us!
          </p>
          <Link to="/collections/shop-gruns" className="btn btn-primary ctabanner__cta">
            Shop Now
          </Link>
        </div>
        <div className="ctabanner__media">
          <img src={img('Group_1984079021.webp?v=1786463731', 1058)} alt="Grüns pouch with a birthday hat" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
