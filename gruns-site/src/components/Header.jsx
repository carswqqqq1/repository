import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo.jsx';
import { navProducts, navImage, navMenus, navUtility, navPromoHref } from '../data/site.js';

function CartIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" style={{ width: 20, height: 20 }}>
      <path
        d="M5.5 6.5h9l-.9 9.2a1.2 1.2 0 0 1-1.2 1.1H7.6a1.2 1.2 0 0 1-1.2-1.1L5.5 6.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M7.6 6.5V5.2a2.4 2.4 0 0 1 4.8 0v1.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function MenuIcon({ open }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" style={{ width: 18, height: 18 }}>
      {open ? (
        <path d="M5 5l10 10M15 5 5 15" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      ) : (
        <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      )}
    </svg>
  );
}

function Chevron() {
  return (
    <svg className="navdrawer__chevron" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="m4 6 4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [section, setSection] = useState(null);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const close = () => {
    setOpen(false);
    setSection(null);
  };

  return (
    <div className="header-wrap">
      <header className="site-header">
        {open && <button className="site-nav-overlay" aria-label="Close menu" onClick={close} />}
        <div className="site-header__bar page">
          <Link to="/" aria-label="Grüns — Home" className="site-header__logo">
            <Logo width={70} />
          </Link>

          <div className="site-header__actions">
            <Link to="/collections/shop-gruns" className="site-header__shop label-2">
              Shop Now
            </Link>
            <button className="site-header__icon" aria-label="Cart">
              <CartIcon />
            </button>
            <button
              className="site-header__icon"
              aria-label={open ? 'Close menu' : 'Menu'}
              aria-expanded={open}
              onClick={() => (open ? close() : setOpen(true))}
            >
              <MenuIcon open={open} />
            </button>
          </div>
        </div>

        <div className={`site-nav-drawer navdrawer${open ? ' is-open' : ''}`}>
          <div className="navdrawer__panel" role="dialog" aria-label="Main menu" aria-hidden={!open}>
            <p className="navdrawer__eyebrow">Shop All</p>

            <ul className="navdrawer__products">
              {navProducts.map((p) => (
                <li key={p.title}>
                  <Link to={p.href} className="navdrawer__product" onClick={close}>
                    <img className="navdrawer__thumb" src={p.image} alt="" width={34} height={34} loading="lazy" />
                    <span className="navdrawer__product-text">
                      <span className="navdrawer__product-name">{p.title}</span>
                      {p.badge && <span className="navdrawer__badge">{p.badge}</span>}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <Link to={navPromoHref} className="navdrawer__promo" onClick={close}>
              <img src={navImage} alt="Berry Far Far Away — the new Grüns flavour" loading="lazy" />
            </Link>

            <div className="navdrawer__sections">
              {navMenus.map((m) => {
                const isOpen = section === m.title;
                return (
                  <section className={`navdrawer__section${isOpen ? ' is-open' : ''}`} key={m.title}>
                    <button
                      type="button"
                      className="navdrawer__toggle"
                      aria-expanded={isOpen}
                      onClick={() => setSection(isOpen ? null : m.title)}
                    >
                      <span>{m.title}</span>
                      <Chevron />
                    </button>
                    {isOpen && (
                      <ul className="navdrawer__sublinks">
                        {m.links.map((l) => (
                          <li key={l.label}>
                            <Link to={l.href} onClick={close}>
                              {l.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                );
              })}
            </div>

            <Link to="/pages/account" className="navdrawer__account" onClick={close}>
              Manage Your Account
            </Link>

            <nav className="navdrawer__utility" aria-label="Secondary">
              {navUtility.map((l) => (
                <Link key={l.label} to={l.href} onClick={close}>
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}
