import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

const STORAGE_KEY = 'gruns-replica:game-dismissed';
const PRIZES = ['55% OFF', 'FREE GIFT', 'FREE SHIP'];

/* "Try Your Luck" overlay: nine face-down cards, 60s countdown, match three to
   reveal the offer. Mirrors the live gate, dismissal persists for the session. */
export default function GameModal() {
  const [open, setOpen] = useState(false);
  const [seconds, setSeconds] = useState(60);
  const [flipped, setFlipped] = useState([]);
  const [won, setWon] = useState(false);

  const cards = useMemo(() => {
    const deck = PRIZES.flatMap((p) => [p, p, p]);
    for (let i = deck.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    const t = setTimeout(() => setOpen(true), 900);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!open || won || seconds === 0) return undefined;
    const t = setTimeout(() => setSeconds((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [open, won, seconds]);

  useEffect(() => {
    if (!open) return undefined;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const dismiss = () => {
    sessionStorage.setItem(STORAGE_KEY, '1');
    setOpen(false);
  };

  const flip = (index) => {
    if (won || flipped.includes(index)) return;
    const next = [...flipped, index];
    setFlipped(next);
    const tally = next.reduce((acc, i) => {
      acc[cards[i]] = (acc[cards[i]] ?? 0) + 1;
      return acc;
    }, {});
    if (Object.values(tally).some((n) => n >= 3)) setWon(true);
  };

  if (!open) return null;

  const clock = `00:${String(Math.max(seconds, 0)).padStart(2, '0')}`;

  return (
    <div className="game" role="dialog" aria-modal="true" aria-label="Try Your Luck">
      <img className="game__bg" src="/img/game-bg.webp" alt="" />
      <img className="game__girl" src="/img/game-girl.webp" alt="" />

      <img className="game__bear game__bear--a" src="/img/bear-a.webp" alt="" />
      <img className="game__bear game__bear--b" src="/img/bear-b.webp" alt="" />
      <img className="game__bear game__bear--c" src="/img/bear-c.webp" alt="" />
      <img className="game__star game__star--a" src="/img/star.webp" alt="" />
      <img className="game__star game__star--b" src="/img/star.webp" alt="" />

      <button type="button" className="game__close" onClick={dismiss} aria-label="Close">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      <div className="game__panel">
        <img className="game__logo" src="/img/logo-green.webp" alt="Grüns" />
        <p className="game__clock">{clock}</p>

        {won ? (
          <>
            <h2 className="game__title">You Won!</h2>
            <p className="game__sub">Your reward is locked in — claim it before the clock runs out.</p>
            <Link className="game__claim btn btn-primary" to="/products/gruns" onClick={dismiss}>
              Claim {cards[flipped[flipped.length - 1]]}
            </Link>
          </>
        ) : (
          <>
            <h2 className="game__title">Try Your Luck</h2>
            <p className="game__sub">Match 3 cards to see what you win.</p>
            <div className="game__grid">
              {cards.map((prize, i) => (
                <button
                  type="button"
                  key={`${prize}-${i}`}
                  className={`game__card${flipped.includes(i) ? ' is-flipped' : ''}`}
                  onClick={() => flip(i)}
                  aria-label={flipped.includes(i) ? prize : 'Reveal card'}
                >
                  <span>{flipped.includes(i) ? prize : '?'}</span>
                </button>
              ))}
            </div>
            <button type="button" className="game__skip" onClick={dismiss}>
              No thanks, I’ll pay full price
            </button>
          </>
        )}
      </div>
    </div>
  );
}
