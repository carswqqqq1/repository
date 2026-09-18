import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { announcementSlides } from "../../data/navigation";
import "./AnnouncementBar.css";

export function AnnouncementBar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % announcementSlides.length);
    }, 4200);
    return () => window.clearInterval(id);
  }, []);

  const slide = announcementSlides[index];

  return (
    <div
      className="announcement-bar"
      style={{ background: slide.bg, color: slide.color }}
      role="region"
      aria-label="Promotions"
    >
      <p key={index} className="announcement-bar__text">
        {slide.text}
      </p>
      <Link className="announcement-bar__shop" to="/products/gruns">
        Shop
      </Link>
    </div>
  );
}
