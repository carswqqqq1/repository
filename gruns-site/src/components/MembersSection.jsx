export default function MembersSection() {
  return (
    <>
      <section className="promo-duo" aria-label="Promotions">
        <div className="promo-card promo-card--green">
          <p>Same Grüns.<br />New Lower Price. Subscribe<br />Now From <s>$49.99</s> $29.99</p>
          <button className="btn btn--yellow btn--sm">Claim Now</button>
        </div>
        <div className="promo-card promo-card--yellow">
          <p>It&rsquo;s Our Birthday.<br />We&rsquo;ve Lowered Our<br />Prices.</p>
          <button className="btn btn--dark btn--sm">Shop Sale</button>
        </div>
      </section>
      <section className="members" aria-label="Members">
        <h2>1 MILLION MEMBERS.<br />WE&rsquo;VE BEEN<br />GETTING AROUND<br /> LATELY.</h2>
        <div className="marquee" aria-hidden>
          <span>★ 60+ INGREDIENTS ★ 21 VITAMINS ★ 6G FIBER ★ 1 PACK ★ GRÜNS ★</span>
          <span>★ 60+ INGREDIENTS ★ 21 VITAMINS ★ 6G FIBER ★ 1 PACK ★ GRÜNS ★</span>
        </div>
      </section>
    </>
  );
}
