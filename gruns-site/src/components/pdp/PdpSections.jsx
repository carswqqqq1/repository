import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowIcon,
  CaretIcon,
  CheckIcon,
  KidsIcon,
  PlusIcon,
  StarIcon,
  Stars,
  XCircleIcon,
  XMarkIcon,
} from "./PdpIcons.jsx";

function Stat({ stat, center }) {
  return (
    <div className="pdp-stat" style={center ? { textAlign: "center" } : undefined}>
      <div className="pdp-stat__value">{stat.value}</div>
      <div className="pdp-stat__label">
        {stat.label}
        {stat.sup ? <sup>{stat.sup}</sup> : null}
      </div>
    </div>
  );
}

function PromoBand({ section }) {
  return (
    <section className={`pdp-band${section.striped ? " pdp-band--striped" : ""}`}>
      <div className="pdp-container">
        <h2 className="pdp-display pdp-band__heading">{section.heading}</h2>
        <p className="pdp-band__body">{section.body}</p>
        <Link className="pdp-btn pdp-btn--magenta" to="/products/gruns">
          {section.cta}
        </Link>
      </div>
    </section>
  );
}

function Deficient({ section }) {
  const classes = [
    "pdp-deficient",
    section.flat ? "pdp-deficient--flat" : "",
    section.display ? "pdp-deficient--display" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={classes}>
      <div className="pdp-container--wide pdp-container">
        <div className="pdp-deficient__card">
          <div className="pdp-deficient__copy">
            <h2 className={section.display ? "pdp-display" : "pdp-h2"}>
              {section.heading}
            </h2>
            <p className="pdp-deficient__sub">{section.sub}</p>
            <div className="pdp-stats">
              {section.stats.map((stat) => (
                <Stat key={stat.value} stat={stat} center />
              ))}
            </div>
            <div className="pdp-deficient__action">
              <button type="button" className="pdp-btn pdp-btn--pop">
                {section.cta}
              </button>
              <div className="pdp-sources">
                <a href="#source-1">
                  <sup>1</sup> Source
                </a>
                <a href="#source-2">
                  <sup>2</sup> Source
                </a>
              </div>
            </div>
          </div>
          {section.image ? (
            <div className="pdp-deficient__media">
              <img src={section.image} alt="" loading="lazy" />
            </div>
          ) : (
            <div />
          )}
        </div>
      </div>
    </section>
  );
}

function QualityBlock({ quality, asSection }) {
  return (
    <div className={asSection ? "pdp-quality pdp-quality--section" : "pdp-quality"}>
      <h2 className="pdp-h2">{quality.heading}</h2>
      <p className="pdp-quality__body">{quality.body}</p>
      <ul className="pdp-quality__list">
        {quality.items.map((item) => (
          <li key={item}>
            <XCircleIcon />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Snackable({ section }) {
  return (
    <section className={`pdp-snackable${section.card ? " pdp-snackable--card" : ""}`}>
      <div className="pdp-container pdp-container--wide">
        <h2 className={section.display ? "pdp-display" : "pdp-h2"}>{section.heading}</h2>
        <p className="pdp-snackable__body">{section.body}</p>
        <div className="pdp-snackable__stats">
          {section.stats.map((stat) => (
            <Stat key={stat.label} stat={stat} center />
          ))}
        </div>
        <p className="pdp-footnote">{section.footnote}</p>
        <QualityBlock quality={section.quality} />
      </div>
    </section>
  );
}

function Quality({ section }) {
  return (
    <section className="pdp-quality--wrap">
      <div className="pdp-container pdp-container--wide">
        <QualityBlock quality={section} asSection />
      </div>
    </section>
  );
}

function Reviews({ section }) {
  const [tab, setTab] = useState(0);

  return (
    <section className="pdp-reviews" id="reviews">
      <div className="pdp-container pdp-container--mid">
        {section.eyebrow ? (
          <div className="pdp-reviews__eyebrow">
            {section.eyebrowPlain ? null : (
              <span style={{ display: "inline-flex" }}>
                <Stars />
              </span>
            )}
            {section.eyebrow}
          </div>
        ) : null}
        <h2 className={`pdp-reviews__heading ${section.display ? "pdp-display" : "pdp-h2"}`}>
          {section.heading}
        </h2>
        <div className="pdp-reviews__tabs">
          {section.tabs.map((t, i) => (
            <button
              key={t}
              type="button"
              className="pdp-tab"
              aria-pressed={i === tab}
              onClick={() => setTab(i)}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="pdp-reviews__grid">
          {section.reviews.map((review) => (
            <div
              key={review.author}
              className={`pdp-review${section.cards ? " pdp-review--card" : ""}`}
            >
              {section.cards ? null : (
                <span className="pdp-review__stars">
                  <Stars />
                </span>
              )}
              <p className="pdp-review__title">{review.title}</p>
              <p className="pdp-review__body">{review.body}</p>
              {section.cards ? (
                <span className="pdp-review__stars">
                  <Stars />
                </span>
              ) : null}
              <div className="pdp-review__author">{review.author}</div>
            </div>
          ))}
        </div>
        {section.reel ? <div className="pdp-reviews__reel" /> : null}
        <p className="pdp-reviews__disclaimer">{section.disclaimer}</p>
      </div>
    </section>
  );
}

function UsVsThem({ section }) {
  return (
    <section className="pdp-uvt">
      <div className="pdp-container pdp-container--wide">
        <div className="pdp-uvt__inner">
          <div>
            <h2 className={section.display ? "pdp-display" : "pdp-h2"}>{section.heading}</h2>
            <p className="pdp-uvt__body">{section.body}</p>
          </div>
          <div className="pdp-uvt__media">
            {section.image ? (
              <img src={section.image} alt="Grüns compared with greens powders and multi-vitamins" loading="lazy" />
            ) : (
              <table className="pdp-uvt__table">
                <thead>
                  <tr>
                    <th />
                    <th />
                    {section.columns.map((c) => (
                      <th key={c}>{c}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.rows.map((row) => (
                    <tr key={row.label}>
                      <td>{row.label}</td>
                      {row.values.map((value, i) => (
                        <td key={i}>
                          {typeof value === "string" ? (
                            <strong>{value}</strong>
                          ) : value.stars ? (
                            <span className="pdp-uvt__stars">
                              <Stars count={value.stars} />
                            </span>
                          ) : (
                            <span className={`pdp-mark pdp-mark--${value.mark ? "yes" : "no"}`}>
                              {value.mark ? <CheckIcon /> : <XMarkIcon />}
                            </span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function PriceDrop({ section }) {
  return (
    <section className="pdp-pricedrop">
      <div className="pdp-container pdp-container--wide">
        <div className="pdp-pricedrop__inner">
          <div>
            <h2 className="pdp-display pdp-pricedrop__heading">{section.heading}</h2>
            <p className="pdp-pricedrop__body">{section.body}</p>
            <Link className="pdp-btn" to="/products/gruns">
              {section.cta}
            </Link>
          </div>
          {section.image ? (
            <div>
              <img src={section.image} alt="" loading="lazy" style={{ width: "100%", borderRadius: "18px" }} />
            </div>
          ) : (
            <div />
          )}
        </div>
      </div>
    </section>
  );
}

function Spokesperson({ section }) {
  return (
    <section className="pdp-spokes">
      <div className="pdp-container pdp-container--wide">
        <div className="pdp-spokes__inner">
          <div className="pdp-spokes__media">
            <img src={section.image} alt={section.name} loading="lazy" />
          </div>
          <div>
            <h2 className="pdp-spokes__quote">{section.quote}</h2>
            <p className="pdp-spokes__body">{section.body}</p>
            <div className="pdp-spokes__name">{section.name}</div>
            <div className="pdp-spokes__role">{section.role}</div>
            <div className="pdp-spokes__cta">
              <button type="button" className="pdp-btn pdp-btn--pop">
                {section.cta}
              </button>
            </div>
            <p className="pdp-spokes__footnote">{section.footnote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FindYourFlavor({ section }) {
  return (
    <section className="pdp-fyf">
      <div className="pdp-container pdp-container--wide">
        <h2 className={section.display ? "pdp-display" : "pdp-h2"}>{section.heading}</h2>
        <div className="pdp-fyf__grid">
          {section.cards.map((card) => (
            <div className="pdp-fyf__card" key={card.title}>
              <div className="pdp-fyf__media">
                {card.badge ? (
                  <span className={`pdp-fyf__badge pdp-fyf__badge--${card.badgeStyle ?? "magenta"}`}>
                    {card.badge}
                  </span>
                ) : null}
                <img src={card.image} alt={card.title} loading="lazy" />
              </div>
              <p className="pdp-fyf__title">{card.title}</p>
              <p className="pdp-fyf__price">
                Starts at {card.price} <s>{card.compare}</s>
              </p>
              <button type="button" className="pdp-fyf__cta">
                {section.cta}
              </button>
              <Link className="pdp-fyf__link" to={card.href}>
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq({ section }) {
  const [open, setOpen] = useState(-1);

  return (
    <section className={`pdp-faq${section.compact ? " pdp-faq--compact" : ""}`} id="faq">
      <div className="pdp-container pdp-container--wide">
        <div className="pdp-faq__inner">
          <div>
            <h2 className={`pdp-faq__heading ${section.display ? "pdp-display" : "pdp-h2"}`}>
              {section.heading}
            </h2>
            {section.cta ? (
              <div className="pdp-faq__cta">
                <Link className="pdp-btn pdp-btn--pop" to={section.cta.href}>
                  {section.cta.label}
                </Link>
              </div>
            ) : null}
          </div>
          <div className="pdp-faq__list">
            {section.items.map((item, i) => (
              <div className="pdp-faq__item" key={item.q}>
                <button
                  type="button"
                  className="pdp-faq__btn"
                  aria-expanded={open === i}
                  onClick={() => setOpen(open === i ? -1 : i)}
                >
                  {item.q}
                  {section.compact ? <CaretIcon /> : <PlusIcon open={open === i} />}
                </button>
                {open === i ? <div className="pdp-faq__panel">{item.a}</div> : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function QuoteCarousel({ section }) {
  const [index, setIndex] = useState(0);
  const quotes = section.quotes;
  const visible = [-1, 0, 1].map((offset) => ({
    text: quotes[(index + offset + quotes.length) % quotes.length],
    faded: offset !== 0,
    key: offset,
  }));

  return (
    <section className="pdp-quotes">
      <div className="pdp-container pdp-container--wide">
        <div className="pdp-quotes__inner">
          <button
            type="button"
            className="pdp-quotes__arrow"
            aria-label="Previous quote"
            onClick={() => setIndex((i) => (i - 1 + quotes.length) % quotes.length)}
          >
            <ArrowIcon dir="left" />
          </button>
          <div className="pdp-quotes__track">
            {visible.map((q) => (
              <p key={q.key} className={`pdp-quote${q.faded ? " pdp-quote--faded" : ""}`}>
                {q.text}
              </p>
            ))}
          </div>
          <button
            type="button"
            className="pdp-quotes__arrow"
            aria-label="Next quote"
            onClick={() => setIndex((i) => (i + 1) % quotes.length)}
          >
            <ArrowIcon />
          </button>
        </div>
        <div className="pdp-dots">
          {quotes.map((q, i) => (
            <span key={q} data-active={i === index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function KidsSupport({ section }) {
  return (
    <section className="pdp-kids-support">
      <div className="pdp-container pdp-container--wide">
        <div className="pdp-kids-support__inner">
          <div className="pdp-kids-support__media">
            <img src={section.image} alt="" loading="lazy" />
          </div>
          <div className="pdp-kids-support__copy">
            <h2 className="pdp-h2">{section.heading}</h2>
            <p className="pdp-kids-support__sub">{section.sub}</p>
            <div className="pdp-kids-support__grid">
              {section.items.map((item) => (
                <div className="pdp-kids-support__item" key={item.title}>
                  <span style={{ color: "var(--pdp-accent)" }}>
                    <KidsIcon name={item.icon} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pediatricians({ section }) {
  return (
    <section className="pdp-peds">
      <div className="pdp-container pdp-container--wide">
        <h2 className="pdp-h2" style={{ color: "#0a1912" }}>
          {section.heading}
        </h2>
        <div className="pdp-peds__grid">
          {section.cards.map((card) => (
            <article className="pdp-ped" key={card.name}>
              <img src={card.image} alt={card.name} loading="lazy" />
              <div className="pdp-ped__name">{card.name}</div>
              <p className="pdp-ped__body">{card.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Founder({ section }) {
  return (
    <section className="pdp-founder">
      <div className="pdp-container pdp-container--wide">
        <div className="pdp-founder__inner">
          <div className="pdp-founder__media">
            <img src={section.image} alt={section.name} loading="lazy" />
          </div>
          <div>
            <h2 className="pdp-founder__heading pdp-h2">{section.heading}</h2>
            <p className="pdp-founder__body">{section.body}</p>
            <div className="pdp-founder__name">{section.name}</div>
            <div className="pdp-founder__role">{section.role}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FlavorHero({ section }) {
  return (
    <section className="pdp-flavorhero">
      <div className="pdp-container pdp-container--wide">
        <div className="pdp-flavorhero__frame">
          <div>
            <h2 className="pdp-flavorhero__title">
              <span>{section.titleLine1}</span>
              {section.titleLine2}
            </h2>
            <p className="pdp-flavorhero__sub">{section.sub}</p>
          </div>
          <p className="pdp-flavorhero__body">{section.body}</p>
        </div>
      </div>
    </section>
  );
}

function LtoSteps({ section }) {
  return (
    <section className="pdp-steps">
      <div className="pdp-container pdp-container--wide">
        <h2 className="pdp-display pdp-steps__heading">{section.heading}</h2>
        <div className="pdp-steps__grid">
          {section.steps.map((step, i) => (
            <div className="pdp-step" key={step.title}>
              <div className="pdp-step__media">
                <img src={step.image} alt="" loading="lazy" />
                <span className="pdp-step__num">{i + 1}</span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "40px" }}>
          <button type="button" className="pdp-btn">
            {section.cta}
          </button>
        </div>
      </div>
    </section>
  );
}

function JunipStars({ score = 5 }) {
  return (
    <span className="junip-stars" aria-label={`${score} out of 5`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <span key={i} className="junip-star">
          <span
            className="junip-star__fill"
            style={{ width: `${Math.max(0, Math.min(1, score - i)) * 100}%` }}
          >
            <StarIcon />
          </span>
          <StarIcon />
        </span>
      ))}
    </span>
  );
}

function JunipReviews({ section }) {
  const [sort, setSort] = useState("Latest");
  const [rating, setRating] = useState("Rating");
  const [query, setQuery] = useState("");
  const [photosOnly, setPhotosOnly] = useState(false);
  const total = section.histogram.reduce((sum, n) => sum + n, 0) || 1;

  return (
    <section className="junip" id="customer-reviews">
      <div className="junip__inner">
        <h2 className="junip__heading">Real Customer Reviews</h2>

        <div className="junip__summary">
          <div className="junip__score">
            <div className="junip__score-value">{section.score}</div>
            <JunipStars score={Number(section.score)} />
            <div className="junip__score-count">{section.count} reviews</div>
          </div>
          <div className="junip__histogram">
            {section.histogram.map((count, i) => (
              <div className="junip__hrow" key={5 - i}>
                <span className="junip__hlabel">{5 - i}</span>
                <span className="junip__htrack">
                  <span
                    className="junip__hfill"
                    style={{ width: `${(count / total) * 100}%` }}
                  />
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="junip__says">
          <div className="junip__says-head">
            <strong>What customers say</strong>
            <span className="junip__auto">
              <svg viewBox="0 0 16 16" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M8 1.5l1.3 3.6 3.7 1.2-3.7 1.3L8 11.2 6.7 7.6 3 6.3l3.7-1.2L8 1.5zM3.4 10.6l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7.7-1.8z"
                />
              </svg>
              Auto-generated
            </span>
          </div>
          <p className="junip__says-body">{section.summary}</p>
        </div>

        <div className="junip__filters">
          <label className="junip__search">
            <input
              type="search"
              placeholder="Search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            <svg viewBox="0 0 20 20" aria-hidden="true">
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                d="M13 13l4 4M8.5 14a5.5 5.5 0 100-11 5.5 5.5 0 000 11z"
              />
            </svg>
          </label>
          <label className="junip__select">
            <select value={sort} onChange={(event) => setSort(event.target.value)}>
              {["Latest", "Oldest", "Highest rating", "Lowest rating"].map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
            <span className="junip__select-prefix">Sort by:</span>
            <CaretIcon />
          </label>
          <label className="junip__select junip__select--plain">
            <select
              value={rating}
              onChange={(event) => setRating(event.target.value)}
            >
              {["Rating", "5", "4", "3", "2", "1"].map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
            <CaretIcon />
          </label>
          <label className="junip__check">
            <input
              type="checkbox"
              checked={photosOnly}
              onChange={(event) => setPhotosOnly(event.target.checked)}
            />
            Photos &amp; videos
          </label>
        </div>

        <ul className="junip__list">
          {section.items.map((item) => (
            <li className="junip__item" key={`${item.name}-${item.title}`}>
              <div className="junip__who">
                <span className="junip__avatar">{item.initials}</span>
                <div>
                  <div className="junip__name">
                    {item.name}
                    <svg viewBox="0 0 16 16" aria-hidden="true">
                      <path
                        fill="currentColor"
                        d="M3 6h10v8H3V6zm1.5-3.5h3V5h-3V2.5zm4.5 0h3V5h-3V2.5zM2 5h12v1.5H2V5z"
                      />
                    </svg>
                  </div>
                  <div className="junip__verified">
                    <svg viewBox="0 0 16 16" aria-hidden="true">
                      <circle cx="8" cy="8" r="7" fill="currentColor" />
                      <path
                        fill="#fff"
                        d="M6.9 10.6L4.6 8.3l.9-.9 1.4 1.4 3.2-3.2.9.9z"
                      />
                    </svg>
                    Verified buyer
                  </div>
                </div>
              </div>
              <div className="junip__content">
                <div className="junip__row">
                  <JunipStars score={item.rating ?? 5} />
                  <span className="junip__ago">{item.ago}</span>
                </div>
                <h3 className="junip__title">{item.title}</h3>
                <p className="junip__body">{item.body}</p>
                <p className="junip__for">Review for {item.product}</p>
                <div className="junip__meta">
                  <span className="junip__recommend">
                    <svg viewBox="0 0 16 16" aria-hidden="true">
                      <path
                        fill="currentColor"
                        d="M8 14S1.5 10.2 1.5 5.9A3.4 3.4 0 018 4.4a3.4 3.4 0 016.5 1.5C14.5 10.2 8 14 8 14z"
                      />
                    </svg>
                    Would recommend
                  </span>
                  <span className="junip__helpful">
                    Helpful
                    <svg viewBox="0 0 16 16" aria-hidden="true">
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        d="M8 3.5l5 8H3z"
                      />
                    </svg>
                    <svg viewBox="0 0 16 16" aria-hidden="true">
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        d="M8 12.5l-5-8h10z"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="junip__more">
          <button type="button" className="junip__more-btn">
            See more reviews
          </button>
          <div className="junip__brand">
            Reviewed on <strong>Junip</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

const SECTION_MAP = {
  junipReviews: JunipReviews,
  promoBand: PromoBand,
  deficient: Deficient,
  snackable: Snackable,
  quality: Quality,
  reviews: Reviews,
  usVsThem: UsVsThem,
  priceDrop: PriceDrop,
  spokesperson: Spokesperson,
  findYourFlavor: FindYourFlavor,
  faq: Faq,
  quoteCarousel: QuoteCarousel,
  kidsSupport: KidsSupport,
  pediatricians: Pediatricians,
  founder: Founder,
  flavorHero: FlavorHero,
  ltoSteps: LtoSteps,
};

export default function PdpSection({ section }) {
  const Component = SECTION_MAP[section.type];
  if (!Component) return null;
  return <Component section={section} />;
}
