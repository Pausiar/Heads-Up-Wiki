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
import { EnemyExplorer } from "@/components/explorers/EnemyExplorer";
import { EnemyArt, SwarmArt } from "@/components/art/EnemyArt";
import { ItemCard } from "@/components/cards/Cards";
import { Icon } from "@/components/ui/Icon";
import { enemies, hazard } from "@/lib/content/enemies";
import { getItem } from "@/lib/content/items";
import { impactRule } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Enemigos",
  description:
    "Bestiario de HEADS UP!: Champi, Oso sonámbulo, El Orejas, Ganso del averno y Búho secuestrador. Horarios, comportamiento, cómo evitarlos y objetos relacionados.",
  alternates: { canonical: "/enemigos" },
};

const kit = ["silbato", "petardo", "cerbatana", "cuerda"];

export default function EnemiesPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Bestiario del bosque"
        title="Enemigos"
        subtitle="Cinco monstruos, un enjambre y una regla de oro: el bosque se escucha antes de cruzarlo. Aquí tienes sus horarios, su comportamiento y la forma documentada de quitártelos de encima."
        icon={<Icon name="monster" className="h-7 w-7" />}
      >
        <div className="flex flex-wrap items-center gap-2">
          <Tag tone="forest">5 monstruos</Tag>
          <Tag tone="night">Todos nocturnos</Tag>
          <Tag tone="day">Ganso de día y de noche</Tag>
          <Tag>1 peligro ambiental</Tag>
        </div>
      </PageHeader>

      <section aria-labelledby="horarios-title" className="mb-10">
        <SectionHeading
          title="Quién sale y cuándo"
          eyebrow="Agenda del bosque"
          icon={<Icon name="sun" className="h-5 w-5" />}
        />
        <div className="grid gap-4 md:grid-cols-3">
          <article className="panel-parchment p-4">
            <div className="flex items-center gap-2 text-tang-500">
              <Icon name="sun" className="h-5 w-5" />
              <h3 id="horarios-title" className="font-display text-lg font-extrabold text-bark-800">
                Día
              </h3>
            </div>
            <p className="mt-1 text-sm font-semibold text-ink-soft">
              Durante el día solamente aparece el Ganso del averno y, ocasionalmente, Champi.
            </p>
            <ul className="mt-2.5 space-y-1.5">
              <li className="flex items-center gap-2 text-sm font-bold text-bark-800">
                <span className="h-2 w-2 rounded-full bg-tang-500" aria-hidden="true" /> Ganso del averno
              </li>
              <li className="flex items-center gap-2 text-sm text-bark-700">
                <span className="h-2 w-2 rounded-full bg-tang-500/50" aria-hidden="true" /> Champi (ocasional)
              </li>
            </ul>
          </article>

          <article className="panel-parchment p-4">
            <div className="flex items-center gap-2 text-river-600">
              <Icon name="moon" className="h-5 w-5" />
              <h3 className="font-display text-lg font-extrabold text-bark-800">Noche</h3>
            </div>
            <p className="mt-1 text-sm font-semibold text-ink-soft">
              Todos los cinco monstruos aparecen durante la noche.
            </p>
            <ul className="mt-2.5 space-y-1.5">
              {enemies.map((enemy) => (
                <li key={enemy.slug} className="flex items-center gap-2 text-sm text-bark-800">
                  <span className="h-2 w-2 rounded-full bg-river-600" aria-hidden="true" />
                  <Link href={`/enemigos/${enemy.slug}`} className="hover:underline">
                    {enemy.name}
                  </Link>
                </li>
              ))}
            </ul>
          </article>

          <article className="panel-parchment p-4">
            <div className="flex items-center gap-2 text-forest-700">
              <Icon name="target" className="h-5 w-5" />
              <h3 className="font-display text-lg font-extrabold text-bark-800">Día y noche</h3>
            </div>
            <p className="mt-1 text-sm font-semibold text-ink-soft">
              Solo hay un enemigo que no descansa nunca.
            </p>
            <ul className="mt-2.5 space-y-1.5">
              <li className="flex items-center gap-2 text-sm font-bold text-bark-800">
                <span className="h-2 w-2 rounded-full bg-forest-600" aria-hidden="true" />
                <Link href="/enemigos/ganso-del-averno" className="hover:underline">
                  Ganso del averno
                </Link>
              </li>
            </ul>
            <p className="mt-2.5 text-xs leading-relaxed text-bark-600">
              Champi también puede aparecer de día, pero solo de forma ocasional.
            </p>
          </article>
        </div>
      </section>

      <section aria-labelledby="bestiario-title">
        <SectionHeading
          title="Filtra el bestiario"
          eyebrow="Fichas de monstruos"
          id="bestiario-title"
          icon={<Icon name="monster" className="h-5 w-5" />}
        />
        <EnemyExplorer roster={enemies} />
      </section>

      <section aria-labelledby="peligros-title" className="mt-12">
        <SectionHeading
          title="Peligros ambientales"
          eyebrow="No todo lo que pica es un monstruo"
          icon={<Icon name="warning" className="h-5 w-5" />}
        />
        <article className="panel-wood p-2.5">
          <div className="grid gap-0 overflow-hidden rounded-xl border-2 border-bark-900/40 md:grid-cols-[1.1fr_1fr]">
            <div className="relative">
              <SwarmArt className="h-full min-h-[220px] w-full" />
              <span className="absolute left-3 top-3 rounded-full border-2 border-bark-900/60 bg-parch-100/95 px-2.5 py-1 font-display text-[0.66rem] font-extrabold uppercase tracking-wide text-bark-800">
                No es un monstruo
              </span>
            </div>
            <div className="bg-parch-100 px-4 py-4 sm:px-5">
              <h3 className="font-display text-2xl font-extrabold text-bark-800">{hazard.name}</h3>
              <p className="mt-1 text-sm font-semibold text-ink-soft">{hazard.tagline}</p>
              <ul className="mt-3 space-y-1.5">
                {hazard.behavior.map((line) => (
                  <li key={line} className="flex gap-2 text-sm leading-snug text-ink-soft">
                    <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-bark-600" />
                    {line}
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <FactGrid facts={hazard.facts.slice(0, 3)} compact />
              </div>
              <Link href={`/peligros/${hazard.slug}`} className="btn btn-sm btn-secondary mt-4">
                Ficha del enjambre
                <Icon name="arrow-right" className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </article>
      </section>

      <section aria-labelledby="kit-title" className="mt-12">
        <SectionHeading
          title="Kit contra monstruos"
          eyebrow="Objetos que ayudan"
          icon={<Icon name="backpack" className="h-5 w-5" />}
          action={
            <Link
              href="/objetos"
              className="font-display text-sm font-bold text-sun-300 underline decoration-sun-500/50 decoration-2 underline-offset-4 hover:text-sun-400"
            >
              Ver todos los objetos
            </Link>
          }
        />
        <div id="kit-title" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {kit.map((slug) => {
            const item = getItem(slug);
            return item ? <ItemCard key={slug} item={item} /> : null;
          })}
        </div>
        <div className="mt-5 panel-parchment flex flex-col items-start gap-2.5 p-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-relaxed text-ink-soft">
            <strong className="font-display text-bark-800">Recuerda:</strong> {impactRule}
          </p>
          <Link href="/objetos#sistema-de-impactos" className="btn btn-sm btn-primary shrink-0">
            Ver la mecánica
          </Link>
        </div>
      </section>

      <section className="mt-10 grid gap-4 sm:grid-cols-2">
        <RelatedLink
          href="/guia#sonido-y-sigilo"
          label="Sonido y sigilo"
          meta="Cómo no llamar la atención"
          icon={<Icon name="sound" className="h-5 w-5" />}
        />
        <RelatedLink
          href="/historia#muerte-y-resurreccion"
          label="Morir y volver"
          meta="Fantasmas y fogatas"
          icon={<Icon name="tip" className="h-5 w-5" />}
        />
      </section>
    </PageShell>
  );
}
