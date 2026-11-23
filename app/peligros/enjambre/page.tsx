import type { Metadata } from "next";
import { SwarmArt } from "@/components/art/EnemyArt";
import { Icon } from "@/components/ui/Icon";
import {
  Breadcrumbs,
  PageShell,
  SectionHeading,
  Tag,
  FactGrid,
  RelatedLink,
} from "@/components/ui/Primitives";
import { hazard } from "@/lib/content/enemies";

export const metadata: Metadata = {
  title: "Enjambre — peligro ambiental",
  description:
    "El enjambre de HEADS UP! no es un monstruo: es un peligro ambiental que sale de las colmenas, pica y se deja atrás corriendo.",
  alternates: { canonical: "/peligros/enjambre" },
};

export default function SwarmPage() {
  return (
    <PageShell>
      <Breadcrumbs items={[{ label: "Enemigos", href: "/enemigos" }, { label: "Enjambre" }]} />

      <section className="panel-parchment overflow-hidden p-4 sm:p-6">
        <div className="grid gap-5 md:grid-cols-[1fr_1fr] md:gap-6">
          <div className="panel-wood p-2">
            <div className="frame-art aspect-[4/3]">
              <SwarmArt className="h-full w-full" />
            </div>
          </div>
          <div>
            <div className="flex flex-wrap gap-2">
              <Tag tone="day">Peligro ambiental</Tag>
              <Tag>No es un monstruo</Tag>
            </div>
            <h1 className="mt-2 text-3xl leading-[1.03] text-bark-800 sm:text-4xl">{hazard.name}</h1>
            <p className="mt-2 font-hand text-xl text-forest-700">{hazard.tagline}</p>
            <div className="mt-3 space-y-2.5">
              {hazard.description.map((paragraph) => (
                <p key={paragraph} className="text-[0.98rem] leading-relaxed text-ink-soft">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-4">
              <FactGrid facts={hazard.facts} compact />
            </div>
          </div>
        </div>
      </section>

      <div className="mt-8 grid gap-5 lg:grid-cols-[1.55fr_1fr]">
        <section className="panel-parchment p-5 sm:p-6">
          <SectionHeading title="Qué hace" eyebrow="Comportamiento" tone="dark" icon={<Icon name="warning" className="h-5 w-5" />} />
          <ul className="space-y-2.5">
            {hazard.behavior.map((line) => (
              <li key={line} className="flex gap-2.5 text-[0.98rem] leading-relaxed text-ink-soft">
                <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-berry-500" />
                {line}
              </li>
            ))}
          </ul>
          <h3 className="mt-5 font-display text-lg font-extrabold text-bark-800">Cómo salir de ella</h3>
          <ul className="mt-2 space-y-2">
            {hazard.counter.map((line) => (
              <li key={line} className="flex gap-2.5 text-[0.98rem] leading-relaxed text-ink-soft">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full border-2 border-forest-600/40 bg-forest-600/15 text-forest-700">
                  <Icon name="check" className="h-3.5 w-3.5" />
                </span>
                {line}
              </li>
            ))}
          </ul>
        </section>

        <aside className="space-y-4">
          {hazard.notes.map((note) => (
            <div key={note.title} className="panel-parchment p-5">
              <p className="flex items-center gap-2 font-display text-sm font-extrabold text-bark-800">
                <Icon name="info" className="h-4 w-4 text-river-600" />
                {note.title}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{note.text}</p>
            </div>
          ))}
          <RelatedLink
            href="/enemigos"
            label="Volver al bestiario"
            meta="Los cinco monstruos"
            icon={<Icon name="monster" className="h-5 w-5" />}
          />
        </aside>
      </div>
    </PageShell>
  );
}
