export default function Stars({ size = 14, color = 'var(--color-green)', count = 5 }) {
  return (
    <span className="stars" aria-label="4.8 out of 5 stars" style={{ color }}>
      {Array.from({ length: count }, (_, i) => (
        <svg key={i} viewBox="0 0 20 20" style={{ width: size, height: size }} aria-hidden="true">
          <path
            fill="currentColor"
            d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.8-5.2 2.8 1-5.8L1.5 7.7l5.9-.9L10 1.5z"
          />
        </svg>
      ))}
    </span>
  );
}
