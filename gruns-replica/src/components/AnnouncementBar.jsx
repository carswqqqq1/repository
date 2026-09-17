import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { announcements } from '../data/site.js';

export default function AnnouncementBar() {
  const [index, setIndex] = useState(0);
  const slide = announcements[index];

  useEffect(() => {
    const timer = setTimeout(
      () => setIndex((i) => (i + 1) % announcements.length),
      slide.duration ?? 8000
    );
    return () => clearTimeout(timer);
  }, [index, slide.duration]);

  const message = (
    <div className="announce__message">
      {slide.bold && (
        <p>
          {slide.prefix}
          <strong>{slide.bold}</strong>
          {slide.suffix}
        </p>
      )}
      {slide.text && <p>{slide.text}</p>}
    </div>
  );

  return (
    <div
      className="announce"
      style={{
        '--announce-bg': slide.bg,
        '--announce-fg': slide.color,
        '--announce-bold': slide.boldColor,
      }}
    >
      {slide.href ? (
        <Link className="announce__link" to={slide.href}>
          {message}
        </Link>
      ) : (
        message
      )}
    </div>
  );
}
