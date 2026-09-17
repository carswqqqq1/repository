import { Link } from "react-router-dom";
import { PRODUCTS } from "../data/products";

export default function ProductCarousel() {
  return (
    <section className="shop" id="shop" aria-label="Shop best sellers">
      <div className="rating-row">
        <span className="stars" aria-label="4.8 out of 5 stars">★★★★★</span>
        <span className="rating-text"><strong>4.8/5.0</strong> (100,000), <u>1M+ Customers</u></span>
      </div>
      <h2 className="shop-title">Find Your Flavor</h2>
      <div className="carousel">
        {PRODUCTS.map((p) => (
          <article className="product-card" key={p.id}>
            <div className="product-media">
              <img className="product-photo" src={p.image} alt={`${p.name} pouch of Grüns superfood gummies`} loading="lazy" />
              {p.tag && <span className="product-tag">{p.tag}</span>}
            </div>
            <h3 className="product-name">{p.name}</h3>
            <p className="product-price">Starts at {p.price} <s>{p.compareAt}</s></p>
            <button className="btn btn--green btn--block">Add to Cart</button>
            <Link className="learn-more" to={p.to}>Learn More</Link>
          </article>
        ))}
      </div>
    </section>
  );
}
