import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import {
  buyboxAccordions,
  pressLogos,
  productTiles,
  scienceChecks,
  socialImages,
  valueProps,
} from "../data/products";
import "./HomePage.css";

export function HomePage() {
  return (
    <main className="home">
      <Hero />
      <PressMarquee />
      <FlavorGrid />
      <ValueProps />
      <BenefitsScroll />
      <Science />
      <Buybox />
      <PromoBanner />
      <SocialFan />
      <FinalCta />
    </main>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero__inner page-wrap">
        <div className="hero__copy">
          <p className="hero__proof">
            <span className="hero__stars" aria-hidden>
              ★★★★★
            </span>
            4.8 stars from 100,000 reviews • 1,000,000+ members
          </p>
          <h1 className="display">60+ Ingredients in One Pack You'll Actually Crave</h1>
          <Link to="/products/gruns" className="btn-primary hero__cta">
            Save 55% + Free Shipping
          </Link>
          <div className="hero__trust">
            <span>30-day guarantee</span>
            <span>Cancel anytime</span>
          </div>
          <div className="hero__bubbles">
            <div className="hero__bubble">
              <strong>60+</strong>
              <span>Ingredients</span>
              <small>Including whole fruits and veggies</small>
            </div>
            <div className="hero__bubble">
              <strong>21</strong>
              <span>Vitamins &amp; Minerals</span>
            </div>
            <div className="hero__bubble">
              <strong>6g</strong>
              <span>of Fiber</span>
            </div>
          </div>
        </div>
        <div className="hero__media">
          <img
            className="hero__img"
            src="/assets/f-lifestyle-focused-hmpg-hero.webp"
            alt="A smiling woman pours a Grüns gummy from a green pouch into her hand"
          />
          <img
            className="hero__badge"
            src="/assets/f-lowered-price-badge-bday.webp"
            alt="We Lowered Our Price"
          />
        </div>
      </div>
    </section>
  );
}

function PressMarquee() {
  const logos = useMemo(() => [...pressLogos, ...pressLogos], []);
  return (
    <section className="press" aria-label="Press">
      <div className="press__track">
        {logos.map((src, i) => (
          <img key={`${src}-${i}`} src={src} alt="" />
        ))}
      </div>
    </section>
  );
}

function FlavorGrid() {
  return (
    <section className="flavors">
      <div className="page-wrap">
        <h2 className="display section-title">Find Your Flavor</h2>
        <div className="flavors__grid">
          {productTiles.map((p) => (
            <article key={p.id} className="flavor-card">
              <div className="flavor-card__media" style={{ background: p.gradient }}>
                {p.badge && (
                  <span
                    className="flavor-card__badge"
                    style={{ background: p.badge.bg, color: p.badge.color }}
                  >
                    {p.badge.label}
                  </span>
                )}
                <img src={p.image} alt={p.name} />
              </div>
              <h3 className="display">{p.name}</h3>
              <p className="flavor-card__price">
                Starts at <strong>{p.sale}</strong> <s>{p.compare}</s>
              </p>
              <button type="button" className="btn-primary flavor-card__atc">
                Add to Cart
              </button>
              <Link className="flavor-card__more" to={p.path}>
                Learn More
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ValueProps() {
  return (
    <section className="value-props">
      <div className="page-wrap">
        <h2 className="display section-title section-title--light">
          We made daily nutrition, like, <em>ridiculously</em> easy.
        </h2>
        <div className="value-props__grid">
          {valueProps.map((v) => (
            <article key={v.title} className="value-card">
              <img src={v.image} alt={v.alt} />
              <h3 className="display">{v.title}</h3>
              <p>{v.body}</p>
            </article>
          ))}
        </div>
        <img
          className="value-props__gummy"
          src="/assets/f-gummy_49ae5bc4-1a92-4aaf-8f02-bd9fd6f13100.webp"
          alt=""
          aria-hidden
        />
      </div>
    </section>
  );
}

function BenefitsScroll() {
  const lines = ["60+ INGREDIENTS", "21 Vitamins & Minerals", "6g of Fiber", "1 convenient pack"];
  return (
    <section className="benefits">
      <div className="benefits__inner page-wrap">
        {lines.map((line) => (
          <p key={line} className="display benefits__line">
            {line}
          </p>
        ))}
        <img
          className="benefits__pouch"
          src="/assets/f-pouch_w_gummies.webp_3.webp"
          alt="Opened Grüns pouch"
        />
        <img
          className="benefits__gummy benefits__gummy--a"
          src="/assets/f-gummy_49ae5bc4-1a92-4aaf-8f02-bd9fd6f13100.webp"
          alt=""
        />
        <img
          className="benefits__gummy benefits__gummy--b"
          src="/assets/f-gummy_49ae5bc4-1a92-4aaf-8f02-bd9fd6f13100.webp"
          alt=""
        />
      </div>
    </section>
  );
}

function Science() {
  return (
    <section className="science">
      <div className="page-wrap science__inner">
        <div>
          <h2 className="display section-title section-title--light">
            3rd party-tested for potency, purity, &amp; safety.
          </h2>
          <p>
            We regularly test for all 20+ vitamins &amp; minerals to ensure claims are accurate
            &amp; clear of contaminants including:
          </p>
          <ul>
            {scienceChecks.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
        <img src="/assets/f-gal-benefits-lifestyle.webp" alt="Grüns science and testing" />
      </div>
    </section>
  );
}

function Buybox() {
  const [flavor, setFlavor] = useState<"original" | "shrek">("original");
  const [sugar, setSugar] = useState<"ls" | "sf">("ls");
  const [qty, setQty] = useState(1);
  const [openAcc, setOpenAcc] = useState<string | null>(null);

  const price = flavor === "original" ? (qty === 1 ? 29.99 : 54.99) : qty === 1 ? 32.79 : 59.99;
  const compare = flavor === "original" ? 66.65 * qty : 70.38 * qty;
  const image =
    flavor === "original"
      ? sugar === "ls"
        ? "/assets/f-bday-gal-image-adults-LS.webp"
        : "/assets/f-bday-gal-image-adults-SF.webp"
      : sugar === "ls"
        ? "/assets/f-Adult-Shrek-Gallery-Image-1-LS_1.webp"
        : "/assets/f-Adult-Shrek-Gallery-Image-1-SF_1.webp";

  return (
    <section className="buybox" id="offers">
      <div className="page-wrap">
        <p className="buybox__eyebrow display">
          It's Our Birthday! We Lowered Our Prices to Celebrate.
        </p>
        <div className="buybox__layout">
          <div className="buybox__gallery">
            <img src={image} alt="Grüns product" />
            <img className="buybox__price-badge" src="/assets/f-lowered-price-badge-bday.webp" alt="" />
          </div>
          <div className="buybox__panel">
            <p className="buybox__reviews">4.8/5.0 (100,000), 1M+ Customers</p>
            <h1 className="display">Grüns Superfood Gummies</h1>
            <p className="buybox__sub">
              60+ potent ingredients to revive whole body vitality in great tasting gummies.
            </p>
            <ul className="buybox__bullets">
              <li>Promotes mental clarity + energy</li>
              <li>Supports immunity + stress relief</li>
              <li>Supports digestion and gut health</li>
              <li>Clinically tested for nutrient absorption</li>
            </ul>

            <p className="buybox__label">
              Select Flavor:{" "}
              <strong>{flavor === "original" ? "Original" : "Berry Far Far Away"}</strong>
            </p>
            <p className="buybox__hint">
              {flavor === "original"
                ? "Where fresh strawberries meets clean greens."
                : "Where juicy raspberry meets fresh blueberry."}
            </p>
            <div className="buybox__flavor-row">
              <button
                type="button"
                className={flavor === "original" ? "is-active" : ""}
                onClick={() => setFlavor("original")}
              >
                <img src="/assets/f-OG-Adults-LS-1Prod-NoBG.webp" alt="" />
                Original
              </button>
              <button
                type="button"
                className={flavor === "shrek" ? "is-active" : ""}
                onClick={() => setFlavor("shrek")}
              >
                <span className="buybox__new">BRAND NEW!</span>
                <img src="/assets/f-LTO-Shrek-Adults-LS-1Prod-NoBG.webp" alt="" />
                Berry Far Far Away
              </button>
            </div>

            <p className="buybox__label">Select Sugar Level</p>
            <div className="buybox__pills">
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

            <p className="buybox__label">
              How many Adults? <span className="buybox__tag">Buy More. Save More.</span>
            </p>
            <div className="buybox__pills">
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

            <div className="buybox__plan is-active">
              <div>
                <strong>Subscribe &amp; Save</strong>
                <span>28 packs each 4 weeks</span>
              </div>
              <div className="buybox__plan-price">
                <strong>${price.toFixed(2)}</strong>
                <s>${compare.toFixed(2)}</s>
                <small>${(price / 28).toFixed(2)}/day</small>
              </div>
            </div>

            <button type="button" className="btn-primary buybox__cta">
              Add to Cart — ${price.toFixed(2)}
            </button>
            <ul className="buybox__guarantees">
              <li>30-Day Money-Back Guarantee</li>
              <li>Clinically and 3rd party tested</li>
              <li>HSA/FSA eligible with Truemed</li>
            </ul>

            <div className="buybox__acc">
              {buyboxAccordions.map((a) => {
                const open = openAcc === a.title;
                return (
                  <div key={a.title} className="buybox__acc-item">
                    <button type="button" onClick={() => setOpenAcc(open ? null : a.title)}>
                      {a.title}
                      <span>{open ? "−" : "+"}</span>
                    </button>
                    {open && <p>{a.body}</p>}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PromoBanner() {
  return (
    <section className="promo-banner">
      <div className="page-wrap promo-banner__inner">
        <img src="/assets/f-LTO-Banner-BDAYPromo-Gruns-Desktop.webp" alt="" />
        <div>
          <h2 className="display">Same Grüns. New Lower Price. Subs Now Start at $29.99.</h2>
          <Link to="/products/gruns" className="btn-secondary">
            Shop the Deal
          </Link>
        </div>
      </div>
    </section>
  );
}

function SocialFan() {
  return (
    <section className="social-fan">
      <div className="page-wrap">
        <h2 className="display section-title">
          <strong>1 million members.</strong> we've been getting around
        </h2>
        <div className="social-fan__grid">
          {socialImages.map((src) => (
            <img key={src} src={src} alt="Grüns community" />
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="final-cta">
      <div className="page-wrap final-cta__inner">
        <h2 className="display">It's Our Birthday. We Lowered Our Price.</h2>
        <div className="final-cta__actions">
          <Link to="/products/gruns" className="btn-secondary">
            Shop Adults
          </Link>
          <Link to="/products/gruns-kids" className="btn-primary">
            Shop Kids
          </Link>
        </div>
      </div>
    </section>
  );
}
