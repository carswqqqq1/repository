const CARDS = [
  {
    title: "Delicious Flavor",
    text: "Tastes like a treat, works like a supplement. You'll actually look forward to taking it.",
    image: "/images/easy-flavor.webp",
    alt: "A smiling man holding a single-serve Grüns pouch.",
  },
  {
    title: "Rip. Tip. Enjoy.",
    text: "Toss it in your bag. Pop it at your desk. No shaker, no water, no routine overhaul required.",
    image: "/images/easy-rip.webp",
    alt: "A Grüns pouch tucked under an arm alongside a pair of dumbbells.",
  },
  {
    title: "Daily Nutrition",
    text: "60+ ingredients. 20+ vitamins and minerals. One convenient pack.",
    image: "/images/easy-daily.webp",
    alt: "A Grüns pouch ringed by callouts for organic fruits, vegetables, vitamins and antioxidants.",
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
            <img className="easy-art" src={c.image} alt={c.alt} loading="lazy" />
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
