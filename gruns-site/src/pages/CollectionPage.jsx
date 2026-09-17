import { useParams } from "react-router-dom";

export default function CollectionPage() {
  const { handle } = useParams();

  return (
    <div
      className="page-mount"
      data-page="collection"
      data-handle={handle ?? ""}
    >
      {/* Collection / shop grid mounts here */}
    </div>
  );
}
