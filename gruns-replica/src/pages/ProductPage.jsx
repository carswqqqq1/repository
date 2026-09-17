import { useParams } from 'react-router-dom';
import BuyBox from '../components/BuyBox.jsx';
import CtaBanner from '../sections/CtaBanner.jsx';
import ValueProps from '../sections/ValueProps.jsx';
import ThirdPartyScience from '../sections/ThirdPartyScience.jsx';
import SocialFan from '../sections/SocialFan.jsx';
import FinalCta from '../sections/FinalCta.jsx';
import { PRODUCTS } from '../data/products.js';

export default function ProductPage() {
  const { handle } = useParams();
  const product = PRODUCTS[handle] || PRODUCTS.gruns;

  return (
    <>
      <BuyBox product={product} />
      <ValueProps />
      <ThirdPartyScience />
      <CtaBanner />
      <SocialFan />
      <FinalCta />
      <div className="sticky-cta">
        <button className={`btn ${product.theme === 'yellow' ? 'btn-secondary' : 'btn-primary'}`}>
          {product.stickyCta}
        </button>
      </div>
    </>
  );
}
