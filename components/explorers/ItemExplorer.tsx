"use client";

import { useMemo, useState } from "react";
import { ItemCard } from "@/components/cards/Cards";
import { itemCategories, items } from "@/lib/content/items";
import type { ItemCategory } from "@/lib/content/types";

type FilterId = "todos" | ItemCategory;

export function ItemExplorer() {
  const [filter, setFilter] = useState<FilterId>("todos");

  const filtered = useMemo(
    () => (filter === "todos" ? items : items.filter((item) => item.categories.includes(filter))),
    [filter],
  );

  const options: { id: FilterId; label: string; blurb: string; count: number }[] = [
    { id: "todos", label: "Todos", blurb: "Todo lo que cabe en la mochila.", count: items.length },
    ...itemCategories.map((category) => ({
      id: category.id,
      label: category.label,
      blurb: category.blurb,
      count: items.filter((item) => item.categories.includes(category.id)).length,
    })),
  ];

  const activeOption = options.find((option) => option.id === filter);

  return (
    <div>
      <div role="group" aria-label="Filtrar objetos por categoría" className="flex flex-wrap items-center gap-2">
        {options.map((option) => {
          const active = filter === option.id;
          return (
            <button
              key={option.id}
              type="button"
              onClick={() => setFilter(option.id)}
              aria-pressed={active}
              title={option.blurb}
              className={`flex items-center gap-1.5 rounded-full border-[3px] px-3.5 py-1.5 font-display text-sm font-bold transition ${
                active
                  ? "border-bark-800 bg-sun-400 text-bark-900 shadow-[0_3px_0_rgba(74,46,23,0.55)]"
                  : "border-bark-700/45 bg-parch-100/95 text-bark-700 hover:-translate-y-0.5 hover:border-bark-700"
              }`}
            >
              {option.label}
              <span
                className={`rounded-full px-1.5 text-[0.68rem] font-extrabold ${
                  active ? "bg-bark-900/15" : "bg-bark-700/10"
                }`}
              >
                {option.count}
              </span>
            </button>
          );
        })}
      </div>

      <p className="mt-3 text-sm font-semibold text-parch-200/80" aria-live="polite">
        {filtered.length} {filtered.length === 1 ? "objeto" : "objetos"} · {activeOption?.blurb}
      </p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <ItemCard key={item.slug} item={item} />
        ))}
      </div>
    </div>
  );
}
