import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  footerColumns,
  legalLinks,
  footerLogo,
  usnacksLogo,
  socials,
  bearNecessities,
} from '../data/site.js';

const SOCIAL_PATHS = {
  Instagram:
    'M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.8.25 2.23.41.55.21.95.47 1.36.88.41.41.67.81.88 1.36.16.42.36 1.06.41 2.23.06 1.25.07 1.65.07 4.85s0 3.6-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.21.55-.47.95-.88 1.36-.41.41-.81.67-1.36.88-.42.16-1.06.36-2.23.41-1.25.06-1.65.07-4.85.07s-3.6 0-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.36-.88 3.7 3.7 0 0 1-.88-1.36c-.16-.42-.36-1.06-.41-2.23C2.21 15.6 2.2 15.2 2.2 12s0-3.6.07-4.85c.05-1.17.25-1.8.41-2.23.21-.55.47-.95.88-1.36.41-.41.81-.67 1.36-.88.42-.16 1.06-.36 2.23-.41C8.4 2.21 8.8 2.2 12 2.2Zm0 5.1a4.7 4.7 0 1 0 0 9.4 4.7 4.7 0 0 0 0-9.4Zm0 7.75a3.05 3.05 0 1 1 0-6.1 3.05 3.05 0 0 1 0 6.1Zm5.98-7.94a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0Z',
  TikTok:
    'M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 1 1-1.84-2.48V9.77a5.68 5.68 0 1 0 4.93 5.63V8.99a7.35 7.35 0 0 0 4.3 1.38V7.28a4.28 4.28 0 0 1-3.24-1.46Z',
  YouTube:
    'M21.58 7.19a2.5 2.5 0 0 0-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.82.42A2.5 2.5 0 0 0 2.42 7.2C2 8.77 2 12 2 12s0 3.23.42 4.81a2.5 2.5 0 0 0 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.82-.42a2.5 2.5 0 0 0 1.76-1.77C22 15.23 22 12 22 12s0-3.23-.42-4.81ZM10 15.5v-7l6 3.5-6 3.5Z',
  Facebook:
    'M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6c-.29-.04-1.28-.12-2.43-.12-2.4 0-4.05 1.47-4.05 4.16v2.26H7.5V13h2.8v8h3.2Z',
};

function FooterColumn({ column }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`ftr-col${open ? ' is-open' : ''}`}>
      <button type="button" className="ftr-col__toggle" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
        {column.logo ? <img className="ftr-col__logo" src={column.logo} alt={column.title} /> : column.title}
        <span className="ftr-col__chev" aria-hidden="true" />
      </button>
      <ul className="ftr-col__links">
        {column.links.map((link) => (
          <li key={link.href}>
            <Link to={link.href} className={link.accent ? 'is-accent' : undefined}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const columns = footerColumns.map((c) => (c.title === 'About' ? { ...c, logo: usnacksLogo } : c));

  return (
    <footer className="ftr">
      <div className="ftr__inner">
        <div className="ftr__top">
          <div className="ftr__signup">
            <p className="ftr__signup-title">Sign Up for 55% Off</p>
            <form className="ftr__form" onSubmit={(e) => e.preventDefault()}>
              <label className="sr-only" htmlFor="ftr-phone">
                Phone number
              </label>
              <input id="ftr-phone" type="tel" name="phone" placeholder="Phone number" autoComplete="tel" />
              <button type="submit" aria-label="Sign up">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M4 12h15M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </form>
            <button type="button" className="ftr__email-alt">
              Email me instead
            </button>
            <p className="ftr__fineprint">
              **By providing your number and clicking the button, you agree to receive recurring auto-dialed marketing
              SMS (including cart reminders; AI content; artificial or prerecorded voices) and our{' '}
              <a href="/policies/terms-of-service">Terms of Service</a> (including arbitration). Consent is not required
              to purchase. Msg &amp; data rates may apply. Msg frequency varies. Reply HELP for help; STOP to opt-out.{' '}
              <a href="/policies/privacy-policy">View Privacy Policy</a>.
            </p>
          </div>

          <nav className="ftr__nav" aria-label="Footer">
            {columns.map((column) => (
              <FooterColumn key={column.title} column={column} />
            ))}
          </nav>
        </div>

        <div className="ftr__mid">
          <img className="ftr__wordmark" src={footerLogo} alt="Grüns" width="300" height="112" />
          <ul className="ftr__socials">
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d={SOCIAL_PATHS[s.label]} fill="currentColor" />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="ftr__disclosures">
          <p>
            *These statements have not been evaluated by the Food and Drug Administration. This product is not intended
            to diagnose, treat, cure or prevent any disease.
          </p>
          <p>
            **Offer assumes customer has received and uses promotional SMS discount reserved for new customers only.
          </p>
        </div>

        <div className="ftr__legal">
          <p>© Copyright {new Date().getFullYear()}, Grüns</p>
          <ul>
            {legalLinks.map((label) => (
              <li key={label}>
                <a href={`/policies/${label.toLowerCase().replace(/\s+/g, '-')}`}>{label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="ftr__bear">
          <img className="ftr__bear-star" src={bearNecessities.star} alt="" loading="lazy" />
          <picture>
            <source media="(min-width: 992px)" srcSet={bearNecessities.wordmark} />
            <img src={bearNecessities.wordmarkMobile} alt="The Bear Necessities" loading="lazy" />
          </picture>
        </div>
      </div>
    </footer>
  );
}
