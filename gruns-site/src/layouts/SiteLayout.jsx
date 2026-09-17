import { Outlet } from "react-router-dom";
import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";

export default function SiteLayout() {
  return (
    <div className="site-shell">
      <Nav />
      <main className="site-main" id="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
