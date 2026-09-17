import SocialIcon from '../components/SocialIcon.jsx';
import { brandAssets, socialImages } from '../data/site.js';

const NETWORKS = ['instagram', 'tiktok', 'youtube', 'facebook'];

export default function SocialFan() {
  return (
    <section className="socialfan">
      <div className="socialfan__content">
        <h2 className="socialfan__heading">
          <strong>1 million members.</strong> we've been getting around
        </h2>
        <ul className="socialfan__links">
          {NETWORKS.map((n) => (
            <li key={n}>
              <a href="#" className="socialfan__chip" aria-label={n}>
                <SocialIcon name={n} />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <img
        className="socialfan__wordmark"
        src={brandAssets.bearNecessities}
        alt=""
        loading="lazy"
        aria-hidden="true"
      />

      <div className="socialfan__fan" aria-hidden="true">
        {socialImages.map((src, i) => {
          const step = 150 / (socialImages.length - 1);
          const angle = -75 + i * step;
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
