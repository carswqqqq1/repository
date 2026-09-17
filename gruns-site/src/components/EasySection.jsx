const CARDS = [
  {
    title: "Delicious Flavor",
    text: "Tastes like a treat, works like a supplement. You'll actually look forward to taking it.",
    art: "flavor",
  },
  {
    title: "Rip. Tip. Enjoy.",
    text: "Toss it in your bag. Pop it at your desk. No shaker, no water, no routine overhaul required.",
    art: "rip",
  },
  {
    title: "Daily Nutrition",
    text: "60+ ingredients. 20+ vitamins and minerals. One convenient pack.",
    art: "daily",
  },
];

export default function EasySection() {
  return (
    <section className="easy" aria-label="Why Grüns is easy">
      <h2 className="easy-title">
        We made daily nutrition,<br />like, <span className="hl">ridiculously easy.</span>
      </h2>
      <div className="easy-grid">
        {CARDS.map((c) => (
          <article className="easy-card" key={c.title}>
            <div className={`easy-art easy-art--${c.art}`} aria-hidden>
              {c.art === "flavor" && <span className="easy-emoji">😋</span>}
              {c.art === "rip" && <span className="easy-pack">grüns</span>}
              {c.art === "daily" && <span className="easy-pack easy-pack--big">grüns<span>Superfoods</span></span>}
            </div>
            <h3>{c.title}</h3>
            <p>{c.text}</p>
          </article>
        ))}
      </div>
      <div className="stats">
        <p>60+ INGREDIENTS</p>
        <p>21 VITAMINS &amp; MINERALS</p>
        <p>6G OF FIBER</p>
        <p>1 CONVENIENT PACK</p>
      </div>
    </section>
  );
}
