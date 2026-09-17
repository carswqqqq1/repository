import { Outlet } from 'react-router-dom';
import AnnouncementBar from '../components/AnnouncementBar.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

export default function SiteLayout() {
  return (
    <div className="site-shell">
      <AnnouncementBar />
      <Header />
      <main className="site-main" id="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
