import type { Metadata } from "next";
import Link from "next/link";
import { HeroScene } from "@/components/art/HeroScene";
import { CategoryArt } from "@/components/art/CategoryArt";
import { HeroSearch } from "@/components/site/HeroSearch";
import { PageShell, SectionHeading, Tag, RelatedLink } from "@/components/ui/Primitives";
import { EnemyCard, ItemCard, UpdateList } from "@/components/cards/Cards";
import { Duck } from "@/components/art/Duck";
import { Icon } from "@/components/ui/Icon";
import { enemies } from "@/lib/content/enemies";
import { getItem } from "@/lib/content/items";
import { updates } from "@/lib/content/guide";
import { site } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "HEADS UP! WIKI — La guía de supervivencia del bosque",
  description: site.description,
  alternates: { canonical: "/" },
};

const categories = [
  {
    variant: "enemigos" as const,
    title: "Enemigos",
    description: "Champi, El Orejas y el resto del bestiario.",
    href: "/enemigos",
  },
  {
    variant: "objetos" as const,
    title: "Objetos",
    description: "Mochila, linterna y herramientas.",
    href: "/objetos",
  },
  {
    variant: "mundo" as const,
    title: "Mundo",
    description: "Bosque, río y cascada.",
    href: "/mundo",
  },
  {
    variant: "supervivencia" as const,
    title: "Supervivencia",
    description: "Fogatas, supervivientes y mecánicas.",
    href: "/guia",
  },
  {
    variant: "historia" as const,
    title: "Historia",
    description: "Del accidente a la gasolinera.",
    href: "/historia",
  },
];

export default function HomePage() {
  const orejas = enemies.find((enemy) => enemy.slug === "el-orejas")!;
  const silbato = getItem("silbato")!;
  const cuerda = getItem("cuerda")!;

  return (
    <PageShell className="pb-4">
      <section
        aria-labelledby="hero-title"
        className="relative overflow-hidden rounded-[30px] border-4 border-bark-800 shadow-[0_20px_45px_rgba(0,0,0,0.45)]"
      >
        <HeroScene className="absolute inset-0 h-full w-full" />
        <div className="relative bg-gradient-to-b from-forest-950/5 via-transparent to-forest-950/45 px-3 py-7 sm:px-6 sm:py-10 lg:py-14">
          <div className="mx-auto max-w-2xl">
            <div className="panel-parchment relative px-5 pb-6 pt-7 sm:px-8 sm:pb-8 sm:pt-8">
              <span
                aria-hidden="true"
                className="absolute -top-2.5 left-1/2 h-6 w-28 -translate-x-1/2 rotate-[-2deg] rounded-[2px] border border-bark-600/30 bg-parch-200/90 shadow-sm"
              />
              <p className="flex items-center gap-2 font-display text-[0.7rem] font-extrabold uppercase tracking-[0.2em] text-forest-700">
                <Duck className="h-6 w-6" />
                Wiki oficial · cuaderno de campo
              </p>
              <h1
                id="hero-title"
                className="mt-2 text-balance text-[2rem] leading-[1.02] text-bark-800 sm:text-[2.6rem] lg:text-[3rem]"
              >
                ¡Bienvenido a la Wiki de HEADS UP!
              </h1>
              <p className="mt-3 text-pretty text-[1.02rem] leading-relaxed text-ink-soft">
                La guía de supervivencia definitiva. Descubre los peligros del bosque, aprende a utilizar tus
                herramientas y encuentra la manera de llegar a la gasolinera.
              </p>

              <div className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
                <Link href="/guia" className="btn btn-primary">
                  <Icon name="book" className="h-4 w-4" />
                  Explorar la guía
                </Link>
                <Link href="/enemigos" className="btn btn-secondary">
                  <Icon name="monster" className="h-4 w-4" />
                  Conocer los peligros
                </Link>
              </div>

              <HeroSearch />

              <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.72rem] font-bold uppercase tracking-wide text-bark-600">
                <span>5 monstruos</span>
                <span aria-hidden="true">·</span>
                <span>12 objetos</span>
                <span aria-hidden="true">·</span>
                <span>7 tramos</span>
                <span aria-hidden="true">·</span>
                <span>1 pato</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="categorias-title" className="mt-10">
        <div className="mb-4 flex items-end justify-between gap-3">
          <div>
            <p className="mb-1 font-display text-[0.7rem] font-extrabold uppercase tracking-[0.2em] text-lime-300">
              El tablón del campamento
            </p>
            <h2 id="categorias-title" className="text-2xl text-parch-50 sm:text-3xl">
              <span className="text-carved">¿Qué necesitas consultar?</span>
            </h2>
          </div>
          <span className="hidden font-hand text-lg text-parch-200/70 sm:block">Pasa, ponte cómodo</span>
        </div>

        <div className="grid grid-cols-2 gap-3.5 sm:gap-4 lg:grid-cols-5">
          {categories.map((category) => (
            <Link key={category.href + category.title} href={category.href} className="group block h-full">
              <article className="panel-wood flex h-full flex-col p-2 transition duration-200 group-hover:-translate-y-1.5 group-hover:shadow-[0_14px_24px_rgba(0,0,0,0.4)]">
                <div className="frame-art aspect-[4/3] w-full">
                  <CategoryArt
                    variant={category.variant}
                    className="h-full w-full transition duration-500 group-hover:scale-[1.06]"
                  />
                </div>
                <div className="mt-2 flex flex-1 flex-col rounded-xl bg-bark-900/30 px-2 py-2 text-center">
                  <h3 className="font-display text-lg font-extrabold leading-tight text-carved-sm">
                    {category.title}
                  </h3>
                  <p className="mt-0.5 text-[0.72rem] leading-snug text-parch-100/80">{category.description}</p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <section aria-labelledby="updates-title" className="mt-11">
        <SectionHeading
          title="Últimas actualizaciones"
          eyebrow="Tablón de novedades"
          icon={<Icon name="megaphone" className="h-5 w-5" />}
          action={
            <Link
              href="/actualizaciones"
              className="flex items-center gap-1.5 font-display text-sm font-bold text-sun-300 underline decoration-sun-500/50 decoration-2 underline-offset-4 hover:text-sun-400"
            >
              Ver el tablón completo <Icon name="arrow-right" className="h-4 w-4" />
            </Link>
          }
        />

        <div className="grid gap-5 lg:grid-cols-[1.55fr_1fr]">
          <div className="panel-wood p-2.5">
            <div className="panel-parchment-flat px-3.5 py-3.5 sm:px-4">
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <Tag tone="demo">Demostración</Tag>
                <p className="text-xs font-semibold text-ink-soft">
                  Panel preparado para las notas oficiales de la wiki y del juego.
                </p>
              </div>
              <UpdateList entries={updates} />
              <p className="mt-3 border-t border-bark-700/20 pt-2.5 text-xs leading-relaxed text-bark-600">
                Todavía no hay versiones ni actualizaciones reales publicadas. Estas entradas son contenido de
                demostración y se sustituirán por las notas oficiales.
              </p>
            </div>
          </div>

          <aside aria-labelledby="chuleta-title" className="panel-parchment relative p-5">
            <span className="absolute right-4 top-4 rotate-12 font-hand text-2xl text-berry-500/70" aria-hidden="true">
              ¡ojo!
            </span>
            <h3 id="chuleta-title" className="text-xl text-bark-800">
              Chuleta del excursionista
            </h3>
            <p className="mt-1 font-hand text-lg text-forest-700">Pégala en la mochila antes de salir.</p>
            <dl className="mt-3 space-y-1.5">
              {[
                { label: "El día dura", value: "7 minutos" },
                { label: "La noche dura", value: "7 minutos" },
                { label: "Huecos de inventario", value: "2" },
                { label: "Derribo con un golpe", value: "8+ de daño" },
                { label: "Ritual de la fogata", value: "5 segundos" },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex items-baseline justify-between gap-2 border-b border-dashed border-bark-600/25 pb-1.5 last:border-0"
                >
                  <dt className="text-sm font-semibold text-ink-soft">{row.label}</dt>
                  <dd className="font-display text-sm font-extrabold text-bark-800">{row.value}</dd>
                </div>
              ))}
            </dl>
            <Link href="/guia" className="btn btn-sm btn-secondary mt-4 w-full">
              Abrir la guía
            </Link>
          </aside>
        </div>
      </section>

      <section aria-labelledby="fichas-title" className="mt-11">
        <SectionHeading
          title="Fichas para empezar"
          eyebrow="Del tablón"
          icon={<Icon name="pin" className="h-5 w-5" />}
          action={
            <Link
              href="/enemigos"
              className="flex items-center gap-1.5 font-display text-sm font-bold text-sun-300 underline decoration-sun-500/50 decoration-2 underline-offset-4 hover:text-sun-400"
            >
              Todos los enemigos <Icon name="arrow-right" className="h-4 w-4" />
            </Link>
          }
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <EnemyCard enemy={orejas} />
          <ItemCard item={silbato} />
          <ItemCard item={cuerda} />
        </div>
      </section>

      <section aria-labelledby="empieza-title" className="mt-11">
        <div className="panel-wood p-3">
          <div className="relative overflow-hidden rounded-xl border-2 border-bark-900/50 bg-forest-800 px-5 py-6 sm:px-7">
            <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-lime-500/10 blur-2xl" />
            <div className="relative flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-display text-[0.68rem] font-extrabold uppercase tracking-[0.2em] text-lime-300">
                  Primer día en el bosque
                </p>
                <h2 id="empieza-title" className="mt-1 text-2xl text-carved-sm">
                  Empieza por el ciclo de día y noche
                </h2>
                <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-parch-100/85">
                  Siete minutos de luz, siete minutos de oscuridad y un inventario de dos huecos. Entender el
                  reloj del bosque es la diferencia entre llegar a la gasolinera o quedarte a vivir en él.
                </p>
              </div>
              <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                <Link href="/guia#ciclo-dia-y-noche" className="btn btn-primary btn-sm">
                  Ver el ciclo
                </Link>
                <Link href="/historia" className="btn btn-secondary btn-sm">
                  La historia
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <RelatedLink
          href="/objetos#sistema-de-impactos"
          label="Sistema de impactos y derribos"
          meta="La regla de los 8 puntos"
          icon={<Icon name="target" className="h-5 w-5" />}
        />
        <RelatedLink
          href="/mundo"
          label="Los siete tramos del recorrido"
          meta="Del campamento a la gasolinera"
          icon={<Icon name="pin" className="h-5 w-5" />}
        />
      </div>
    </PageShell>
  );
}
