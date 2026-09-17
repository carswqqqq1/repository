const GLYPHS = {
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.1" cy="6.9" r="1.4" fill="currentColor" />
    </>
  ),
  tiktok: (
    <path
      d="M13.8 3h2.5a5.4 5.4 0 0 0 4.4 4.4v2.7a8 8 0 0 1-4.4-1.5v5.9a5.9 5.9 0 1 1-5.9-5.9c.3 0 .6 0 .9.1v2.8a3.1 3.1 0 1 0 2.5 3V3Z"
      fill="currentColor"
    />
  ),
  youtube: (
    <>
      <rect x="2.5" y="6.4" width="19" height="11.2" rx="3.4" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M10.4 9.6 15.7 12l-5.3 2.4V9.6Z" fill="currentColor" />
    </>
  ),
  facebook: (
    <path
      d="M13.6 21v-7.2h2.5l.4-2.9h-2.9V9c0-.8.2-1.4 1.5-1.4h1.5V5c-.3 0-1.3-.1-2.5-.1-2.5 0-4.1 1.5-4.1 4.2v1.8H8v2.9h2.5V21h3.1Z"
      fill="currentColor"
    />
  ),
};

export default function SocialIcon({ id }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden focusable="false">
      {GLYPHS[id]}
    </svg>
  );
}
