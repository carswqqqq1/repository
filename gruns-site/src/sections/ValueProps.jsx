import { valueProps } from '../data/site.js';

export default function ValueProps() {
  return (
    <section className="vprops">
      <div className="vprops__inner">
        <h2 className="vprops__heading d5">
          We made daily nutrition, like, <strong>ridiculously easy.</strong>
        </h2>
        <ul className="vprops__cards">
          {valueProps.map((v) => (
            <li className="vprop-card" key={v.title}>
              <img className="vprop-card__media" src={v.image} alt={v.title} loading="lazy" />
              <h3 className="h3">{v.title}</h3>
              <p className="body-3 vprop-card__copy">{v.copy}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
