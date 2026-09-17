import { useParams } from "react-router-dom";
import ProductGridCard from "../components/ProductGridCard.jsx";
import { getCollection, fallbackCollection } from "../data/collectionCatalog.js";
import "../styles/collections.css";

export default function CollectionPage() {
  const { handle } = useParams();
  const collection = getCollection(handle) ?? fallbackCollection(handle);
  const { title, theme, items, columns, heroEyebrow, heroHeadline, heroBody } = collection;

  return (
    <div
      className={`page-mount collection-page collection-page--${theme}`}
      data-page="collection"
      data-handle={handle ?? ""}
    >
      {theme === "snackshack" ? (
        <section className="snack-hero" aria-label="Ü Snacks Shack">
          <div className="snack-hero__inner">
            <div className="snack-hero__copy">
              <h1 className="snack-hero__headline">{heroHeadline}</h1>
              <p className="snack-hero__body">{heroBody}</p>
            </div>
            {heroEyebrow ? (
              <div className="snack-hero__badge" role="note">
                <span>{heroEyebrow}</span>
              </div>
            ) : null}
            <div className="snack-hero__register" aria-hidden="true">
              <span className="snack-hero__register-screen">$$$</span>
              <span className="snack-hero__register-slot" />
            </div>
          </div>
        </section>
      ) : (
        <header className="collection-header">
          <h1 className="collection-title">{title}</h1>
        </header>
      )}

      <section
        className="collection-grid"
        style={{ "--collection-columns": columns ?? 3 }}
        aria-label={title}
      >
        {items.map((item) => (
          <ProductGridCard key={item.id} item={item} theme={theme} />
        ))}
      </section>

      {theme === "snackshack" ? <div className="snack-plaid-divider" aria-hidden="true" /> : null}
    </div>
  );
}
