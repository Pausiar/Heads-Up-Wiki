import Link from "next/link";
import { Duck } from "@/components/art/Duck";
import { PageShell } from "@/components/ui/Primitives";
import { Icon } from "@/components/ui/Icon";

export default function NotFound() {
  return (
    <PageShell className="py-8">
      <div className="mx-auto max-w-2xl">
        <div className="panel-parchment px-5 py-9 text-center sm:px-9">
          <span className="mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border-[3px] border-bark-700 bg-gradient-to-b from-parch-50 to-parch-300 shadow-[inset_0_3px_0_rgba(255,255,255,0.8),0_5px_0_rgba(74,46,23,0.3)]">
            <Duck className="h-20 w-20" />
          </span>
          <p className="mt-4 font-display text-[0.7rem] font-extrabold uppercase tracking-[0.22em] text-forest-700">
            Error 404
          </p>
          <h1 className="mt-1 text-3xl leading-tight text-bark-800 sm:text-4xl">
            Te has salido del camino
          </h1>
          <p className="mx-auto mt-2 max-w-md text-pretty text-[0.98rem] leading-relaxed text-ink-soft">
            Esta parte del bosque no está en el mapa. Puede que el enlace esté mal escrito o que alguien se haya
            llevado el cartel. El pato no dice nada.
          </p>
          <div className="mt-5 flex flex-col justify-center gap-2.5 sm:flex-row">
            <Link href="/" className="btn btn-primary">
              <Icon name="home" className="h-4 w-4" />
              Volver al campamento
            </Link>
            <Link href="/guia" className="btn btn-secondary">
              <Icon name="book" className="h-4 w-4" />
              Abrir la guía
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-3 border-t border-bark-700/20 pt-4 text-sm font-bold text-bark-700">
            <Link href="/enemigos" className="underline decoration-2 underline-offset-4 hover:text-berry-500">
              Enemigos
            </Link>
            <Link href="/objetos" className="underline decoration-2 underline-offset-4 hover:text-berry-500">
              Objetos
            </Link>
            <Link href="/mundo" className="underline decoration-2 underline-offset-4 hover:text-berry-500">
              Mundo
            </Link>
            <Link href="/historia" className="underline decoration-2 underline-offset-4 hover:text-berry-500">
              Historia
            </Link>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
