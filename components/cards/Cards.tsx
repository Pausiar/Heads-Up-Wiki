import Link from "next/link";
import { EnemyArt } from "@/components/art/EnemyArt";
import { ItemArt } from "@/components/art/ItemArt";
import { ZoneArt } from "@/components/art/ZoneArt";
import { Icon } from "@/components/ui/Icon";
import { Tag } from "@/components/ui/Primitives";
import { Nail } from "@/components/art/Decor";
import type { Enemy, Item, ItemCategory, UpdateEntry, Zone } from "@/lib/content/types";
import { itemCategories } from "@/lib/content/items";

function appearanceLabel(enemy: Enemy) {
  if (enemy.appearances.includes("dia") && enemy.appearances.includes("noche")) return "Día y noche";
  return enemy.appearances.includes("dia") ? "Día" : "Noche";
}

export function EnemyCard({ enemy }: { enemy: Enemy }) {
  const isNight = enemy.appearances.length === 1 && enemy.appearances[0] === "noche";
  return (
    <Link href={`/enemigos/${enemy.slug}`} className="group block h-full">
      <article className="panel-wood flex h-full flex-col p-2.5 transition duration-200 group-hover:-translate-y-1.5 group-hover:shadow-[0_14px_24px_rgba(0,0,0,0.35)]">
        <div className="frame-art aspect-[4/3] w-full">
          <EnemyArt art={enemy.art} className="h-full w-full transition duration-500 group-hover:scale-[1.04]" />
        </div>
        <div className="mt-2.5 flex flex-1 flex-col rounded-xl bg-bark-900/25 px-3 py-2.5">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-display text-xl font-extrabold leading-tight text-carved-sm">{enemy.name}</h3>
            <Tag tone={isNight ? "night" : "day"} className="mt-0.5 shrink-0 px-2 py-0.5 text-[0.66rem]">
              {appearanceLabel(enemy)}
            </Tag>
          </div>
          <p className="mt-1 line-clamp-2 text-sm leading-snug text-parch-100/85">{enemy.tagline}</p>
          <span className="mt-auto flex items-center justify-between gap-2 pt-2.5 font-display text-xs font-bold uppercase tracking-wide text-sun-300">
            Ver ficha
            <Icon name="arrow-right" className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
          </span>
        </div>
      </article>
    </Link>
  );
}

export function ItemCharges({ item }: { item: Item }) {
  return (
    <span className="inline-flex items-center gap-1 text-[0.72rem] font-bold text-bark-700">
      <span className="flex gap-0.5" aria-hidden="true">
        {item.charges
          ? Array.from({ length: Math.min(item.charges, 6) }).map((_, index) => (
              <span key={index} className="h-1.5 w-1.5 rounded-full bg-bark-700/70" />
            ))
          : Array.from({ length: 3 }).map((_, index) => (
              <span key={index} className="h-1.5 w-1.5 rounded-full border border-bark-700/70" />
            ))}
      </span>
      {item.charges ? `${item.charges} ${item.charges === 1 ? "carga" : "cargas"}` : "Cargas sin especificar"}
    </span>
  );
}

const categoryLabels = new Map<ItemCategory, string>(
  itemCategories.map((category) => [category.id, category.label]),
);

export function ItemCard({ item }: { item: Item }) {
  return (
    <Link href={`/objetos/${item.slug}`} className="group block h-full">
      <article className="panel-card relative flex h-full flex-col p-3.5 pt-4 transition duration-200 group-hover:-translate-y-1 group-hover:shadow-[0_12px_20px_rgba(0,0,0,0.25)]">
        <span className="absolute left-1/2 top-1 h-3.5 w-3.5 -translate-x-1/2">
          <Nail className="h-3.5 w-3.5" />
        </span>
        <div className="flex gap-3">
          <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border-[3px] border-bark-700 bg-gradient-to-b from-parch-50 to-parch-300 p-1.5 shadow-[inset_0_2px_0_rgba(255,255,255,0.8)]">
            <ItemArt art={item.art} className="h-full w-full" />
          </span>
          <div className="min-w-0 flex-1">
            <h3 className="font-display text-lg font-extrabold leading-tight text-bark-800">{item.name}</h3>
            <p className="mt-0.5 text-[0.72rem] font-bold uppercase tracking-wide text-bark-600">
              {item.kind}
            </p>
            <div className="mt-1">
              <ItemCharges item={item} />
            </div>
          </div>
        </div>
        <p className="mt-2.5 line-clamp-2 text-sm leading-snug text-ink-soft">{item.tagline}</p>
        <div className="mt-3 flex flex-wrap items-center gap-1.5">
          {item.categories.map((category) => (
            <span key={category} className="chip px-2 py-0 text-[0.66rem]">
              {categoryLabels.get(category) ?? category}
            </span>
          ))}
          <span className="ml-auto flex items-center gap-1 font-display text-[0.7rem] font-bold uppercase tracking-wide text-bark-700 opacity-0 transition group-hover:opacity-100">
            Abrir <Icon name="arrow-right" className="h-3 w-3" />
          </span>
        </div>
      </article>
    </Link>
  );
}

export function ZoneCard({ zone }: { zone: Zone }) {
  return (
    <Link href={`/mundo/${zone.slug}`} className="group block h-full">
      <article className="panel-wood flex h-full flex-col p-2.5 transition duration-200 group-hover:-translate-y-1.5">
        <div className="frame-art relative aspect-[16/10] w-full">
          <ZoneArt art={zone.art} className="h-full w-full transition duration-500 group-hover:scale-[1.04]" />
          <span className="absolute left-2 top-2 flex h-8 w-8 items-center justify-center rounded-full border-[3px] border-bark-800 bg-sun-400 font-display text-sm font-extrabold text-bark-900 shadow-[0_2px_0_rgba(45,24,8,0.5)]">
            {zone.order}
          </span>
          <span className="absolute bottom-2 right-2 rounded-full border-2 border-bark-900/60 bg-parch-100/95 px-2 py-0.5 font-display text-[0.62rem] font-extrabold uppercase tracking-wide text-bark-800">
            Tramo {zone.order}/7
          </span>
        </div>
        <div className="mt-2.5 flex flex-1 flex-col rounded-xl bg-bark-900/25 px-3 py-2.5">
          <h3 className="font-display text-lg font-extrabold leading-tight text-carved-sm">{zone.name}</h3>
          <p className="mt-1 line-clamp-2 text-sm leading-snug text-parch-100/85">{zone.tagline}</p>
          <span className="mt-auto flex items-center gap-1.5 pt-2 font-display text-xs font-bold uppercase tracking-wide text-sun-300">
            Explorar <Icon name="arrow-right" className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
          </span>
        </div>
      </article>
    </Link>
  );
}

export function UpdateList({ entries }: { entries: UpdateEntry[] }) {
  return (
    <ul className="space-y-2.5">
      {entries.map((entry) => (
        <li key={entry.id} className="panel-parchment-flat relative px-3.5 py-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="chip px-2 py-0 text-[0.66rem]">{entry.kind}</span>
            <span className="font-display text-[0.7rem] font-bold uppercase tracking-wide text-bark-600">
              {entry.date ?? "Sin fecha oficial"}
            </span>
            {entry.isDemo && <Tag tone="demo">Contenido de demostración</Tag>}
          </div>
          <h3 className="mt-1.5 font-display text-base font-extrabold leading-tight text-bark-800">
            {entry.title}
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-ink-soft">{entry.body}</p>
        </li>
      ))}
    </ul>
  );
}
