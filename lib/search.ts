import { enemies, hazard } from "./content/enemies";
import { items } from "./content/items";
import { guide, story, zones, impactSystem } from "./content/guide";
import type { Block } from "./content/types";

export type SearchKind =
  | "Enemigo"
  | "Objeto"
  | "Zona"
  | "Guía"
  | "Historia"
  | "Peligro ambiental"
  | "Mecánica";

export interface SearchEntry {
  id: string;
  kind: SearchKind;
  title: string;
  href: string;
  summary: string;
  haystack: string;
  weight: number;
}

export function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function blockText(block: Block): string {
  switch (block.type) {
    case "p":
      return block.text;
    case "list":
      return block.items.join(" ");
    case "facts":
      return block.items.map((item) => `${item.label} ${item.value}`).join(" ");
    case "table":
      return [...block.head, ...block.rows.flat()].join(" ");
    case "callout":
      return `${block.title} ${block.text}`;
  }
}

function makeEntry(entry: Omit<SearchEntry, "haystack" | "weight"> & { extra?: string[] }): SearchEntry {
  const { extra = [], ...rest } = entry;
  return {
    ...rest,
    haystack: normalize([rest.title, rest.summary, ...extra].join(" ")),
    weight: 0,
  };
}

export const searchIndex: SearchEntry[] = [
  ...enemies.map((enemy) =>
    makeEntry({
      id: `enemigo-${enemy.slug}`,
      kind: "Enemigo",
      title: enemy.name,
      href: `/enemigos/${enemy.slug}`,
      summary: enemy.tagline,
      extra: [
        enemy.nickname,
        enemy.schedule,
        enemy.scheduleDetail,
        ...enemy.description,
        ...enemy.behavior,
        ...enemy.counter,
        ...enemy.facts.map((fact) => `${fact.label} ${fact.value}`),
        ...enemy.notes.map((note) => `${note.title} ${note.text}`),
      ],
    }),
  ),
  makeEntry({
    id: `peligro-${hazard.slug}`,
    kind: "Peligro ambiental",
    title: hazard.name,
    href: `/peligros/${hazard.slug}`,
    summary: hazard.tagline,
    extra: [...hazard.description, ...hazard.behavior, ...hazard.counter],
  }),
  ...items.map((item) =>
    makeEntry({
      id: `objeto-${item.slug}`,
      kind: "Objeto",
      title: item.name,
      href: `/objetos/${item.slug}`,
      summary: item.tagline,
      extra: [
        item.kind,
        item.charges ? `${item.charges} cargas` : "cargas no especificadas",
        ...item.categories,
        ...item.description,
        ...item.how,
        ...item.limits,
        ...item.facts.map((fact) => `${fact.label} ${fact.value}`),
        item.impactNote ?? "",
        item.devNote ?? "",
      ],
    }),
  ),
  ...zones.map((zone) =>
    makeEntry({
      id: `zona-${zone.slug}`,
      kind: "Zona",
      title: zone.name,
      href: `/mundo/${zone.slug}`,
      summary: zone.tagline,
      extra: [`tramo ${zone.order}`, ...zone.description, ...zone.elements],
    }),
  ),
  ...guide.sections.map((section) =>
    makeEntry({
      id: `guia-${section.id}`,
      kind: "Guía",
      title: section.title,
      href: `/guia#${section.id}`,
      summary: section.tagline,
      extra: section.blocks.map(blockText),
    }),
  ),
  ...story.sections.map((section) =>
    makeEntry({
      id: `historia-${section.id}`,
      kind: "Historia",
      title: section.title,
      href: `/historia#${section.id}`,
      summary: section.tagline,
      extra: section.blocks.map(blockText),
    }),
  ),
  makeEntry({
    id: "mecanica-impactos",
    kind: "Mecánica",
    title: impactSystem.title,
    href: `/objetos#${impactSystem.id}`,
    summary: impactSystem.rule,
    extra: [impactSystem.detail, ...impactSystem.examples.map((ex) => `${ex.label} ${ex.value}`)],
  }),
];

export function searchWiki(query: string, limit = 16): SearchEntry[] {
  const q = normalize(query);
  if (q.length < 2) return [];

  const words = q.split(" ").filter(Boolean);

  return searchIndex
    .map((entry) => {
      let score = 0;
      const title = normalize(entry.title);

      if (title === q) score += 120;
      else if (title.startsWith(q)) score += 80;
      else if (title.includes(q)) score += 55;

      for (const word of words) {
        if (word.length < 2) continue;
        if (title.startsWith(word)) score += 32;
        else if (title.includes(word)) score += 18;
        if (entry.haystack.includes(word)) score += 9;
        else if (word.length > 4 && entry.haystack.includes(word.slice(0, -1))) score += 3;
      }

      // small kind priority so direct encyclopedia entries beat prose sections,
      // but only for entries that already matched the query
      if (score > 0 && (entry.kind === "Enemigo" || entry.kind === "Objeto")) score += 3;

      return { entry, score };
    })
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score || a.entry.title.localeCompare(b.entry.title))
    .slice(0, limit)
    .map((result) => result.entry);
}

export const quickSearches = [
  { label: "El Orejas", query: "orejas" },
  { label: "Silbato", query: "silbato" },
  { label: "Sistema de impactos", query: "derribo" },
  { label: "Ciclo día y noche", query: "noche" },
  { label: "Gasolinera", query: "gasolinera" },
];
