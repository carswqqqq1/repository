import { useEffect, useMemo, useRef, useState } from 'react';

const PRIZES = ['15% OFF', 'FREE GIFT', '55% OFF', 'FREE SHIP', 'BONUS PACK'];

function shuffledDeck() {
  // three of a kind for one prize + two pairs so the board is always winnable
  const [a, b, c] = [...PRIZES].sort(() => Math.random() - 0.5);
  const deck = [a, a, a, b, b, b, c, c, c];
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}

const STARS = [
  { left: '39.2%', top: '6%', size: 70, delay: '0s' },
  { left: '1.1%', top: '72.5%', size: 50, delay: '1.1s' },
];

const BEARS = [
  { src: '/img/bear-a.webp', left: '12.8%', top: '-2%', width: 92, rotate: '18deg', delay: '0s' },
  { src: '/img/bear-c.webp', left: '-1%', top: '30%', width: 120, rotate: '-12deg', delay: '1.4s' },
  { src: '/img/bear-b.webp', left: '47.2%', top: '23.5%', width: 90, rotate: '10deg', delay: '0.7s' },
];

export default function GameModal() {
  const [open, setOpen] = useState(false);
  const [deck, setDeck] = useState(() => shuffledDeck());
  const [revealed, setRevealed] = useState([]);
  const [won, setWon] = useState(false);
  const [seconds, setSeconds] = useState(59);
  const timer = useRef(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('nogame') === '1') return;
    if (params.get('game') === '1') {
      setOpen(true);
      return;
    }
    if (sessionStorage.getItem('gruns-game-dismissed')) return;
    const t = setTimeout(() => setOpen(true), 1200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!open || won) return;
    timer.current = setInterval(() => setSeconds((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(timer.current);
  }, [open, won]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const clock = useMemo(() => `00:${String(seconds).padStart(2, '0')}`, [seconds]);

  function close() {
    setOpen(false);
    sessionStorage.setItem('gruns-game-dismissed', '1');
  }

  function flip(i) {
    if (revealed.includes(i) || won) return;
    const next = [...revealed, i];
    setRevealed(next);
    const counts = {};
    next.forEach((idx) => {
      counts[deck[idx]] = (counts[deck[idx]] || 0) + 1;
    });
    if (Object.values(counts).some((n) => n >= 3)) setWon(true);
  }

  function reset() {
    setDeck(shuffledDeck());
    setRevealed([]);
    setWon(false);
    setSeconds(59);
  }

  if (!open) return null;

  const prize = won ? deck[revealed[revealed.length - 1]] : null;

  return (
    <div className="game" role="dialog" aria-modal="true" aria-label="Try Your Luck">
      <button className="game__close" onClick={close} aria-label="Close">
        <svg viewBox="0 0 20 20" aria-hidden="true">
          <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </button>

      <div className="game__scene" aria-hidden="true">
        {BEARS.map((b) => (
          <img
            key={b.src + b.left}
            className="game__bear"
            src={b.src}
            alt=""
            style={{
              left: b.left,
              top: b.top,
              width: b.width,
              '--rot': b.rotate,
              animationDelay: b.delay,
            }}
          />
        ))}
        {STARS.map((s) => (
          <img
            key={s.left}
            className="game__star"
            src="/img/star.webp"
            alt=""
            style={{ left: s.left, top: s.top, width: s.size, animationDelay: s.delay }}
          />
        ))}
        <img className="game__girl" src="/img/game-girl.webp" alt="" />
      </div>

      <div className="game__panel">
        <img className="game__logo" src="/img/logo-green.webp" alt="Grüns" />
        <span className="game__timer">{clock}</span>
        <h2 className="game__title">{won ? 'You Won!' : 'Try Your Luck'}</h2>
        <p className="game__sub body-3">{won ? `Your reward: ${prize}` : 'Match 3 cards to see what you win.'}</p>

        <div className="game__grid">
          {deck.map((value, i) => {
            const isUp = revealed.includes(i);
            return (
              <button
                key={i}
                className={`game__card${isUp ? ' is-up' : ''}`}
                onClick={() => flip(i)}
                aria-label={isUp ? value : 'Hidden card'}
              >
                <span>{isUp ? value : '?'}</span>
              </button>
            );
          })}
        </div>

        {won ? (
          <a className="game__cta btn btn-primary" href="/products/gruns" onClick={close}>
            Claim {prize}
          </a>
        ) : (
          <button className="game__reset label-2" onClick={reset}>
            Shuffle the deck
          </button>
        )}
      </div>
    </div>
  );
}
