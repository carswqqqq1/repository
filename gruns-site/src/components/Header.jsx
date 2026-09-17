import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo.jsx';
import { navProducts, navImage, navMenus } from '../data/site.js';

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

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <div className="header-wrap">
      <header className="site-header">
        {open && <button className="site-nav-overlay" aria-label="Close menu" onClick={() => setOpen(false)} />}
        <div className="site-header__bar page">
          <Link to="/" aria-label="Grüns — Home" className="site-header__logo">
            <Logo width={77} />
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
              aria-label="Menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" style={{ width: 18, height: 18 }}>
                <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        <div className={`site-nav-drawer${open ? ' is-open' : ''}`}>
          <div className="site-nav-drawer__panel">
            <nav className="nav-products">
              <p className="eyebrow-4 nav-products__label">Shop All</p>
              {navProducts.map((p) => (
                <Link key={p.title} to={p.href} className="nav-product" onClick={() => setOpen(false)}>
                  <img src={p.image} alt={p.title} width={44} height={44} loading="lazy" />
                  <span className="h6">{p.title}</span>
                  {p.badge && <span className="nav-product__badge label-3">{p.badge}</span>}
                </Link>
              ))}
            </nav>

            <Link to="/products/shrek-gruns" className="nav-promo" onClick={() => setOpen(false)}>
              <img src={navImage} alt="Shrek Berry Far Far Away is here!" loading="lazy" />
            </Link>

            <div className="nav-menus">
              {navMenus.map((m) => (
                <div className="nav-menu" key={m.title}>
                  <span className="h6">{m.title}</span>
                  <div className="nav-menu__links">
                    {m.links.map((l) => (
                      <Link key={l.label} to={l.href} className="body-3" onClick={() => setOpen(false)}>
                        {l.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <Link to="/pages/account" className="btn btn-primary nav-account" onClick={() => setOpen(false)}>
              Manage Your Account
            </Link>

            <nav className="nav-utility body-4">
              <Link to="/pages/our-science">Our Science</Link>
              <Link to="/pages/find-in-store">Find In Store</Link>
              <Link to="/pages/u-snacks">Ü Snacks</Link>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}
