export type IconName =
  | "home"
  | "book"
  | "monster"
  | "gear"
  | "leaf"
  | "flag"
  | "megaphone"
  | "search"
  | "menu"
  | "close"
  | "arrow-right"
  | "arrow-left"
  | "chevron-down"
  | "sun"
  | "moon"
  | "sound"
  | "backpack"
  | "target"
  | "pin"
  | "check"
  | "info"
  | "warning"
  | "tip";

const paths: Record<IconName, React.ReactNode> = {
  home: (
    <>
      <path d="M3 11l9-7 9 7" />
      <path d="M5.5 9.5V20h5v-5.5h3V20h5V9.5" />
    </>
  ),
  book: (
    <>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v18H6.5A2.5 2.5 0 0 1 4 18.5z" />
      <path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v18h4.5A2.5 2.5 0 0 0 20 18.5z" />
    </>
  ),
  monster: (
    <>
      <path d="M4 9a8 8 0 0 1 16 0v7a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3z" />
      <path d="M7 8l2.5 2M17 8l-2.5 2" />
      <circle cx="9" cy="12.5" r="1" fill="currentColor" />
      <circle cx="15" cy="12.5" r="1" fill="currentColor" />
      <path d="M9 16.5c1 1 2 1.4 3 1.4s2-.4 3-1.4" />
    </>
  ),
  gear: (
    <>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 2.8v2.4M12 18.8v2.4M21.2 12h-2.4M5.2 12H2.8M18.5 5.5l-1.7 1.7M7.2 16.8l-1.7 1.7M18.5 18.5l-1.7-1.7M7.2 7.2 5.5 5.5" />
      <circle cx="12" cy="12" r="7.2" strokeDasharray="1 3" />
    </>
  ),
  leaf: (
    <>
      <path d="M20 4C12 4 5 7.5 5 14a6 6 0 0 0 6 6c6.5 0 9-7 9-16z" />
      <path d="M4 21c2-6 6-9 11-11" />
    </>
  ),
  flag: (
    <>
      <path d="M6 21V4" />
      <path d="M6 4h12l-2 4 2 4H6z" />
      <path d="M9 8h3M15 8h1M12 12h3" />
    </>
  ),
  megaphone: (
    <>
      <path d="M3 11v3l13 5V6z" />
      <path d="M16 8.5c2 0 3.5 1.5 3.5 4S18 16.5 16 16.5" />
      <path d="M6 15v4a2 2 0 0 0 4 0v-2" />
    </>
  ),
  search: (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M15.5 15.5 21 21" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  "arrow-right": <path d="M4 12h15M13 6l6 6-6 6" />,
  "arrow-left": <path d="M20 12H5M11 6l-6 6 6 6" />,
  "chevron-down": <path d="M6 9l6 6 6-6" />,
  sun: (
    <>
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.5v2.2M12 19.3v2.2M21.5 12h-2.2M4.7 12H2.5M18.7 5.3l-1.6 1.6M6.9 17.1l-1.6 1.6M18.7 18.7l-1.6-1.6M6.9 6.9 5.3 5.3" />
    </>
  ),
  moon: <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4 8.5 8.5 0 1 0 20 14.5z" />,
  sound: (
    <>
      <path d="M5 9.5h3l5-4v13l-5-4H5z" />
      <path d="M17 9a4.5 4.5 0 0 1 0 6M19.5 6.5a8 8 0 0 1 0 11" />
    </>
  ),
  backpack: (
    <>
      <path d="M7 8h10a3 3 0 0 1 3 3v9H4v-9a3 3 0 0 1 3-3z" />
      <path d="M8.5 8V6a3.5 3.5 0 0 1 7 0v2" />
      <path d="M4 13h16M9 17h6" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  check: <path d="M4 12.5l5 5L20 6.5" />,
  info: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5.5M12 7.8v.4" />
    </>
  ),
  warning: (
    <>
      <path d="M12 3 22 20H2z" />
      <path d="M12 9v5M12 17v.4" />
    </>
  ),
  tip: (
    <>
      <path d="M9 18h6M10 21h4" />
      <path d="M12 3a6 6 0 0 1 4 10.5V16H8v-2.5A6 6 0 0 1 12 3z" />
    </>
  ),
};

export function Icon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
