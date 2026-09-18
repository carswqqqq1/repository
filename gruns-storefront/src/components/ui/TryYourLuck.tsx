import { useMemo, useState } from "react";
import "./TryYourLuck.css";

const PRIZES = ["55%", "FREE SHIP", "GUMMY", "55%", "VIP", "GUMMY", "55%", "FREE SHIP", "VIP"];

type Props = {
  open: boolean;
  onClose: () => void;
};

export function TryYourLuck({ open, onClose }: Props) {
  const [flipped, setFlipped] = useState<number[]>([]);
  const [won, setWon] = useState<string | null>(null);
  const order = useMemo(() => PRIZES, []);

  if (!open) return null;

  function flip(i: number) {
    if (won || flipped.includes(i) || flipped.length >= 3) return;
    const next = [...flipped, i];
    setFlipped(next);
    if (next.length === 3) {
      const vals = next.map((n) => order[n]);
      const match = vals.every((v) => v === vals[0]) ? vals[0] : "55%";
      setTimeout(() => setWon(match === "55%" ? "55% Off" : match), 350);
    }
  }

  return (
    <div className="luck-modal" role="dialog" aria-modal="true" aria-label="Try Your Luck">
      <button type="button" className="luck-modal__close" onClick={onClose} aria-label="Close">
        ×
      </button>
      <div className="luck-modal__panel">
        <div className="luck-modal__art">
          <img src="/assets/f-lifestyle-focused-hmpg-hero.webp" alt="" />
          <img className="luck-modal__gummy" src="/assets/f-gummy_49ae5bc4-1a92-4aaf-8f02-bd9fd6f13100.webp" alt="" />
        </div>
        <div className="luck-modal__game">
          <p className="luck-modal__brand">grüns</p>
          <h2 className="display">Try Your Luck</h2>
          <p className="luck-modal__sub">Match 3 cards to see what you win.</p>
          <div className="luck-modal__grid">
            {order.map((prize, i) => {
              const isFlipped = flipped.includes(i) || !!won;
              return (
                <button
                  key={i}
                  type="button"
                  className={`luck-card ${isFlipped ? "is-flipped" : ""}`}
                  onClick={() => flip(i)}
                >
                  <span className="luck-card__front">?</span>
                  <span className="luck-card__back">{prize}</span>
                </button>
              );
            })}
          </div>
          {won && (
            <div className="luck-modal__win">
              <p>You won <strong>{won}</strong>!</p>
              <button type="button" className="btn-primary" onClick={onClose}>
                Claim &amp; Shop
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
