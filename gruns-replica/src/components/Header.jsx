import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo.jsx';
import { navProducts, navMenus, navImage } from '../data/site.js';

function CartIcon() {
  return (
    <svg className="hdr__icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M3.392 6.875h13.216v8.016c0 .567-.224 1.112-.624 1.513-.4.402-.941.627-1.506.627H5.522a2.13 2.13 0 0 1-1.506-.627 2.15 2.15 0 0 1-.624-1.513zM8.818 2.969h2.333c.618 0 1.211.247 1.649.686a2.35 2.35 0 0 1 .683 1.658v1.562H6.486V5.313c0-.622.246-1.218.683-1.658a2.33 2.33 0 0 1 1.65-.686"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.75"
      />
    </svg>
  );
}

function MenuIcon({ open }) {
  return (
    <svg className={`hdr__icon hdr__burger${open ? ' is-open' : ''}`} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M2 7H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M2 13H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="hdr">
      {open && (
        <button type="button" className="hdr__scrim" aria-label="Close navigation menu" onClick={() => setOpen(false)} />
      )}

      <div className="hdr__bar">
        <Link to="/" className="hdr__pill hdr__pill--logo" aria-label="Grüns — Home">
          <Logo className="hdr__logo" />
        </Link>

        <div className="hdr__pill hdr__pill--actions">
          <Link to="/products/gruns" className="hdr__shop">
            Shop Now
          </Link>
          <Link to="/cart" className="hdr__icon-btn" aria-label="View cart">
            <CartIcon />
          </Link>
          <button
            type="button"
            className="hdr__icon-btn"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <MenuIcon open={open} />
          </button>
        </div>
      </div>

      <div className={`hdr__drawer${open ? ' is-open' : ''}`} hidden={!open}>
        <div className="hdr__drawer-panel">
          <ul className="hdr__prods">
            {navProducts.map((p) => (
              <li key={p.href}>
                <Link to={p.href} className="hdr__prod">
                  <span className="hdr__prod-thumb">
                    <img src={p.image} alt="" loading="lazy" width="60" height="60" />
                  </span>
                  <span className="hdr__prod-title">{p.title}</span>
                  {p.badge && <span className="hdr__prod-badge">{p.badge}</span>}
                </Link>
              </li>
            ))}
          </ul>

          <img className="hdr__drawer-img" src={navImage} alt="" loading="lazy" />

          <div className="hdr__menus">
            {navMenus.map((menu) => (
              <div key={menu.title} className="hdr__menu">
                <p className="hdr__menu-title">{menu.title}</p>
                <ul>
                  {menu.links.map((link) => (
                    <li key={link.href}>
                      <Link to={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
