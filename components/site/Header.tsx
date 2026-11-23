"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Duck, Rock } from "@/components/art/Duck";
import { Icon, type IconName } from "@/components/ui/Icon";
import { site } from "@/lib/content/site";
import { useSearch } from "./SearchProvider";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { openSearch } = useSearch();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50">
      <div className="wood-bar border-b-[5px] border-bark-900">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-3 py-2.5 sm:px-5 lg:gap-4">
          <Link
            href="/"
            className="group flex shrink-0 items-center gap-2.5"
            aria-label="HEADS UP! WIKI — Ir al inicio"
          >
            <span className="relative flex h-12 w-12 items-center justify-center rounded-[14px] border-[3px] border-bark-800 bg-gradient-to-b from-parch-100 to-parch-300 shadow-[inset_0_2px_0_rgba(255,255,255,0.7),0_3px_0_rgba(45,24,8,0.5)] transition group-hover:-rotate-3 sm:h-14 sm:w-14">
              <Rock className="absolute -left-1 -top-1.5 h-7 w-7 sm:h-8 sm:w-8" />
              <Duck className="relative mt-1.5 h-8 w-8 sm:mt-2 sm:h-9 sm:w-9" />
            </span>
            <span className="leading-none">
              <span className="block font-display text-[1.35rem] font-extrabold tracking-tight text-carved sm:text-[1.6rem]">
                HEADS UP!
              </span>
              <span className="mt-1 inline-flex items-center gap-1 rounded-md border-2 border-bark-900 bg-sun-500 px-2 py-[1px] font-display text-[0.62rem] font-extrabold uppercase tracking-[0.22em] text-bark-900 shadow-[0_2px_0_rgba(45,24,8,0.6)]">
                Wiki
              </span>
            </span>
          </Link>

          <nav aria-label="Navegación principal" className="ml-1 hidden items-center gap-0 lg:flex xl:gap-0.5">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link px-1.5 text-[0.8rem] xl:px-3 xl:text-[0.95rem]"
                data-active={isActive(item.href)}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                <Icon name={item.icon as IconName} className="hidden h-[18px] w-[18px] shrink-0 xl:block" />
                <span className="whitespace-nowrap">{item.label}</span>
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => openSearch()}
              className="flex h-10 items-center gap-2 rounded-full border-[3px] border-bark-900 bg-parch-100 px-2.5 text-bark-800 shadow-[0_3px_0_rgba(45,24,8,0.55)] transition hover:-translate-y-0.5 hover:bg-parch-50 sm:px-3.5"
              aria-label="Abrir el buscador global"
            >
              <Icon name="search" className="h-[18px] w-[18px]" />
              <span className="hidden font-display text-sm font-bold xl:inline">Buscar</span>
              <kbd className="hidden rounded border border-bark-700/30 bg-parch-200 px-1.5 py-0.5 font-display text-[0.62rem] font-bold text-bark-700 xl:block">
                ⌘K
              </kbd>
            </button>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-bark-900 bg-parch-200 text-bark-800 shadow-[0_3px_0_rgba(45,24,8,0.55)] transition hover:-translate-y-0.5 lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? "Cerrar el menú" : "Abrir el menú"}
            >
              <Icon name={menuOpen ? "close" : "menu"} className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div id="mobile-nav" className="lg:hidden">
          <div className="mx-auto max-w-7xl px-3 pb-2 sm:px-5">
            <nav
              aria-label="Navegación móvil"
              className="panel-wood-deep mt-1 grid grid-cols-2 gap-1.5 rounded-2xl p-2.5"
            >
              {site.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-2 rounded-xl border-2 border-bark-900/60 bg-parch-100/95 px-2.5 py-2.5 font-display text-sm font-bold text-bark-800 shadow-[0_2px_0_rgba(45,24,8,0.35)] transition active:translate-y-0.5"
                  data-active={isActive(item.href)}
                >
                  <Icon name={item.icon as IconName} className="h-4 w-4 shrink-0 text-bark-700" />
                  {item.label}
                </Link>
              ))}
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  openSearch();
                }}
                className="col-span-2 flex items-center justify-center gap-2 rounded-xl border-2 border-bark-900/60 bg-sun-500 px-2.5 py-2.5 font-display text-sm font-bold text-bark-900 shadow-[0_2px_0_rgba(45,24,8,0.35)]"
              >
                <Icon name="search" className="h-4 w-4" />
                Buscar en la wiki
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
