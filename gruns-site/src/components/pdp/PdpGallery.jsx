import { useState } from "react";
import { LabCheckIcon } from "./PdpIcons.jsx";

export default function PdpGallery({ images, title, labTested }) {
  const [active, setActive] = useState(0);
  const index = active < images.length ? active : 0;

  return (
    <div className="pdp-gallery">
      <div className="pdp-gallery__media">
        <div className="pdp-gallery__thumbs">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              className="pdp-thumb"
              aria-current={i === index}
              aria-label={`View image ${i + 1}`}
              onClick={() => setActive(i)}
            >
              <img src={src} alt="" loading="lazy" />
            </button>
          ))}
        </div>
        <div className="pdp-gallery__main">
          <img src={images[index]} alt={title} />
        </div>
      </div>

      <div className="pdp-gallery__below">
        <button type="button" className="pdp-nutrition-btn">
          View Nutrition Label
        </button>
      </div>

      {labTested ? (
        <div className="pdp-lab">
          <span className="pdp-lab__check">
            <LabCheckIcon />
          </span>
          <span>
            {labTested.label}
            <span className="pdp-lab__date">{labTested.date}</span>
            <a className="pdp-lab__link" href="#lab-results">
              {labTested.link}
            </a>
          </span>
        </div>
      ) : null}
    </div>
  );
}
