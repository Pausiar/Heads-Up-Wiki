import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ZoneArt } from "@/components/art/ZoneArt";
import { Icon } from "@/components/ui/Icon";
import {
  Breadcrumbs,
  PageShell,
  SectionHeading,
  Tag,
  RelatedLink,
  EmptyState,
} from "@/components/ui/Primitives";
import { getZone, zones } from "@/lib/content/guide";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return zones.map((zone) => ({ slug: zone.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const zone = getZone(slug);
  if (!zone) return { title: "Zona no encontrada" };
  return {
    title: `${zone.name} — tramo ${zone.order}`,
    description: zone.tagline,
    alternates: { canonical: `/mundo/${zone.slug}` },
    openGraph: { title: `${zone.name} · HEADS UP! WIKI`, description: zone.tagline, type: "article" },
  };
}

export default async function ZonePage({ params }: Params) {
  const { slug } = await params;
  const zone = getZone(slug);
  if (!zone) notFound();

  const previous = zones[(zone.order - 2 + zones.length) % zones.length];
  const next = zones[zone.order % zones.length];

  return (
    <PageShell>
      <Breadcrumbs items={[{ label: "Mundo", href: "/mundo" }, { label: zone.name }]} />

      <section className="mb-8">
        <div className="panel-wood p-2.5">
          <div className="frame-art relative aspect-[16/9] max-h-[430px] w-full">
            <ZoneArt art={zone.art} className="h-full w-full" />
            <span className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full border-2 border-bark-900/60 bg-parch-100/95 px-2.5 py-1 font-display text-xs font-extrabold uppercase tracking-wide text-bark-800">
              Tramo {zone.order} de 7
            </span>
          </div>
        </div>
      </section>

      <div className="grid gap-5 lg:grid-cols-[1.5fr_1fr]">
        <div className="space-y-5">
          <section className="panel-parchment p-5 sm:p-7">
            <p className="font-display text-[0.7rem] font-extrabold uppercase tracking-[0.2em] text-forest-700">
              Posición {zone.order} del recorrido
            </p>
            <h1 className="mt-1 text-3xl leading-[1.03] text-bark-800 sm:text-4xl">{zone.name}</h1>
            <p className="mt-2 font-hand text-xl text-forest-700">{zone.tagline}</p>
            <div className="mt-3 space-y-2.5">
              {zone.description.map((paragraph) => (
                <p key={paragraph} className="text-pretty text-[0.98rem] leading-relaxed text-ink-soft">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-1.5">
              <Tag tone="forest">Zona del recorrido</Tag>
              <Tag>Tramo {zone.order}</Tag>
            </div>
          </section>

          <section className="panel-parchment p-5 sm:p-6">
            <SectionHeading
              title="Elementos conocidos"
              eyebrow="Lo que se sabe"
              tone="dark"
              icon={<Icon name="pin" className="h-5 w-5" />}
            />
            <ul className="space-y-2">
              {zone.elements.map((element) => (
                <li key={element} className="flex gap-2.5 text-[0.98rem] leading-relaxed text-ink-soft">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full border-2 border-forest-600/40 bg-forest-600/15 text-forest-700">
                    <Icon name="check" className="h-3.5 w-3.5" />
                  </span>
                  {element}
                </li>
              ))}
            </ul>
            <p className="mt-3 border-t border-bark-700/20 pt-2.5 text-xs leading-relaxed text-bark-600">
              La wiki no inventa acontecimientos de cada tramo: solo documenta lo confirmado sobre el escenario.
            </p>
          </section>

          <EmptyState title="Esta zona del bosque todavía no ha sido explorada…" text={zone.emptyState} />
        </div>

        <aside className="space-y-5">
          <section className="panel-parchment p-5">
            <h2 className="font-display text-lg font-extrabold text-bark-800">Artículos relacionados</h2>
            <div className="mt-2.5 space-y-2">
              {zone.related.map((link) => (
                <RelatedLink
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  icon={<Icon name="arrow-right" className="h-4 w-4" />}
                />
              ))}
            </div>
          </section>

          <section className="panel-wood p-2">
            <div className="rounded-xl bg-bark-900/30 px-4 py-3.5">
              <p className="font-display text-xs font-extrabold uppercase tracking-[0.16em] text-sun-300">
                El camino continúa
              </p>
              <div className="mt-2 space-y-1.5">
                <Link
                  href={`/mundo/${previous.slug}`}
                  className="flex items-center gap-2 font-display text-sm font-bold text-parch-100 hover:text-sun-300"
                >
                  <Icon name="arrow-left" className="h-4 w-4" /> {previous.name}
                </Link>
                <Link
                  href={`/mundo/${next.slug}`}
                  className="flex items-center gap-2 font-display text-sm font-bold text-parch-100 hover:text-sun-300"
                >
                  <Icon name="arrow-right" className="h-4 w-4" /> {next.name}
                </Link>
              </div>
            </div>
          </section>
        </aside>
      </div>
    </PageShell>
  );
}

export const dynamicParams = false;
