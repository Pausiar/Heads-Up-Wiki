import type { Metadata } from "next";
import Link from "next/link";
import {
  PageShell,
  PageHeader,
  SectionHeading,
  Tag,
  FactGrid,
  RelatedLink,
} from "@/components/ui/Primitives";
import { ItemExplorer } from "@/components/explorers/ItemExplorer";
import { ItemArt } from "@/components/art/ItemArt";
import { Icon } from "@/components/ui/Icon";
import { impactSystem } from "@/lib/content/guide";
import { impactRule } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Objetos",
  description:
    "Todos los objetos de HEADS UP!: sartén, paraguas, cubo, casco de obra, bocadillo, cerbatana, petardo, silbato, cuerda y más. Cargas, funcionamiento y sistema de impactos.",
  alternates: { canonical: "/objetos" },
};

const exampleSlots = ["linterna", "bocadillo"] as const;

export default function ObjectsPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="La mochila"
        title="Objetos"
        subtitle="Todo lo que puede salvarte la partida cabe en dos huecos. Aquí están las cargas, el funcionamiento y las limitaciones de cada objeto, tal y como están definidos en el juego."
        icon={<Icon name="backpack" className="h-7 w-7" />}
      >
        <div className="flex flex-wrap items-center gap-2">
          <Tag tone="forest">12 objetos</Tag>
          <Tag>2 huecos de inventario</Tag>
          <Tag tone="day">Activos y pasivos</Tag>
        </div>
      </PageHeader>

      <section aria-labelledby="inventario-title" className="mb-10 grid gap-5 lg:grid-cols-[1.15fr_1fr]">
        <div className="panel-wood p-2.5">
          <div className="rounded-xl bg-bark-900/25 p-4">
            <h2 id="inventario-title" className="text-xl text-carved-sm">
              Dos huecos, ninguna excusa
            </h2>
            <p className="mt-1.5 text-sm leading-relaxed text-parch-100/85">
              El jugador dispone de dos huecos. Cada objeto puede tener cargas y existen objetos pasivos, que
              actúan mientras están en la mano, y activos, que se usan cuando tú decides.
            </p>
            <div className="mt-4 flex gap-3">
              {exampleSlots.map((slug, index) => (
                <div key={slug} className="flex-1">
                  <div className="flex aspect-square items-center justify-center rounded-xl border-[3px] border-bark-900/60 bg-gradient-to-b from-parch-50 to-parch-300 p-2.5 shadow-[inset_0_3px_0_rgba(255,255,255,0.7),0_4px_0_rgba(45,24,8,0.45)]">
                    <ItemArt art={slug} className="h-full w-full" decorative />
                  </div>
                  <p className="mt-1.5 text-center font-display text-[0.66rem] font-extrabold uppercase tracking-[0.14em] text-parch-200/80">
                    Hueco {index + 1}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-center font-hand text-base text-sun-300">
              Ejemplo de mochila: linterna y bocadillo.
            </p>
          </div>
        </div>

        <div className="panel-parchment p-5">
          <h2 className="text-xl text-bark-800">Cómo leer las fichas</h2>
          <div className="mt-3 space-y-3">
            <div>
              <p className="flex items-center gap-2 font-display text-sm font-extrabold text-bark-800">
                <Icon name="target" className="h-4 w-4 text-tang-500" /> Tipo de objeto
              </p>
              <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                <strong>Activo:</strong> se utiliza a voluntad. <strong>Pasivo:</strong> actúa solo mientras está
                en la mano.
              </p>
            </div>
            <div>
              <p className="flex items-center gap-2 font-display text-sm font-extrabold text-bark-800">
                <Icon name="check" className="h-4 w-4 text-forest-600" /> Cargas
              </p>
              <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                Los puntos indican las cargas disponibles. Si no hay un número confirmado, la ficha lo indica
                como «cargas sin especificar».
              </p>
            </div>
            <div>
              <p className="flex items-center gap-2 font-display text-sm font-extrabold text-bark-800">
                <Icon name="info" className="h-4 w-4 text-river-600" /> Categorías
              </p>
              <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                Inventario, protección, curación, combate y utilidad son etiquetas organizativas de la wiki, no
                propiedades nuevas del juego.
              </p>
            </div>
          </div>
          <FactGrid
            facts={[
              { label: "Huecos", value: "2" },
              { label: "Objetos documentados", value: "12" },
              { label: "Tipos", value: "Activos y pasivos" },
            ]}
            compact
          />
        </div>
      </section>

      <section
        id={impactSystem.id}
        aria-labelledby="impacto-title"
        className="mb-11 scroll-mt-28"
      >
        <SectionHeading
          title={impactSystem.title}
          eyebrow="Mecánica general"
          icon={<Icon name="target" className="h-5 w-5" />}
        />
        <div className="panel-wood p-2.5">
          <div className="grid overflow-hidden rounded-xl border-2 border-bark-900/40 md:grid-cols-[auto_1fr]">
            <div className="flex flex-col items-center justify-center gap-1 bg-forest-800 px-7 py-6">
              <span className="font-display text-6xl font-extrabold leading-none text-carved sm:text-7xl">8+</span>
              <span className="font-display text-[0.66rem] font-extrabold uppercase tracking-[0.2em] text-lime-300">
                puntos de daño
              </span>
            </div>
            <div className="bg-parch-100 px-5 py-5">
              <h3 id="impacto-title" className="font-display text-xl font-extrabold text-bark-800">
                {impactRule}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{impactSystem.detail}</p>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {impactSystem.examples.map((example) => (
                  <div
                    key={example.label}
                    className="flex items-center justify-between gap-2 rounded-lg border-2 border-bark-700/30 bg-parch-50 px-3 py-2"
                  >
                    <span className="text-xs font-bold uppercase tracking-wide text-bark-600">
                      {example.label}
                    </span>
                    <span className="font-display text-sm font-extrabold text-bark-800">{example.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <p className="mt-2 text-sm text-parch-200/70">
          Esta nota aparece también en las fichas de los objetos que provocan o absorben impactos.
        </p>
      </section>

      <section aria-labelledby="catalogo-title">
        <SectionHeading
          title="Catálogo de objetos"
          eyebrow="Todo el equipo"
          id="catalogo-title"
          icon={<Icon name="gear" className="h-5 w-5" />}
        />
        <ItemExplorer />
      </section>

      <div className="mt-9 grid gap-4 sm:grid-cols-2">
        <RelatedLink
          href="/guia#inventario"
          label="Inventario y cargas"
          meta="Guía de supervivencia"
          icon={<Icon name="backpack" className="h-5 w-5" />}
        />
        <RelatedLink
          href="/enemigos"
          label="Contra qué sirve cada objeto"
          meta="Bestiario del bosque"
          icon={<Icon name="monster" className="h-5 w-5" />}
        />
      </div>
    </PageShell>
  );
}
