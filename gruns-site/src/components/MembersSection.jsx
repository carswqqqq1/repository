import SocialIcon from "./SocialIcons";
import { SOCIAL_LINKS } from "../data/social";

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
        <h2>
          <span className="members-lead">1 MILLION MEMBERS.</span>
          WE&rsquo;VE BEEN<br />GETTING AROUND
        </h2>
        <ul className="members-social" aria-label="Social media">
          {SOCIAL_LINKS.map((item) => (
            <li key={item.id}>
              <a href={item.href} target="_blank" rel="noreferrer" aria-label={item.label}>
                <SocialIcon id={item.id} />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
