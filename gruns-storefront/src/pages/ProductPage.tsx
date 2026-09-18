import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { catalog } from "../data/products";
import "./ProductPage.css";

export function ProductPage() {
  const { handle = "gruns" } = useParams();
  const product = useMemo(
    () => catalog.find((p) => p.slug === handle) ?? catalog[0],
    [handle],
  );
  const [sugar, setSugar] = useState<"ls" | "sf">("ls");
  const [plan, setPlan] = useState<"sub" | "otp">("sub");
  const [qty, setQty] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  const unit = plan === "sub" ? parseFloat(product.saleFrom.slice(1)) : parseFloat(product.compare.slice(1)) * 0.85;
  const total = unit * qty;

  return (
    <main className="pdp">
      <div className="page-wrap pdp__layout">
        <div className="pdp__gallery">
          <div className="pdp__thumbs">
            {(product.gallery.length ? product.gallery : [product.image]).map((src, i) => (
              <button
                key={src}
                type="button"
                className={i === activeImage ? "is-active" : ""}
                onClick={() => setActiveImage(i)}
              >
                <img src={src} alt="" />
              </button>
            ))}
          </div>
          <div className="pdp__main-image">
            <img
              src={product.gallery[activeImage] ?? product.image}
              alt={product.title}
            />
            <img className="pdp__badge" src="/assets/f-lowered-price-badge-bday.webp" alt="" />
            <div className="pdp__save-tag">Save Up to 55% Off Your First Order</div>
          </div>
          <Link to="#" className="pdp__nutrition">
            View Nutrition Label
          </Link>
        </div>

        <div className="pdp__buy">
          <p className="pdp__reviews">★ 4.8/5.0 (100,000+ reviews)</p>
          <h1 className="display">{product.title}</h1>
          <p>{product.subtitle}</p>

          <p className="pdp__label">Select Sugar Level</p>
          <div className="pdp__pills">
            <button
              type="button"
              className={sugar === "ls" ? "is-active" : ""}
              onClick={() => setSugar("ls")}
            >
              Low Sugar
            </button>
            <button
              type="button"
              className={sugar === "sf" ? "is-active" : ""}
              onClick={() => setSugar("sf")}
            >
              Sugar-Free
            </button>
          </div>

          <p className="pdp__label">
            How many? <span className="pdp__tag">Buy More. Save More.</span>
          </p>
          <div className="pdp__pills">
            {[1, 2].map((n) => (
              <button
                key={n}
                type="button"
                className={qty === n ? "is-active" : ""}
                onClick={() => setQty(n)}
              >
                {n}
              </button>
            ))}
          </div>

          <button
            type="button"
            className={`pdp__plan ${plan === "sub" ? "is-active" : ""}`}
            onClick={() => setPlan("sub")}
          >
            <span>
              <strong>Subscribe &amp; Save</strong>
              <small>28 packs each 4 weeks</small>
            </span>
            <span className="pdp__price">
              <strong>${(parseFloat(product.saleFrom.slice(1)) * qty).toFixed(2)}</strong>
              <s>${(parseFloat(product.compare.slice(1)) * qty).toFixed(2)}</s>
            </span>
          </button>
          <button
            type="button"
            className={`pdp__plan ${plan === "otp" ? "is-active" : ""}`}
            onClick={() => setPlan("otp")}
          >
            <span>
              <strong>One-time purchase</strong>
            </span>
            <span className="pdp__price">
              <strong>${total.toFixed(2)}</strong>
            </span>
          </button>

          <button type="button" className="btn-primary pdp__cta">
            Add to Cart — ${plan === "sub" ? (parseFloat(product.saleFrom.slice(1)) * qty).toFixed(2) : total.toFixed(2)}
          </button>

          <ul className="pdp__perks">
            <li>30-Day Money-Back Guarantee</li>
            <li>Clinically and 3rd party tested</li>
            <li>HSA/FSA eligible with Truemed</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
