import type { Metadata } from "next";
import { PageShell, PageHeader, Tag, EmptyState, RelatedLink } from "@/components/ui/Primitives";
import { UpdateList } from "@/components/cards/Cards";
import { Icon } from "@/components/ui/Icon";
import { updates } from "@/lib/content/guide";

export const metadata: Metadata = {
  title: "Actualizaciones",
  description:
    "Tablón de novedades de la wiki de HEADS UP!. Preparado para publicar actualizaciones del juego y cambios de balance.",
  alternates: { canonical: "/actualizaciones" },
};

export default function UpdatesPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Tablón de novedades"
        title="Actualizaciones"
        subtitle="El corcho del campamento para las noticias de la wiki y del juego. Todavía no hay versiones oficiales publicadas: este panel está preparado y usa contenido de demostración."
        icon={<Icon name="megaphone" className="h-7 w-7" />}
      >
        <div className="flex flex-wrap items-center gap-2">
          <Tag tone="demo">Contenido de demostración</Tag>
          <Tag>Sin versiones oficiales</Tag>
        </div>
      </PageHeader>

      <div className="grid gap-5 lg:grid-cols-[1.6fr_1fr]">
        <section className="panel-wood p-2.5">
          <div className="panel-parchment-flat px-4 py-4">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <h2 className="font-display text-lg font-extrabold text-bark-800">Notas del tablón</h2>
              <Tag tone="demo">Demostración</Tag>
            </div>
            <UpdateList entries={updates} />
            <p className="mt-4 rounded-lg bg-parch-200/70 px-3 py-2.5 text-xs leading-relaxed text-bark-700">
              Las tres entradas anteriores son ejemplos de maquetación. No representan versiones, fechas ni
              cambios reales del juego, y se sustituirán por las notas oficiales cuando existan.
            </p>
          </div>
        </section>

        <aside className="space-y-4">
          <div className="panel-parchment p-5">
            <h2 className="font-display text-lg font-extrabold text-bark-800">Qué se publicará aquí</h2>
            <ul className="mt-2.5 space-y-2">
              {[
                "Nuevas fichas de enemigos, objetos y zonas.",
                "Cambios de balance y mecánicas actualizadas.",
                "Capturas del juego, modelos e ilustraciones.",
                "Logros, recompensas y novedades de la wiki.",
              ].map((line) => (
                <li key={line} className="flex gap-2.5 text-sm leading-relaxed text-ink-soft">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded border-2 border-forest-600/40 bg-forest-600/15 text-forest-700">
                    <Icon name="check" className="h-3 w-3" />
                  </span>
                  {line}
                </li>
              ))}
            </ul>
          </div>

          <EmptyState
            title="Todavía no hay notas oficiales…"
            text="El panel está listo para recibir la primera actualización real. Mientras tanto, las fichas de enemigos y objetos ya están completas."
          />
        </aside>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <RelatedLink
          href="/enemigos"
          label="Fichas de enemigos"
          meta="Contenido ya disponible"
          icon={<Icon name="monster" className="h-5 w-5" />}
        />
        <RelatedLink
          href="/historia"
          label="Historia y recorrido"
          meta="De la furgoneta a la gasolinera"
          icon={<Icon name="flag" className="h-5 w-5" />}
        />
      </div>
    </PageShell>
  );
}
