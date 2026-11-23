import type { Enemy, Hazard } from "./types";

export const enemies: Enemy[] = [
  {
    slug: "champi",
    name: "Champi",
    nickname: "La seta chillona",
    art: "champi",
    appearances: ["noche"],
    schedule: "Noche · de día, ocasionalmente",
    scheduleDetail:
      "Champi es un enemigo nocturno. Durante el día solo se deja ver de forma ocasional, así que el sol no es una garantía de tranquilidad.",
    tagline: "Corre, chilla y te tira al suelo. La seta más maleducada del bosque.",
    description: [
      "Un hongo con muy malas pulgas. Champi aguarda entre la vegetación y, en cuanto te ve, corre chillando hacia ti para tirarte al suelo.",
      "Después de la embestida se retira, pero vuelve a la carga. El respiro dura lo que tarda en dar la vuelta.",
    ],
    behavior: [
      "Corre chillando hacia el jugador.",
      "Lo tira al suelo.",
      "Después se retira y vuelve a embestir.",
    ],
    counterTitle: "Cómo se le gana",
    counter: [
      "Se puede combatir con una bofetada o un golpe.",
      "La sartén sirve como arma cuerpo a cuerpo si la llevas en el inventario.",
      "Una cerbatana lo duerme y un petardo lo aturde, igual que al resto de monstruos.",
    ],
    facts: [
      { label: "Aparición", value: "Noche · ocasional de día" },
      { label: "Ataque", value: "Embestida con derribo" },
      { label: "Respuesta", value: "Bofetada o golpe" },
    ],
    notes: [
      {
        title: "Sin resistencias documentadas",
        text: "No se le conocen resistencias ni debilidades especiales: un golpe directo basta para quitárselo de encima.",
      },
    ],
    relatedItems: ["sarten", "cerbatana", "petardo"],
  },
  {
    slug: "oso-sonambulo",
    name: "Oso sonámbulo",
    nickname: "El abrazo que no termina",
    art: "oso-sonambulo",
    appearances: ["noche"],
    schedule: "Noche",
    scheduleDetail:
      "Aparece por la noche. Es lento, pero no se detiene, y su abrazo es el derribo más largo del bosque.",
    tagline: "Lento, dormido y con un abrazo que dura demasiado.",
    description: [
      "Camina dormido por el bosque y no hay manera de despertarlo. Avanza despacio, pero cuando te alcanza no te suelta.",
      "Su abrazo provoca un derribo de 4 segundos y, mientras te tiene agarrado, causa 3 puntos de daño por segundo.",
    ],
    behavior: [
      "Se mueve con una velocidad de 230.",
      "Cuando alcanza al jugador, lo abraza y provoca un derribo de 4 segundos.",
      "Durante el agarre causa 3 puntos de daño por segundo.",
      "El tiempo del derribo se puede reducir forcejeando.",
    ],
    counterTitle: "Cómo evitarlo",
    counter: [
      "Huir andando.",
      "El silbato lo asusta cuando se utiliza a 12 metros.",
    ],
    facts: [
      { label: "Aparición", value: "Noche" },
      { label: "Velocidad", value: "230" },
      { label: "Derribo", value: "4 segundos" },
      { label: "Daño en el agarre", value: "3 por segundo" },
      { label: "Forcejeo", value: "Reduce el derribo" },
      { label: "Silbato", value: "Lo asusta a 12 m" },
    ],
    notes: [
      {
        title: "Cómo está hecho",
        text: "En la presentación visual del juego utiliza un esqueleto y animaciones. Champi y El Orejas, en cambio, tienen modelos propios.",
      },
      {
        title: "No hace falta correr",
        text: "Es lento por diseño: huir andando es suficiente para mantener la distancia.",
      },
    ],
    relatedItems: ["silbato"],
  },
  {
    slug: "el-orejas",
    name: "El Orejas",
    nickname: "El monstruo estrella",
    art: "el-orejas",
    appearances: ["noche"],
    schedule: "Noche",
    scheduleDetail:
      "Es un enemigo nocturno. No aparece por verte, sino por oírte: la luz no le importa, el ruido sí.",
    tagline: "No te ve. Te escucha.",
    description: [
      "Es el monstruo estrella del juego. Es ciego, pero detecta la voz real de los jugadores vivos y diferentes ruidos del entorno.",
      "Cuando escucha el primer ruido se queda quieto durante 1,5 segundos, ruge y se dirige hacia el lugar exacto donde se produjo el sonido.",
    ],
    behavior: [
      "Detecta la voz real de los jugadores vivos.",
      "Detecta petardos, el móvil de los cuervos y el silbato.",
      "Al oír el primer ruido permanece quieto durante 1,5 segundos.",
      "Después ruge y se dirige al lugar donde se produjo el sonido.",
    ],
    counterTitle: "Cómo evitarlo",
    counter: ["Esconderse.", "Permanecer en silencio."],
    facts: [
      { label: "Aparición", value: "Noche" },
      { label: "Sentido", value: "Oído (es ciego)" },
      { label: "Reacción", value: "1,5 s de quietud" },
      { label: "Objetivo", value: "El lugar del ruido" },
    ],
    notes: [
      {
        title: "Ruidos que lo atraen",
        text: "La voz real de los jugadores vivos, los petardos, el móvil de los cuervos y el silbato.",
      },
      {
        title: "Los fantasmas no le afectan",
        text: "Un jugador muerto puede seguir hablando como fantasma sin que El Orejas lo detecte.",
      },
      {
        title: "El silbato es un arma de doble filo",
        text: "Sirve para asustar al Oso sonámbulo o al Ganso del averno, pero El Orejas puede escucharlo.",
      },
    ],
    relatedItems: ["petardo", "silbato"],
    featured: true,
  },
  {
    slug: "ganso-del-averno",
    name: "Ganso del averno",
    nickname: "El ladrón con plumas",
    art: "ganso-del-averno",
    appearances: ["dia", "noche"],
    schedule: "Día y noche",
    scheduleDetail:
      "Es el único enemigo que puede aparecer tanto de día como de noche. No descansa nunca.",
    tagline: "Si te descuidas, se lleva lo que llevas en la mano.",
    description: [
      "El único enemigo que aparece tanto de día como de noche. Roba el objeto que el jugador lleva activo y huye con él.",
      "Si el jugador no tiene ningún objeto activo, en lugar de robarle lo picotea.",
    ],
    behavior: [
      "Roba el objeto que el jugador lleva activo.",
      "Huye con el objeto robado.",
      "Si no hay objeto que robar, picotea al jugador.",
    ],
    counterTitle: "Cómo defenderse",
    counter: [
      "Un golpe, una bofetada o un dardo hacen que suelte el objeto.",
      "El silbato también lo asusta.",
    ],
    facts: [
      { label: "Aparición", value: "Día y noche" },
      { label: "Objetivo", value: "El objeto activo" },
      { label: "Suelta el objeto", value: "Golpe, bofetada o dardo" },
      { label: "Susto", value: "Silbato" },
    ],
    notes: [
      {
        title: "Qué es el objeto activo",
        text: "El que el jugador lleva activado en ese momento. Si no lleva ninguno, el ganso pasa directamente al picoteo.",
      },
    ],
    relatedItems: ["silbato", "cerbatana", "sarten"],
  },
  {
    slug: "buho-secuestrador",
    name: "Búho secuestrador",
    nickname: "El taxi aéreo",
    art: "buho-secuestrador",
    appearances: ["noche"],
    schedule: "Noche",
    scheduleDetail:
      "Aparece por la noche. Vuela, te agarra y te devuelve unos 30 metros atrás en el recorrido.",
    tagline: "Te agarra, vuela y te deja treinta metros más atrás.",
    description: [
      "Un búho enorme que vuela bajo y secuestra a los excursionistas para soltarlos aproximadamente 30 metros hacia atrás.",
      "Agacharse evita que te capture. Y si llevas una cuerda, el búho se lleva una sorpresa.",
    ],
    behavior: [
      "Vuela hacia el jugador.",
      "Lo lanza aproximadamente 30 metros hacia atrás.",
    ],
    counterTitle: "Cómo evitarlo",
    counter: [
      "Agacharse evita que te capture.",
      "La cuerda impide que el Búho se lleve al jugador: se consume y deja al Búho aturdido durante 3 segundos.",
    ],
    facts: [
      { label: "Aparición", value: "Noche" },
      { label: "Distancia", value: "≈30 m hacia atrás" },
      { label: "Contramedida", value: "Agacharse" },
      { label: "Objeto", value: "Cuerda" },
      { label: "Aturdimiento", value: "3 segundos" },
    ],
    notes: [
      {
        title: "La cuerda se gasta",
        text: "La cuerda se consume al activarse. No es una protección permanente para toda la partida.",
      },
    ],
    relatedItems: ["cuerda"],
  },
];

export const hazard: Hazard = {
  slug: "enjambre",
  name: "Enjambre",
  nickname: "Peligro ambiental",
  tagline: "No es un monstruo: sale de las colmenas y pica.",
  description: [
    "El enjambre no es un monstruo. Es un peligro ambiental que sale de las colmenas cuando algo las molesta.",
    "Pica y causa 3 puntos de daño por segundo, pero se puede dejar atrás corriendo.",
  ],
  behavior: [
    "Sale de las colmenas.",
    "Pica y causa 3 puntos de daño por segundo.",
    "Se puede dejar atrás corriendo.",
  ],
  counter: ["Correr para dejarlo atrás."],
  facts: [
    { label: "Tipo", value: "Peligro ambiental" },
    { label: "Origen", value: "Colmenas" },
    { label: "Daño", value: "3 por segundo" },
    { label: "Huida", value: "Correr" },
  ],
  notes: [
    {
      title: "No aparece en la lista de monstruos",
      text: "El enjambre se trata como peligro del escenario. No cuenta como enemigo ni aparece en los filtros de aparición.",
    },
  ],
  relatedItems: [],
};

export const enemyFilters = [
  { id: "todos", label: "Todos", description: "Los cinco monstruos del bosque." },
  { id: "dia", label: "Diurnos", description: "Se dejan ver con luz." },
  { id: "noche", label: "Nocturnos", description: "Salen cuando cae la noche." },
  { id: "dia-noche", label: "Día y noche", description: "Aparecen a cualquier hora." },
] as const;

export type EnemyFilterId = (typeof enemyFilters)[number]["id"];

export function getEnemy(slug: string) {
  return enemies.find((enemy) => enemy.slug === slug);
}

export function getEnemiesBySlugs(slugs: string[]) {
  return slugs
    .map((slug) => getEnemy(slug))
    .filter((enemy): enemy is Enemy => Boolean(enemy));
}

export function matchesEnemyFilter(enemy: Enemy, filter: EnemyFilterId) {
  if (filter === "todos") return true;
  if (filter === "dia-noche") {
    return enemy.appearances.includes("dia") && enemy.appearances.includes("noche");
  }
  return enemy.appearances.includes(filter);
}
