"use client";

import Link from "next/link";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Icon } from "@/components/ui/Icon";
import { quickSearches, searchWiki, type SearchEntry, type SearchKind } from "@/lib/search";

type SearchContextValue = { openSearch: (query?: string) => void };

const SearchContext = createContext<SearchContextValue>({ openSearch: () => {} });

export function useSearch() {
  return useContext(SearchContext);
}

const kindTone: Record<SearchKind, string> = {
  Enemigo: "bg-berry-500/15 text-berry-500 border-berry-500/40",
  Objeto: "bg-forest-600/15 text-forest-700 border-forest-600/40",
  Zona: "bg-river-500/15 text-river-600 border-river-500/40",
  Guía: "bg-sun-500/25 text-bark-700 border-sun-500/50",
  Historia: "bg-tang-500/15 text-tang-500 border-tang-500/40",
  "Peligro ambiental": "bg-bark-600/15 text-bark-700 border-bark-600/40",
  Mecánica: "bg-bark-800/10 text-bark-800 border-bark-800/30",
};

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  const openSearch = useCallback((initial = "") => {
    setQuery(initial);
    setIsOpen(true);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const isTyping =
        target?.tagName === "INPUT" ||
        target?.tagName === "TEXTAREA" ||
        target?.isContentEditable;

      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setIsOpen(true);
        return;
      }
      if (event.key === "/" && !isTyping) {
        event.preventDefault();
        setIsOpen(true);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
      if (event.key === "Tab" && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, [tabindex]:not([tabindex="-1"])',
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const timer = window.setTimeout(() => inputRef.current?.focus(), 40);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = overflow;
      window.clearTimeout(timer);
    };
  }, [isOpen]);

  const results = useMemo(() => searchWiki(query), [query]);

  return (
    <SearchContext.Provider value={{ openSearch }}>
      {children}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-forest-950/70 px-3 py-6 backdrop-blur-sm sm:py-16"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsOpen(false);
          }}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="search-title"
            className="panel-parchment w-full max-w-2xl overflow-hidden p-0 shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
          >
            <div className="border-b-2 border-bark-700/25 bg-parch-200/60 px-4 py-3">
              <div className="flex items-center justify-between gap-3">
                <h2 id="search-title" className="font-display text-lg font-extrabold text-bark-800">
                  Buscar en la wiki
                </h2>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-bark-700/40 text-bark-700 transition hover:bg-bark-700/10"
                  aria-label="Cerrar el buscador"
                >
                  <Icon name="close" className="h-4 w-4" />
                </button>
              </div>
              <div className="mt-2.5 flex items-center gap-2 rounded-full border-[3px] border-bark-700 bg-parch-50 px-3 py-2 focus-within:border-bark-800">
                <Icon name="search" className="h-5 w-5 shrink-0 text-bark-600" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  type="search"
                  placeholder="Enemigos, objetos, zonas, mecánicas…"
                  className="min-w-0 flex-1 bg-transparent font-body text-base text-ink outline-none placeholder:text-bark-600/60"
                  aria-label="Buscar enemigos, objetos, zonas y mecánicas"
                  autoComplete="off"
                />
                <kbd className="hidden shrink-0 rounded border-2 border-bark-700/30 bg-parch-200 px-1.5 py-0.5 font-display text-[0.65rem] font-bold text-bark-700 sm:block">
                  ESC
                </kbd>
              </div>
            </div>

            <div className="max-h-[60vh] overflow-y-auto px-3 py-3">
              {query.trim().length < 2 ? (
                <div className="px-1 pb-1">
                  <p className="mb-2 font-display text-xs font-bold uppercase tracking-[0.14em] text-bark-600">
                    Búsquedas rápidas
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {quickSearches.map((item) => (
                      <button
                        key={item.label}
                        type="button"
                        onClick={() => setQuery(item.query)}
                        className="chip transition hover:-translate-y-0.5 hover:brightness-105"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                  <p className="mt-4 rounded-xl bg-parch-200/50 px-3 py-2.5 text-sm leading-relaxed text-ink-soft">
                    Escribe al menos dos letras. El buscador revisa fichas de enemigos, objetos, tramos del
                    recorrido, mecánicas y secciones de la guía.
                  </p>
                </div>
              ) : results.length === 0 ? (
                <div className="px-2 py-8 text-center">
                  <p className="font-display text-lg font-bold text-bark-800">Nada por aquí…</p>
                  <p className="mt-1 text-sm text-ink-soft">
                    No hay resultados para «{query.trim()}». Prueba con el nombre de un monstruo, un objeto o
                    una zona.
                  </p>
                </div>
              ) : (
                <ul className="space-y-1.5">
                  {results.map((result) => (
                    <li key={result.id}>
                      <SearchResultLink result={result} onNavigate={() => setIsOpen(false)} />
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="flex items-center justify-between gap-2 border-t-2 border-bark-700/25 bg-parch-200/50 px-4 py-2.5 text-[0.7rem] font-semibold uppercase tracking-wide text-bark-600">
              <span>{results.length > 0 ? `${results.length} resultados` : "Buscador global"}</span>
              <span className="hidden sm:block">Ctrl / ⌘ + K para abrir</span>
            </div>
          </div>
        </div>
      )}
    </SearchContext.Provider>
  );
}

function SearchResultLink({ result, onNavigate }: { result: SearchEntry; onNavigate: () => void }) {
  return (
    <Link
      href={result.href}
      onClick={onNavigate}
      className="group flex items-start gap-3 rounded-xl border-2 border-transparent px-2.5 py-2 transition hover:border-bark-700/30 hover:bg-parch-200/60"
    >
      <span
        className={`mt-0.5 shrink-0 rounded-full border-2 px-2 py-0.5 font-display text-[0.65rem] font-bold uppercase tracking-wide ${kindTone[result.kind]}`}
      >
        {result.kind}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-display text-base font-bold leading-tight text-bark-800">
          {result.title}
        </span>
        <span className="mt-0.5 line-clamp-2 block text-sm leading-snug text-ink-soft">
          {result.summary}
        </span>
      </span>
      <Icon
        name="arrow-right"
        className="mt-1 h-4 w-4 shrink-0 text-bark-600 opacity-60 transition group-hover:translate-x-0.5 group-hover:opacity-100"
      />
    </Link>
  );
}
