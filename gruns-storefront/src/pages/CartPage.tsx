import { Link } from "react-router-dom";
import "./CartPage.css";

export function CartPage() {
  return (
    <main className="cart-page">
      <div className="page-wrap cart-page__inner">
        <h1 className="display">Your Cart</h1>
        <p>Your bag is empty — add a flavor and come back.</p>
        <div className="cart-page__actions">
          <Link className="btn-primary" to="/products/gruns">
            Shop Adults
          </Link>
          <Link className="btn-secondary" to="/products/gruns-kids">
            Shop Kids
          </Link>
        </div>
      </div>
    </main>
  );
}
