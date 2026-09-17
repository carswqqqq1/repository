import { useState } from "react";
import { Link } from "react-router-dom";
import SocialIcon from "./SocialIcons";
import { SOCIAL_LINKS } from "../data/social";

const FOOTER_COLUMNS = [
  {
    id: "learn",
    title: "Learn",
    links: [
      { label: "Reviews", to: "/pages/reviews" },
      { label: "Our Science", to: "/pages/science" },
      { label: "How Grüns Works", to: "/pages/how-gruns-works" },
      { label: "Our Story", to: "/pages/our-story" },
      { label: "Store Locator", to: "/pages/store-locator" },
    ],
  },
  {
    id: "connect",
    title: "Connect",
    links: [
      { label: "Contact Us", to: "/pages/contact" },
      { label: "Careers", to: "/pages/careers" },
      { label: "Press", to: "/pages/press" },
      { label: "Blog", to: "/pages/blog" },
    ],
  },
  {
    id: "rewards",
    title: "Rewards",
    links: [
      { label: "Refer a Friend", to: "/pages/refer" },
      { label: "Grüns VIP", to: "/pages/vip" },
      { label: "Affiliate Program", to: "/pages/affiliate" },
    ],
  },
  {
    id: "snacks",
    title: "Ü Snacks",
    links: [
      { label: "Ü Snacks Home", to: "/pages/usnacks" },
      { label: "Shop Ü Snacks", to: "/collections/usnacks" },
    ],
  },
];

const LEGAL_LINKS = [
  { label: "Refund policy", to: "/policies/refund-policy" },
  { label: "Privacy policy", to: "/policies/privacy-policy" },
  { label: "Terms of service", to: "/policies/terms-of-service" },
  { label: "Shipping policy", to: "/policies/shipping-policy" },
];


function FooterColumn({ column }) {
  const [open, setOpen] = useState(false);

  return (
    <li className={`footer-col${open ? " is-open" : ""}`}>
      <button
        type="button"
        className="footer-col-toggle"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {column.title}
      </button>
      <ul className="footer-col-links" id={`footer-${column.id}`}>
        {column.links.map((link) => (
          <li key={link.to}>
            <Link to={link.to}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer" aria-label="Site footer">
      <div className="site-footer__inner">
        <div className="footer-top">
          <div className="footer-newsletter">
            <p className="newsletter-heading">Sign Up for 55% Off</p>
            <form
              className="newsletter-form"
              onSubmit={(event) => event.preventDefault()}
            >
              <label className="sr-only" htmlFor="footer-phone">
                Phone number
              </label>
              <input
                id="footer-phone"
                name="phone"
                type="tel"
                placeholder="Phone number"
                autoComplete="tel"
              />
              <button type="submit" aria-label="Subscribe to SMS updates">
                ➝
              </button>
            </form>
            <p className="newsletter-note">
              By providing your number you agree to receive recurring marketing
              SMS. Msg &amp; data rates may apply.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="footer-nav">
              {FOOTER_COLUMNS.map((column) => (
                <FooterColumn key={column.id} column={column} />
              ))}
            </ul>
          </nav>
        </div>

        <div className="footer-mid">
          <p className="footer-wordmark" aria-label="Grüns">
            grüns
          </p>
          <ul className="social-links" aria-label="Social media">
            {SOCIAL_LINKS.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                >
                  <SocialIcon id={item.id} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-disclosures">
          <p>
            *These statements have not been evaluated by the Food and Drug
            Administration. This product is not intended to diagnose, treat,
            cure or prevent any disease.
          </p>
          <p>
            **Offer assumes customer has received and uses promotional SMS
            discount reserved for new customers only.
          </p>
        </div>

        <div className="footer-utilities">
          <p>&copy; Copyright {new Date().getFullYear()}, Grüns</p>
          <ul className="footer-legal" aria-label="Legal links">
            {LEGAL_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
