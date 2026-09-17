import { testedCallouts } from '../data/site.js';

export default function ThirdPartyScience() {
  return (
    <section className="tested">
      <div className="tested__inner page">
        <div className="tested__copy">
          <h2 className="d5 tested__heading">3rd party-tested for potency, purity, &amp; safety.</h2>
          <p className="body-3 tested__sub">
            We regularly test for all 20+ vitamins &amp; minerals to ensure claims are accurate &amp; clear of
            contaminants including:
          </p>
        </div>
        <ul className="tested__callouts">
          {testedCallouts.map((c) => (
            <li key={c.n + c.label}>
              <img className="tested__icon" src={c.icon} alt="" width={48} height={48} />
              <p className="body-3">
                <strong>{c.n}</strong>
                <span>{c.label}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
