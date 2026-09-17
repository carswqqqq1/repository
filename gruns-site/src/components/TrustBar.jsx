import { testedCallouts } from '../data/site.js';

export default function TrustBar() {
  return (
    <>
      <div className="gradient-band" aria-hidden />
      <section className="trust" aria-label="Third party testing">
        <div className="trust-copy">
          <h2>3rd party-tested for potency, purity, &amp; safety.</h2>
          <p>
            We regularly test for all 20+ vitamins &amp; minerals to ensure claims are accurate &amp; clear of
            contaminants including:
          </p>
        </div>
        <ul className="trust-grid">
          {testedCallouts.map((t) => (
            <li key={t.n + t.label} className="trust-pill">
              <img className="trust-icon" src={t.icon} alt="" width={48} height={48} />
              <strong>{t.n}</strong>
              <span>{t.label}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
