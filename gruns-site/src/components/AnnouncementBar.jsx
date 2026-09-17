import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SLIDES = [
  {
    bg: '#00572c',
    lines: [
      { text: '🎈🎂️ IT’S GRÜNS’ BIRTHDAY! 🎂🎈', color: 'var(--color-yellow)', bold: true },
      { text: 'WE LOWERED OUR PRICE TO CELEBRATE', color: '#fff' },
    ],
    href: '/products/gruns',
  },
  {
    bg: '#4b1348',
    lines: [{ text: "✨ NEW! Shrek Berry Far Far Away. Grab it before it's far, far gone. ✨", color: '#fff', bold: true }],
    href: '/products/shrek-gruns',
  },
  {
    bg: '#00572c',
    lines: [{ text: '📦 FREE SHIPPING + 30-DAY GUARANTEE 🔒', color: '#fff', bold: true }],
  },
];

export default function AnnouncementBar() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % SLIDES.length), 5000);
    return () => clearInterval(id);
  }, []);

  const slide = SLIDES[i];
  const body = (
    <div className="announcement__inner">
      {slide.lines.map((l) => (
        <span
          key={l.text}
          className="announcement__line"
          style={{ color: l.color, fontWeight: l.bold ? 700 : 600 }}
        >
          {l.text}
        </span>
      ))}
    </div>
  );

  return (
    <div className="announcement" style={{ background: slide.bg }}>
      {slide.href ? (
        <Link to={slide.href} className="announcement__link">
          {body}
        </Link>
      ) : (
        body
      )}
    </div>
  );
}
