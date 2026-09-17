import { useState } from 'react';
import { Link } from 'react-router-dom';
import SocialIcon from './SocialIcon.jsx';
import { brandAssets, footerColumns, img, legalLinks } from '../data/site.js';

const NETWORKS = ['instagram', 'tiktok', 'youtube', 'facebook'];

export default function Footer() {
  const [mode, setMode] = useState('sms');

  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-signup">
          <p className="newsletter-heading body-1">Sign Up for 55% Off</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input
              type={mode === 'sms' ? 'tel' : 'email'}
              placeholder={mode === 'sms' ? 'Phone number' : 'Email address'}
              aria-label={mode === 'sms' ? 'Phone number' : 'Email address'}
            />
            <button type="submit" aria-label="Subscribe">
              <svg viewBox="0 0 20 20" aria-hidden="true">
                <path
                  d="M3.5 10h12m-4.5-4.5L15.5 10 11 14.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </form>
          <button className="newsletter-toggle body-4" onClick={() => setMode(mode === 'sms' ? 'email' : 'sms')}>
            {mode === 'sms' ? 'Email me instead' : 'Text me instead'}
          </button>
          {mode === 'sms' ? (
            <p className="newsletter-disclosure body-5">
              **By providing your number and clicking the button, you agree to receive recurring auto-dialed marketing
              SMS (including cart reminders; AI content; artificial or prerecorded voices) and our{' '}
              <a href="#">Terms of Service</a> (including arbitration). Consent is not required to purchase. Msg &amp;
              data rates may apply. Msg frequency varies. Reply HELP for help; STOP to opt-out.{' '}
              <a href="#">View Privacy Policy</a>.
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
              {col.title === 'ü snacks' ? (
                <img className="footer-col__logo" src={img('usnacks-logo.svg')} alt="Ü Snacks" width={100} height={31} />
              ) : (
                <p className="footer-col__title d6">{col.title}</p>
              )}
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

      <div className="footer-brandrow">
        <img className="footer-wordmark" src={brandAssets.wordmarkYellow} alt="Grüns" width={172} height={64} />
        <ul className="social-links">
          {NETWORKS.map((n) => (
            <li key={n}>
              <a href="#" className="social-chip" aria-label={n}>
                <SocialIcon name={n} />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="disclosures">
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

      <div className="footer-utilities">
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
        <img src={brandAssets.bearNecessities} alt="The Bear Necessities" loading="lazy" />
      </div>
    </footer>
  );
}
