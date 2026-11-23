import Link from "next/link";
import { Duck } from "@/components/art/Duck";
import { Icon } from "@/components/ui/Icon";
import { LeafSprig } from "@/components/art/Decor";
import { site } from "@/lib/content/site";

export function Footer() {
  return (
    <footer className="relative mt-16 overflow-hidden border-t-4 border-bark-900 bg-forest-950">
      <LeafSprig className="pointer-events-none absolute -left-10 top-2 h-40 w-56 opacity-30" />
      <LeafSprig className="pointer-events-none absolute -right-10 top-6 h-40 w-56 opacity-25" flip />
      <div className="relative mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:items-start md:text-left">
          <div className="flex items-center gap-3">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl border-[3px] border-bark-800 bg-parch-100 shadow-[0_4px_0_rgba(0,0,0,0.35)]">
              <Duck className="h-11 w-11" />
            </span>
            <span>
              <span className="block font-display text-xl font-extrabold text-parch-50">HEADS UP! WIKI</span>
              <span className="font-hand text-base text-lime-300">{site.motto}</span>
            </span>
          </div>

          <nav aria-label="Enlaces del pie" className="flex flex-wrap justify-center gap-x-4 gap-y-2 md:ml-auto md:max-w-md md:justify-end">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-1.5 font-display text-sm font-bold text-parch-200 transition hover:text-sun-300"
              >
                <Icon name={item.icon === "home" ? "home" : (item.icon as never)} className="h-3.5 w-3.5" />
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 flex flex-col items-center gap-2 border-t border-parch-200/15 pt-5 text-center text-xs text-parch-200/60 sm:flex-row sm:justify-between sm:text-left">
          <p>
            Wiki de HEADS UP!, aventura cooperativa de supervivencia en Unreal Engine 5. Proyecto de
            demostración: el contenido se amplía con cada tramo explorado.
          </p>
          <p className="shrink-0 font-display font-bold uppercase tracking-[0.16em] text-parch-200/45">
            El pato vigila
          </p>
        </div>
      </div>
    </footer>
  );
}
