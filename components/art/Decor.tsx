export function LeafSprig({ className, flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 160 120"
      className={className}
      aria-hidden="true"
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      <path d="M4 116C34 88 62 62 104 44c20-9 38-12 50-12" fill="none" stroke="#4a2d17" strokeWidth="6" strokeLinecap="round" />
      <g fill="#57a54a" stroke="#2f6b34" strokeWidth="3">
        <path d="M22 100c-14-2-22-12-18-24 14-2 26 6 30 18z" />
        <path d="M48 78c-14-2-22-12-18-24 14-2 26 6 30 18z" />
        <path d="M76 58c-14-2-22-12-18-24 14-2 26 6 30 18z" />
        <path d="M108 44c-14-2-22-12-18-24 14-2 26 6 30 18z" />
        <path d="M42 88c2-16 12-26 26-28-2 16-12 26-26 28z" />
        <path d="M70 66c2-16 12-26 26-28-2 16-12 26-26 28z" />
        <path d="M100 50c2-16 12-26 26-28-2 16-12 26-26 28z" />
      </g>
      <g fill="#8ec93f">
        <ellipse cx="122" cy="34" rx="10" ry="6" transform="rotate(-32 122 34)" />
        <ellipse cx="86" cy="30" rx="8" ry="5" transform="rotate(-40 86 30)" />
      </g>
    </svg>
  );
}

export function CornerMushroom({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <ellipse cx="60" cy="104" rx="46" ry="10" fill="#0f2415" opacity="0.25" />
      <path d="M44 104c-2-16 2-30 10-42h14c8 12 12 26 10 42z" fill="#f7e7c6" stroke="#6b4426" strokeWidth="4" />
      <path d="M12 66c0-26 22-46 49-46s49 20 49 46c0 6-6 10-13 10H25c-7 0-13-4-13-10z" fill="#d9483b" stroke="#8f2a22" strokeWidth="5" />
      <g fill="#fdf4df">
        <ellipse cx="41" cy="46" rx="9" ry="7" transform="rotate(-14 41 46)" />
        <ellipse cx="78" cy="38" rx="7" ry="5.5" transform="rotate(12 78 38)" />
        <ellipse cx="92" cy="58" rx="6" ry="4.6" />
        <ellipse cx="56" cy="64" rx="5" ry="4" />
      </g>
      <path d="M40 36c6-12 18-18 30-18" fill="none" stroke="#e9665a" strokeWidth="5" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}

export function HangingRopes({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 40" className={className} aria-hidden="true">
      <path d="M18 0v34M182 0v34" stroke="#4a2d17" strokeWidth="4" />
      <path d="M14 0l4 34M178 0l4 34" stroke="#c9a86a" strokeWidth="3" />
      <circle cx="18" cy="32" r="3" fill="#5b3b1e" />
      <circle cx="182" cy="32" r="3" fill="#5b3b1e" />
    </svg>
  );
}

export function Nail({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8" fill="#8b93a0" stroke="#4a4f57" strokeWidth="2.5" />
      <circle cx="9.5" cy="9.5" r="2.6" fill="#c9d2da" />
      <path d="M9 12h6M12 9v6" stroke="#6d7681" strokeWidth="1.6" />
    </svg>
  );
}

export function WoodGrainOverlay({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 120" className={className} preserveAspectRatio="none" aria-hidden="true">
      <g stroke="#4a2d17" strokeWidth="1.4" fill="none" opacity="0.22">
        <path d="M0 18c60 6 120-6 200 0s140 8 200 0" />
        <path d="M0 46c70-8 130 8 210 2s130-10 190-2" />
        <path d="M0 78c50 8 110-6 180 0s150 8 220 0" />
        <path d="M0 102c80-8 140 6 220 0s120-8 180-2" />
      </g>
      <g fill="#4a2d17" opacity="0.16">
        <ellipse cx="96" cy="34" rx="9" ry="4" />
        <ellipse cx="288" cy="88" rx="7" ry="3" />
      </g>
    </svg>
  );
}
