import type { Metadata } from "next";
import { PageShell, PageHeader, SectionHeading, Tag, RelatedLink, EmptyState } from "@/components/ui/Primitives";
import { ZoneCard } from "@/components/cards/Cards";
import { RouteTrail } from "@/components/art/StoryVisuals";
import { Icon } from "@/components/ui/Icon";
import { zones } from "@/lib/content/guide";

export const metadata: Metadata = {
  title: "Mundo",
  description:
    "Los siete tramos de HEADS UP!: campamento, bosque frondoso, río y puentes, cascada y barranco, montaña rocosa, pinar y gasolinera.",
  alternates: { canonical: "/mundo" },
};

export default function WorldPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Enciclopedia de lugares"
        title="Mundo"
        subtitle="Siete tramos separan al grupo de la gasolinera. Esta es la enciclopedia visual del recorrido: qué hay en cada zona y qué queda todavía por explorar."
        icon={<Icon name="leaf" className="h-7 w-7" />}
      >
        <div className="flex flex-wrap items-center gap-2">
          <Tag tone="forest">7 tramos</Tag>
          <Tag>Del campamento a la gasolinera</Tag>
          <Tag tone="day">Capturas pendientes</Tag>
        </div>
      </PageHeader>

      <section aria-labelledby="recorrido-title" className="mb-10">
        <SectionHeading
          title="El recorrido"
          eyebrow="Mapa de progreso"
          id="recorrido-title"
          icon={<Icon name="pin" className="h-5 w-5" />}
        />
        <div className="panel-parchment p-4 sm:p-5">
          <RouteTrail />
        </div>
      </section>

      <section aria-labelledby="zonas-title">
        <SectionHeading
          title="Lugares del bosque"
          eyebrow="Fichas de zona"
          id="zonas-title"
          icon={<Icon name="leaf" className="h-5 w-5" />}
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {zones.map((zone) => (
            <ZoneCard key={zone.slug} zone={zone} />
          ))}
        </div>
      </section>

      <section className="mt-10">
        <EmptyState
          title="Esta zona del bosque todavía no ha sido explorada…"
          text="Aquí aparecerán las capturas de Unreal Engine 5, los secretos de cada tramo y los detalles de los escenarios. La estructura ya está preparada para añadirlos sin tocar el diseño."
        />
      </section>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <RelatedLink
          href="/historia#recorrido"
          label="El recorrido en la historia"
          meta="De la furgoneta averiada a la gasolinera"
          icon={<Icon name="flag" className="h-5 w-5" />}
        />
        <RelatedLink
          href="/guia"
          label="Guía de supervivencia"
          meta="Mecánicas y ciclo día-noche"
          icon={<Icon name="book" className="h-5 w-5" />}
        />
      </div>
    </PageShell>
  );
}
