/* Card photography is cropped out of the gruns.co homepage capture — see
   scripts/crop-screenshots.py. */
const CARDS = [
  {
    title: "Delicious Flavor",
    text: "Tastes like a treat, works like a supplement. You'll actually look forward to taking it.",
    art: "flavor",
    image: "/images/easy-flavor.jpg",
    alt: "Man smiling as he holds an opened Grüns gummies pack",
  },
  {
    title: "Rip. Tip. Enjoy.",
    text: "Toss it in your bag. Pop it at your desk. No shaker, no water, no routine overhaul required.",
    art: "rip",
    image: "/images/easy-rip.jpg",
    alt: "Grüns pack tucked into a gym bag next to a dumbbell",
  },
  {
    title: "Daily Nutrition",
    text: "60+ ingredients. 20+ vitamins and minerals. One convenient pack.",
    art: "daily",
    image: "/images/easy-daily.jpg",
    alt: "Grüns single-serve pack surrounded by ingredient and certification callouts",
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
            <div className={`easy-art easy-art--${c.art}`}>
              <img src={c.image} width="398" height="298" loading="lazy" alt={c.alt} />
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
