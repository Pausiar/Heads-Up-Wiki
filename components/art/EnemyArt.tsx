import type { EnemyArtKey } from "@/lib/content/types";

const labels: Record<EnemyArtKey, string> = {
  champi: "Champi, la seta que corre chillando",
  "oso-sonambulo": "Oso sonámbulo con los brazos extendidos",
  "el-orejas": "El Orejas, monstruo ciego de orejas enormes",
  "ganso-del-averno": "Ganso del averno con el pico abierto",
  "buho-secuestrador": "Búho secuestrador con las alas abiertas",
};

export function EnemyArt({
  art,
  className,
  decorative = false,
}: {
  art: EnemyArtKey;
  className?: string;
  decorative?: boolean;
}) {
  const isGoose = art === "ganso-del-averno";
  const skyTop = isGoose ? "#25455c" : "#0c2230";
  const skyMid = isGoose ? "#3c6b57" : "#173d2c";

  return (
    <svg
      viewBox="0 0 320 240"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      role={decorative ? "presentation" : "img"}
      aria-label={decorative ? undefined : labels[art]}
      aria-hidden={decorative ? true : undefined}
    >
      <defs>
        <linearGradient id={`${art}-sky`} x1="0" y1="0" x2="0.2" y2="1">
          <stop offset="0" stopColor={skyTop} />
          <stop offset="0.55" stopColor={skyMid} />
          <stop offset="1" stopColor="#224b2c" />
        </linearGradient>
        <radialGradient id={`${art}-glow`} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#ffe89a" stopOpacity="0.55" />
          <stop offset="1" stopColor="#ffe89a" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${art}-ground`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2c5a2f" />
          <stop offset="1" stopColor="#17351f" />
        </linearGradient>
      </defs>

      <rect width="320" height="240" fill={`url(#${art}-sky)`} />

      {/* moon + stars */}
      <circle cx="262" cy="46" r="34" fill={`url(#${art}-glow)`} />
      <circle cx="262" cy="46" r="17" fill="#f6f0cd" />
      <circle cx="256" cy="41" r="3.4" fill="#e3daae" opacity="0.7" />
      <circle cx="268" cy="52" r="2.4" fill="#e3daae" opacity="0.6" />
      <g fill="#fdf7d8">
        <circle cx="42" cy="38" r="1.8" opacity="0.9" />
        <circle cx="86" cy="24" r="1.4" opacity="0.7" />
        <circle cx="132" cy="46" r="1.6" opacity="0.8" />
        <circle cx="196" cy="28" r="1.3" opacity="0.75" />
        <circle cx="226" cy="70" r="1.5" opacity="0.6" />
      </g>

      {/* treeline */}
      <g opacity="0.85">
        <path d="M0 150c26-8 40-30 54-52 8 24 18 38 32 46 6-30 20-50 34-64 10 30 22 50 38 62 10-26 24-40 40-50 6 22 18 40 34 50 14-18 28-26 44-30 4 20 14 34 44 40v38H0z" fill="#12301f" opacity="0.55" />
        <rect x="40" y="120" width="12" height="90" fill="#0e2618" opacity="0.7" />
        <rect x="250" y="108" width="14" height="106" fill="#0e2618" opacity="0.7" />
      </g>

      {/* ground */}
      <path d="M0 186c48-14 96-16 160-10s112 4 160-4v68H0z" fill={`url(#${art}-ground)`} />
      <path d="M0 206c60-10 120-8 180-2s100 6 140 0v36H0z" fill="#14301c" opacity="0.55" />

      {art === "champi" && <Champi />}
      {art === "oso-sonambulo" && <SleepyBear />}
      {art === "el-orejas" && <ElOrejas />}
      {art === "ganso-del-averno" && <HellGoose />}
      {art === "buho-secuestrador" && <KidnapperOwl />}

      {/* fireflies + grass */}
      <g fill="#ffe89a" opacity="0.85">
        <circle cx="52" cy="164" r="2.4" />
        <circle cx="86" cy="196" r="1.8" />
        <circle cx="266" cy="180" r="2.2" />
        <circle cx="240" cy="206" r="1.6" />
      </g>
      <Grass x={16} y={236} />
      <Grass x={276} y={238} flip />
      <Grass x={112} y={240} />
    </svg>
  );
}

function Grass({ x, y, flip = false }: { x: number; y: number; flip?: boolean }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${flip ? -1 : 1} 1)`} stroke="#4f9c48" strokeWidth="3" strokeLinecap="round" fill="none">
      <path d="M0 0c-2-10-8-16-14-19" />
      <path d="M2 0c0-12 2-20 6-26" />
      <path d="M4 0c6-8 12-12 18-13" />
    </g>
  );
}

function Champi() {
  return (
    <g>
      <ellipse cx="160" cy="214" rx="60" ry="11" fill="#08150d" opacity="0.45" />
      <g strokeLinecap="round" fill="none" stroke="#c9e878" strokeWidth="3" opacity="0.5">
        <path d="M78 128c-8-4-14-10-18-18" />
        <path d="M72 146c-10-2-18-6-24-12" />
        <path d="M244 128c8-4 14-10 18-18" />
        <path d="M250 146c10-2 18-6 24-12" />
      </g>

      {/* legs */}
      <rect x="131" y="184" width="17" height="26" rx="8.5" fill="#f0e2c2" stroke="#5b3a1e" strokeWidth="4" />
      <rect x="172" y="184" width="17" height="26" rx="8.5" fill="#f0e2c2" stroke="#5b3a1e" strokeWidth="4" />
      <ellipse cx="137" cy="211" rx="13" ry="6.5" fill="#5b3a1e" />
      <ellipse cx="181" cy="211" rx="13" ry="6.5" fill="#5b3a1e" />

      {/* arms */}
      <path d="M128 138c-16 6-25 17-28 31" fill="none" stroke="#f0e2c2" strokeWidth="13" strokeLinecap="round" />
      <path d="M192 138c16 6 25 17 28 31" fill="none" stroke="#f0e2c2" strokeWidth="13" strokeLinecap="round" />
      <path d="M126 133c-14 5-23 14-27 26" fill="none" stroke="#5b3a1e" strokeWidth="4" strokeLinecap="round" opacity="0.4" />
      <circle cx="99" cy="171" r="8" fill="#f0e2c2" stroke="#5b3a1e" strokeWidth="4" />
      <circle cx="221" cy="171" r="8" fill="#f0e2c2" stroke="#5b3a1e" strokeWidth="4" />

      {/* stem body */}
      <path
        d="M128 106h64c9 0 15 7 14 16l-8 56c-1 9-8 15-17 15h-42c-9 0-16-6-17-15l-8-56c-1-9 5-16 14-16z"
        fill="#f6e9cd"
        stroke="#5b3a1e"
        strokeWidth="4.5"
      />

      {/* face */}
      <path d="M136 131c7-6 17-5 22 2" fill="none" stroke="#3a2a1c" strokeWidth="5" strokeLinecap="round" />
      <path d="M184 131c-7-6-17-5-22 2" fill="none" stroke="#3a2a1c" strokeWidth="5" strokeLinecap="round" />
      <ellipse cx="147" cy="145" rx="7.5" ry="9" fill="#2a1c11" />
      <ellipse cx="173" cy="145" rx="7.5" ry="9" fill="#2a1c11" />
      <circle cx="149.5" cy="141.5" r="2.6" fill="#ffe89a" />
      <circle cx="175.5" cy="141.5" r="2.6" fill="#ffe89a" />
      <path
        d="M139 161c7 12 35 12 42 0 1 16-8 27-21 27s-22-11-21-27z"
        fill="#4a1d16"
        stroke="#3a2a1c"
        strokeWidth="3.5"
      />
      <path d="M145 163l3 8 6-8z" fill="#fff8ea" />
      <path d="M162 163l4 8 6-8z" fill="#fff8ea" />
      <path d="M156 178c2 4 6 4 8 0" fill="#e07a6a" />

      {/* cap */}
      <path
        d="M92 116c0-40 31-72 68-72s68 32 68 72c0 9-8 14-18 14H110c-10 0-18-5-18-14z"
        fill="#d9483b"
        stroke="#6b1f19"
        strokeWidth="5"
      />
      <path d="M96 112c8-32 34-56 66-60-34 10-56 34-58 62z" fill="#e9665a" opacity="0.7" />
      <path d="M108 130h104" stroke="#8f2a22" strokeWidth="7" strokeLinecap="round" opacity="0.75" />
      <g fill="#fdf4df" stroke="#d7c6a4" strokeWidth="2">
        <ellipse cx="128" cy="84" rx="11" ry="8" transform="rotate(-18 128 84)" />
        <ellipse cx="178" cy="62" rx="9" ry="7" transform="rotate(12 178 62)" />
        <ellipse cx="196" cy="94" rx="7" ry="5.5" transform="rotate(-8 196 94)" />
        <ellipse cx="154" cy="102" rx="6" ry="4.5" />
        <ellipse cx="110" cy="108" rx="5" ry="4" />
      </g>
    </g>
  );
}

function SleepyBear() {
  return (
    <g>
      <ellipse cx="160" cy="214" rx="64" ry="11" fill="#08150d" opacity="0.45" />

      {/* legs */}
      <rect x="124" y="174" width="24" height="38" rx="12" fill="#8a5a32" stroke="#4a2d17" strokeWidth="4" />
      <rect x="172" y="174" width="24" height="38" rx="12" fill="#8a5a32" stroke="#4a2d17" strokeWidth="4" />
      <ellipse cx="136" cy="211" rx="16" ry="7" fill="#3f2615" />
      <ellipse cx="184" cy="211" rx="16" ry="7" fill="#3f2615" />

      {/* body */}
      <ellipse cx="160" cy="152" rx="58" ry="47" fill="#9a6739" stroke="#4a2d17" strokeWidth="4.5" />
      <ellipse cx="160" cy="163" rx="34" ry="30" fill="#cfa678" opacity="0.9" />

      {/* outstretched arms */}
      <path d="M112 142c-16 8-24 20-26 34" fill="none" stroke="#9a6739" strokeWidth="19" strokeLinecap="round" />
      <path d="M208 142c16 8 24 20 26 34" fill="none" stroke="#9a6739" strokeWidth="19" strokeLinecap="round" />
      <circle cx="83" cy="180" r="13" fill="#9a6739" stroke="#4a2d17" strokeWidth="4" />
      <circle cx="237" cy="180" r="13" fill="#9a6739" stroke="#4a2d17" strokeWidth="4" />
      <g fill="#4a2d17">
        <circle cx="77" cy="177" r="2.4" />
        <circle cx="84" cy="185" r="2.4" />
        <circle cx="231" cy="177" r="2.4" />
        <circle cx="238" cy="185" r="2.4" />
      </g>

      {/* head */}
      <circle cx="126" cy="64" r="15" fill="#9a6739" stroke="#4a2d17" strokeWidth="4" />
      <circle cx="194" cy="64" r="15" fill="#9a6739" stroke="#4a2d17" strokeWidth="4" />
      <circle cx="126" cy="64" r="7" fill="#cfa678" />
      <circle cx="194" cy="64" r="7" fill="#cfa678" />
      <circle cx="160" cy="92" r="43" fill="#9a6739" stroke="#4a2d17" strokeWidth="4.5" />
      <ellipse cx="160" cy="106" rx="24" ry="18" fill="#e2c79c" />
      <ellipse cx="160" cy="98" rx="9" ry="7" fill="#3f2615" />
      <path d="M160 105v6" stroke="#3f2615" strokeWidth="3" strokeLinecap="round" />
      <path d="M152 113c3 3 5 3 8 0s5-3 8 0" fill="none" stroke="#3f2615" strokeWidth="3" strokeLinecap="round" />
      <path d="M138 86c4 4 9 4 13 0" fill="none" stroke="#3f2615" strokeWidth="4" strokeLinecap="round" />
      <path d="M169 86c4 4 9 4 13 0" fill="none" stroke="#3f2615" strokeWidth="4" strokeLinecap="round" />
      <path d="M134 74c5-3 11-3 15 0" fill="none" stroke="#4a2d17" strokeWidth="3" strokeLinecap="round" opacity="0.55" />
      <path d="M171 74c5-3 11-3 15 0" fill="none" stroke="#4a2d17" strokeWidth="3" strokeLinecap="round" opacity="0.55" />

      {/* zzz */}
      <g fill="#e8f4ff" fontFamily="var(--font-display), sans-serif" fontWeight="800" opacity="0.9">
        <text x="216" y="60" fontSize="20">z</text>
        <text x="232" y="42" fontSize="26">z</text>
        <text x="252" y="24" fontSize="16" opacity="0.7">z</text>
      </g>
    </g>
  );
}

function ElOrejas() {
  return (
    <g>
      <ellipse cx="160" cy="216" rx="56" ry="10" fill="#08150d" opacity="0.45" />

      {/* ears */}
      <path d="M120 102C88 92 58 64 38 24c36-2 68 18 88 48z" fill="#d5c9b4" stroke="#4a3a2a" strokeWidth="4.5" />
      <path d="M112 92C88 84 68 64 54 38c24 0 46 14 60 36z" fill="#b9a894" />
      <path d="M202 102c32-10 62-38 82-78-36-2-68 18-88 48z" fill="#d5c9b4" stroke="#4a3a2a" strokeWidth="4.5" />
      <path d="M210 92c24-8 44-28 58-54-24 0-46 14-60 36z" fill="#b9a894" />
      <g stroke="#4a3a2a" strokeWidth="2.5" opacity="0.45" strokeLinecap="round">
        <path d="M68 40c10 4 20 12 28 22" />
        <path d="M252 40c-10 4-20 12-28 22" />
      </g>

      {/* body */}
      <path d="M104 214c2-42 22-68 56-68s54 26 56 68z" fill="#cfc3ae" stroke="#4a3a2a" strokeWidth="4.5" />
      <path d="M118 214c4-30 18-50 42-50s38 20 42 50" fill="none" stroke="#a89a86" strokeWidth="3" opacity="0.6" />
      {/* arms */}
      <path d="M108 150c-16 12-24 30-24 54" fill="none" stroke="#cfc3ae" strokeWidth="13" strokeLinecap="round" />
      <path d="M212 150c16 12 24 30 24 54" fill="none" stroke="#cfc3ae" strokeWidth="13" strokeLinecap="round" />
      <path d="M86 204l-8 8M90 206l2 12M234 204l8 8M230 206l-2 12" stroke="#4a3a2a" strokeWidth="4" strokeLinecap="round" />

      {/* head */}
      <ellipse cx="160" cy="104" rx="46" ry="50" fill="#ded2bd" stroke="#4a3a2a" strokeWidth="4.5" />
      <path d="M130 78c6-8 18-12 30-12s24 4 30 12" fill="none" stroke="#b9a894" strokeWidth="4" opacity="0.7" />
      <ellipse cx="141" cy="98" rx="11" ry="13" fill="#2a2018" />
      <ellipse cx="179" cy="98" rx="11" ry="13" fill="#2a2018" />
      <ellipse cx="141" cy="94" rx="4" ry="3" fill="#5b4a3a" opacity="0.7" />
      <ellipse cx="179" cy="94" rx="4" ry="3" fill="#5b4a3a" opacity="0.7" />
      <path
        d="M134 124c8-5 44-5 52 0 3 15-10 26-26 26s-29-11-26-26z"
        fill="#3a1f1a"
        stroke="#4a3a2a"
        strokeWidth="3.5"
      />
      <g fill="#f6ead4">
        <path d="M141 125l4 9 6-9z" />
        <path d="M160 124l3 10 6-10z" />
        <path d="M176 126l4 8 6-8z" />
      </g>
      <path d="M146 141c8 5 20 5 28 0" fill="none" stroke="#c9665c" strokeWidth="3" opacity="0.6" />
    </g>
  );
}

function HellGoose() {
  return (
    <g>
      <ellipse cx="156" cy="214" rx="62" ry="11" fill="#08150d" opacity="0.45" />

      {/* legs */}
      <path d="M144 186v18M176 186v18" stroke="#e08a2c" strokeWidth="7" strokeLinecap="round" />
      <path d="M144 204l-12 6 12 3 6-6M176 204l12 6-12 3-6-6" fill="#e08a2c" stroke="#8f4a12" strokeWidth="3" strokeLinejoin="round" />

      {/* tail */}
      <path d="M100 148c-16-8-28-6-36 4 12 10 26 12 38 8z" fill="#efe8d5" stroke="#4a3a2a" strokeWidth="3.5" />

      {/* body */}
      <ellipse cx="152" cy="154" rx="62" ry="42" fill="#f8f4e7" stroke="#4a3a2a" strokeWidth="4.5" />
      <path d="M110 142c20-8 42-2 54 12-18 14-42 16-56 2z" fill="#e4ddc8" stroke="#4a3a2a" strokeWidth="3" />
      <path d="M120 148c12 0 22 4 30 10" fill="none" stroke="#b8ae97" strokeWidth="3" strokeLinecap="round" />

      {/* neck + head */}
      <path d="M184 138c4-26 8-46 18-58" fill="none" stroke="#f8f4e7" strokeWidth="26" strokeLinecap="round" />
      <path d="M184 138c4-26 8-46 18-58" fill="none" stroke="#4a3a2a" strokeWidth="3" strokeLinecap="round" opacity="0.25" />
      <circle cx="206" cy="80" r="25" fill="#f8f4e7" stroke="#4a3a2a" strokeWidth="4.5" />
      <path d="M228 76l26 8-24 12z" fill="#ef822c" stroke="#8f4a12" strokeWidth="3.5" strokeLinejoin="round" />
      <path d="M230 90l20-2" stroke="#b85a12" strokeWidth="3" strokeLinecap="round" />
      <circle cx="214" cy="71" r="5.5" fill="#d9483b" />
      <circle cx="215.5" cy="69.5" r="1.8" fill="#3a1010" />
      <path d="M202 62l17 5" stroke="#3a2a1c" strokeWidth="4" strokeLinecap="round" />
      <path d="M196 58c-5-8-3-15 4-20 2 8 5 12 9 14z" fill="#8f3b2f" stroke="#4a2d17" strokeWidth="3" strokeLinejoin="round" />
      <path d="M212 56c0-9 4-14 11-16-1 8 1 12 4 15z" fill="#8f3b2f" stroke="#4a2d17" strokeWidth="3" strokeLinejoin="round" />

      {/* angry sparks */}
      <g stroke="#ffd85e" strokeWidth="3" strokeLinecap="round" opacity="0.9">
        <path d="M246 58l10-10" />
        <path d="M252 70h13" />
        <path d="M240 44l4-13" />
      </g>
    </g>
  );
}

function KidnapperOwl() {
  return (
    <g>
      <ellipse cx="160" cy="218" rx="52" ry="9" fill="#08150d" opacity="0.45" />

      {/* wings */}
      <path d="M118 132C94 120 68 98 42 66c32-4 62 10 82 30z" fill="#7a5433" stroke="#3a2414" strokeWidth="4.5" />
      <path d="M202 132c24-12 50-34 76-66-32-4-62 10-82 30z" fill="#7a5433" stroke="#3a2414" strokeWidth="4.5" />
      <g stroke="#5b3d24" strokeWidth="3" strokeLinecap="round" opacity="0.8">
        <path d="M64 78c14 6 26 16 36 28" />
        <path d="M256 78c-14 6-26 16-36 28" />
        <path d="M80 92c10 4 18 12 26 22" />
        <path d="M240 92c-10 4-18 12-26 22" />
      </g>

      {/* body */}
      <ellipse cx="160" cy="156" rx="52" ry="58" fill="#8a5f38" stroke="#3a2414" strokeWidth="4.5" />
      <ellipse cx="160" cy="168" rx="33" ry="40" fill="#d8b98a" />
      <g stroke="#b08f61" strokeWidth="3" strokeLinecap="round" opacity="0.85">
        <path d="M144 154c6 4 26 4 32 0" />
        <path d="M144 168c6 4 26 4 32 0" />
        <path d="M146 182c6 4 22 4 28 0" />
      </g>

      {/* head */}
      <path d="M124 66c-8-12-8-22-2-30 8 6 14 12 18 20z" fill="#8a5f38" stroke="#3a2414" strokeWidth="4" />
      <path d="M196 66c8-12 8-22 2-30-8 6-14 12-18 20z" fill="#8a5f38" stroke="#3a2414" strokeWidth="4" />
      <circle cx="160" cy="95" r="46" fill="#8a5f38" stroke="#3a2414" strokeWidth="4.5" />
      <path d="M116 78c10-12 26-18 44-18s34 6 44 18" fill="none" stroke="#a97a4b" strokeWidth="4" opacity="0.7" />
      <circle cx="142" cy="92" r="17" fill="#ffd85e" stroke="#3a2414" strokeWidth="3.5" />
      <circle cx="178" cy="92" r="17" fill="#ffd85e" stroke="#3a2414" strokeWidth="3.5" />
      <circle cx="142" cy="92" r="7" fill="#2a1c11" />
      <circle cx="178" cy="92" r="7" fill="#2a1c11" />
      <circle cx="144" cy="89" r="2.2" fill="#fff8e6" />
      <circle cx="180" cy="89" r="2.2" fill="#fff8e6" />
      <path d="M122 76l18 8M198 76l-18 8" stroke="#3a2414" strokeWidth="5" strokeLinecap="round" />
      <path d="M160 100l8 16-10-2z" fill="#ef822c" stroke="#8f4a12" strokeWidth="3" strokeLinejoin="round" />
      <path d="M160 116c-4 4-8 4-12 2M160 116c4 4 8 4 12 2" stroke="#8f4a12" strokeWidth="3" strokeLinecap="round" />

      {/* talons */}
      <g stroke="#e08a2c" strokeWidth="5" strokeLinecap="round">
        <path d="M142 206v8M142 214l-8 6M142 214l6 6" />
        <path d="M178 206v8M178 214l-6 6M178 214l8 6" />
      </g>

      {/* rope coil near talon */}
      <g stroke="#c9a86a" strokeWidth="4" fill="none" strokeLinecap="round">
        <ellipse cx="206" cy="206" rx="20" ry="9" transform="rotate(-16 206 206)" />
        <ellipse cx="206" cy="212" rx="18" ry="8" transform="rotate(-12 206 212)" />
      </g>
    </g>
  );
}

export function SwarmArt({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 240"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Enjambre de abejas saliendo de una colmena"
    >
      <defs>
        <linearGradient id="swarm-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#8ed7f6" />
          <stop offset="1" stopColor="#d9f2ff" />
        </linearGradient>
      </defs>
      <rect width="320" height="240" fill="url(#swarm-sky)" />
      <circle cx="264" cy="42" r="20" fill="#ffe89a" />
      <path d="M0 176c60-16 110-14 168-8s100 8 152-2v74H0z" fill="#4f9c48" />
      <path d="M0 206c60-10 120-8 180-2s100 6 140 0v36H0z" fill="#397c3f" />
      <path d="M236 30c18 0 30 12 28 26" fill="none" stroke="#5b3b1e" strokeWidth="9" strokeLinecap="round" />
      <path d="M228 58h84" stroke="#5b3b1e" strokeWidth="8" strokeLinecap="round" />
      <g>
        <path d="M240 74c22-10 46-10 68 0-2 26-12 44-34 44s-32-18-34-44z" fill="#d9a13c" stroke="#6b4415" strokeWidth="4" />
        <g stroke="#b8812b" strokeWidth="3">
          <path d="M248 88h52M248 102h52M250 116h48" />
        </g>
      </g>
      <g fill="#3a2a1c">
        <ellipse cx="96" cy="96" rx="9" ry="6" transform="rotate(-18 96 96)" />
        <ellipse cx="140" cy="66" rx="8" ry="5" transform="rotate(-12 140 66)" />
        <ellipse cx="176" cy="108" rx="9" ry="6" transform="rotate(8 176 108)" />
        <ellipse cx="118" cy="140" rx="8" ry="5" transform="rotate(-20 118 140)" />
        <ellipse cx="64" cy="122" rx="7" ry="5" transform="rotate(10 64 122)" />
        <ellipse cx="202" cy="70" rx="7" ry="5" transform="rotate(-14 202 70)" />
      </g>
      <g fill="#ffe89a">
        <path d="M90 88c-6-8-4-10 2-10 4 4 6 8 6 12z" />
        <path d="M134 58c-6-8-4-10 2-10 4 4 6 8 6 12z" />
        <path d="M172 100c-6-8-4-10 2-10 4 4 6 8 6 12z" />
        <path d="M112 132c-6-8-4-10 2-10 4 4 6 8 6 12z" />
      </g>
      <g stroke="#3a2a1c" strokeWidth="2" strokeDasharray="4 7" fill="none" opacity="0.5">
        <path d="M84 110c-12 14-4 30 12 32" />
        <path d="M150 120c14 8 14 26 0 34" />
      </g>
    </svg>
  );
}
