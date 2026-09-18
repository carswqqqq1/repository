import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { AnnouncementBar } from "./components/layout/AnnouncementBar";
import { SiteFooter } from "./components/layout/SiteFooter";
import { SiteHeader } from "./components/layout/SiteHeader";
import { TryYourLuck } from "./components/ui/TryYourLuck";
import { CartPage } from "./pages/CartPage";
import { ContentPage } from "./pages/ContentPage";
import { HomePage } from "./pages/HomePage";
import { ProductPage } from "./pages/ProductPage";
import "./App.css";

function PageRoute() {
  const { handle = "science" } = useParams();
  return <ContentPage kind="page" slug={handle} />;
}

function PolicyRoute() {
  const { handle = "privacy-policy" } = useParams();
  return <ContentPage kind="policy" slug={handle} />;
}

function AccountLogin() {
  return (
    <main className="content-page">
      <div className="page-wrap content-page__inner">
        <h1 className="display">Manage Your Account</h1>
        <p className="content-page__lead">Sign in to manage subscriptions, orders, and rewards.</p>
        <p>Account login is mirrored as a destination route for navigation parity with gruns.co.</p>
      </div>
    </main>
  );
}

export default function App() {
  const [luckOpen, setLuckOpen] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("gruns-luck-seen");
    if (!seen) {
      const t = window.setTimeout(() => setLuckOpen(true), 900);
      return () => window.clearTimeout(t);
    }
  }, []);

  function closeLuck() {
    sessionStorage.setItem("gruns-luck-seen", "1");
    setLuckOpen(false);
  }

  return (
    <div className="app-shell">
      <AnnouncementBar />
      <SiteHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:handle" element={<ProductPage />} />
        <Route path="/collections/merch" element={<ContentPage kind="page" slug="exclusives" />} />
        <Route path="/pages/:handle" element={<PageRoute />} />
        <Route path="/policies/:handle" element={<PolicyRoute />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/a/account/login" element={<AccountLogin />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <SiteFooter />
      <TryYourLuck open={luckOpen} onClose={closeLuck} />
      <a className="chat-fab" href="/pages/contact" aria-label="Chat">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M5 6.5A2.5 2.5 0 0 1 7.5 4h9A2.5 2.5 0 0 1 19 6.5v6A2.5 2.5 0 0 1 16.5 15H10l-4 3.5V6.5Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </div>
  );
}
