import { valueProps } from '../data/site.js';

export default function ValueProps() {
  return (
    <section className="vprops">
      <div className="vprops__inner">
        <h2 className="vprops__heading h2">
          We made daily nutrition, like, <strong>ridiculously easy.</strong>
        </h2>
        <div className="vprops__cards">
          {valueProps.map((card) => (
            <article className="vprop-card" key={card.title}>
              <img className="vprop-card__media" src={card.image} alt={card.title} loading="lazy" />
              <h3 className="h4">{card.title}</h3>
              <p className="vprop-card__copy">{card.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
