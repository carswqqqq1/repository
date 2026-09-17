import { useEffect, useMemo, useState } from "react";

/* Prizes arranged so there is always exactly one match-3 winner. */
function buildDeck() {
  const base = ["10% OFF", "FREE PACK", "FREE SHIP", "15% OFF", "10% OFF", "FREE SHIP", "15% OFF", "FREE PACK", "10% OFF"];
  // shuffle
  const arr = [...base];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function fmt(s) {
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `00:${String(m).padStart(2, "0")}:${String(r).padStart(2, "0")}`.slice(3);
}

export default function HeroGame() {
  const [deck, setDeck] = useState(buildDeck);
  const [flipped, setFlipped] = useState([]);
  const [secs, setSecs] = useState(59);
  const [won, setWon] = useState(null);

  useEffect(() => {
    if (secs <= 0) return;
    const t = setTimeout(() => setSecs((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [secs]);

  const counts = useMemo(() => {
    const c = {};
    flipped.forEach((i) => {
      c[deck[i]] = (c[deck[i]] || 0) + 1;
    });
    return c;
  }, [flipped, deck]);

  useEffect(() => {
    const hit = Object.entries(counts).find(([, n]) => n >= 3);
    if (hit) setWon(hit[0]);
  }, [counts]);

  function flip(i) {
    if (flipped.includes(i) || won) return;
    setFlipped((f) => [...f, i]);
  }

  function reset() {
    setDeck(buildDeck());
    setFlipped([]);
    setWon(null);
    setSecs(59);
  }

  return (
    <section className="hero" aria-label="Try Your Luck game">
      {/* left art panel */}
      <div className="hero-art" aria-hidden>
        <div className="hero-blob" />
        <span className="spark spark--1">✦</span>
        <span className="spark spark--2">✦</span>
        <span className="spark spark--3">✦</span>
        <div className="gummy gummy--1"><i /><i /><i /></div>
        <div className="gummy gummy--2"><i /><i /><i /></div>
        <div className="gummy gummy--3"><i /><i /><i /></div>
        <div className="hero-person">
          <div className="hero-face">
            <span className="eye eye--l" /><span className="eye eye--r" />
            <span className="smile" />
          </div>
          <div className="hero-hair" />
          <div className="hero-pack">
            <span className="hero-pack-bear">🐻</span>
            <span className="hero-pack-word">grüns</span>
          </div>
        </div>
      </div>

      {/* right game panel */}
      <div className="hero-game">
        <div className="wordmark wordmark--game">grüns<span className="wordmark-reg">®</span></div>
        <div className="timer" role="timer">00:{String(secs).padStart(2, "0")}</div>
        <h1 className="hero-title">Try Your Luck</h1>
        <p className="hero-sub">Match 3 cards to see what you win.</p>
        <div className="card-grid">
          {deck.map((prize, i) => {
            const up = flipped.includes(i);
            return (
              <button
                key={i}
                className={`card ${up ? "is-up" : ""} ${won && deck[i] === won ? "is-win" : ""}`}
                onClick={() => flip(i)}
                aria-label={up ? prize : `Card ${i + 1} hidden`}
              >
                <span className="card-inner">
                  <span className="card-face card-back">?</span>
                  <span className="card-face card-front">{prize}</span>
                </span>
              </button>
            );
          })}
        </div>
        <div className="game-status" aria-live="polite">
          {won ? (
            <span className="win-banner">🎉 You won {won}! <button className="linklike" onClick={reset}>Play again</button></span>
          ) : (
            <span>{flipped.length === 0 ? "Pick any card to start" : `${flipped.length} card${flipped.length > 1 ? "s" : ""} revealed — find 3 alike`}</span>
          )}
        </div>
      </div>
    </section>
  );
}
