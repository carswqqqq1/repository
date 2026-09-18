import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  learnLinks,
  rewardsLinks,
  shopLinks,
} from "../../data/navigation";
import "./SiteHeader.css";

type Props = { cartCount?: number };

export function SiteHeader({ cartCount = 0 }: Props) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="site-header__inner page-wrap">
          <Link to="/" className="site-header__logo" aria-label="Grüns home">
            <span className="site-header__wordmark">grüns</span>
          </Link>

          <div className="site-header__actions">
            <Link to="/products/gruns" className="btn-secondary site-header__shop">
              Shop Now
            </Link>
            <div className="site-header__icon-pill">
              <Link to="/cart" className="site-header__icon" aria-label="Cart">
                <BagIcon />
                {cartCount > 0 && <span className="site-header__badge">{cartCount}</span>}
              </Link>
              <button
                type="button"
                className="site-header__icon"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
              >
                {open ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`site-drawer ${open ? "is-open" : ""}`}
        aria-hidden={!open}
      >
        <div className="site-drawer__backdrop" onClick={() => setOpen(false)} />
        <nav className="site-drawer__panel" aria-label="Main">
          <DrawerGroup title="Shop All" links={shopLinks} onNavigate={() => setOpen(false)} />
          <DrawerGroup title="Rewards" links={rewardsLinks} onNavigate={() => setOpen(false)} />
          <DrawerGroup title="Learn" links={learnLinks} onNavigate={() => setOpen(false)} />
          <div className="site-drawer__meta">
            <NavLink to="/a/account/login" onClick={() => setOpen(false)}>
              Manage Your Account
            </NavLink>
            <NavLink to="/pages/store-locator" onClick={() => setOpen(false)}>
              Find In Store
            </NavLink>
            <NavLink to="/pages/usnacks" onClick={() => setOpen(false)}>
              Ü Snacks
            </NavLink>
          </div>
        </nav>
      </div>
    </>
  );
}

function DrawerGroup({
  title,
  links,
  onNavigate,
}: {
  title: string;
  links: { label: string; path: string }[];
  onNavigate: () => void;
}) {
  return (
    <div className="site-drawer__group">
      <p className="site-drawer__title">{title}</p>
      <ul>
        {links.map((l) => (
          <li key={l.path}>
            <NavLink to={l.path} onClick={onNavigate}>
              {l.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

function BagIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 8h12l-1 12H7L6 8Zm3 0a3 3 0 0 1 6 0"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M5 9h14M5 15h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
