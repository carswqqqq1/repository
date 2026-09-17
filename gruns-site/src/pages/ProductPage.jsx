import { useParams } from "react-router-dom";

export default function ProductPage() {
  const { handle } = useParams();

  return (
    <div className="page-mount" data-page="product" data-handle={handle ?? ""}>
      {/* Product PDP mounts here */}
    </div>
  );
}
