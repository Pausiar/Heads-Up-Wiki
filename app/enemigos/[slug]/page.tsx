import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EnemyArt } from "@/components/art/EnemyArt";
import { ItemCard } from "@/components/cards/Cards";
import { Icon } from "@/components/ui/Icon";
import {
  Breadcrumbs,
  PageShell,
  SectionHeading,
  Tag,
  FactGrid,
  RelatedLink,
  EmptyState,
} from "@/components/ui/Primitives";
import { getEnemiesBySlugs, getEnemy, enemies } from "@/lib/content/enemies";
import { getItemsBySlugs } from "@/lib/content/items";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return enemies.map((enemy) => ({ slug: enemy.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const enemy = getEnemy(slug);
  if (!enemy) return { title: "Enemigo no encontrado" };
  return {
    title: `${enemy.name} (${enemy.nickname})`,
    description: `${enemy.tagline} Aparición: ${enemy.schedule}. ${enemy.counter[0] ?? ""}`,
    alternates: { canonical: `/enemigos/${enemy.slug}` },
    openGraph: {
      title: `${enemy.name} · HEADS UP! WIKI`,
      description: enemy.tagline,
      type: "article",
    },
  };
}

export default async function EnemyPage({ params }: Params) {
  const { slug } = await params;
  const enemy = getEnemy(slug);
  if (!enemy) notFound();

  const relatedItems = getItemsBySlugs(enemy.relatedItems);
  const index = enemies.findIndex((entry) => entry.slug === enemy.slug);
  const previous = enemies[(index - 1 + enemies.length) % enemies.length];
  const next = enemies[(index + 1) % enemies.length];
  const isNightOnly = enemy.appearances.length === 1 && enemy.appearances[0] === "noche";

  return (
    <PageShell>
      <Breadcrumbs items={[{ label: "Enemigos", href: "/enemigos" }, { label: enemy.name }]} />

      <section className="panel-parchment overflow-hidden p-4 sm:p-6">
        <div className="grid gap-5 lg:grid-cols-[1.02fr_1fr] lg:gap-7">
          <div>
            <div className="panel-wood p-2">
              <div className="frame-art aspect-[4/3]">
                <EnemyArt art={enemy.art} className="h-full w-full" />
              </div>
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <Tag tone={isNightOnly ? "night" : "day"}>{enemy.schedule}</Tag>
              <Tag tone="forest">Monstruo</Tag>
              {enemy.featured && <Tag tone="day">Monstruo estrella</Tag>}
            </div>
          </div>

          <div>
            <p className="font-display text-[0.7rem] font-extrabold uppercase tracking-[0.2em] text-forest-700">
              {enemy.nickname}
            </p>
            <h1 className="mt-1 text-balance text-3xl leading-[1.03] text-bark-800 sm:text-4xl">
              {enemy.name}
            </h1>
            <p className="mt-2 font-hand text-xl text-berry-500">{enemy.tagline}</p>
            <div className="mt-3 space-y-2.5">
              {enemy.description.map((paragraph) => (
                <p key={paragraph} className="text-pretty text-[0.98rem] leading-relaxed text-ink-soft">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-4">
              <FactGrid facts={enemy.facts.slice(0, 4)} compact />
            </div>
          </div>
        </div>
      </section>

      <div className="mt-8 grid gap-5 lg:grid-cols-[1.55fr_1fr]">
        <div className="space-y-5">
          <section className="panel-parchment p-5 sm:p-6">
            <SectionHeading
              title="Comportamiento"
              eyebrow="Qué hace"
              tone="dark"
              icon={<Icon name="monster" className="h-5 w-5" />}
            />
            <ol className="space-y-2.5">
              {enemy.behavior.map((line, lineIndex) => (
                <li key={line} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border-2 border-bark-700/40 bg-bark-700/10 font-display text-sm font-extrabold text-bark-700"
                  >
                    {lineIndex + 1}
                  </span>
                  <p className="pt-0.5 text-[0.98rem] leading-relaxed text-ink-soft">{line}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="panel-parchment p-5 sm:p-6">
            <SectionHeading
              title={enemy.counterTitle}
              eyebrow="La respuesta"
              tone="dark"
              icon={<Icon name="target" className="h-5 w-5" />}
            />
            <ul className="space-y-2.5">
              {enemy.counter.map((line) => (
                <li key={line} className="flex gap-2.5">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full border-2 border-forest-600/40 bg-forest-600/15 text-forest-700">
                    <Icon name="check" className="h-3.5 w-3.5" />
                  </span>
                  <p className="text-[0.98rem] leading-relaxed text-ink-soft">{line}</p>
                </li>
              ))}
            </ul>
          </section>

          {enemy.notes.length > 0 && (
            <section className="panel-parchment p-5 sm:p-6">
              <SectionHeading
                title="Notas de campo"
                eyebrow="Detalles que conviene saber"
                tone="dark"
                icon={<Icon name="info" className="h-5 w-5" />}
              />
              <div className="grid gap-3 sm:grid-cols-2">
                {enemy.notes.map((note) => (
                  <div key={note.title} className="rounded-xl border-l-4 border-l-river-500 bg-river-500/10 px-3.5 py-3">
                    <p className="font-display text-sm font-extrabold text-river-600">{note.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">{note.text}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        <aside className="space-y-5">
          <section className="panel-parchment p-5">
            <h2 className="flex items-center gap-2 font-display text-lg font-extrabold text-bark-800">
              <Icon name="moon" className="h-5 w-5 text-river-600" />
              Aparición
            </h2>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {enemy.appearances.includes("dia") && <Tag tone="day">Día</Tag>}
              {enemy.appearances.includes("noche") && <Tag tone="night">Noche</Tag>}
            </div>
            <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">{enemy.scheduleDetail}</p>
          </section>

          <section className="panel-parchment p-5">
            <h2 className="flex items-center gap-2 font-display text-lg font-extrabold text-bark-800">
              <Icon name="target" className="h-5 w-5 text-berry-500" />
              Datos rápidos
            </h2>
            <div className="mt-2.5">
              <FactGrid facts={enemy.facts} compact />
            </div>
          </section>

          <section className="panel-wood p-2">
            <div className="rounded-xl bg-bark-900/30 px-4 py-3.5">
              <p className="font-display text-xs font-extrabold uppercase tracking-[0.16em] text-sun-300">
                Sigue explorando
              </p>
              <div className="mt-2 space-y-1.5">
                <Link
                  href={`/enemigos/${previous.slug}`}
                  className="flex items-center gap-2 font-display text-sm font-bold text-parch-100 hover:text-sun-300"
                >
                  <Icon name="arrow-left" className="h-4 w-4" /> {previous.name}
                </Link>
                <Link
                  href={`/enemigos/${next.slug}`}
                  className="flex items-center gap-2 font-display text-sm font-bold text-parch-100 hover:text-sun-300"
                >
                  <Icon name="arrow-right" className="h-4 w-4" /> {next.name}
                </Link>
              </div>
            </div>
          </section>
        </aside>
      </div>

      <section aria-labelledby="relacionados-title" className="mt-10">
        <SectionHeading
          title="Objetos relacionados"
          eyebrow="Con qué defenderse"
          id="relacionados-title"
          icon={<Icon name="backpack" className="h-5 w-5" />}
        />
        {relatedItems.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedItems.map((item) => (
              <ItemCard key={item.slug} item={item} />
            ))}
          </div>
        ) : (
          <EmptyState
            title="Sin objetos documentados…"
            text="Todavía no hay objetos oficiales asociados a este enemigo. Esta zona del tablón se completará cuando el juego lo confirme."
          />
        )}
      </section>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <RelatedLink
          href="/enemigos"
          label="Volver al bestiario"
          meta="Los cinco monstruos"
          icon={<Icon name="monster" className="h-5 w-5" />}
        />
        <RelatedLink
          href="/guia#sonido-y-sigilo"
          label="Sonido y sigilo"
          meta="Cómo moverte sin que te oigan"
          icon={<Icon name="sound" className="h-5 w-5" />}
        />
      </div>
    </PageShell>
  );
}

export const dynamicParams = false;
