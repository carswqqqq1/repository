import { benefitLines, benefitAssets } from '../data/site.js';

export default function BenefitsScroll() {
  return (
    <section className="benefits">
      <div className="benefits__words">
        <img className="benefits__gummy benefits__gummy--left" src={benefitAssets.gummyLeft} alt="" loading="lazy" />
        <img className="benefits__gummy benefits__gummy--right" src={benefitAssets.gummyRight} alt="" loading="lazy" />
        {benefitLines.map((line) => (
          <p className="benefits__line d5" key={line}>
            {line}
          </p>
        ))}
      </div>

      <div className="benefits__packet">
        <img className="benefits__sachet-back" src={benefitAssets.sachetBack} alt="" loading="lazy" />
        <img className="benefits__bear" src={benefitAssets.bear} alt="" loading="lazy" />
        <img className="benefits__sachet-front" src={benefitAssets.sachetFront} alt="" loading="lazy" />
      </div>

      <div className="benefits__fade" aria-hidden="true" />
    </section>
  );
}
