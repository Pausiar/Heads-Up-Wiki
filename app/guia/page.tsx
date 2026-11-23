import type { Metadata } from "next";
import Link from "next/link";
import { PageShell, PageHeader, SectionHeading, Tag, FactGrid, RelatedLink } from "@/components/ui/Primitives";
import { Blocks } from "@/components/ui/Blocks";
import { DayNightDial } from "@/components/art/StoryVisuals";
import { ItemArt } from "@/components/art/ItemArt";
import { Icon } from "@/components/ui/Icon";
import { guide } from "@/lib/content/guide";
import { impactRule } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Guía de supervivencia",
  description:
    "Guía práctica de HEADS UP!: ciclo de día y noche de 7 minutos, inventario de dos huecos, sonido y sigilo, y supervivencia en grupo.",
  alternates: { canonical: "/guia" },
};

const sectionIcons = {
  "ciclo-dia-y-noche": "sun" as const,
  inventario: "backpack" as const,
  "sonido-y-sigilo": "sound" as const,
  "supervivencia-en-grupo": "tip" as const,
};

function InventoryDemo() {
  return (
    <div className="mt-5 rounded-xl border-2 border-bark-700/30 bg-parch-200/60 p-4">
      <div className="flex flex-wrap items-end gap-4">
        <div className="flex gap-3">
          {(["linterna", "bocadillo"] as const).map((slug, index) => (
            <div key={slug} className="w-24 sm:w-28">
              <div className="flex aspect-square items-center justify-center rounded-xl border-[3px] border-bark-800 bg-gradient-to-b from-parch-50 to-parch-300 p-2.5 shadow-[inset_0_3px_0_rgba(255,255,255,0.7),0_4px_0_rgba(74,46,23,0.35)]">
                <ItemArt art={slug} className="h-full w-full" decorative />
              </div>
              <p className="mt-1 text-center font-display text-[0.62rem] font-extrabold uppercase tracking-[0.14em] text-bark-600">
                Hueco {index + 1}
              </p>
            </div>
          ))}
        </div>
        <div className="min-w-[160px] flex-1">
          <p className="font-hand text-lg text-bark-700">Dos huecos. Nada más.</p>
          <p className="mt-1 text-sm leading-relaxed text-ink-soft">
            Un objeto activo y un pasivo es una combinación habitual: la linterna para ver y el bocadillo para
            curarte. El resto se queda en el campamento.
          </p>
        </div>
      </div>
    </div>
  );
}

function RitualCard() {
  return (
    <div className="mt-5 grid gap-2.5 sm:grid-cols-3">
      {[
        { label: "Quién lo hace", value: "Un jugador vivo" },
        { label: "Cuánto dura", value: "≈5 segundos" },
        { label: "A quién revive", value: "A todos los caídos" },
      ].map((step) => (
        <div key={step.label} className="rounded-xl border-2 border-bark-700/30 bg-parch-50 px-3 py-2.5">
          <p className="font-display text-[0.64rem] font-extrabold uppercase tracking-[0.12em] text-bark-600">
            {step.label}
          </p>
          <p className="mt-0.5 font-display text-base font-extrabold text-bark-800">{step.value}</p>
        </div>
      ))}
    </div>
  );
}

export default function GuidePage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Manual de campo"
        title="Guía de supervivencia"
        subtitle={guide.intro}
        icon={<Icon name="book" className="h-7 w-7" />}
      >
        <div className="flex flex-wrap items-center gap-2">
          {guide.sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="chip transition hover:-translate-y-0.5 hover:brightness-105"
            >
              {section.title}
            </a>
          ))}
        </div>
      </PageHeader>

      <section className="mb-9 panel-wood p-2.5">
        <div className="grid gap-2.5 rounded-xl bg-bark-900/25 p-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Día", value: "7 min", icon: "sun" as const },
            { label: "Noche", value: "7 min", icon: "moon" as const },
            { label: "Inventario", value: "2 huecos", icon: "backpack" as const },
            { label: "Derribo", value: "8+ daño", icon: "target" as const },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-3 rounded-lg bg-parch-100/95 px-3 py-2.5">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border-2 border-bark-700/40 bg-sun-300/70 text-bark-800">
                <Icon name={stat.icon} className="h-4 w-4" />
              </span>
              <span>
                <span className="block font-display text-[0.62rem] font-extrabold uppercase tracking-[0.14em] text-bark-600">
                  {stat.label}
                </span>
                <span className="block font-display text-lg font-extrabold leading-tight text-bark-800">
                  {stat.value}
                </span>
              </span>
            </div>
          ))}
        </div>
      </section>

      <div className="space-y-6">
        {guide.sections.map((section, index) => (
          <section key={section.id} id={section.id} className="scroll-mt-28">
            <div className="panel-parchment p-5 sm:p-7">
              <header className="flex items-start gap-3.5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border-[3px] border-bark-800 bg-sun-400 font-display text-lg font-extrabold text-bark-900 shadow-[0_3px_0_rgba(74,46,23,0.45)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-display text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-forest-700">
                    {section.tagline}
                  </p>
                  <h2 className="mt-0.5 flex items-center gap-2 text-2xl leading-tight text-bark-800">
                    <Icon name={sectionIcons[section.id as keyof typeof sectionIcons] ?? "book"} className="h-5 w-5 text-tang-500" />
                    {section.title}
                  </h2>
                </div>
              </header>

              <div className="mt-4">
                <Blocks blocks={section.blocks} />
              </div>

              {section.id === "ciclo-dia-y-noche" && (
                <div className="mt-5 rounded-xl border-2 border-bark-700/30 bg-parch-200/50 p-3">
                  <DayNightDial />
                  <p className="mt-1 text-center font-hand text-base text-bark-700">
                    Sol y luna: siete minutos cada uno.
                  </p>
                </div>
              )}
              {section.id === "inventario" && <InventoryDemo />}
              {section.id === "supervivencia-en-grupo" && <RitualCard />}
            </div>
          </section>
        ))}
      </div>

      <section className="mt-9">
        <SectionHeading
          title="Antes de salir del campamento"
          eyebrow="Lista rápida"
          icon={<Icon name="check" className="h-5 w-5" />}
        />
        <div className="panel-parchment p-5 sm:p-6">
          <ul className="grid gap-2.5 sm:grid-cols-2">
            {[
              "Revisa qué dos objetos llevas: no hay hueco para más.",
              "Mira el reloj: la noche dura 7 minutos y saca a todos los monstruos.",
              "Si El Orejas anda cerca, ni silbato ni petardo.",
              "Agacharse evita que el Búho secuestrador te capture.",
              "El enjambre no es un monstruo: se deja atrás corriendo.",
              "Un golpe solo te derriba si causa 8 o más puntos de daño.",
            ].map((line) => (
              <li key={line} className="flex gap-2.5 text-sm leading-relaxed text-ink-soft">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded border-2 border-forest-600/40 bg-forest-600/15 text-forest-700">
                  <Icon name="check" className="h-3 w-3" />
                </span>
                {line}
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-2.5 border-t border-bark-700/20 pt-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm leading-relaxed text-ink-soft">
              <strong className="font-display text-bark-800">{impactRule}</strong>
            </p>
            <Link href="/objetos#sistema-de-impactos" className="btn btn-sm btn-primary shrink-0">
              Ver el sistema de impactos
            </Link>
          </div>
        </div>
      </section>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <RelatedLink
          href="/enemigos"
          label="Bestiario del bosque"
          meta="Horarios y comportamiento"
          icon={<Icon name="monster" className="h-5 w-5" />}
        />
        <RelatedLink
          href="/objetos"
          label="Catálogo de objetos"
          meta="Cargas y funcionamiento"
          icon={<Icon name="backpack" className="h-5 w-5" />}
        />
      </div>

      <div className="mt-5">
        <FactGrid
          facts={[
            { label: "Duración del día", value: "7 minutos" },
            { label: "Duración de la noche", value: "7 minutos" },
            { label: "Revivir en fogata", value: "≈5 segundos" },
          ]}
        />
      </div>
    </PageShell>
  );
}
