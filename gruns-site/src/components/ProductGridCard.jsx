/** Product grid card used on /collections/:handle pages. */
export default function ProductGridCard({ item, theme }) {
  if (theme === "snackshack") {
    return (
      <article className="cgrid-card cgrid-card--merch">
        <div className="cgrid-media cgrid-media--merch">
          <img className="cgrid-photo" src={item.image} alt={item.name} loading="lazy" />
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
      <div className="cgrid-media">
        {item.tag ? <span className="cgrid-tag">{item.tag}</span> : null}
        <img
          className="cgrid-photo"
          src={item.image}
          alt={`${item.name} pouch of superfood gummies`}
          loading="lazy"
        />
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
