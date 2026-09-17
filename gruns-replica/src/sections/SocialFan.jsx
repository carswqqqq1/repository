import { socialFan, socials } from '../data/site.js';

const CHIP = { Instagram: 'IG', TikTok: 'TT', YouTube: 'YT', Facebook: 'FB' };

/* The live section fans nine lifestyle shots around a hidden pivot point below
   the fold; each tile counter-rotates so it stays upright. */
export default function SocialFan() {
  const spread = 7.5;
  const start = -((socialFan.images.length - 1) / 2) * spread;

  return (
    <section className="socialfan">
      <div className="socialfan__content">
        <h2 className="socialfan__heading">
          <strong>{socialFan.headingAccent}</strong> {socialFan.heading}
        </h2>
        <ul className="socialfan__links">
          {socials.map((s) => (
            <li key={s.label}>
              <a className="socialfan__chip" href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
                {CHIP[s.label]}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="socialfan__fan" aria-hidden="true">
        {socialFan.images.map((src, i) => (
          <div className="socialfan__orbit" key={src} style={{ '--angle': `${start + i * spread}deg` }}>
            <img src={src} alt="" loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
}
