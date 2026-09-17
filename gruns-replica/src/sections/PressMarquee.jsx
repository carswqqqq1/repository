import { pressLogos } from '../data/site.js';

export default function PressMarquee() {
  const loop = [...pressLogos, ...pressLogos];
  return (
    <section className="press" aria-label="Press">
      <div className="press__track">
        {loop.map((src, i) => (
          <div className="press__item" key={`${src}-${i}`}>
            <img src={src} alt="" loading="lazy" aria-hidden="true" />
          </div>
        ))}
      </div>
    </section>
  );
}
