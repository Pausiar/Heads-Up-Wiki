import type { ZoneArtKey } from "@/lib/content/types";

const zoneLabels: Record<ZoneArtKey, string> = {
  campamento: "Campamento con tiendas y una hoguera",
  "bosque-frondoso": "Bosque frondoso con caminos de tierra",
  "rio-puentes": "Río cruzado por puentes de madera",
  "cascada-barranco": "Cascada cayendo en un barranco",
  "montana-rocosa": "Montaña rocosa",
  pinar: "Pinar con camino",
  gasolinera: "Gasolinera al final del camino",
};

const skies: Record<ZoneArtKey, [string, string]> = {
  campamento: ["#7ecbf0", "#dff5ff"],
  "bosque-frondoso": ["#78c6ee", "#d7f2ff"],
  "rio-puentes": ["#82cff2", "#e2f7ff"],
  "cascada-barranco": ["#79bfe6", "#dcf4fb"],
  "montana-rocosa": ["#6fb8e0", "#e6f7ff"],
  pinar: ["#8bd0ea", "#e6f8ff"],
  gasolinera: ["#ffd28a", "#ffeecb"],
};

export function ZoneArt({
  art,
  className,
  decorative = false,
}: {
  art: ZoneArtKey;
  className?: string;
  decorative?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 640 360"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      role={decorative ? "presentation" : "img"}
      aria-label={decorative ? undefined : zoneLabels[art]}
      aria-hidden={decorative ? true : undefined}
    >
      <defs>
        <linearGradient id={`zone-${art}-sky`} x1="0" y1="0" x2="0.15" y2="1">
          <stop offset="0" stopColor={skies[art][0]} />
          <stop offset="1" stopColor={skies[art][1]} />
        </linearGradient>
        <linearGradient id={`zone-${art}-water`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#7fd0ef" />
          <stop offset="1" stopColor="#2b7fb0" />
        </linearGradient>
      </defs>

      <rect width="640" height="360" fill={`url(#zone-${art}-sky)`} />
      {art === "gasolinera" ? (
        <circle cx="520" cy="72" r="34" fill="#fff1b8" opacity="0.95" />
      ) : (
        <g>
          <circle cx="520" cy="66" r="40" fill="#ffe89a" opacity="0.55" />
          <circle cx="520" cy="66" r="24" fill="#fff3b0" />
        </g>
      )}
      <Cloud x={90} y={62} s={1.1} />
      <Cloud x={330} y={40} s={0.8} />
      <Cloud x={250} y={96} s={0.6} />

      {/* distant hills */}
      <path d="M0 232c70-46 130-58 200-32 60-40 120-40 180-10 60-34 140-30 260 14v156H0z" fill="#79b85e" opacity="0.65" />
      <path d="M0 262c86-34 160-34 240-6 80-30 180-26 260 4 50-18 96-16 140-4v104H0z" fill="#4f9c48" />

      {art === "campamento" && <CampScene />}
      {art === "bosque-frondoso" && <ForestScene />}
      {art === "rio-puentes" && <RiverScene />}
      {art === "cascada-barranco" && <WaterfallScene />}
      {art === "montana-rocosa" && <MountainScene />}
      {art === "pinar" && <PineScene />}
      {art === "gasolinera" && <StationScene />}

      {/* ground band */}
      <path d="M0 300c80-14 150-8 230 2s180 8 260-2 110-6 150-2v62H0z" fill="#3f8a3c" />
      <path d="M0 326c90-10 180-6 270 2s180 6 260-4 90-4 110-2v38H0z" fill="#2f6b34" />
      <GrassTuft x={44} y={352} />
      <GrassTuft x={214} y={356} />
      <GrassTuft x={560} y={352} flip />
      <Mushroom x={92} y={336} s={0.9} />
      <Mushroom x={604} y={340} s={0.7} />
      <Rock x={380} y={344} s={0.8} />
    </svg>
  );
}

function Cloud({ x, y, s }: { x: number; y: number; s: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`} fill="#ffffff" opacity="0.92">
      <ellipse cx="0" cy="6" rx="30" ry="14" />
      <ellipse cx="-20" cy="10" rx="18" ry="10" />
      <ellipse cx="20" cy="10" rx="22" ry="11" />
      <ellipse cx="4" cy="-4" rx="18" ry="12" />
    </g>
  );
}

function Tree({ x, y, s = 1, light = "#4f9c48", dark = "#2f6b34" }: { x: number; y: number; s?: number; light?: string; dark?: string }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <path d="M-9 0h18l-3-54h-12z" fill="#7a4a26" stroke="#4a2d17" strokeWidth="2" />
      <circle cx="-20" cy="-58" r="24" fill={dark} />
      <circle cx="18" cy="-64" r="26" fill={light} />
      <circle cx="0" cy="-82" r="24" fill={light} />
      <circle cx="-4" cy="-64" r="18" fill={dark} opacity="0.6" />
    </g>
  );
}

function Pine({ x, y, s = 1, tone = "#2c6234" }: { x: number; y: number; s?: number; tone?: string }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <rect x="-4" y="-26" width="8" height="26" fill="#5b3b1e" />
      <path d="M0-118l30 42H-30z" fill={tone} />
      <path d="M0-88l36 44H-36z" fill={tone} />
      <path d="M0-56l42 46H-42z" fill={tone} />
      <path d="M0-118l14 20h-28z" fill="#3d7d3f" opacity="0.7" />
    </g>
  );
}

function Mushroom({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <path d="M-5 0h10l-1-12h-8z" fill="#f7e7c6" stroke="#6b4426" strokeWidth="1.6" />
      <path d="M-16-12c0-9 7-15 16-15s16 6 16 15z" fill="#d9483b" stroke="#8f2a22" strokeWidth="1.8" />
      <circle cx="-7" cy="-19" r="2.6" fill="#fdf4df" />
      <circle cx="7" cy="-16" r="2" fill="#fdf4df" />
    </g>
  );
}

function Rock({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <path d="M-18 0c-4-9 1-18 10-20 6-2 10-5 15-4 7 1 11 8 10 14 0 4 3 7 1 10z" fill="#8b93a0" stroke="#5c6470" strokeWidth="2" />
      <path d="M-8-16c4-4 10-4 14-7" stroke="#b9c0c9" strokeWidth="2.4" fill="none" />
    </g>
  );
}

function GrassTuft({ x, y, flip = false }: { x: number; y: number; flip?: boolean }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${flip ? -1 : 1} 1)`} stroke="#8ec93f" strokeWidth="3" strokeLinecap="round" fill="none">
      <path d="M0 0c-2-9-7-14-13-17" />
      <path d="M2 0c0-11 2-18 6-23" />
      <path d="M4 0c5-7 11-11 16-12" />
    </g>
  );
}

function CampScene() {
  return (
    <g>
      <Tree x={70} y={300} s={1.2} />
      <Tree x={580} y={296} s={1.5} />
      <Pine x={150} y={286} s={0.8} />
      <Pine x={520} y={282} s={0.7} />
      {/* tent left */}
      <g transform="translate(200 300)">
        <path d="M0 0l56-84 56 84z" fill="#e08a4a" stroke="#7a4a26" strokeWidth="4" />
        <path d="M56-84l18 84H38z" fill="#c96f33" />
        <path d="M56-18l20 18H36z" fill="#4a2e17" opacity="0.85" />
        <path d="M56-84l0 84" stroke="#7a4a26" strokeWidth="3" />
      </g>
      {/* tent right */}
      <g transform="translate(390 300) scale(0.8)">
        <path d="M0 0l56-84 56 84z" fill="#5aa23c" stroke="#2f6b34" strokeWidth="4" />
        <path d="M56-84l14 84H42z" fill="#3f8032" />
        <path d="M56-16l18 16H38z" fill="#2a2018" opacity="0.8" />
      </g>
      {/* campfire */}
      <g transform="translate(330 312)">
        <ellipse cx="0" cy="4" rx="34" ry="9" fill="#2a2018" opacity="0.35" />
        <path d="M-24 2l48-8M-24-6l48 8" stroke="#7a4a26" strokeWidth="7" strokeLinecap="round" />
        <path d="M0-6c-10-14-2-24 4-34 2 12 12 16 10 28 0 5-6 8-14 6z" fill="#ef822c" />
        <path d="M0-6c-5-8-1-14 3-20 1 7 6 9 5 16 0 3-4 5-8 4z" fill="#ffd85e" />
      </g>
      <Mushroom x={110} y={330} s={1.1} />
      <Rock x={470} y={336} s={0.9} />
    </g>
  );
}

function ForestScene() {
  return (
    <g>
      <Tree x={40} y={310} s={1.5} light="#57a04a" />
      <Tree x={150} y={300} s={1.1} />
      <Tree x={260} y={312} s={1.4} light="#4f9c48" />
      <Tree x={400} y={302} s={1.2} />
      <Tree x={520} y={314} s={1.5} />
      <Tree x={610} y={300} s={1.1} />
      <path d="M270 360c-16-30 24-44 34-70 8-22 34-30 56-24l40 14c-30 18-36 48-62 62-20 12-46 10-68 18z" fill="#c9a86a" opacity="0.85" />
      <path d="M300 350c6-16 26-24 36-40" stroke="#b08f61" strokeWidth="6" strokeLinecap="round" fill="none" opacity="0.7" />
      <g fill="#2f6b34" opacity="0.7">
        <ellipse cx="330" cy="264" rx="42" ry="18" />
        <ellipse cx="470" cy="272" rx="36" ry="15" />
      </g>
      <Mushroom x={180} y={338} s={1} />
      <Mushroom x={210} y={346} s={0.6} />
      <Rock x={570} y={342} s={0.9} />
    </g>
  );
}

function RiverScene() {
  return (
    <g>
      <Tree x={50} y={288} s={1.2} />
      <Tree x={590} y={284} s={1.3} />
      <Pine x={140} y={278} s={0.7} />
      <Pine x={500} y={274} s={0.6} />
      <path d="M0 268h640v56H0z" fill="url(#zone-rio-puentes-water)" />
      <path d="M0 268c60-8 120-6 180 0s120 6 180 0 180-8 280 0v10c-100-8-180-4-280 4s-120 4-180-2-120-4-180 4z" fill="#a8e2f7" opacity="0.7" />
      <g stroke="#dff5ff" strokeWidth="4" strokeLinecap="round" opacity="0.85" fill="none">
        <path d="M80 292c16-6 32-6 48 0s32 6 48 0" />
        <path d="M300 306c16-6 32-6 48 0s32 6 48 0" />
        <path d="M470 288c16-6 32-6 48 0s32 6 48 0" />
      </g>
      {/* bridge */}
      <g transform="translate(180 236)">
        <path d="M0 60c40-46 120-46 160 0" fill="none" stroke="#7a4a26" strokeWidth="10" />
        <path d="M-8 62h176" stroke="#8f5327" strokeWidth="7" strokeLinecap="round" />
        <g stroke="#a9632f" strokeWidth="4">
          <path d="M0 56v14M20 40v26M40 30v30M80 24v34M120 30v30M140 40v26M160 56v14" />
        </g>
        <g stroke="#5b3b1e" strokeWidth="3">
          <path d="M0 38v18M160 38v18" />
        </g>
      </g>
      <Rock x={420} y={336} s={1.1} />
      <Mushroom x={540} y={332} s={0.8} />
    </g>
  );
}

function WaterfallScene() {
  return (
    <g>
      <Tree x={50} y={300} s={1.2} />
      <Pine x={600} y={288} s={1} />
      {/* cliff */}
      <path d="M330 240c60-40 160-46 250-18 40 12 60 30 60 44v86H300c-6-30 0-84 30-112z" fill="#7d7461" />
      <path d="M360 258c50-26 130-30 200-10 34 10 54 28 60 44H340c2-14 8-24 20-34z" fill="#8f8674" />
      <path d="M400 250l-20 34M470 240l-10 46M540 250l6 38" stroke="#6b6353" strokeWidth="5" strokeLinecap="round" opacity="0.8" />
      {/* waterfall */}
      <path d="M430 236h54l-8 62h-40z" fill="#7fd0ef" opacity="0.9" />
      <path d="M438 236h16l-6 60h-12z" fill="#dff5ff" opacity="0.8" />
      <path d="M462 240h12l-4 56h-10z" fill="#dff5ff" opacity="0.7" />
      <ellipse cx="456" cy="306" rx="60" ry="18" fill="#a8e2f7" opacity="0.9" />
      <g fill="#dff5ff" opacity="0.8">
        <circle cx="420" cy="296" r="6" />
        <circle cx="492" cy="300" r="5" />
        <circle cx="452" cy="286" r="4" />
      </g>
      {/* barranco */}
      <path d="M120 360c0-26 12-48 40-62 18-8 34-10 50-8-10 24-18 46-30 70z" fill="#6b6353" />
      <path d="M150 360c0-18 10-32 28-42" stroke="#8f8674" strokeWidth="8" fill="none" />
      <Mushroom x={250} y={334} s={0.9} />
      <Rock x={560} y={336} s={1} />
    </g>
  );
}

function MountainScene() {
  return (
    <g>
      <path d="M120 300L280 92l120 148 70-86 130 146z" fill="#8b93a0" />
      <path d="M280 92l60 74-34 22-30-20-24 24z" fill="#b9c0c9" />
      <path d="M280 92l-72 132 42-16 28 22 26-24 32 18z" fill="#767e8b" />
      <path d="M400 240l70-86 90 100z" fill="#6d7681" />
      <path d="M120 300c40-14 80-12 120 4" stroke="#6d7681" strokeWidth="6" fill="none" opacity="0.6" />
      <Pine x={80} y={302} s={0.9} tone="#2c6234" />
      <Pine x={560} y={300} s={0.8} />
      <Rock x={180} y={338} s={1.6} />
      <Rock x={480} y={342} s={1.2} />
      <Rock x={420} y={352} s={0.8} />
    </g>
  );
}

function PineScene() {
  return (
    <g>
      <g opacity="0.95">
        <Pine x={60} y={308} s={1.4} tone="#255a2e" />
        <Pine x={140} y={300} s={1} />
        <Pine x={210} y={312} s={1.5} tone="#2c6234" />
        <Pine x={300} y={298} s={1.1} tone="#255a2e" />
        <Pine x={420} y={306} s={1.4} />
        <Pine x={510} y={300} s={1} tone="#255a2e" />
        <Pine x={590} y={312} s={1.5} tone="#2c6234" />
      </g>
      <path d="M240 360c26-30 60-42 100-50 30-6 60-4 90 6-40 12-76 26-110 44z" fill="#c9a86a" opacity="0.9" />
      <Rock x={120} y={344} s={0.9} />
      <Mushroom x={380} y={340} s={0.8} />
      <Mushroom x={400} y={348} s={0.5} />
    </g>
  );
}

function StationScene() {
  return (
    <g>
      <path d="M180 360c40-46 120-60 200-58 70 2 130 16 170 40v18z" fill="#6f8a6a" opacity="0.6" />
      <Tree x={60} y={288} s={1} />
      <Tree x={590} y={284} s={1.1} />
      {/* canopy */}
      <g transform="translate(300 196)">
        <rect x="0" y="30" width="220" height="18" rx="6" fill="#f4f1e8" stroke="#6b6353" strokeWidth="3" />
        <rect x="0" y="14" width="220" height="20" rx="6" fill="#fdfaf2" stroke="#8f8674" strokeWidth="3" />
        <rect x="0" y="14" width="220" height="8" rx="4" fill="#d9483b" />
        <rect x="18" y="48" width="12" height="56" fill="#d9483b" />
        <rect x="190" y="48" width="12" height="56" fill="#d9483b" />
        {/* pumps */}
        <g transform="translate(64 62)">
          <rect x="0" y="0" width="34" height="44" rx="4" fill="#f4f1e8" stroke="#6b6353" strokeWidth="3" />
          <rect x="4" y="6" width="26" height="14" rx="2" fill="#3b2a1a" />
          <path d="M0 34h34" stroke="#d9483b" strokeWidth="4" />
          <path d="M34 14h8v18h-8" stroke="#5c6470" strokeWidth="3" fill="none" />
        </g>
        <g transform="translate(136 62)">
          <rect x="0" y="0" width="34" height="44" rx="4" fill="#f4f1e8" stroke="#6b6353" strokeWidth="3" />
          <rect x="4" y="6" width="26" height="14" rx="2" fill="#3b2a1a" />
          <path d="M0 34h34" stroke="#8ec93f" strokeWidth="4" />
          <path d="M34 14h8v18h-8" stroke="#5c6470" strokeWidth="3" fill="none" />
        </g>
      </g>
      {/* price sign */}
      <g transform="translate(536 206)">
        <rect x="-4" y="30" width="8" height="96" fill="#8f8674" />
        <rect x="-30" y="0" width="60" height="40" rx="6" fill="#fdfaf2" stroke="#6b6353" strokeWidth="3" />
        <rect x="-30" y="0" width="60" height="14" rx="5" fill="#d9483b" />
        <text x="0" y="31" textAnchor="middle" fontSize="15" fontFamily="var(--font-display), sans-serif" fontWeight="800" fill="#3b2a1a">1,99</text>
      </g>
      <Mushroom x={130} y={340} s={0.9} />
      <Rock x={240} y={348} s={0.8} />
    </g>
  );
}
