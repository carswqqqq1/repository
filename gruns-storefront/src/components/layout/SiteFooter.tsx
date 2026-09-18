import { Link } from "react-router-dom";
import {
  footerConnect,
  footerLearn,
  footerRewards,
  footerSnacks,
  legalLinks,
} from "../../data/navigation";
import "./SiteFooter.css";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__top page-wrap">
        <div className="site-footer__signup">
          <h3>Sign Up for 55% Off</h3>
          <form
            className="site-footer__form"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input type="tel" placeholder="Phone number" aria-label="Phone number" />
            <button type="submit" aria-label="Submit">
              →
            </button>
          </form>
          <button type="button" className="site-footer__email-link">
            Email me instead
          </button>
          <p className="site-footer__legal-note">
            By signing up via text, you agree to receive recurring automated marketing messages
            from Grüns at the number provided. Consent is not a condition of purchase. Msg &amp;
            data rates may apply. Reply STOP to cancel. View{" "}
            <Link to="/policies/terms-of-service">Terms</Link> &amp;{" "}
            <Link to="/policies/privacy-policy">Privacy</Link>.
          </p>
          <img
            className="site-footer__logo"
            src="/assets/f-gruns_logo_yellow.svg"
            alt="grüns"
          />
          <div className="site-footer__social" aria-label="Social">
            <a href="https://www.instagram.com/grunsdaily" aria-label="Instagram">
              IG
            </a>
            <a href="https://tiktok.com/@grunsdaily" aria-label="TikTok">
              TT
            </a>
            <a href="https://www.youtube.com/@grunsdaily" aria-label="YouTube">
              YT
            </a>
            <a href="https://www.facebook.com/grunsdaily" aria-label="Facebook">
              FB
            </a>
          </div>
        </div>

        <FooterCol title="Learn" links={footerLearn} />
        <FooterCol title="Connect" links={footerConnect} />
        <FooterCol title="Rewards" links={footerRewards} />
        <FooterCol title="Ü Snacks" links={footerSnacks} />
      </div>

      <div className="site-footer__disclaimers page-wrap">
        <div className="site-footer__box">
          *These statements have not been evaluated by the Food and Drug Administration. This
          product is not intended to diagnose, treat, cure, or prevent any disease.
        </div>
        <div className="site-footer__box">
          Offer valid for new customers via SMS signup. Discount applied at checkout subject to
          terms. Birthday pricing and promotions may change.
        </div>
      </div>

      <div className="site-footer__bottom page-wrap">
        <p>© Copyright 2026, Grüns</p>
        <div className="site-footer__legal">
          {legalLinks.map((l) =>
            l.path.startsWith("http") ? (
              <a key={l.path} href={l.path}>
                {l.label}
              </a>
            ) : (
              <Link key={l.path} to={l.path}>
                {l.label}
              </Link>
            ),
          )}
        </div>
      </div>

      <div className="site-footer__bear" aria-hidden>
        <img src="/assets/f-bear_necessities_dk.svg" alt="" />
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; path: string }[];
}) {
  return (
    <div className="site-footer__col">
      <h4>{title}</h4>
      <ul>
        {links.map((l) => (
          <li key={l.path + l.label}>
            {l.path.startsWith("http") || l.path.startsWith("mailto:") ? (
              <a href={l.path}>{l.label}</a>
            ) : (
              <Link to={l.path}>{l.label}</Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
