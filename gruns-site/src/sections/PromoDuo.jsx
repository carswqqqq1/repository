import { Link } from 'react-router-dom';

/** Side-by-side promo cards on a full-width yellow band (between buy box and confetti CTA). */
export default function PromoDuo() {
  return (
    <section className="promo-duo-band" aria-label="Promotions">
      <div className="page promo-duo-band__grid">
        <article className="promo-duo-card promo-duo-card--green">
          <p className="d6">
            Same Grüns.
            <br />
            New Lower Price. Subscribe
            <br />
            Now From <s>$49.99</s> $29.99
          </p>
          <Link to="/products/gruns" className="btn btn-secondary btn-sm">
            Claim Now
          </Link>
        </article>
        <article className="promo-duo-card promo-duo-card--cream">
          <p className="d6">
            It&rsquo;s Our Birthday.
            <br />
            We&rsquo;ve Lowered Our
            <br />
            Prices.
          </p>
          <Link to="/collections/shop-gruns" className="btn btn-primary btn-sm">
            Shop Sale
          </Link>
        </article>
      </div>
    </section>
  );
}
