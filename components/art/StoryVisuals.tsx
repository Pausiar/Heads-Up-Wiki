import Link from "next/link";
import { zones } from "@/lib/content/guide";
import { ZoneArt } from "./ZoneArt";
import { Icon } from "@/components/ui/Icon";

export function DayNightDial() {
  return (
    <svg
      viewBox="0 0 640 250"
      className="w-full"
      role="img"
      aria-label="Ciclo de día y noche: siete minutos de día y siete minutos de noche"
    >
      <defs>
        <linearGradient id="dial-day" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#8ed7f6" />
          <stop offset="1" stopColor="#dff5ff" />
        </linearGradient>
        <linearGradient id="dial-night" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1b3550" />
          <stop offset="1" stopColor="#2e5a4a" />
        </linearGradient>
      </defs>

      <g>
        <rect x="8" y="14" width="272" height="196" rx="26" fill="url(#dial-day)" stroke="#4a2e17" strokeWidth="5" />
        <circle cx="212" cy="66" r="34" fill="#ffe89a" opacity="0.5" />
        <circle cx="212" cy="66" r="22" fill="#fff3b0" stroke="#e0a417" strokeWidth="3" />
        <g stroke="#e0a417" strokeWidth="4" strokeLinecap="round">
          <path d="M212 30v-8M212 110v8M176 66h-8M256 66h8M186 40l-6-6M244 98l6 6M238 40l6-6M186 92l-6 6" />
        </g>
        <path d="M8 168c46-22 92-22 136-4 44-18 90-16 136 4v46H8z" fill="#7fbf62" opacity="0.9" />
        <path d="M8 190c50-14 100-12 150 2 40-10 80-8 122 4v14H8z" fill="#4f9c48" />
        <rect x="34" y="178" width="8" height="34" fill="#6b4426" />
        <circle cx="38" cy="172" r="17" fill="#2f6b34" />
        <text x="40" y="58" fontFamily="var(--font-display), sans-serif" fontSize="17" fontWeight="800" fill="#4a2e17">
          DÍA
        </text>
        <text x="40" y="90" fontFamily="var(--font-display), sans-serif" fontSize="34" fontWeight="800" fill="#4a2e17">
          7 min
        </text>
      </g>

      <g>
        <rect x="360" y="14" width="272" height="196" rx="26" fill="url(#dial-night)" stroke="#4a2e17" strokeWidth="5" />
        <circle cx="430" cy="64" r="20" fill="#f6f0cd" />
        <circle cx="422" cy="58" r="16" fill="#2e5a4a" />
        <g fill="#fdf7d8">
          <circle cx="500" cy="46" r="2.6" />
          <circle cx="546" cy="72" r="2.2" />
          <circle cx="474" cy="88" r="2" />
          <circle cx="586" cy="44" r="2.4" />
          <circle cx="520" cy="28" r="1.8" />
        </g>
        <path d="M360 168c46-22 92-22 136-4 44-18 90-16 136 4v46H360z" fill="#1d3f2a" />
        <path d="M360 190c50-14 100-12 150 2 40-10 80-8 122 4v14H360z" fill="#122d1d" />
        <g fill="#0f2415">
          <path d="M566 206l16-46 16 46z" />
          <path d="M580 206l14-36 14 36z" />
        </g>
        <text x="392" y="150" fontFamily="var(--font-display), sans-serif" fontSize="17" fontWeight="800" fill="#e6f7ff">
          NOCHE
        </text>
        <text x="392" y="182" fontFamily="var(--font-display), sans-serif" fontSize="34" fontWeight="800" fill="#ffffff">
          7 min
        </text>
      </g>

      <g transform="translate(320 112)">
        <circle r="30" fill="#f9efd8" stroke="#4a2e17" strokeWidth="5" />
        <path d="M-12-4a12 12 0 0 1 20-8M12 4a12 12 0 0 1-20 8" fill="none" stroke="#4a2e17" strokeWidth="4" strokeLinecap="round" />
        <path d="M8-16l2 8-8-1zM-8 16l-2-8 8 1z" fill="#4a2e17" />
      </g>
    </svg>
  );
}

export function RouteTrail() {
  return (
    <div>
      <div className="gone-scrollbar -mx-1 flex snap-x snap-mandatory gap-3 overflow-x-auto px-1 pb-2">
        {zones.map((zone) => (
          <Link
            key={zone.slug}
            href={`/mundo/${zone.slug}`}
            className="group w-[168px] shrink-0 snap-start sm:w-[188px]"
          >
            <article className="panel-wood p-2 transition group-hover:-translate-y-1">
              <div className="relative mb-2 h-5">
                <div className="absolute left-0 right-0 top-2 border-t-2 border-dashed border-bark-900/50" />
                <span className="absolute left-1/2 top-0 grid h-5 w-5 -translate-x-1/2 place-items-center rounded-full border-2 border-bark-900 bg-sun-400 font-display text-[0.62rem] font-extrabold text-bark-900">
                  {zone.order}
                </span>
              </div>
              <div className="frame-art aspect-[16/10]">
                <ZoneArt art={zone.art} className="h-full w-full transition duration-500 group-hover:scale-105" decorative />
              </div>
              <p className="mt-2 px-0.5 text-carved-sm font-display text-[0.86rem] font-bold leading-tight">
                {zone.name}
              </p>
              <span className="mt-1 flex items-center gap-1 px-0.5 pb-0.5 font-display text-[0.62rem] font-bold uppercase tracking-wide text-sun-300">
                Tramo {zone.order}
                <Icon name="arrow-right" className="h-3 w-3" />
              </span>
            </article>
          </Link>
        ))}
      </div>
      <p className="mt-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-bark-600">
        <Icon name="arrow-right" className="h-3.5 w-3.5" /> Desliza el camino para ver los siete tramos
      </p>
    </div>
  );
}
