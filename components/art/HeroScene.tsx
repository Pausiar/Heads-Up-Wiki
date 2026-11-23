export function HeroScene({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 760"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="hero-sky" x1="0" y1="0" x2="0.1" y2="1">
          <stop offset="0" stopColor="#79c7ee" />
          <stop offset="0.55" stopColor="#b8e6fa" />
          <stop offset="1" stopColor="#e6f7ff" />
        </linearGradient>
        <radialGradient id="hero-sun" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#fff6c9" />
          <stop offset="0.5" stopColor="#ffe89a" stopOpacity="0.65" />
          <stop offset="1" stopColor="#ffe89a" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hero-hill-far" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#8fc97a" />
          <stop offset="1" stopColor="#5aa552" />
        </linearGradient>
        <linearGradient id="hero-hill-mid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#6cb45c" />
          <stop offset="1" stopColor="#3f8a3c" />
        </linearGradient>
        <linearGradient id="hero-path" x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0" stopColor="#e0b573" />
          <stop offset="1" stopColor="#b98a4e" />
        </linearGradient>
      </defs>

      <rect width="1440" height="760" fill="url(#hero-sky)" />
      <circle cx="1180" cy="120" r="180" fill="url(#hero-sun)" />
      <circle cx="1180" cy="120" r="54" fill="#fff3b0" />

      <g fill="#ffffff" opacity="0.94">
        <ellipse cx="240" cy="122" rx="62" ry="28" />
        <ellipse cx="198" cy="134" rx="40" ry="20" />
        <ellipse cx="288" cy="136" rx="46" ry="22" />
        <ellipse cx="252" cy="104" rx="34" ry="22" />

        <ellipse cx="980" cy="80" rx="52" ry="22" />
        <ellipse cx="1018" cy="90" rx="38" ry="17" />
        <ellipse cx="944" cy="92" rx="30" ry="15" />

        <ellipse cx="660" cy="150" rx="46" ry="19" />
        <ellipse cx="700" cy="158" rx="32" ry="14" />
      </g>

      {/* distant mountains */}
      <path d="M760 430L960 218l150 176 90-108 200 148z" fill="#9dbcc2" opacity="0.7" />
      <path d="M960 218l56 66-30 18-26-16-24 22z" fill="#cfe1e2" opacity="0.9" />

      {/* hills */}
      <path d="M-40 470c150-110 320-140 480-92 140-84 300-88 460-30 150-56 340-36 570 60v400H-40z" fill="url(#hero-hill-far)" />
      <path d="M-40 540c140-80 300-94 470-44 160-58 340-52 520 10 170-44 320-32 500 34v300H-40z" fill="url(#hero-hill-mid)" />

      {/* gas station in the distance */}
      <g transform="translate(1170 250) scale(0.6)">
        <ellipse cx="120" cy="196" rx="150" ry="22" fill="#2f6b34" opacity="0.35" />
        <rect x="20" y="110" width="12" height="86" fill="#b8402f" />
        <rect x="208" y="110" width="12" height="86" fill="#b8402f" />
        <rect x="6" y="86" width="232" height="22" rx="6" fill="#fdfaf2" stroke="#c9c3b4" strokeWidth="3" />
        <rect x="6" y="86" width="232" height="10" rx="5" fill="#d9483b" />
        <rect x="6" y="96" width="232" height="8" fill="#f4f1e8" />
        <g transform="translate(74 128)">
          <rect x="0" y="0" width="26" height="52" rx="4" fill="#f4f1e8" stroke="#8f8674" strokeWidth="3" />
          <rect x="4" y="6" width="18" height="16" rx="2" fill="#3b2a1a" />
          <path d="M0 42h26" stroke="#d9483b" strokeWidth="4" />
        </g>
        <g transform="translate(148 128)">
          <rect x="0" y="0" width="26" height="52" rx="4" fill="#f4f1e8" stroke="#8f8674" strokeWidth="3" />
          <rect x="4" y="6" width="18" height="16" rx="2" fill="#3b2a1a" />
          <path d="M0 42h26" stroke="#8ec93f" strokeWidth="4" />
        </g>
        <g transform="translate(268 60)">
          <rect x="-4" y="30" width="8" height="120" fill="#8f8674" />
          <rect x="-28" y="0" width="56" height="40" rx="5" fill="#fdfaf2" stroke="#8f8674" strokeWidth="3" />
          <rect x="-28" y="0" width="56" height="13" rx="4" fill="#d9483b" />
          <path d="M-12 24l6-10h8l-6 10z" fill="#3b2a1a" transform="translate(0 -4)" />
          <text x="6" y="29" textAnchor="middle" fontSize="12" fontFamily="var(--font-display), sans-serif" fontWeight="800" fill="#3b2a1a">GAS</text>
        </g>
      </g>

      {/* path to the station */}
      <path
        d="M600 760c60-116 210-150 330-188 120-38 200-84 236-166l-64-20c-40 84-116 128-226 164-140 46-266 82-330 210z"
        fill="url(#hero-path)"
        opacity="0.95"
      />
      <path d="M612 760c62-112 208-146 326-184 118-38 196-84 232-164" fill="none" stroke="#f0d3a1" strokeWidth="6" opacity="0.5" />

      {/* mid trees */}
      <g>
        <Tree x={540} y={560} s={1.5} />
        <Tree x={880} y={586} s={1.3} />
        <Tree x={1240} y={520} s={1.2} />
        <Tree x={1010} y={556} s={1.05} />
        <Pine x={720} y={520} s={0.9} />
        <Pine x={1330} y={560} s={1.1} />
      </g>

      {/* big framing trees */}
      <g>
        <rect x="74" y="300" width="46" height="460" rx="14" fill="#6b4426" />
        <path d="M96 350c-8 40-6 90-2 130" stroke="#4a2d17" strokeWidth="6" opacity="0.5" fill="none" />
        <path d="M0 300c40-60 90-90 150-96 60-6 110 18 150 62-40 46-96 70-160 70-58 0-100-14-140-36z" fill="#3f8a3c" />
        <path d="M0 366c50-38 110-48 176-30 40 12 70 34 90 62-50 34-120 42-186 24-38-10-64-30-80-56z" fill="#4f9c48" />
        <path d="M40 214c30-24 70-30 108-18 36 12 56 36 60 66-42 12-88 2-124-18-22-12-38-20-44-30z" fill="#57a54a" />
      </g>

      {/* canopy strip on top */}
      <g fill="#2f6b34">
        <ellipse cx="300" cy="-30" rx="260" ry="120" />
        <ellipse cx="700" cy="-70" rx="280" ry="120" />
        <ellipse cx="1120" cy="-40" rx="240" ry="110" />
        <ellipse cx="1420" cy="-20" rx="200" ry="120" />
      </g>
      <g fill="#4f9c48" opacity="0.9">
        <ellipse cx="420" cy="6" rx="150" ry="60" />
        <ellipse cx="980" cy="-2" rx="170" ry="56" />
        <ellipse cx="1300" cy="10" rx="140" ry="52" />
      </g>

      {/* broken van */}
      <g transform="translate(70 545) scale(0.92)">
        <ellipse cx="112" cy="132" rx="128" ry="20" fill="#1d3a20" opacity="0.4" />
        <path d="M8 58c0-12 10-22 22-22h120l50 28v52c0 10-8 18-18 18H26c-10 0-18-8-18-18z" fill="#d9483b" stroke="#7a2a1f" strokeWidth="5" />
        <path d="M8 58c0-12 10-22 22-22h120l50 28v10H8z" fill="#e9665a" opacity="0.65" />
        <rect x="44" y="46" width="52" height="38" rx="6" fill="#a8e2f7" stroke="#7a2a1f" strokeWidth="4" />
        <rect x="106" y="46" width="44" height="38" rx="6" fill="#a8e2f7" stroke="#7a2a1f" strokeWidth="4" />
        <path d="M100 46v38" stroke="#7a2a1f" strokeWidth="4" />
        <rect x="8" y="94" width="192" height="12" fill="#b8402f" opacity="0.7" />
        <circle cx="52" cy="124" r="22" fill="#3a3f46" stroke="#20252b" strokeWidth="5" />
        <circle cx="52" cy="124" r="9" fill="#9aa3ad" />
        <circle cx="164" cy="124" r="22" fill="#3a3f46" stroke="#20252b" strokeWidth="5" />
        <circle cx="164" cy="124" r="9" fill="#9aa3ad" />
        <rect x="182" y="72" width="34" height="18" rx="6" fill="#ffe89a" stroke="#7a2a1f" strokeWidth="4" />
        <path d="M8 74h20v16H8z" fill="#ffe89a" opacity="0.9" />
        {/* open hood */}
        <g transform="translate(12 20) rotate(-24)">
          <rect x="0" y="0" width="86" height="12" rx="5" fill="#c73427" stroke="#7a2a1f" strokeWidth="4" />
        </g>
        <path d="M20 34h70v26H20z" fill="#3a2a1c" opacity="0.8" />
        <path d="M28 40h18v14H28zM52 40h24v14H52z" fill="#5c6470" />
        {/* smoke */}
        <g fill="#f2f3f5" opacity="0.85">
          <circle cx="46" cy="18" r="16" />
          <circle cx="62" cy="-6" r="21" />
          <circle cx="90" cy="-30" r="16" opacity="0.8" />
          <circle cx="110" cy="-52" r="11" opacity="0.55" />
        </g>
      </g>

      {/* giant rubber duck */}
      <g transform="translate(1248 548) scale(1.25)" opacity="0.98">
        <ellipse cx="40" cy="96" rx="66" ry="12" fill="#1d3a20" opacity="0.35" />
        <ellipse cx="40" cy="62" rx="46" ry="30" fill="#ffd23f" stroke="#4a2e17" strokeWidth="4" />
        <circle cx="20" cy="30" r="25" fill="#ffd23f" stroke="#4a2e17" strokeWidth="4" />
        <path d="M-6 28c-12 0-20 5-20 12s10 8 22 5z" fill="#ef822c" stroke="#4a2e17" strokeWidth="4" strokeLinejoin="round" />
        <circle cx="14" cy="24" r="4.5" fill="#382716" />
        <circle cx="15.5" cy="22.5" r="1.6" fill="#fff8e6" />
        <path d="M-14 30c6 3 12 4 18 3" fill="none" stroke="#4a2e17" strokeWidth="2.5" opacity="0.6" />
        <path d="M16 88c6 10 24 12 36 4" fill="none" stroke="#e0a417" strokeWidth="4" strokeLinecap="round" />
      </g>

      {/* foreground */}
      <path d="M-20 640c120-40 240-36 370 6 120 38 250 34 380-10 130-44 250-42 380 6 100 36 190 34 330 0v130H-20z" fill="#2f6b34" />
      <path d="M-20 690c140-28 280-18 420 14 140 32 300 26 440-12 120-32 230-30 620 12v66H-20z" fill="#1f4d28" />

      <g>
        <Mushroom x={180} y={700} s={2.1} />
        <Mushroom x={244} y={726} s={1.4} />
        <Mushroom x={124} y={742} s={1.1} />
        <Mushroom x={1310} y={706} s={1.8} />
        <Mushroom x={1374} y={734} s={1.2} />
        <Rock x={430} y={720} s={2} />
        <Rock x={1160} y={742} s={1.5} />
        <Rock x={60} y={716} s={1.4} />
      </g>

      <g stroke="#8ec93f" strokeWidth="6" strokeLinecap="round" fill="none">
        <path d="M520 742c-6-22-20-34-36-40" />
        <path d="M528 742c0-26 4-44 14-58" />
        <path d="M536 742c12-18 26-26 42-30" />
        <path d="M880 752c-6-20-18-30-32-36" />
        <path d="M888 752c0-24 6-40 16-52" />
        <path d="M896 752c10-16 22-24 36-26" />
      </g>

      <g fill="#fff8e6">
        <Flower x={340} y={736} />
        <Flower x={700} y={752} />
        <Flower x={1040} y={748} />
        <Flower x={1490} y={730} />
      </g>

      {/* wooden arrow sign */}
      <g transform="translate(1128 452)">
        <rect x="26" y="54" width="14" height="130" rx="4" fill="#7a4a26" stroke="#4a2d17" strokeWidth="4" />
        <path d="M0 6h96l26 24-26 24H0z" fill="#c98a4b" stroke="#5b3b1e" strokeWidth="4" />
        <path d="M18 22h52M18 34h38" stroke="#8a5a32" strokeWidth="4" strokeLinecap="round" opacity="0.7" />
      </g>
    </svg>
  );
}

function Tree({ x, y, s = 1, light = "#4f9c48", dark = "#2f6b34" }: { x: number; y: number; s?: number; light?: string; dark?: string }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <path d="M-10 0h20l-3-70h-14z" fill="#7a4a26" stroke="#4a2d17" strokeWidth="2" />
      <circle cx="-26" cy="-74" r="32" fill={dark} />
      <circle cx="24" cy="-82" r="34" fill={light} />
      <circle cx="0" cy="-104" r="30" fill={light} />
      <circle cx="-6" cy="-82" r="22" fill={dark} opacity="0.55" />
    </g>
  );
}

function Pine({ x, y, s = 1, tone = "#2c6234" }: { x: number; y: number; s?: number; tone?: string }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <rect x="-5" y="-32" width="10" height="32" fill="#5b3b1e" />
      <path d="M0-150l38 52H-38z" fill={tone} />
      <path d="M0-112l46 56H-46z" fill={tone} />
      <path d="M0-72l54 58H-54z" fill={tone} />
      <path d="M0-150l18 26h-36z" fill="#3d7d3f" opacity="0.65" />
    </g>
  );
}

function Mushroom({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <path d="M-7 0h14l-2-18h-10z" fill="#f7e7c6" stroke="#6b4426" strokeWidth="2" />
      <path d="M-22-18c0-12 10-21 22-21s22 9 22 21z" fill="#d9483b" stroke="#8f2a22" strokeWidth="2.4" />
      <circle cx="-9" cy="-27" r="3.6" fill="#fdf4df" />
      <circle cx="10" cy="-23" r="2.8" fill="#fdf4df" />
      <circle cx="2" cy="-33" r="2.2" fill="#fdf4df" />
    </g>
  );
}

function Rock({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <path d="M-24 0c-6-12 1-24 14-27 8-2 13-7 20-5 9 2 15 11 13 19 0 5 4 9 1 13z" fill="#8b93a0" stroke="#5c6470" strokeWidth="2.5" />
      <path d="M-11-21c6-5 13-5 19-9" stroke="#b9c0c9" strokeWidth="3" fill="none" />
    </g>
  );
}

function Flower({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d="M0 0v-16" stroke="#4f9c48" strokeWidth="3" />
      <circle cx="-6" cy="-20" r="4" />
      <circle cx="6" cy="-20" r="4" />
      <circle cx="0" cy="-26" r="4" />
      <circle cx="0" cy="-20" r="2.6" fill="#ffc93c" />
    </g>
  );
}
