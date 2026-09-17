import { pressLogos } from '../data/site.js';

export default function PressMarquee() {
  const track = [...pressLogos, ...pressLogos];
  return (
    <section className="press">
      <div className="press__track">
        {track.map((src, i) => (
          <div className="press__item" key={`${src}-${i}`}>
            <img src={src} alt="" loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
}
