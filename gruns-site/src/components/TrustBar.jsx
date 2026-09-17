const ITEMS = [
  { n: "70 different", label: "pesticides" },
  { n: "4 types of", label: "heavy metals" },
  { n: "16 different", label: "contaminants" },
  { n: "9 microbial", label: "contaminants" },
];

export default function TrustBar() {
  return (
    <>
      <div className="gradient-band" aria-hidden />
      <section className="trust" aria-label="Third party testing">
        <div className="trust-copy">
          <h2>3rd party-tested for potency, purity, &amp; safety.</h2>
          <p>We regularly test for all 20+ vitamins &amp; minerals to ensure claims are accurate &amp; clear of contaminants including:</p>
        </div>
        <ul className="trust-grid">
          {ITEMS.map((t) => (
            <li key={t.n + t.label} className="trust-pill">
              <strong>{t.n}</strong>
              <span>{t.label}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
