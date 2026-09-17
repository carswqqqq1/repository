import { useState } from "react";
import { Link } from "react-router-dom";
import GrunsLogo from "./GrunsLogo.jsx";

const SHOP_LINKS = [
  { label: "Grüns Adults", to: "/products/gruns" },
  { label: "Berry Far Far Away Adults", to: "/products/shrek" },
  { label: "Grüns Kids", to: "/products/gruns-kids" },
  { label: "Berry Far Far Away Kids", to: "/products/shrek-kids" },
];

const LEARN_LINKS = [
  { label: "Reviews", to: "/pages/reviews" },
  { label: "Our Science", to: "/pages/science" },
  { label: "How Grüns Works", to: "/pages/how-gruns-works" },
  { label: "Our Story", to: "/pages/our-story" },
];

function CartIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
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
  if (open) {
    return (
      <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path
          d="M5 5l10 10M15 5 5 15"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M2 7H18M2 13H18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="announcement-bar" role="region" aria-label="Promotions">
        <Link to="/">
          <strong>🎈🎂 IT&rsquo;S GR&Uuml;NS&rsquo; BIRTHDAY! 🎂🎈</strong>
          <br />
          <span> WE LOWERED OUR PRICE TO CELEBRATE</span>
        </Link>
      </div>

      <header className="site-header">
        {menuOpen ? (
          <button
            type="button"
            className="site-nav-overlay"
            aria-label="Close navigation menu"
            onClick={closeMenu}
          />
        ) : null}

        <div className="site-header__inner">
          <Link
            to="/"
            className="header-pill header-pill--logo"
            aria-label="Grüns — Home"
            onClick={closeMenu}
          >
            <GrunsLogo />
          </Link>

          <div className="header-pill header-pill--actions">
            <Link to="/products/gruns" className="btn-shop-now">
              Shop Now
            </Link>
            <Link to="/cart" className="icon-btn" aria-label="View cart">
              <CartIcon />
            </Link>
            <button
              type="button"
              className="icon-btn"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <MenuIcon open={menuOpen} />
            </button>
          </div>
        </div>

        {menuOpen ? (
          <div className="site-nav-drawer">
            <div
              className="site-nav-drawer__panel"
              role="dialog"
              aria-label="Navigation menu"
            >
              <p className="drawer-eyebrow">Shop All</p>
              <ul className="drawer-links">
                {SHOP_LINKS.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} onClick={closeMenu}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <p className="drawer-section-title">Learn</p>
              <ul className="drawer-links">
                {LEARN_LINKS.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} onClick={closeMenu}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <p className="drawer-section-title">More</p>
              <ul className="drawer-links">
                <li>
                  <Link to="/collections/all" onClick={closeMenu}>
                    Shop All Products
                  </Link>
                </li>
                <li>
                  <Link to="/pages/rewards" onClick={closeMenu}>
                    Rewards
                  </Link>
                </li>
                <li>
                  <Link to="/pages/account" onClick={closeMenu}>
                    Manage Your Account
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        ) : null}
      </header>
    </>
  );
}
