import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SiteLayout from "./layouts/SiteLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import CollectionPage from "./pages/CollectionPage.jsx";
import PagesRoute from "./pages/PagesRoute.jsx";
import FirstOrder from "./pages/FirstOrder.jsx";
import HelpCenter from "./pages/HelpCenter.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pages/first-order" element={<FirstOrder />} />
        <Route path="/pages/help-center" element={<HelpCenter />} />
        <Route path="/pages/faq" element={<HelpCenter />} />
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="products">
            <Route index element={<Navigate to="/products/gruns" replace />} />
            <Route path=":handle" element={<ProductPage />} />
          </Route>
          <Route path="collections">
            <Route index element={<Navigate to="/collections/all" replace />} />
            <Route path=":handle" element={<CollectionPage />} />
          </Route>
          <Route path="pages">
            <Route index element={<Navigate to="/pages/reviews" replace />} />
            <Route path=":handle" element={<PagesRoute />} />
          </Route>
          <Route path="cart" element={<div className="page-mount" data-page="cart" />} />
          <Route path="policies/:handle" element={<PagesRoute />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
