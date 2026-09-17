import { testedCallouts } from '../data/site.js';

export default function ThirdPartyScience() {
  return (
    <section className="tested">
      <div className="tested__inner page">
        <div className="tested__copy">
          <h2 className="tested__heading d5">
            3rd party-tested for
            <br />
            potency, purity, &amp; safety.
          </h2>
          <p className="tested__sub">
            We regularly test for all 20+ vitamins &amp; minerals to ensure claims are accurate &amp; clear of
            contaminants including:
          </p>
        </div>
        <ul className="tested__callouts">
          {testedCallouts.map((item) => (
            <li key={item.label}>
              <img src={item.icon} alt="" loading="lazy" />
              <p>{item.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
