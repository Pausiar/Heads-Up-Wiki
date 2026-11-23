export type EnemyAppearance = "dia" | "noche";

export type EnemyArtKey =
  | "champi"
  | "oso-sonambulo"
  | "el-orejas"
  | "ganso-del-averno"
  | "buho-secuestrador";

export type ItemArtKey =
  | "sarten"
  | "paraguas"
  | "cubo"
  | "casco-de-obra"
  | "bebida-energetica"
  | "bocadillo"
  | "cerbatana"
  | "linterna"
  | "petardo"
  | "silbato"
  | "cascara-de-platano"
  | "cuerda";

export type ZoneArtKey =
  | "campamento"
  | "bosque-frondoso"
  | "rio-puentes"
  | "cascada-barranco"
  | "montana-rocosa"
  | "pinar"
  | "gasolinera";

export interface Fact {
  label: string;
  value: string;
}

export interface Note {
  title: string;
  text: string;
}

export interface Enemy {
  slug: string;
  name: string;
  nickname: string;
  art: EnemyArtKey;
  appearances: EnemyAppearance[];
  schedule: string;
  scheduleDetail: string;
  tagline: string;
  description: string[];
  behavior: string[];
  counterTitle: string;
  counter: string[];
  facts: Fact[];
  notes: Note[];
  relatedItems: string[];
  featured?: boolean;
}

export interface Hazard {
  slug: string;
  name: string;
  nickname: string;
  tagline: string;
  description: string[];
  facts: Fact[];
  notes: Note[];
  behavior: string[];
  counter: string[];
  relatedItems: string[];
}

export type ItemCategory =
  | "inventario"
  | "proteccion"
  | "curacion"
  | "combate"
  | "utilidad";

export interface Item {
  slug: string;
  name: string;
  art: ItemArtKey;
  kind: "Activo" | "Pasivo";
  charges: number | null;
  chargesNote?: string;
  categories: ItemCategory[];
  tagline: string;
  description: string[];
  how: string[];
  limits: string[];
  facts: Fact[];
  impactNote?: string;
  relatedEnemies: string[];
  relatedItems: string[];
  devNote?: string;
}

export interface Zone {
  slug: string;
  name: string;
  order: number;
  art: ZoneArtKey;
  tagline: string;
  description: string[];
  elements: string[];
  related: { label: string; href: string }[];
  emptyState: string;
}

export type Block =
  | { type: "p"; text: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "facts"; items: Fact[] }
  | { type: "table"; head: string[]; rows: string[][] }
  | {
      type: "callout";
      title: string;
      text: string;
      tone?: "note" | "warning" | "tip";
    };

export interface Section {
  id: string;
  title: string;
  tagline: string;
  blocks: Block[];
}

export interface UpdateEntry {
  id: string;
  title: string;
  date: string | null;
  kind: string;
  body: string;
  isDemo: boolean;
}
