type Variant = "enemigos" | "objetos" | "mundo" | "supervivencia" | "historia";

const skies: Record<Variant, [string, string]> = {
  enemigos: ["#16323f", "#1d4731"],
  objetos: ["#f3dfb8", "#e2c795"],
  mundo: ["#8ed7f6", "#dff5ff"],
  supervivencia: ["#213f5a", "#1d4731"],
  historia: ["#ffd9a0", "#ffeecb"],
};

export function CategoryArt({ variant, className }: { variant: Variant; className?: string }) {
  return (
    <svg viewBox="0 0 320 210" className={className} preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id={`cat-${variant}-sky`} x1="0" y1="0" x2="0.2" y2="1">
          <stop offset="0" stopColor={skies[variant][0]} />
          <stop offset="1" stopColor={skies[variant][1]} />
        </linearGradient>
      </defs>
      <rect width="320" height="210" fill={`url(#cat-${variant}-sky)`} />

      {variant === "enemigos" && <EnemiesCategory />}
      {variant === "objetos" && <ItemsCategory />}
      {variant === "mundo" && <WorldCategory />}
      {variant === "supervivencia" && <SurvivalCategory />}
      {variant === "historia" && <StoryCategory />}
    </svg>
  );
}

function EnemiesCategory() {
  return (
    <g>
      <circle cx="262" cy="40" r="16" fill="#f6f0cd" />
      <g fill="#fdf7d8">
        <circle cx="40" cy="30" r="2" />
        <circle cx="92" cy="54" r="1.6" />
        <circle cx="180" cy="26" r="1.8" />
      </g>
      <path d="M0 168c60-22 120-20 180-6s90 14 140 4v44H0z" fill="#224b2c" />
      <g transform="translate(88 108) scale(0.82)">
        <ellipse cx="60" cy="102" rx="46" ry="8" fill="#0b1a12" opacity="0.4" />
        <rect x="38" y="76" width="13" height="22" rx="6" fill="#f0e2c2" stroke="#5b3a1e" strokeWidth="3" />
        <rect x="72" y="76" width="13" height="22" rx="6" fill="#f0e2c2" stroke="#5b3a1e" strokeWidth="3" />
        <path d="M44 22h40c8 0 13 6 12 14l-6 40c-1 7-7 12-14 12H52c-7 0-13-5-14-12l-6-40c-1-8 4-14 12-14z" fill="#f6e9cd" stroke="#5b3a1e" strokeWidth="4" />
        <ellipse cx="56" cy="52" rx="5" ry="6.5" fill="#2a1c11" />
        <ellipse cx="72" cy="52" rx="5" ry="6.5" fill="#2a1c11" />
        <circle cx="57.5" cy="50" r="1.8" fill="#ffe89a" />
        <circle cx="73.5" cy="50" r="1.8" fill="#ffe89a" />
        <path d="M50 64c6 9 22 9 28 0 1 11-6 19-14 19s-15-8-14-19z" fill="#4a1d16" stroke="#3a2a1c" strokeWidth="3" />
        <path d="M26 20c0-28 22-50 48-50s48 22 48 50c0 7-6 10-13 10H39c-7 0-13-3-13-10z" fill="#d9483b" stroke="#6b1f19" strokeWidth="4" />
        <g fill="#fdf4df">
          <ellipse cx="56" cy="-2" rx="8" ry="6" />
          <ellipse cx="88" cy="-10" rx="6" ry="5" />
          <ellipse cx="98" cy="6" rx="5" ry="4" />
        </g>
        <path d="M30-4c6-22 24-34 44-34" stroke="#e9665a" strokeWidth="4" fill="none" opacity="0.7" />
      </g>
      <g transform="translate(206 96) scale(0.7)">
        <ellipse cx="60" cy="122" rx="52" ry="9" fill="#0b1a12" opacity="0.4" />
        <path d="M30 62C4 50 -18 26 -34-8c30-2 56 14 72 38z" fill="#d5c9b4" stroke="#4a3a2a" strokeWidth="5" />
        <path d="M90 62c26-12 48-36 64-70-30-2-56 14-72 38z" fill="#d5c9b4" stroke="#4a3a2a" strokeWidth="5" />
        <path d="M18 122c2-34 18-56 46-56s44 22 46 56z" fill="#cfc3ae" stroke="#4a3a2a" strokeWidth="5" />
        <ellipse cx="60" cy="64" rx="38" ry="42" fill="#ded2bd" stroke="#4a3a2a" strokeWidth="5" />
        <ellipse cx="44" cy="58" rx="9" ry="11" fill="#2a2018" />
        <ellipse cx="76" cy="58" rx="9" ry="11" fill="#2a2018" />
        <path d="M38 82c7-4 37-4 44 0 2 12-8 21-22 21s-24-9-22-21z" fill="#3a1f1a" stroke="#4a3a2a" strokeWidth="3" />
        <g fill="#f6ead4">
          <path d="M44 83l3 7 5-7z" />
          <path d="M60 82l3 8 5-8z" />
          <path d="M74 84l3 6 5-6z" />
        </g>
      </g>
    </g>
  );
}

function ItemsCategory() {
  return (
    <g>
      <g opacity="0.35" stroke="#8a5a32" strokeWidth="3" fill="none">
        <path d="M20 24h280M20 66h280M20 108h280M20 150h280" />
      </g>
      <g transform="translate(104 46) rotate(-4)">
        <rect x="0" y="0" width="112" height="124" rx="22" fill="#c96f33" stroke="#5b3a1e" strokeWidth="5" />
        <path d="M0 44h112v-8c0-20-16-36-36-36H36C16 0 0 16 0 36z" fill="#e08a4a" stroke="#5b3a1e" strokeWidth="5" />
        <rect x="26" y="56" width="60" height="42" rx="10" fill="#a25f2c" stroke="#5b3a1e" strokeWidth="4" />
        <rect x="44" y="68" width="24" height="12" rx="5" fill="#ffd85e" stroke="#5b3a1e" strokeWidth="3" />
        <path d="M0 30c-16 6-22 22-18 38M112 30c16 6 22 22 18 38" stroke="#5b3a1e" strokeWidth="7" fill="none" />
        <path d="M26 108h60" stroke="#5b3a1e" strokeWidth="4" opacity="0.5" />
      </g>
      <g transform="translate(232 70) rotate(16)">
        <rect x="0" y="0" width="62" height="30" rx="9" fill="#3f4a54" stroke="#3b2a1a" strokeWidth="4" />
        <path d="M62-4l28 19-28 19z" fill="#ffd85e" stroke="#3b2a1a" strokeWidth="4" />
        <path d="M62 4l14 11-14 11z" fill="#fff6d6" />
        <path d="M10 8h18" stroke="#8ec93f" strokeWidth="4" />
      </g>
      <g transform="translate(40 132)">
        <circle cx="24" cy="20" r="20" fill="#4a4f57" stroke="#3b2a1a" strokeWidth="4" />
        <circle cx="24" cy="20" r="12" fill="#fdf6e6" stroke="#3b2a1a" strokeWidth="3" />
        <circle cx="24" cy="20" r="6" fill="#ffc93c" stroke="#3b2a1a" strokeWidth="2" />
        <path d="M42 12l24-8 4 8-24 8z" fill="#8a4b22" stroke="#3b2a1a" strokeWidth="3" />
      </g>
      <ellipse cx="160" cy="192" rx="90" ry="10" fill="#8a5a32" opacity="0.25" />
    </g>
  );
}

function WorldCategory() {
  return (
    <g>
      <circle cx="262" cy="38" r="24" fill="#fff3b0" opacity="0.9" />
      <g fill="#ffffff" opacity="0.9">
        <ellipse cx="60" cy="34" rx="26" ry="12" />
        <ellipse cx="90" cy="40" rx="18" ry="9" />
      </g>
      <path d="M0 120c50-30 100-30 150-6 50-24 110-20 170 10v86H0z" fill="#6cb45c" />
      <path d="M180 96c50-18 100-10 140 14v100H180z" fill="#8b93a0" />
      <path d="M200 110c30-10 60-4 80 10v90h-80z" fill="#767e8b" opacity="0.7" />
      <path d="M232 104h34l-6 52h-24z" fill="#7fd0ef" opacity="0.9" />
      <path d="M238 104h10l-4 50h-8z" fill="#dff5ff" opacity="0.8" />
      <ellipse cx="248" cy="158" rx="44" ry="12" fill="#a8e2f7" opacity="0.9" />
      <path d="M0 168h320v42H0z" fill="#2b7fb0" />
      <g stroke="#dff5ff" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.85">
        <path d="M24 182c14-6 28-6 42 0s28 6 42 0" />
        <path d="M130 194c14-6 28-6 42 0s28 6 42 0" />
      </g>
      <g>
        <rect x="50" y="118" width="12" height="54" fill="#6b4426" />
        <circle cx="56" cy="106" r="24" fill="#2f6b34" />
        <circle cx="34" cy="120" r="17" fill="#3f8a3c" />
        <circle cx="80" cy="120" r="18" fill="#4f9c48" />
      </g>
      <g transform="translate(268 140)">
        <path d="M0 36c8-22 32-22 40 0z" fill="#d9483b" stroke="#8f2a22" strokeWidth="3" />
        <path d="M16 36c4-12 8-12 12 0z" fill="#f7e7c6" />
      </g>
    </g>
  );
}

function SurvivalCategory() {
  return (
    <g>
      <g fill="#fdf7d8">
        <circle cx="40" cy="30" r="2.2" />
        <circle cx="120" cy="20" r="1.8" />
        <circle cx="220" cy="34" r="2" />
        <circle cx="286" cy="60" r="1.6" />
      </g>
      <circle cx="270" cy="42" r="14" fill="#f6f0cd" />
      <path d="M0 164c60-18 120-16 180-4s100 12 140 2v48H0z" fill="#224b2c" />
      <g transform="translate(28 96)">
        <path d="M0 74l46-66 46 66z" fill="#e08a4a" stroke="#7a4a26" strokeWidth="4" />
        <path d="M46 8l14 66H32z" fill="#c96f33" />
        <path d="M46 54l16 20H30z" fill="#4a2e17" opacity="0.8" />
      </g>
      <g transform="translate(222 104)">
        <path d="M0 66l38-52 38 66z" fill="#5aa23c" stroke="#2f6b34" strokeWidth="4" />
        <path d="M38 14l12 66H26z" fill="#3f8032" />
      </g>
      <g transform="translate(160 154)">
        <ellipse cx="0" cy="6" rx="46" ry="12" fill="#0b1a12" opacity="0.4" />
        <path d="M-34 2l68-12M-34-10l68 12" stroke="#7a4a26" strokeWidth="9" strokeLinecap="round" />
        <path d="M0-4c-14-18-2-32 6-46 2 16 16 22 14 38 0 7-8 10-20 8z" fill="#ef822c" />
        <path d="M0-6c-7-10-1-18 4-26 1 9 8 11 6 20 0 4-5 7-10 6z" fill="#ffd85e" />
        <g fill="#ffe89a" opacity="0.85">
          <circle cx="-24" cy="-34" r="2.4" />
          <circle cx="26" cy="-42" r="2" />
        </g>
      </g>
      <g transform="translate(92 156)">
        <circle cx="0" cy="-18" r="10" fill="#f1dfba" stroke="#5b3a1e" strokeWidth="3" />
        <path d="M-9-8h18l6 30H-15z" fill="#4f9c48" stroke="#2f6b34" strokeWidth="3" />
        <path d="M9-2c8 4 10 12 8 18" stroke="#3b2a1a" strokeWidth="4" fill="none" />
      </g>
      <g transform="translate(226 158)">
        <circle cx="0" cy="-18" r="10" fill="#e2c79c" stroke="#5b3a1e" strokeWidth="3" />
        <path d="M-9-8h18l6 30H-15z" fill="#d9483b" stroke="#7a2a1f" strokeWidth="3" />
      </g>
    </g>
  );
}

function StoryCategory() {
  return (
    <g>
      <circle cx="56" cy="46" r="26" fill="#fff1b8" opacity="0.9" />
      <path d="M0 132c70-32 130-34 190-10 50-20 90-18 130 0v88H0z" fill="#79b85e" />
      <path d="M0 158c80-20 160-18 240-2s60 16 80 12v42H0z" fill="#4f9c48" />
      <path d="M108 210c18-40 60-58 116-66 30-4 58-2 84 6l-36 60z" fill="#c9a86a" />
      <g transform="translate(222 52) scale(0.62)">
        <rect x="20" y="70" width="10" height="60" fill="#b8402f" />
        <rect x="130" y="70" width="10" height="60" fill="#b8402f" />
        <rect x="8" y="52" width="144" height="18" rx="5" fill="#fdfaf2" stroke="#b0a89a" strokeWidth="3" />
        <rect x="8" y="52" width="144" height="8" rx="4" fill="#d9483b" />
        <g transform="translate(46 84)">
          <rect x="0" y="0" width="20" height="38" rx="3" fill="#f4f1e8" stroke="#8f8674" strokeWidth="3" />
          <path d="M0 30h20" stroke="#d9483b" strokeWidth="4" />
        </g>
        <g transform="translate(96 84)">
          <rect x="0" y="0" width="20" height="38" rx="3" fill="#f4f1e8" stroke="#8f8674" strokeWidth="3" />
          <path d="M0 30h20" stroke="#8ec93f" strokeWidth="4" />
        </g>
      </g>
      <g transform="translate(44 132) scale(0.62)">
        <ellipse cx="72" cy="86" rx="86" ry="12" fill="#1d3a20" opacity="0.35" />
        <path d="M8 42c0-10 8-18 18-18h78l34 20v34c0 8-6 14-14 14H22c-8 0-14-6-14-14z" fill="#d9483b" stroke="#7a2a1f" strokeWidth="5" />
        <rect x="34" y="34" width="34" height="26" rx="4" fill="#a8e2f7" stroke="#7a2a1f" strokeWidth="4" />
        <rect x="76" y="34" width="30" height="26" rx="4" fill="#a8e2f7" stroke="#7a2a1f" strokeWidth="4" />
        <circle cx="42" cy="82" r="14" fill="#3a3f46" stroke="#20252b" strokeWidth="4" />
        <circle cx="116" cy="82" r="14" fill="#3a3f46" stroke="#20252b" strokeWidth="4" />
        <path d="M14 10l60-10" stroke="#7a2a1f" strokeWidth="7" strokeLinecap="round" />
        <g fill="#f2f3f5" opacity="0.85">
          <circle cx="30" cy="6" r="10" />
          <circle cx="46" cy="-12" r="13" />
        </g>
      </g>
      <g transform="translate(276 128)">
        <rect x="0" y="0" width="30" height="40" rx="4" fill="#fdfaf2" stroke="#8f8674" strokeWidth="3" />
        <rect x="0" y="0" width="30" height="10" rx="3" fill="#d9483b" />
        <text x="15" y="29" textAnchor="middle" fontSize="11" fontFamily="var(--font-display), sans-serif" fontWeight="800" fill="#3b2a1a">
          GAS
        </text>
      </g>
    </g>
  );
}
