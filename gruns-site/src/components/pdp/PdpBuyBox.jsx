import { useState } from "react";
import { Link } from "react-router-dom";
import {
  CardIcon,
  CheckIcon,
  PlusIcon,
  ShieldIcon,
  Stars,
  TagIcon,
} from "./PdpIcons.jsx";

const TRUST_ICONS = { check: CheckIcon, shield: ShieldIcon, card: CardIcon };

function Accordion({ item }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="pdp-acc">
      <button
        type="button"
        className="pdp-acc__btn"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {item.title}
        <span className="pdp-acc__icon">
          <PlusIcon open={open} />
        </span>
      </button>
      {open ? (
        <div className="pdp-acc__panel">
          {item.image ? <img src={item.image} alt="" loading="lazy" /> : null}
          {item.blocks.map((block, i) => (
            <p key={i}>
              {block.label ? <strong>{block.label}</strong> : null}
              {block.label && block.text ? " " : null}
              {block.text}
            </p>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default function PdpBuyBox({ product }) {
  const [flavor, setFlavor] = useState(
    Math.max(
      0,
      product.flavors.findIndex((f) => f.selected),
    ),
  );
  const [sugar, setSugar] = useState(0);
  const [qty, setQty] = useState(product.defaultQuantity ?? product.quantities[0]);
  const [plan, setPlan] = useState(product.plans[0].id);

  const activeFlavor = product.flavors[flavor];

  return (
    <div className="pdp-buybox">
      <a className="pdp-rating" href="#reviews">
        <span className="pdp-rating__stars">
          <Stars />
        </span>
        <span className="pdp-rating__text">4.8/5.0 (100,000), 1M+ Customers</span>
      </a>

      <h1 className="pdp-title">{product.title}</h1>
      <p className="pdp-subtitle">{product.subtitle}</p>

      <ul className="pdp-bullets">
        {product.bullets.map((b) => (
          <li key={b}>
            <CheckIcon />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <hr className="pdp-rule" />

      <p className="pdp-field-label">
        {product.flavorLabel} <span>{activeFlavor.name}</span>
      </p>
      <p className="pdp-field-note">{activeFlavor.note}</p>

      <div className="pdp-flavors">
        {product.flavors.map((f, i) => (
          <button
            key={f.name}
            type="button"
            className="pdp-flavor"
            aria-pressed={i === flavor}
            onClick={() => setFlavor(i)}
          >
            {f.badge ? (
              <span
                className={`pdp-flavor__badge${
                  f.badgeStyle === "red" ? " pdp-flavor__badge--red" : ""
                }`}
              >
                {f.badge}
              </span>
            ) : null}
            <span className="pdp-flavor__media">
              <img src={f.image} alt="" loading="lazy" />
            </span>
            <span className="pdp-flavor__label">{f.name}</span>
          </button>
        ))}
      </div>

      {activeFlavor.stock ? (
        <div className="pdp-stock">
          <span className="pdp-stock__track">
            <span
              className="pdp-stock__fill"
              style={{ width: `${activeFlavor.stock.percent}%` }}
            />
          </span>
          {activeFlavor.stock.label}
        </div>
      ) : null}

      <hr className="pdp-rule" />

      <p className="pdp-field-label">Select Sugar Level</p>
      <div className="pdp-chips">
        {["Low Sugar", "Sugar-Free"].map((label, i) => (
          <button
            key={label}
            type="button"
            className="pdp-chip"
            aria-pressed={i === sugar}
            onClick={() => setSugar(i)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="pdp-qty-head">
        <p className="pdp-field-label">{product.quantityLabel}</p>
        {product.quantityHint ? (
          <span className="pdp-qty-head__hint">{product.quantityHint}</span>
        ) : null}
      </div>
      <div className="pdp-qty">
        {product.quantities.map((n) => (
          <button
            key={n}
            type="button"
            aria-pressed={n === qty}
            onClick={() => setQty(n)}
          >
            {n}
          </button>
        ))}
      </div>

      <p className="pdp-field-label" style={{ marginTop: "26px" }}>
        {product.planLabel}
      </p>

      <div className="pdp-plans">
        {product.plans.map((p) => {
          const selected = p.id === plan;
          return (
            <button
              key={p.id}
              type="button"
              className={`pdp-plan${selected ? " pdp-plan--selected" : ""}`}
              onClick={() => setPlan(p.id)}
            >
              {p.perks && product.planBanner ? (
                <span className="pdp-plan__banner">{product.planBanner}</span>
              ) : null}
              <span className="pdp-plan__body">
                <span>
                  <span className="pdp-plan__title">
                    <span className="pdp-plan__radio" />
                    {p.title}
                  </span>
                  <span className="pdp-plan__sub">{p.sub}</span>
                  {p.perks ? (
                    <ul className="pdp-plan__perks">
                      {p.perks.map((perk) => (
                        <li key={perk}>
                          <CheckIcon />
                          {perk}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </span>
                <span className="pdp-plan__pricing">
                  <span className="pdp-plan__price">{p.price}</span>
                  {p.compare ? (
                    <span className="pdp-plan__compare">{p.compare}</span>
                  ) : null}
                  <span className="pdp-plan__perday">{p.perDay}</span>
                </span>
              </span>
            </button>
          );
        })}
      </div>

      <button type="button" className="pdp-cta">
        {product.cta}
      </button>

      {product.discountNote?.style === "tag" ? (
        <p className="pdp-discount">
          <TagIcon />
          {product.discountNote.text}
        </p>
      ) : null}

      {product.discountNote?.style === "bar" ? (
        <p className="pdp-discount pdp-discount--bar">{product.discountNote.text}</p>
      ) : null}

      {product.guaranteeBar ? (
        <p className="pdp-guarantee">
          <strong>{product.guaranteeBar.strong}</strong> {product.guaranteeBar.rest}
        </p>
      ) : null}

      <div className="pdp-trust">
        {product.trustBadges.map((badge) => {
          const Icon = TRUST_ICONS[badge.icon] ?? CheckIcon;
          return (
            <div key={badge.label}>
              <span className="pdp-trust__icon">
                <Icon />
              </span>
              <div className="pdp-trust__label">
                {badge.label}
                {badge.link ? (
                  <>
                    {" "}
                    <a href="#truemed">{badge.link}</a>
                  </>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>

      <div className="pdp-accordions">
        {product.accordions.map((item) => (
          <Accordion key={item.title} item={item} />
        ))}
      </div>

      <div className="pdp-mini">
        <h2 className="pdp-mini__heading">Tastes Like</h2>
        <div className="pdp-tastes">
          {product.tastesLike.map((t) => (
            <div className="pdp-tastes__item" key={t.label}>
              <span className="pdp-emoji">{t.emoji}</span>
              <div className="pdp-tastes__label">{t.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="pdp-mini pdp-packed">
        <h2 className="pdp-mini__heading">Packed With</h2>
        <ul className="pdp-packed__list">
          {product.packedWith.map((p) => (
            <li key={p.label}>
              <span className="pdp-emoji">{p.emoji}</span>
              {p.label}
            </li>
          ))}
        </ul>
      </div>

      {product.flavors.some((f) => f.href) ? (
        <div className="pdp-buybox__links" hidden>
          {product.flavors
            .filter((f) => f.href)
            .map((f) => (
              <Link key={f.href} to={f.href}>
                {f.name}
              </Link>
            ))}
        </div>
      ) : null}
    </div>
  );
}
