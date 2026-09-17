import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import AnnouncementBar from './components/AnnouncementBar.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import GameModal from './components/GameModal.jsx';
import Home from './pages/Home.jsx';
import ProductPage from './pages/ProductPage.jsx';
import CollectionPage from './pages/CollectionPage.jsx';
import FirstOrder from './pages/FirstOrder.jsx';
import Faqs from './pages/Faqs.jsx';
import SimplePage from './pages/SimplePage.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const { pathname } = useLocation();
  const bare = pathname === '/pages/first-order';

  return (
    <>
      <ScrollToTop />
      {!bare && <AnnouncementBar />}
      {!bare && <Header />}
      <main className="site-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:handle" element={<ProductPage />} />
          <Route path="/collections/:handle" element={<CollectionPage />} />
          <Route path="/pages/first-order" element={<FirstOrder />} />
          <Route path="/pages/faqs" element={<Faqs />} />
          <Route path="/pages/:handle" element={<SimplePage />} />
          <Route path="*" element={<SimplePage notFound />} />
        </Routes>
      </main>
      {!bare && <Footer />}
      <GameModal />
    </>
  );
}
