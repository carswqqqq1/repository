const STAR =
  'M3.611,15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.172,6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.537.792c.197-.39.73-.39.927,0l2.184,4.327,4.898.696c.441.062.612.636.282.95l-3.522,3.356.83,4.73c.078.443-.36.79-.746.592l-4.391-2.256-4.388,2.256Z';

export default function Stars({ count = 5, size = 14, className = '' }) {
  return (
    <span className={`stars ${className}`.trim()} aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 16 16">
          <path d={STAR} fill="currentColor" />
        </svg>
      ))}
    </span>
  );
}
