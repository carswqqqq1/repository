import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Stars from './Stars.jsx';
import { icons } from '../data/site.js';

function Check({ color = 'var(--color-green)' }) {
  return (
    <svg viewBox="0 0 20 20" className="bb-check" aria-hidden="true" style={{ color }}>
      <path d="M4 10.6l4 4L16 5.6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export default function BuyBox({ product, heading }) {
  const [active, setActive] = useState(0);
  const [sugar, setSugar] = useState('Low Sugar');
  const [qty, setQty] = useState(product.defaultQuantity || 1);
  const [plan, setPlan] = useState('subscribe');
  const [open, setOpen] = useState(null);

  useEffect(() => {
    setActive(0);
    setQty(product.defaultQuantity || 1);
    setPlan('subscribe');
    setOpen(null);
  }, [product.handle]);

  const flavor = product.flavors[product.activeFlavor] || product.flavors[0];
  const yellow = product.theme === 'yellow';

  return (
    <div className={`buybox${yellow ? ' buybox--yellow' : ''}`}>
      {heading && <h2 className="buybox__heading h2">{heading}</h2>}

      <div className="buybox__inner page">
        {/* ---------------------------------------------------------------- media */}
        <div className="bb-media">
          <div className="bb-thumbs">
            {product.gallery.map((src, i) => (
              <button
                key={src}
                className={`bb-thumb${i === active ? ' is-active' : ''}`}
                onClick={() => setActive(i)}
                aria-label={`View image ${i + 1}`}
              >
                <img src={src} alt="" loading="lazy" />
              </button>
            ))}
          </div>

          <div className="bb-stage">
            <img className="bb-stage__img" src={product.gallery[active]} alt={product.title} />
          </div>

          <div className="bb-media__extras">
            <button className="bb-nutrition btn btn-outline">View Nutrition Label</button>
            <div className="bb-lightlabs">
              <span className="bb-lightlabs__mark" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M3 9l5 8 3-5 3 5 6-11" stroke="#6d78f5" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>
              <div>
                <p className="body-5">
                  Tested by Light Labs in <span className="bb-lightlabs__tag">JUL 2026</span>
                </p>
                <p className="body-5 bb-lightlabs__link">35 substances tested for quality →</p>
              </div>
            </div>
          </div>
        </div>

        {/* ----------------------------------------------------------------- info */}
        <div className="bb-info">
          <p className="bb-rating body-4">
            <Stars size={14} />
            <span className="bb-rating__text">{product.rating}</span>
          </p>

          <h1 className="bb-title h2">{product.title}</h1>
          <p className="bb-subtitle">{product.subtitle}</p>

          <ul className="bb-benefits">
            {product.benefits.map((b) => (
              <li key={b} className="body-3">
                <Check />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <hr className="bb-rule" />

          <div className="bb-block">
            <h3 className="bb-label">
              Select Flavor: <span className="bb-label__value">{flavor.label}</span>
            </h3>
            <p className="bb-note body-3">{flavor.note}</p>
            <div className="bb-swatches">
              {product.flavors.map((f, i) => (
                <Link
                  key={f.label}
                  to={f.href}
                  className={`bb-swatch${i === product.activeFlavor ? ' is-active' : ''}`}
                >
                  {f.badge && <span className="bb-swatch__badge label-3">{f.badge}</span>}
                  <span className="bb-swatch__img">
                    <img src={f.swatch} alt="" loading="lazy" />
                  </span>
                  <span className="bb-swatch__label body-3">{f.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <hr className="bb-rule" />

          <div className="bb-block">
            <h3 className="bb-label">Select Sugar Level</h3>
            <div className="bb-pills">
              {['Low Sugar', 'Sugar-Free'].map((s) => (
                <button
                  key={s}
                  className={`bb-pill${sugar === s ? ' is-active' : ''}`}
                  onClick={() => setSugar(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <hr className="bb-rule" />

          <div className="bb-block">
            <div className="bb-label-row">
              <h3 className="bb-label">{product.quantityLabel}</h3>
              <span className="bb-tag label-3">
                <svg viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M11 3H4v7l9 9 7-7-9-9Z" stroke="currentColor" strokeWidth="1.4" fill="none" />
                </svg>
                Buy More. Save More.
              </span>
            </div>
            <div className="bb-qty">
              {product.quantityOptions.map((n) => (
                <button key={n} className={`bb-qty__btn${qty === n ? ' is-active' : ''}`} onClick={() => setQty(n)}>
                  {n}
                </button>
              ))}
            </div>
          </div>

          <div className="bb-block">
            <h3 className="bb-label">Autoship and Save:</h3>

            <button
              className={`bb-plan bb-plan--sub${plan === 'subscribe' ? ' is-active' : ''}`}
              onClick={() => setPlan('subscribe')}
            >
              <span className="bb-plan__badge label-3">{product.planBadge}</span>
              <span className="bb-plan__body">
                <span className="bb-plan__row">
                  <span className="bb-radio" data-on={plan === 'subscribe'} />
                  <span className="bb-plan__names">
                    <span className="bb-plan__title">Subscribe &amp; Save</span>
                    <span className="bb-plan__cadence body-4">{product.plans.subscribe.cadence}</span>
                  </span>
                  <span className="bb-plan__prices">
                    <span className="bb-plan__price">
                      {product.plans.subscribe.price}
                      <span className="bb-plan__compare body-4">{product.plans.subscribe.compare}</span>
                    </span>
                    <span className="bb-plan__perday body-5">{product.plans.subscribe.perDay}</span>
                  </span>
                </span>
                <span className="bb-plan__perks">
                  {['Free Shipping Today', 'Pause Or Cancel Any Time', '30-Day Money-Back Guarantee'].map((p) => (
                    <span className="body-4" key={p}>
                      <Check />
                      {p}
                    </span>
                  ))}
                </span>
              </span>
            </button>

            <button
              className={`bb-plan bb-plan--once${plan === 'once' ? ' is-active' : ''}`}
              onClick={() => setPlan('once')}
            >
              <span className="bb-plan__row">
                <span className="bb-radio" data-on={plan === 'once'} />
                <span className="bb-plan__names">
                  <span className="bb-plan__title">One Time Purchase</span>
                  <span className="bb-plan__cadence body-4">{product.plans.oneTime.cadence}</span>
                </span>
                <span className="bb-plan__prices">
                  <span className="bb-plan__price">{product.plans.oneTime.price}</span>
                  <span className="bb-plan__perday body-5">{product.plans.oneTime.perDay}</span>
                </span>
              </span>
            </button>

            <button className={`bb-start btn ${yellow ? 'btn-secondary' : 'btn-primary'}`}>Start Now</button>
            <p className="bb-renew body-5">{product.planNote}</p>

            {product.discountLabel ? (
              <p className="bb-discount-bar body-4">{product.discountLabel}</p>
            ) : (
              <>
                <p className="bb-discount label-2">
                  <svg viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M11 3H4v7l9 9 7-7-9-9Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  </svg>
                  DISCOUNT AUTO-APPLIED
                </p>
                <p className="bb-guarantee body-4">
                  <strong>Less than 1%</strong> of customers use our Money-Back Guarantee
                </p>
              </>
            )}

            <ul className="bb-trust">
              <li>
                <img src={icons.guarantee} alt="" loading="lazy" />
                <span className="body-4">30-Day Money-Back Guarantee</span>
              </li>
              <li>
                <img src={icons.clinical} alt="" loading="lazy" />
                <span className="body-4">Clinically and 3rd party tested</span>
              </li>
              <li>
                <img src={icons.hsa} alt="" loading="lazy" />
                <span className="body-4">
                  HSA/FSA eligible with <u>Truemed</u>
                </span>
              </li>
            </ul>
          </div>

          <div className="bb-accordions">
            {product.accordions.map((a, i) => (
              <div className={`bb-acc${open === i ? ' is-open' : ''}`} key={a.title}>
                <button className="bb-acc__head" onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
                  <span className="h5">{a.title}</span>
                  <span className="bb-acc__sign" aria-hidden="true">
                    {open === i ? '–' : '+'}
                  </span>
                </button>
                {open === i && (
                  <div className="bb-acc__body">
                    {a.body.map((p) => (
                      <p className="body-3" key={p.slice(0, 24)}>
                        {p}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="bb-tastes">
            <p className="h4 bb-tastes__title">Tastes Like</p>
            <ul className="bb-tastes__row">
              {product.tastesLike.map(([emoji, label]) => (
                <li key={label}>
                  <span className="bb-emoji" aria-hidden="true">
                    {emoji}
                  </span>
                  <span className="h6">{label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bb-packed">
            <p className="h4 bb-tastes__title">Packed With</p>
            <ul className="bb-packed__list">
              {product.packedWith.map(([emoji, label]) => (
                <li key={label}>
                  <span className="bb-emoji bb-emoji--sm" aria-hidden="true">
                    {emoji}
                  </span>
                  <span className="body-3">{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
