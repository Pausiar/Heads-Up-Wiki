export function Duck({ className, title }: { className?: string; title?: string }) {
  return (
    <svg
      viewBox="0 0 96 96"
      className={className}
      role={title ? "img" : "presentation"}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      <ellipse cx="48" cy="82" rx="30" ry="6" fill="#0f2415" opacity="0.18" />
      <path
        d="M22 63c0-14 12-24 28-24 5 0 9 1 13 2 3-6 9-10 16-10"
        fill="none"
        stroke="#e9a52c"
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.9"
      />
      <ellipse cx="51" cy="62" rx="27" ry="18" fill="#ffd23f" stroke="#4a2e17" strokeWidth="4" />
      <path
        d="M35 62c4 7 15 10 24 6"
        fill="none"
        stroke="#e0a417"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="38" cy="41" r="15" fill="#ffd23f" stroke="#4a2e17" strokeWidth="4" />
      <path
        d="M23 40c-7 0-11 3-11 7s6 5 13 3z"
        fill="#ef822c"
        stroke="#4a2e17"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <circle cx="35" cy="37" r="3" fill="#382716" />
      <circle cx="36" cy="36" r="1" fill="#fff8e6" />
      <path
        d="M28 52c4 3 9 3 13 1"
        fill="none"
        stroke="#4a2e17"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
}

export function Rock({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 96 96" className={className} aria-hidden="true">
      <path
        d="M18 66c-6-10-2-24 10-30 8-4 18-2 24-8 8-8 22-6 27 4 4 8 2 16 6 22 5 9-2 20-12 21H30c-5 0-9-3-12-9z"
        fill="#8b93a0"
        stroke="#3f4854"
        strokeWidth="4"
      />
      <path
        d="M34 36c6-4 14-2 18-8 5-6 14-4 17 2-8 4-14 10-24 11-6 1-9-3-11-5z"
        fill="#b9c0c9"
      />
      <path d="M52 68c8-6 18-6 26-2" fill="none" stroke="#6d7681" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}
