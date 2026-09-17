import { useParams } from "react-router-dom";

export default function PagesRoute() {
  const { handle } = useParams();

  return (
    <div className="page-mount" data-page="pages" data-handle={handle ?? ""}>
      {/* Marketing / content pages mount here */}
    </div>
  );
}
