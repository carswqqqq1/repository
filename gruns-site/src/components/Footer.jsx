import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo.jsx';
import { footerColumns, legalLinks } from '../data/site.js';

function Social({ name, children }) {
  return (
    <a href="#" className="social-chip" aria-label={name}>
      <svg viewBox="0 0 24 24" aria-hidden="true">{children}</svg>
    </a>
  );
}

export default function Footer() {
  const [mode, setMode] = useState('sms');

  return (
    <footer className="site-footer">
      <div className="footer-top page">
        <div className="footer-signup">
          <p className="newsletter-heading body-1">Sign Up for 55% Off</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input
              type={mode === 'sms' ? 'tel' : 'email'}
              placeholder={mode === 'sms' ? 'Phone number' : 'Email address'}
              aria-label={mode === 'sms' ? 'Phone number' : 'Email address'}
            />
            <button type="submit" aria-label="Subscribe">
              <span aria-hidden="true">➝</span>
            </button>
          </form>
          <button className="newsletter-toggle body-1" onClick={() => setMode(mode === 'sms' ? 'email' : 'sms')}>
            {mode === 'sms' ? 'Email me instead' : 'Text me instead'}
          </button>
          {mode === 'sms' ? (
            <p className="newsletter-disclosure body-5">
              **By providing your number and clicking the button, you agree to receive recurring auto-dialed marketing
              SMS (including cart reminders; AI content; artificial or prerecorded voices) and our{' '}
              <a href="#">Terms of Service</a> (including arbitration). Consent is not required to purchase. Msg &amp;
              data rates may apply. Msg frequency varies. Reply HELP for help; STOP to opt-out. <a href="#">View
              Privacy Policy</a>.
            </p>
          ) : (
            <p className="newsletter-disclosure body-5">
              By completing this form you are signing up to receive our emails and can unsubscribe at any time.
            </p>
          )}
        </div>

        <nav className="footer-nav">
          {footerColumns.map((col) => (
            <div className="footer-col" key={col.title}>
              <p className="footer-col__title d6">{col.title}</p>
              <ul>
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link className="body-4" to={l.href}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className="footer-mid page">
        <ul className="social-links">
          <li>
            <Social name="Instagram">
              <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.8" fill="none" />
              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" fill="none" />
              <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
            </Social>
          </li>
          <li>
            <Social name="TikTok">
              <path
                d="M14.2 3.5c.3 2 1.6 3.4 3.6 3.6v2.6c-1.2 0-2.4-.4-3.4-1.1v5.6a4.9 4.9 0 1 1-4.9-4.9c.3 0 .5 0 .8.1v2.7a2.2 2.2 0 1 0 1.6 2.1V3.5h2.3Z"
                fill="currentColor"
              />
            </Social>
          </li>
          <li>
            <Social name="YouTube">
              <rect x="2.5" y="6" width="19" height="12" rx="3.5" fill="currentColor" />
              <path d="M10.4 9.6l4.6 2.4-4.6 2.4V9.6Z" fill="#00381d" />
            </Social>
          </li>
          <li>
            <Social name="Facebook">
              <path
                d="M13.3 21v-7.2h2.4l.4-2.9h-2.8V9.1c0-.8.2-1.4 1.4-1.4h1.5V5.1c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.1H7.9v2.9h2.4V21h3Z"
                fill="currentColor"
              />
            </Social>
          </li>
        </ul>
      </div>

      <div className="disclosures page">
        <div className="disclosure-box">
          <p className="body-5">
            *These statements have not been evaluated by the Food and Drug Administration. This product is not intended
            to diagnose, treat, cure or prevent any disease.
          </p>
        </div>
        <div className="disclosure-box">
          <p className="body-5">
            **Offer assumes customer has received and uses promotional SMS discount reserved for new customers only.
          </p>
        </div>
      </div>

      <div className="footer-utilities page">
        <p className="body-5">© Copyright 2026, Grüns</p>
        <ul>
          {legalLinks.map((l) => (
            <li key={l}>
              <a href="#" className="body-5">
                {l}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="footer-moon">
        <Logo width={220} className="footer-moon__logo" />
      </div>
    </footer>
  );
}
