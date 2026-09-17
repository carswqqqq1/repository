import { img } from '../data/site.js';

const FAN = [16, 8, 12, 10, 9, 13, 3, 7, 15, 2, 5, 23, 19, 22, 21, 18].map((n) =>
  img(`Gruns-Social-Images-${String(n).padStart(2, '0')}.png?v=1779993611`, 500)
);

export default function SocialFan() {
  return (
    <section className="socialfan">
      <div className="socialfan__content">
        <h2 className="socialfan__heading">
          <strong>1 million members.</strong> we've been getting around
        </h2>
        <ul className="socialfan__links">
          {['Instagram', 'TikTok', 'YouTube', 'Facebook'].map((n) => (
            <li key={n}>
              <a href="#" className="socialfan__chip" aria-label={n}>
                <span aria-hidden="true">{n[0]}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="socialfan__fan" aria-hidden="true">
        {FAN.map((src, i) => {
          const step = 180 / (FAN.length - 1);
          const angle = -90 + i * step;
          return (
            <div className="socialfan__orbit" key={src} style={{ '--angle': `${angle}deg` }}>
              <img src={src} alt="" loading="lazy" />
            </div>
          );
        })}
      </div>
    </section>
  );
}
