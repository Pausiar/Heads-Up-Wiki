import type { ItemArtKey } from "@/lib/content/types";

const ink = "#3b2a1a";

const itemLabels: Record<ItemArtKey, string> = {
  sarten: "Sartén",
  paraguas: "Paraguas abierto",
  cubo: "Cubo de plástico",
  "casco-de-obra": "Casco de obra amarillo",
  "bebida-energetica": "Lata de bebida energética",
  bocadillo: "Bocadillo",
  cerbatana: "Cerbatana",
  linterna: "Linterna",
  petardo: "Petardo con mecha",
  silbato: "Silbato",
  "cascara-de-platano": "Cáscara de plátano",
  cuerda: "Cuerda enrollada",
};

export function ItemArt({
  art,
  className,
  decorative = false,
}: {
  art: ItemArtKey;
  className?: string;
  decorative?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role={decorative ? "presentation" : "img"}
      aria-label={decorative ? undefined : itemLabels[art]}
      aria-hidden={decorative ? true : undefined}
      fill="none"
      strokeLinejoin="round"
      strokeLinecap="round"
    >
      {art === "sarten" && <Pan />}
      {art === "paraguas" && <Umbrella />}
      {art === "cubo" && <Bucket />}
      {art === "casco-de-obra" && <HardHat />}
      {art === "bebida-energetica" && <EnergyDrink />}
      {art === "bocadillo" && <Sandwich />}
      {art === "cerbatana" && <Blowpipe />}
      {art === "linterna" && <Flashlight />}
      {art === "petardo" && <Firecracker />}
      {art === "silbato" && <Whistle />}
      {art === "cascara-de-platano" && <BananaPeel />}
      {art === "cuerda" && <Rope />}
    </svg>
  );
}

function Pan() {
  return (
    <g>
      <circle cx="26" cy="38" r="17" fill="#4a4f57" stroke={ink} strokeWidth="3" />
      <circle cx="26" cy="38" r="11" fill="#fdf6e6" stroke={ink} strokeWidth="2" />
      <circle cx="26" cy="38" r="5" fill="#ffc93c" stroke={ink} strokeWidth="2" />
      <path d="M42 30l12-10 5 4-11 12z" fill="#8a4b22" stroke={ink} strokeWidth="3" />
      <path d="M16 28c3-4 8-6 12-6" stroke="#9aa3ad" strokeWidth="3" />
    </g>
  );
}

function Umbrella() {
  return (
    <g>
      <path d="M8 30c2-12 11-20 23-20s21 8 23 20c-5-4-9-4-12 0-4-4-8-4-11 0-3-4-7-4-11 0-3-4-7-4-12 0z" fill="#d9483b" stroke={ink} strokeWidth="3" />
      <path d="M31 10v6M20 14l2 6M42 14l-2 6" stroke={ink} strokeWidth="2" opacity="0.5" />
      <path d="M31 30v18c0 5 3 8 7 8s6-3 6-6" stroke="#6b4426" strokeWidth="4" />
      <path d="M6 12l-1 6M58 12l1 6" stroke="#3aa3d8" strokeWidth="3" strokeLinecap="round" />
    </g>
  );
}

function Bucket() {
  return (
    <g>
      <path d="M14 22h36l-5 32H19z" fill="#4aa8d8" stroke={ink} strokeWidth="3" />
      <path d="M15 30h34M17 38h30" stroke="#a8e2f7" strokeWidth="3" opacity="0.8" />
      <path d="M12 20h40" stroke={ink} strokeWidth="4" />
      <path d="M18 18c4-9 24-9 28 0" stroke="#d3b078" strokeWidth="3" />
      <path d="M22 47h20" stroke="#2b7fb0" strokeWidth="3" opacity="0.7" />
    </g>
  );
}

function HardHat() {
  return (
    <g>
      <path d="M12 40c0-12 8-22 20-22s20 10 20 22z" fill="#ffc93c" stroke={ink} strokeWidth="3" />
      <path d="M32 18v22" stroke="#e0a417" strokeWidth="3" />
      <path d="M7 40h50c1 5-3 8-8 8H15c-5 0-9-3-8-8z" fill="#ffd85e" stroke={ink} strokeWidth="3" />
      <path d="M20 30c2-5 6-8 10-9" stroke="#fff1b8" strokeWidth="3" />
    </g>
  );
}

function EnergyDrink() {
  return (
    <g>
      <rect x="22" y="12" width="20" height="40" rx="5" fill="#2f3a45" stroke={ink} strokeWidth="3" />
      <path d="M22 20h20v18H22z" fill="#8ec93f" />
      <path d="M30 24l-4 6h5l-3 7 8-9h-5l3-4z" fill="#1f3313" />
      <path d="M25 12h14v4H25z" fill="#c9d2da" stroke={ink} strokeWidth="2" />
      <path d="M28 16v36" stroke="#ffffff" strokeWidth="2" opacity="0.25" />
    </g>
  );
}

function Sandwich() {
  return (
    <g>
      <path d="M10 28h44l-6 22H16z" fill="#e0a95c" stroke={ink} strokeWidth="3" />
      <path d="M10 28c0-9 8-14 22-14s22 5 22 14z" fill="#f0c27d" stroke={ink} strokeWidth="3" />
      <path d="M14 33c8-5 28-5 36 0" stroke="#5aa23c" strokeWidth="4" />
      <path d="M18 38c8-4 20-4 28 0" stroke="#d9483b" strokeWidth="4" />
      <path d="M22 43c6-3 14-3 20 0" stroke="#ffd85e" strokeWidth="4" />
      <path d="M12 50h40" stroke={ink} strokeWidth="3" />
    </g>
  );
}

function Blowpipe() {
  return (
    <g>
      <path d="M8 48l40-30" stroke="#8a5a32" strokeWidth="6" />
      <path d="M8 48l40-30" stroke={ink} strokeWidth="2" opacity="0.5" />
      <path d="M44 20l10-6 4 6-10 5z" fill="#c9a86a" stroke={ink} strokeWidth="2" />
      <path d="M12 52l-4 6" stroke="#5b3b1e" strokeWidth="4" />
      <path d="M50 6l4 3-2 5-5-3z" fill="#8ec93f" stroke={ink} strokeWidth="2" />
      <g stroke="#8ec93f" strokeWidth="2" opacity="0.7">
        <path d="M52 2v-2M58 6h2" />
      </g>
    </g>
  );
}

function Flashlight() {
  return (
    <g>
      <rect x="14" y="24" width="26" height="16" rx="5" fill="#3f4a54" stroke={ink} strokeWidth="3" />
      <path d="M40 21l14 11-14 11z" fill="#ffd85e" stroke={ink} strokeWidth="3" />
      <path d="M40 25l8 7-8 7z" fill="#fff6d6" />
      <path d="M18 28h10" stroke="#8ec93f" strokeWidth="3" />
      <path d="M47 12l6-4M52 20h7M47 40l6 4" stroke="#ffd85e" strokeWidth="3" opacity="0.9" />
    </g>
  );
}

function Firecracker() {
  return (
    <g>
      <rect x="24" y="24" width="18" height="30" rx="4" fill="#d9483b" stroke={ink} strokeWidth="3" />
      <path d="M24 33h18M24 45h18" stroke="#f7e7c6" strokeWidth="4" />
      <path d="M33 24c0-8 4-12 10-13" stroke="#8a5a32" strokeWidth="3" />
      <g stroke="#ffc93c" strokeWidth="3">
        <path d="M43 11l3-5M48 16l6-2M40 6l-2-3" />
      </g>
      <circle cx="43" cy="11" r="3" fill="#ffe89a" />
    </g>
  );
}

function Whistle() {
  return (
    <g>
      <path d="M12 26h26a10 10 0 0 1 0 20H20a8 8 0 0 1-8-8z" fill="#c9d2da" stroke={ink} strokeWidth="3" />
      <circle cx="42" cy="36" r="6" fill="#8ec93f" stroke={ink} strokeWidth="3" />
      <rect x="12" y="30" width="8" height="8" rx="2" fill="#4a4f57" />
      <path d="M8 24c-4 0-6 3-6 6" stroke="#3aa3d8" strokeWidth="3" />
      <g stroke="#3aa3d8" strokeWidth="3" opacity="0.85">
        <path d="M52 20c5 3 7 8 7 14M58 14c7 5 10 12 10 20" />
      </g>
    </g>
  );
}

function BananaPeel() {
  return (
    <g>
      <path d="M32 12c10 4 16 14 14 24-2 8-8 14-14 16-2-6-1-12 2-16-4 2-8 8-8 14-8-4-12-12-10-20 2-10 8-16 16-18z" fill="#ffd85e" stroke={ink} strokeWidth="3" />
      <path d="M32 14v34" stroke="#e0a417" strokeWidth="2" opacity="0.7" />
      <path d="M20 24c4-4 8-6 12-6" stroke="#fff1b8" strokeWidth="3" />
      <path d="M36 52c5 0 8 2 9 5" stroke={ink} strokeWidth="3" />
      <path d="M28 52c-5 0-8 2-9 5" stroke={ink} strokeWidth="3" />
    </g>
  );
}

function Rope() {
  return (
    <g>
      <ellipse cx="32" cy="22" rx="20" ry="9" fill="#d3b078" stroke={ink} strokeWidth="3" />
      <ellipse cx="32" cy="22" rx="12" ry="4.5" fill="#8a5a32" />
      <path d="M12 22c0 16 4 28 20 32 16-4 20-16 20-32" stroke="#c9a86a" strokeWidth="7" />
      <path d="M12 22c0 16 4 28 20 32 16-4 20-16 20-32" stroke={ink} strokeWidth="2" opacity="0.35" strokeDasharray="5 5" />
      <path d="M24 50l-8 6M40 50l8 6" stroke="#c9a86a" strokeWidth="6" />
      <path d="M20 8c6-4 18-4 24 0" stroke="#f1dfba" strokeWidth="3" opacity="0.7" />
    </g>
  );
}
