export function StarIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path
        d="M3.611,15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.172,6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.537.792c.197-.39.73-.39.927,0l2.184,4.327,4.898.696c.441.062.612.636.282.95l-3.522,3.356.83,4.73c.078.443-.36.79-.746.592l-4.391-2.256-4.388,2.256Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function Stars({ count = 5 }) {
  return (
    <>
      {Array.from({ length: count }, (_, i) => (
        <StarIcon key={i} />
      ))}
    </>
  )
}

export function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M2 8.6 6.1 12.7 14 4.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function ShieldIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M10 2.5 3.75 4.8v5.1c0 3.4 2.5 6.4 6.25 7.6 3.75-1.2 6.25-4.2 6.25-7.6V4.8z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function CardIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="2.5" y="5" width="15" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2.5 8.5h15" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

export function TagIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M7.3 1.5H2.5A1 1 0 0 0 1.5 2.5v4.8c0 .27.1.52.3.71l6.2 6.2a1 1 0 0 0 1.41 0l4.8-4.8a1 1 0 0 0 0-1.41L8.01 1.8a1 1 0 0 0-.71-.3Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <circle cx="4.7" cy="4.7" r="1" fill="currentColor" />
    </svg>
  )
}

export function PlusIcon({ open }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M2 8h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {open ? null : <path d="M8 2v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />}
    </svg>
  )
}

export function CaretIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3.5 6 8 10.5 12.5 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function XCircleIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="8.25" stroke="currentColor" strokeWidth="1.4" />
      <path d="M7.4 7.4l5.2 5.2M12.6 7.4l-5.2 5.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

export function XMarkIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function ArrowIcon({ dir = 'right' }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" style={dir === 'left' ? { transform: 'scaleX(-1)' } : undefined}>
      <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function LabCheckIcon() {
  return (
    <svg viewBox="0 0 26 26" fill="none" aria-hidden="true">
      <path
        d="M3 6.5 10.5 21 23 3.5"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.85"
      />
    </svg>
  )
}

const KIDS_ICONS = {
  bicep: 'M5 12c0-3.3 2.7-6 6-6h3a4 4 0 0 1 0 8h-2l3 4H8a3 3 0 0 1-3-3z',
  brain: 'M9 4a4 4 0 0 0-4 4v1a3 3 0 0 0 0 6v1a4 4 0 0 0 4 4h1V4zm6 0h-1v16h1a4 4 0 0 0 4-4v-1a3 3 0 0 0 0-6V8a4 4 0 0 0-4-4z',
  shield: 'M12 3 5 5.5V11c0 4 3 7.5 7 9 4-1.5 7-5 7-9V5.5z',
  gut: 'M8 4v6a4 4 0 0 0 8 0V8a3 3 0 0 1 0 6v3a4 4 0 0 1-8 0z',
}

export function KidsIcon({ name }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="26" height="26">
      <path d={KIDS_ICONS[name] || KIDS_ICONS.shield} stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  )
}
