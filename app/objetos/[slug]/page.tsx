import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ItemArt } from "@/components/art/ItemArt";
import { EnemyCard, ItemCard } from "@/components/cards/Cards";
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
import { getEnemiesBySlugs } from "@/lib/content/enemies";
import { getItem, getItemsBySlugs, itemCategories, items } from "@/lib/content/items";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return items.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const item = getItem(slug);
  if (!item) return { title: "Objeto no encontrado" };
  return {
    title: `${item.name} — ${item.kind}`,
    description: `${item.tagline} ${item.how[0] ?? ""}`,
    alternates: { canonical: `/objetos/${item.slug}` },
    openGraph: { title: `${item.name} · HEADS UP! WIKI`, description: item.tagline, type: "article" },
  };
}

export default async function ItemPage({ params }: Params) {
  const { slug } = await params;
  const item = getItem(slug);
  if (!item) notFound();

  const relatedEnemies = getEnemiesBySlugs(item.relatedEnemies);
  const relatedItems = getItemsBySlugs(item.relatedItems);
  const index = items.findIndex((entry) => entry.slug === item.slug);
  const previous = items[(index - 1 + items.length) % items.length];
  const next = items[(index + 1) % items.length];
  const categoryLabels = new Map(itemCategories.map((category) => [category.id, category.label]));

  return (
    <PageShell>
      <Breadcrumbs items={[{ label: "Objetos", href: "/objetos" }, { label: item.name }]} />

      <section className="panel-parchment overflow-hidden p-4 sm:p-6">
        <div className="grid gap-5 md:grid-cols-[auto_1fr] md:gap-7">
          <div>
            <div className="mx-auto w-44 sm:w-52">
              <div className="panel-wood p-2">
                <div className="flex aspect-square items-center justify-center rounded-lg border-2 border-bark-900/50 bg-gradient-to-b from-parch-50 to-parch-300 p-4 shadow-[inset_0_4px_0_rgba(255,255,255,0.75)]">
                  <ItemArt art={item.art} className="h-full w-full" />
                </div>
              </div>
            </div>
            <div className="mt-3 flex flex-wrap justify-center gap-1.5">
              <Tag tone="forest">{item.kind}</Tag>
              {item.categories.map((category) => (
                <Tag key={category}>{categoryLabels.get(category) ?? category}</Tag>
              ))}
            </div>
          </div>

          <div>
            <p className="font-display text-[0.7rem] font-extrabold uppercase tracking-[0.2em] text-forest-700">
              {item.kind} · {item.charges ? `${item.charges} ${item.charges === 1 ? "carga" : "cargas"}` : "cargas sin especificar"}
            </p>
            <h1 className="mt-1 text-3xl leading-[1.03] text-bark-800 sm:text-4xl">{item.name}</h1>
            <p className="mt-2 font-hand text-xl text-forest-700">{item.tagline}</p>
            <div className="mt-3 space-y-2.5">
              {item.description.map((paragraph) => (
                <p key={paragraph} className="text-pretty text-[0.98rem] leading-relaxed text-ink-soft">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-3 flex items-center gap-2 rounded-lg border-2 border-bark-700/25 bg-parch-50 px-3 py-2">
              <span className="font-display text-[0.66rem] font-extrabold uppercase tracking-wide text-bark-600">
                Cargas
              </span>
              <span className="flex gap-1" aria-hidden="true">
                {item.charges
                  ? Array.from({ length: item.charges }).map((_, pipIndex) => (
                      <span key={pipIndex} className="h-2.5 w-2.5 rounded-full border border-bark-700 bg-bark-700/70" />
                    ))
                  : Array.from({ length: 4 }).map((_, pipIndex) => (
                      <span key={pipIndex} className="h-2.5 w-2.5 rounded-full border border-bark-700/60" />
                    ))}
              </span>
              <span className="font-display text-sm font-bold text-bark-800">
                {item.charges ? `${item.charges}` : "Sin especificar"}
              </span>
            </div>

            <div className="mt-3">
              <FactGrid facts={item.facts} compact />
            </div>
          </div>
        </div>
      </section>

      <div className="mt-8 grid gap-5 lg:grid-cols-[1.55fr_1fr]">
        <div className="space-y-5">
          <section className="panel-parchment p-5 sm:p-6">
            <SectionHeading
              title="Cómo funciona"
              eyebrow="Uso del objeto"
              tone="dark"
              icon={<Icon name="gear" className="h-5 w-5" />}
            />
            <ul className="space-y-2.5">
              {item.how.map((line) => (
                <li key={line} className="flex gap-2.5 text-[0.98rem] leading-relaxed text-ink-soft">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full border-2 border-forest-600/40 bg-forest-600/15 text-forest-700">
                    <Icon name="check" className="h-3.5 w-3.5" />
                  </span>
                  {line}
                </li>
              ))}
            </ul>

            {item.limits.length > 0 && (
              <div className="mt-5 rounded-xl border-l-4 border-l-berry-500 bg-berry-500/10 px-3.5 py-3">
                <p className="flex items-center gap-1.5 font-display text-sm font-extrabold text-berry-500">
                  <Icon name="warning" className="h-4 w-4" /> Limitaciones
                </p>
                <ul className="mt-1.5 space-y-1">
                  {item.limits.map((limit) => (
                    <li key={limit} className="flex gap-2 text-sm leading-relaxed text-ink-soft">
                      <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-berry-500" />
                      {limit}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {item.impactNote && (
              <div className="mt-4 rounded-xl border-l-4 border-l-sun-500 bg-sun-500/15 px-3.5 py-3">
                <p className="flex items-center gap-1.5 font-display text-sm font-extrabold text-bark-800">
                  <Icon name="target" className="h-4 w-4" /> Sistema de impactos y derribos
                </p>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">{item.impactNote}</p>
              </div>
            )}

            {item.devNote && (
              <div className="mt-4 rounded-xl border-l-4 border-l-river-500 bg-river-500/10 px-3.5 py-3">
                <p className="flex items-center gap-1.5 font-display text-sm font-extrabold text-river-600">
                  <Icon name="info" className="h-4 w-4" /> Nota de desarrollo
                </p>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">{item.devNote}</p>
              </div>
            )}
          </section>

          <section className="panel-parchment p-5 sm:p-6">
            <SectionHeading
              title="Cuándo llevarlo"
              eyebrow="Uso táctico"
              tone="dark"
              icon={<Icon name="info" className="h-5 w-5" />}
            />
            <p className="text-sm leading-relaxed text-ink-soft">
              {item.kind === "Pasivo"
                ? "Es un objeto pasivo: no hay que pulsar nada, actúa mientras lo llevas en la mano. Si se agota, deja de protegerte."
                : "Es un objeto activo: se guarda en uno de los dos huecos y se utiliza cuando tú decides. Revisa cuántas cargas te quedan antes de la noche."}
            </p>
            {item.relatedEnemies.length === 0 && (
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Todavía no hay enemigos oficiales asociados a este objeto. La ficha se ampliará cuando el juego
                confirme más interacciones.
              </p>
            )}
          </section>
        </div>

        <aside className="space-y-5">
          <section className="panel-parchment p-5">
            <h2 className="font-display text-lg font-extrabold text-bark-800">Resumen rápido</h2>
            <div className="mt-2.5">
              <FactGrid facts={item.facts} compact />
            </div>
          </section>

          <section className="panel-wood p-2">
            <div className="rounded-xl bg-bark-900/30 px-4 py-3.5">
              <p className="font-display text-xs font-extrabold uppercase tracking-[0.16em] text-sun-300">
                Otros objetos
              </p>
              <div className="mt-2 space-y-1.5">
                <RelatedLink href={`/objetos/${previous.slug}`} label={previous.name} meta="Anterior" icon={<Icon name="arrow-left" className="h-4 w-4" />} />
                <RelatedLink href={`/objetos/${next.slug}`} label={next.name} meta="Siguiente" icon={<Icon name="arrow-right" className="h-4 w-4" />} />
              </div>
            </div>
          </section>
        </aside>
      </div>

      {relatedEnemies.length > 0 && (
        <section aria-labelledby="enemigos-relacionados" className="mt-10">
          <SectionHeading
            title="Fichas de los enemigos implicados"
            eyebrow="Para leer antes de salir"
            id="enemigos-relacionados"
            icon={<Icon name="monster" className="h-5 w-5" />}
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedEnemies.slice(0, 3).map((enemy) => (
              <EnemyCard key={enemy.slug} enemy={enemy} />
            ))}
          </div>
        </section>
      )}

      {relatedItems.length > 0 && (
        <section aria-labelledby="objetos-relacionados" className="mt-8">
          <SectionHeading
            title="Objetos que encajan"
            eyebrow="Sinergias del inventario"
            id="objetos-relacionados"
            icon={<Icon name="backpack" className="h-5 w-5" />}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {relatedItems.map((related) => (
              <ItemCard key={related.slug} item={related} />
            ))}
          </div>
        </section>
      )}

      {relatedEnemies.length === 0 && relatedItems.length === 0 && (
        <div className="mt-8">
          <EmptyState
            title="Ficha en construcción…"
            text="Esta zona del bosque todavía no ha sido explorada. La información relacionada aparecerá aquí cuando esté documentada."
          />
        </div>
      )}
    </PageShell>
  );
}

export const dynamicParams = false;
