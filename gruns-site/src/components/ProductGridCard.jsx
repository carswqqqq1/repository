/** Product grid card used on /collections/:handle pages. */
export default function ProductGridCard({ item, theme }) {
  if (theme === "snackshack") {
    return (
      <article className="cgrid-card cgrid-card--merch">
        <div className="cgrid-media cgrid-media--merch" style={{ background: item.swatch }}>
          <span className="cgrid-merch-icon" aria-hidden="true">
            {item.icon}
          </span>
        </div>
        <div className="cgrid-body">
          <h3 className="cgrid-name">{item.name}</h3>
          <p className="cgrid-blurb">{item.blurb}</p>
          <p className="cgrid-price cgrid-price--merch">{item.price}</p>
          <button type="button" className="cgrid-add cgrid-add--merch">
            Add to Bag
          </button>
        </div>
      </article>
    );
  }

  return (
    <article className="cgrid-card">
      <div className="cgrid-media" style={{ background: item.wash }}>
        {item.tag ? <span className="cgrid-tag">{item.tag}</span> : null}
        <div className={`cgrid-pouch cgrid-pouch--${item.pack}`}>
          <span className="cgrid-pouch-badge">{item.badge}</span>
          <span className="cgrid-pouch-word">grüns</span>
          <span className="cgrid-pouch-sub">{item.sub}</span>
          <span className="cgrid-pouch-bear" aria-hidden="true">
            🧸
          </span>
        </div>
      </div>
      <div className="cgrid-body">
        <h3 className="cgrid-name">{item.name}</h3>
        <p className="cgrid-blurb">{item.blurb}</p>
        <p className="cgrid-price">
          {item.price}
          {item.compareAt ? <s>{item.compareAt}</s> : null}
        </p>
        <button type="button" className="cgrid-add">
          Add to Bag
        </button>
      </div>
    </article>
  );
}
