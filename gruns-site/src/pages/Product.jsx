import { useEffect } from "react";
import { useParams } from "react-router-dom";
import PdpBuyBox from "../components/pdp/PdpBuyBox.jsx";
import PdpGallery from "../components/pdp/PdpGallery.jsx";
import PdpSection from "../components/pdp/PdpSections.jsx";
import { getPdpProduct } from "../data/pdpProducts.js";
import "../styles/pdp.css";

export default function Product() {
  const { handle } = useParams();
  const product = getPdpProduct(handle);

  useEffect(() => {
    if (product?.docTitle) document.title = product.docTitle;
  }, [product]);

  if (!product) {
    return <div className="page-mount" data-page="product" data-handle={handle ?? ""} />;
  }

  return (
    <div className={`pdp pdp--${product.theme}`} data-handle={product.handle}>
      <section className="pdp-top">
        <div className="pdp-container pdp-top__inner">
          <PdpGallery images={product.gallery} title={product.title} labTested={product.labTested} />
          <PdpBuyBox product={product} />
        </div>
      </section>

      {product.sections.map((section, i) => (
        <PdpSection key={`${section.type}-${i}`} section={section} />
      ))}

      <div className="pdp-sticky">
        <button type="button" className="pdp-sticky__cta">
          {product.stickyBar.cta}
        </button>
      </div>
    </div>
  );
}
