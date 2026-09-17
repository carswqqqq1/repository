const PATHS = {
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.8" fill="none" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" fill="none" />
      <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
    </>
  ),
  tiktok: (
    <path
      d="M14.2 3.5c.3 2 1.6 3.4 3.6 3.6v2.6c-1.2 0-2.4-.4-3.4-1.1v5.6a4.9 4.9 0 1 1-4.9-4.9c.3 0 .5 0 .8.1v2.7a2.2 2.2 0 1 0 1.6 2.1V3.5h2.3Z"
      fill="currentColor"
    />
  ),
  youtube: (
    <>
      <rect x="2.5" y="6" width="19" height="12" rx="3.5" fill="currentColor" />
      <path d="M10.4 9.6l4.6 2.4-4.6 2.4V9.6Z" fill="var(--icon-knockout, #00381d)" />
    </>
  ),
  facebook: (
    <path
      d="M13.3 21v-7.2h2.4l.4-2.9h-2.8V9.1c0-.8.2-1.4 1.4-1.4h1.5V5.1c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.1H7.9v2.9h2.4V21h3Z"
      fill="currentColor"
    />
  ),
};

export default function SocialIcon({ name }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {PATHS[name]}
    </svg>
  );
}
