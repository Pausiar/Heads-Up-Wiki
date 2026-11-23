const falling = [
  { label: "Árboles", kind: "tree" },
  { label: "Piñas", kind: "pinecone" },
  { label: "Rocas", kind: "rock" },
  { label: "Neveras", kind: "fridge" },
  { label: "Lavadoras", kind: "washer" },
  { label: "Pianos", kind: "piano" },
] as const;

export function FallingObjects() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-6">
        {falling.map((object) => (
          <div
            key={object.kind}
            className="flex flex-col items-center rounded-xl border-2 border-bark-700/35 bg-parch-50 px-1.5 py-2.5"
          >
            <svg viewBox="0 0 64 64" className="h-11 w-11" aria-hidden="true">
              {object.kind === "tree" && (
                <g stroke="#3b2a1a" strokeWidth="2.5" strokeLinejoin="round">
                  <rect x="28" y="34" width="8" height="22" fill="#8a5a32" />
                  <circle cx="24" cy="26" r="13" fill="#4f9c48" />
                  <circle cx="38" cy="22" r="12" fill="#57a54a" />
                  <circle cx="32" cy="34" r="11" fill="#3f8a3c" />
                </g>
              )}
              {object.kind === "pinecone" && (
                <g stroke="#3b2a1a" strokeWidth="2.5">
                  <ellipse cx="32" cy="34" rx="13" ry="18" fill="#8a5a32" />
                  <g fill="#a9713f" strokeWidth="1.5">
                    <path d="M32 20l8 6-8 6-8-6z" />
                    <path d="M32 32l9 6-9 6-9-6z" />
                    <path d="M32 44l7 5-7 4-7-4z" />
                  </g>
                </g>
              )}
              {object.kind === "rock" && (
                <path
                  d="M12 48c-4-8 0-16 8-20 5-2 8-6 14-5 7 1 11 7 10 13 0 4 3 6 1 12z"
                  fill="#8b93a0"
                  stroke="#3b2a1a"
                  strokeWidth="2.5"
                />
              )}
              {object.kind === "fridge" && (
                <g stroke="#3b2a1a" strokeWidth="2.5" fill="#eef2f4">
                  <rect x="18" y="8" width="28" height="48" rx="4" />
                  <path d="M18 24h28" />
                  <path d="M22 14v6M22 30v10" strokeWidth="2" />
                  <rect x="18" y="8" width="28" height="6" fill="#c9d2da" />
                </g>
              )}
              {object.kind === "washer" && (
                <g stroke="#3b2a1a" strokeWidth="2.5" fill="#f4f1e8">
                  <rect x="12" y="12" width="40" height="42" rx="4" />
                  <circle cx="32" cy="35" r="12" fill="#a8e2f7" />
                  <circle cx="32" cy="35" r="7" fill="#7fd0ef" />
                  <path d="M18 19h12" />
                </g>
              )}
              {object.kind === "piano" && (
                <g stroke="#3b2a1a" strokeWidth="2.5">
                  <rect x="8" y="26" width="48" height="24" rx="3" fill="#4a2e17" />
                  <rect x="12" y="30" width="40" height="10" fill="#fdf6e6" />
                  <g stroke="#3b2a1a" strokeWidth="1.5">
                    <path d="M18 30v10M24 30v10M30 30v10M36 30v10M42 30v10M48 30v10" />
                  </g>
                  <rect x="12" y="46" width="40" height="3" fill="#2a1c11" />
                </g>
              )}
            </svg>
            <span className="mt-1 font-display text-[0.72rem] font-bold text-bark-800">{object.label}</span>
          </div>
        ))}
      </div>
      <p className="mt-2 text-center font-hand text-base text-bark-600">Todo esto puede caer del cielo.</p>
    </div>
  );
}

export function GhostCampfire() {
  return (
    <svg
      viewBox="0 0 560 280"
      className="w-full"
      role="img"
      aria-label="Una hoguera del campamento con un superviviente realizando el ritual de resurrección y dos fantasmas"
    >
      <defs>
        <linearGradient id="ghost-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1b3550" />
          <stop offset="1" stopColor="#254b39" />
        </linearGradient>
        <radialGradient id="ghost-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#ffd85e" stopOpacity="0.5" />
          <stop offset="1" stopColor="#ffd85e" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="560" height="280" rx="18" fill="url(#ghost-sky)" />
      <g fill="#fdf7d8">
        <circle cx="70" cy="46" r="2.2" />
        <circle cx="180" cy="30" r="1.8" />
        <circle cx="330" cy="44" r="2" />
        <circle cx="470" cy="32" r="2.4" />
        <circle cx="520" cy="70" r="1.6" />
      </g>
      <circle cx="470" cy="58" r="22" fill="#f6f0cd" />
      <circle cx="461" cy="51" r="17" fill="#254b39" />

      <path d="M0 218c60-26 120-28 190-14 60-16 120-16 180 2 70-18 130-14 190 10v64H0z" fill="#17351f" />
      <path d="M0 246c90-18 180-16 270-4s180 10 290-6v44H0z" fill="#0f2415" />

      <circle cx="196" cy="196" r="96" fill="url(#ghost-glow)" />

      {/* survivor */}
      <g transform="translate(112 150)">
        <circle cx="0" cy="-12" r="14" fill="#e2c79c" stroke="#3b2a1a" strokeWidth="3" />
        <path d="M-14-18c2-10 10-14 18-12 7 2 11 8 10 14-8 4-20 4-28-2z" fill="#8ec93f" stroke="#3b2a1a" strokeWidth="3" />
        <path d="M-12 2h24l6 44H-18z" fill="#4f9c48" stroke="#2f6b34" strokeWidth="3" />
        <path d="M8 4c14-4 22-16 24-28" stroke="#e2c79c" strokeWidth="8" strokeLinecap="round" fill="none" />
        <path d="M-8 46v16M8 46v16" stroke="#3b2a1a" strokeWidth="6" strokeLinecap="round" />
      </g>

      {/* campfire */}
      <g transform="translate(214 204)">
        <ellipse cx="0" cy="8" rx="52" ry="12" fill="#0b1a12" opacity="0.5" />
        <path d="M-38 2l76-14M-38-12l76 14" stroke="#7a4a26" strokeWidth="10" strokeLinecap="round" />
        <path d="M0-6c-16-20-4-36 6-52 2 18 20 24 16 44 0 8-10 12-22 8z" fill="#ef822c" />
        <path d="M0-8c-8-12-2-22 4-30 2 10 10 14 8 24 0 5-6 8-12 6z" fill="#ffd85e" />
        <g stroke="#ffe89a" strokeWidth="3" strokeLinecap="round" opacity="0.8">
          <path d="M-26-30l-8-10M28-34l8-10M-6-64v-12" />
        </g>
      </g>

      {/* ghosts */}
      <g transform="translate(360 132)" opacity="0.95">
        <path d="M-26 40c0-30 8-56 26-56s26 26 26 56c0 8-6 10-12 6-6-4-8 2-14 2s-8-6-14-2c-6 4-12 2-12-6z" fill="#e9f4ff" stroke="#9fb6c9" strokeWidth="3" />
        <g fill="#2a3f4f">
          <ellipse cx="-7" cy="10" rx="4.5" ry="6" />
          <ellipse cx="9" cy="10" rx="4.5" ry="6" />
        </g>
        <path d="M-6 24c4-4 12-4 16 0" fill="none" stroke="#2a3f4f" strokeWidth="3" strokeLinecap="round" />
      </g>
      <g transform="translate(444 158) scale(0.78)" opacity="0.9">
        <path d="M-26 40c0-30 8-56 26-56s26 26 26 56c0 8-6 10-12 6-6-4-8 2-14 2s-8-6-14-2c-6 4-12 2-12-6z" fill="#e9f4ff" stroke="#9fb6c9" strokeWidth="3" />
        <g fill="#2a3f4f">
          <ellipse cx="-7" cy="10" rx="4.5" ry="6" />
          <ellipse cx="9" cy="10" rx="4.5" ry="6" />
        </g>
        <path d="M-6 24c4-4 12-4 16 0" fill="none" stroke="#2a3f4f" strokeWidth="3" strokeLinecap="round" />
      </g>

      {/* ritual badge */}
      <g transform="translate(300 60)">
        <rect x="-64" y="-24" width="128" height="48" rx="14" fill="#f9efd8" stroke="#4a2e17" strokeWidth="4" />
        <text x="0" y="-2" textAnchor="middle" fontFamily="var(--font-display), sans-serif" fontSize="13" fontWeight="800" fill="#4a2e17">
          RITUAL DE FOGATA
        </text>
        <text x="0" y="16" textAnchor="middle" fontFamily="var(--font-display), sans-serif" fontSize="14" fontWeight="800" fill="#2a6032">
          5 segundos · revive a todos
        </text>
      </g>
    </svg>
  );
}
