"use client";

import { useMemo, useState } from "react";
import { EnemyCard } from "@/components/cards/Cards";
import { enemies, enemyFilters, matchesEnemyFilter, type EnemyFilterId } from "@/lib/content/enemies";
import type { Enemy } from "@/lib/content/types";

export function EnemyExplorer({ roster }: { roster?: Enemy[] }) {
  const list = roster ?? enemies;
  const [filter, setFilter] = useState<EnemyFilterId>("todos");

  const filtered = useMemo(() => list.filter((enemy) => matchesEnemyFilter(enemy, filter)), [list, filter]);
  const counts = useMemo(
    () =>
      Object.fromEntries(
        enemyFilters.map((option) => [
          option.id,
          list.filter((enemy) => matchesEnemyFilter(enemy, option.id)).length,
        ]),
      ) as Record<EnemyFilterId, number>,
    [list],
  );

  return (
    <div>
      <div
        role="group"
        aria-label="Filtrar enemigos por horario de aparición"
        className="flex flex-wrap items-center gap-2"
      >
        {enemyFilters.map((option) => {
          const active = filter === option.id;
          return (
            <button
              key={option.id}
              type="button"
              onClick={() => setFilter(option.id)}
              aria-pressed={active}
              title={option.description}
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
                {counts[option.id]}
              </span>
            </button>
          );
        })}
      </div>

      <p className="mt-3 text-sm font-semibold text-parch-200/80" aria-live="polite">
        {filtered.length} {filtered.length === 1 ? "enemigo" : "enemigos"} ·{" "}
        {enemyFilters.find((option) => option.id === filter)?.description}
      </p>

      <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((enemy) => (
          <EnemyCard key={enemy.slug} enemy={enemy} />
        ))}
      </div>
    </div>
  );
}
