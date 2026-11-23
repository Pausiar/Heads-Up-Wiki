import type { Metadata } from "next";
import { PageShell, PageHeader, Tag, RelatedLink } from "@/components/ui/Primitives";
import { Blocks } from "@/components/ui/Blocks";
import { RouteTrail, DayNightDial } from "@/components/art/StoryVisuals";
import { FallingObjects, GhostCampfire } from "@/components/art/StoryExtras";
import { ZoneArt } from "@/components/art/ZoneArt";
import { Duck } from "@/components/art/Duck";
import { Icon } from "@/components/ui/Icon";
import { story } from "@/lib/content/guide";

export const metadata: Metadata = {
  title: "Historia y recorrido",
  description:
    "El planteamiento de HEADS UP!: la furgoneta averiada, los siete tramos hasta la gasolinera, la muerte, el ritual de la fogata y el final de la partida.",
  alternates: { canonical: "/historia" },
};

const navItems = [
  { id: "planteamiento", label: "Planteamiento" },
  { id: "tono", label: "Tono" },
  { id: "recorrido", label: "Recorrido" },
  { id: "muerte-y-resurreccion", label: "Muerte y resurrección" },
  { id: "final", label: "Final" },
  { id: "recompensas", label: "Recompensas" },
];

export default function StoryPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Historia del juego"
        title="Historia y recorrido"
        subtitle={story.intro}
        icon={<Icon name="flag" className="h-7 w-7" />}
      >
        <div className="flex flex-wrap items-center gap-2">
          <Tag tone="forest">Cooperativo</Tag>
          <Tag>Friend slop</Tag>
          <Tag tone="day">Primera persona</Tag>
          <Tag>7 tramos</Tag>
        </div>
      </PageHeader>

      <div className="panel-wood mb-8 p-2">
        <div className="relative overflow-hidden rounded-xl border-2 border-bark-900/50 bg-forest-800 px-5 py-6 sm:px-7">
          <Duck className="pointer-events-none absolute -right-3 bottom-1 h-28 w-28 opacity-90 sm:h-36 sm:w-36" />
          <p className="font-display text-[0.68rem] font-extrabold uppercase tracking-[0.2em] text-lime-300">
            Lema del menú
          </p>
          <p className="mt-1 max-w-xl font-hand text-3xl leading-tight text-parch-50 sm:text-4xl">
            «No mires solo al frente…»
          </p>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-parch-100/80">
            Mascota principal: el pato de goma gigante. Está por todas partes, y no siempre donde esperas.
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_240px]">
        <div className="space-y-6">
          {story.sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-28">
              <div className="panel-parchment p-5 sm:p-7">
                <p className="font-display text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-forest-700">
                  {section.tagline}
                </p>
                <h2 className="mt-0.5 text-2xl leading-tight text-bark-800 sm:text-[1.75rem]">
                  {section.title}
                </h2>
                <div className="mt-3">
                  <Blocks blocks={section.blocks} />
                </div>

                {section.id === "planteamiento" && (
                  <div className="mt-5">
                    <div className="panel-wood p-2">
                      <div className="frame-art aspect-[16/9]">
                        <ZoneArt art="campamento" className="h-full w-full" />
                      </div>
                    </div>
                    <p className="mt-1.5 text-center font-hand text-base text-bark-600">
                      El campamento: aquí empieza todo, con la furgoneta humeando.
                    </p>
                  </div>
                )}

                {section.id === "tono" && (
                  <div className="mt-5 rounded-xl border-2 border-bark-700/30 bg-parch-200/50 p-4">
                    <p className="mb-3 font-display text-xs font-extrabold uppercase tracking-[0.16em] text-bark-600">
                      Puede caer del cielo
                    </p>
                    <FallingObjects />
                  </div>
                )}

                {section.id === "recorrido" && (
                  <div className="mt-5">
                    <RouteTrail />
                  </div>
                )}

                {section.id === "muerte-y-resurreccion" && (
                  <div className="mt-5 overflow-hidden rounded-xl border-2 border-bark-700/30">
                    <GhostCampfire />
                  </div>
                )}

                {section.id === "final" && (
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-xl border-2 border-forest-600/40 bg-forest-600/10 p-4">
                      <p className="flex items-center gap-2 font-display text-sm font-extrabold text-forest-700">
                        <Icon name="flag" className="h-4 w-4" /> Victoria
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                        Al menos un jugador llega a la gasolinera. Se reproduce una animación corta y unos
                        resultados graciosos.
                      </p>
                    </div>
                    <div className="rounded-xl border-2 border-berry-500/40 bg-berry-500/10 p-4">
                      <p className="flex items-center gap-2 font-display text-sm font-extrabold text-berry-500">
                        <Icon name="warning" className="h-4 w-4" /> Derrota
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                        Todos los jugadores mueren a la vez. No existe límite de tiempo.
                      </p>
                    </div>
                  </div>
                )}

                {section.id === "recompensas" && (
                  <div className="mt-5 grid gap-2.5 sm:grid-cols-3">
                    {[
                      { title: "Monedas", text: "Según los tramos completados." },
                      { title: "Supervivientes", text: "También influyen en las monedas." },
                      { title: "Logros y premios", text: "Recompensas adicionales del juego." },
                    ].map((reward) => (
                      <div key={reward.title} className="rounded-xl border-2 border-bark-700/30 bg-parch-50 px-3 py-2.5">
                        <p className="font-display text-sm font-extrabold text-bark-800">{reward.title}</p>
                        <p className="mt-0.5 text-xs leading-relaxed text-ink-soft">{reward.text}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </section>
          ))}

          <section className="panel-parchment p-5 sm:p-7">
            <h2 className="flex items-center gap-2 text-xl text-bark-800">
              <Icon name="sun" className="h-5 w-5 text-tang-500" /> El reloj del bosque
            </h2>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
              La historia se juega en ciclos de siete minutos de día y siete de noche. Los monstruos aprovechan
              la oscuridad, pero el Ganso del averno no distingue horas.
            </p>
            <div className="mt-3 rounded-xl border-2 border-bark-700/30 bg-parch-200/50 p-3">
              <DayNightDial />
            </div>
          </section>
        </div>

        <aside className="space-y-4 lg:sticky lg:top-28 lg:self-start">
          <div className="panel-parchment p-4">
            <p className="font-display text-xs font-extrabold uppercase tracking-[0.16em] text-bark-600">
              En esta página
            </p>
            <nav aria-label="Secciones de la historia" className="mt-2 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm font-bold text-bark-700 transition hover:bg-bark-700/10"
                >
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-forest-600" />
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="panel-wood p-2">
            <div className="rounded-xl bg-bark-900/30 px-4 py-3.5">
              <p className="font-display text-xs font-extrabold uppercase tracking-[0.16em] text-sun-300">
                Explora el recorrido
              </p>
              <RelatedLink href="/mundo" label="Los siete tramos" meta="Fichas de zona" icon={<Icon name="pin" className="h-4 w-4" />} />
            </div>
          </div>
        </aside>
      </div>
    </PageShell>
  );
}
