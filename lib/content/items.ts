import type { Item, ItemCategory } from "./types";

export const itemCategories: {
  id: ItemCategory;
  label: string;
  blurb: string;
}[] = [
  {
    id: "inventario",
    label: "Inventario",
    blurb: "Equipo de uso directo que ocupa uno de los dos huecos.",
  },
  {
    id: "proteccion",
    label: "Protección",
    blurb: "Objetos que amortiguan, desvían o evitan golpes.",
  },
  {
    id: "curacion",
    label: "Curación",
    blurb: "Recuperan puntos de vida.",
  },
  {
    id: "combate",
    label: "Combate",
    blurb: "Sirven para atacar, aturdir o dormir.",
  },
  {
    id: "utilidad",
    label: "Utilidad",
    blurb: "Luz, ruido, velocidad o terreno.",
  },
];

export const items: Item[] = [
  {
    slug: "sarten",
    name: "Sartén",
    art: "sarten",
    kind: "Activo",
    charges: null,
    categories: ["combate", "proteccion"],
    tagline: "Casco improvisado y arma contundente.",
    description: [
      "La herramienta más versátil del botiquín de camping. Sirve para encajar golpes y para repartirlos.",
    ],
    how: [
      "Funciona como casco contra impactos pequeños.",
      "Es un arma cuerpo a cuerpo.",
    ],
    limits: [],
    facts: [
      { label: "Tipo", value: "Arma y protección" },
      { label: "Cargas", value: "No especificadas" },
      { label: "Uso", value: "Cuerpo a cuerpo" },
    ],
    impactNote:
      "Como arma cuerpo a cuerpo, entra en el sistema de impactos: un golpe no letal solo provoca un derribo cuando causa 8 o más puntos de daño.",
    relatedEnemies: ["champi", "ganso-del-averno"],
    relatedItems: ["casco-de-obra", "cubo"],
  },
  {
    slug: "paraguas",
    name: "Paraguas",
    art: "paraguas",
    kind: "Pasivo",
    charges: 6,
    categories: ["proteccion"],
    tagline: "Un techo portátil para los golpes que caen del cielo.",
    description: [
      "Mientras lo llevas en la mano, el paraguas absorbe los golpes no letales que vienen desde arriba. Cada golpe se lleva una carga por delante.",
    ],
    how: [
      "Es un objeto pasivo: mientras está en la mano, absorbe los golpes no letales que vienen desde arriba.",
      "Consume una carga por golpe.",
      "Empieza con 6 cargas.",
    ],
    limits: ["Solo cubre los golpes que vienen desde arriba."],
    facts: [
      { label: "Tipo", value: "Pasivo" },
      { label: "Cargas", value: "6" },
      { label: "Cobertura", value: "Golpes desde arriba" },
      { label: "Consumo", value: "1 carga por golpe" },
    ],
    impactNote:
      "Los golpes que absorbe son no letales: un golpe solo derriba cuando causa 8 o más puntos de daño.",
    relatedEnemies: [],
    relatedItems: ["cubo", "casco-de-obra"],
  },
  {
    slug: "cubo",
    name: "Cubo",
    art: "cubo",
    kind: "Pasivo",
    charges: 4,
    categories: ["proteccion"],
    tagline: "La armadura más tonta y más eficaz del bosque.",
    description: [
      "Un cubo de plástico colocado sobre la cabeza. Absorbe cualquier golpe no letal y, visualmente, en pantalla solo tapa el borde superior.",
    ],
    how: [
      "Es un objeto pasivo: absorbe cualquier golpe no letal.",
      "Visualmente aparece colocado sobre la cabeza del jugador.",
      "En pantalla solamente tapa el borde superior.",
      "Empieza con 4 cargas.",
    ],
    limits: [],
    facts: [
      { label: "Tipo", value: "Pasivo" },
      { label: "Cargas", value: "4" },
      { label: "Cobertura", value: "Cualquier golpe no letal" },
      { label: "Colocación", value: "Sobre la cabeza" },
    ],
    impactNote:
      "Como absorbe golpes no letales, entra en el sistema de impactos: un golpe solo derriba cuando causa 8 o más puntos de daño.",
    relatedEnemies: [],
    relatedItems: ["paraguas", "sarten"],
  },
  {
    slug: "casco-de-obra",
    name: "Casco de obra",
    art: "casco-de-obra",
    kind: "Pasivo",
    charges: 1,
    categories: ["proteccion"],
    tagline: "Convierte un impacto mortal en un mal día.",
    description: [
      "Un casco de obra de una sola puesta. Cuando recibe un impacto letal procedente de un objeto que cae, lo convierte en 40 puntos de daño y provoca un derribo. Después se rompe.",
    ],
    how: [
      "Cuando recibe un impacto letal procedente de un objeto que cae, lo convierte en 40 puntos de daño.",
      "Ese impacto también provoca un derribo.",
      "Después se rompe.",
    ],
    limits: ["No protege contra árboles.", "No protege contra El Orejas."],
    facts: [
      { label: "Tipo", value: "Pasivo" },
      { label: "Cargas", value: "1" },
      { label: "Convierte", value: "Muerte → 40 de daño" },
      { label: "Efecto extra", value: "Derribo" },
    ],
    impactNote:
      "El impacto convertido provoca un derribo, así que se le aplica la regla general de impactos y derribos.",
    relatedEnemies: ["el-orejas"],
    relatedItems: ["sarten", "cubo"],
  },
  {
    slug: "bebida-energetica",
    name: "Bebida energética",
    art: "bebida-energetica",
    kind: "Activo",
    charges: null,
    categories: ["utilidad", "inventario"],
    tagline: "Velocidad ahora, bajón después.",
    description: [
      "Un trago y el excursionista se siente imparable. El problema es lo que viene después.",
    ],
    how: [
      "Proporciona velocidad temporalmente.",
      "Después provoca un bajón.",
    ],
    limits: [],
    facts: [
      { label: "Tipo", value: "Activo" },
      { label: "Cargas", value: "No especificadas" },
      { label: "Efecto", value: "Velocidad temporal" },
      { label: "Efecto posterior", value: "Bajón" },
    ],
    relatedEnemies: [],
    relatedItems: ["bocadillo"],
  },
  {
    slug: "bocadillo",
    name: "Bocadillo",
    art: "bocadillo",
    kind: "Activo",
    charges: 1,
    categories: ["curacion", "inventario"],
    tagline: "50 puntos de vida entre dos panes.",
    description: [
      "La comida oficial de la huida. Se utiliza una vez y cura lo suficiente para seguir andando.",
    ],
    how: ["Al utilizarlo recupera 50 puntos de vida."],
    limits: ["Una sola carga: se consume al usarlo."],
    facts: [
      { label: "Tipo", value: "Activo" },
      { label: "Cargas", value: "1" },
      { label: "Curación", value: "50 de vida" },
    ],
    relatedEnemies: [],
    relatedItems: ["bebida-energetica"],
  },
  {
    slug: "cerbatana",
    name: "Cerbatana",
    art: "cerbatana",
    kind: "Activo",
    charges: null,
    categories: ["combate", "inventario"],
    tagline: "Duerme monstruos. Y compañeros.",
    description: [
      "Un dardo dormilón que funciona igual de bien con un monstruo que con el excursionista que tienes al lado.",
    ],
    how: [
      "Duerme tanto a los monstruos como a los compañeros.",
      "El dardo hace que el Ganso del averno suelte el objeto que ha robado.",
    ],
    limits: [],
    facts: [
      { label: "Tipo", value: "Activo" },
      { label: "Cargas", value: "No especificadas" },
      { label: "Objetivo", value: "Monstruos y compañeros" },
      { label: "Efecto", value: "Dormir" },
    ],
    relatedEnemies: [
      "champi",
      "oso-sonambulo",
      "el-orejas",
      "ganso-del-averno",
      "buho-secuestrador",
    ],
    relatedItems: ["petardo", "silbato"],
  },
  {
    slug: "linterna",
    name: "Linterna",
    art: "linterna",
    kind: "Activo",
    charges: null,
    categories: ["utilidad", "inventario"],
    tagline: "Luz para la mitad del día en la que no se ve nada.",
    description: [
      "La noche dura lo mismo que el día, y sin linterna se nota. Alumbra el camino durante las horas oscuras.",
    ],
    how: ["Proporciona luz durante la noche."],
    limits: [],
    facts: [
      { label: "Tipo", value: "Activo" },
      { label: "Cargas", value: "No especificadas" },
      { label: "Efecto", value: "Luz nocturna" },
    ],
    devNote: "Hay skins pendientes para este objeto.",
    relatedEnemies: [],
    relatedItems: ["bebida-energetica"],
  },
  {
    slug: "petardo",
    name: "Petardo",
    art: "petardo",
    kind: "Activo",
    charges: 2,
    categories: ["combate", "utilidad"],
    tagline: "Dos segundos de mecha y sesenta metros de ruido.",
    description: [
      "Se lanza, arde durante dos segundos y explota. Aturde a los monstruos y derriba a los jugadores que estén cerca, pero el estruendo se oye a mucha distancia.",
    ],
    how: [
      "Se lanza y explota después de 2 segundos.",
      "Aturde a los monstruos.",
      "Derriba a los jugadores en un radio de 5 metros.",
      "Produce un ruido que se escucha a 60 metros.",
      "Atrae a El Orejas.",
    ],
    limits: ["El ruido atrae a El Orejas aunque el petardo no lo alcance."],
    facts: [
      { label: "Tipo", value: "Activo" },
      { label: "Cargas", value: "2" },
      { label: "Mecha", value: "2 segundos" },
      { label: "Radio de derribo", value: "5 m" },
      { label: "Ruido", value: "60 m" },
    ],
    impactNote:
      "El petardo derriba a los jugadores en su radio, y el sistema de impactos recuerda la regla: un golpe no letal solo provoca un derribo cuando causa 8 o más puntos de daño.",
    relatedEnemies: ["el-orejas", "champi"],
    relatedItems: ["silbato", "cerbatana"],
  },
  {
    slug: "silbato",
    name: "Silbato",
    art: "silbato",
    kind: "Activo",
    charges: 5,
    categories: ["utilidad"],
    tagline: "Un silbido fuerte, un segundo de espera y un susto.",
    description: [
      "Emite un silbido fuerte con un segundo de enfriamiento. Espanta a algunos enemigos y, por desgracia, también llama la atención de otros.",
    ],
    how: [
      "Emite un silbido fuerte.",
      "Tiene un segundo de enfriamiento.",
      "El Orejas puede escucharlo.",
      "Asusta al Ganso del averno.",
      "Asusta al Oso sonámbulo cuando se utiliza a 12 metros.",
    ],
    limits: ["El Orejas puede escucharlo."],
    facts: [
      { label: "Tipo", value: "Activo" },
      { label: "Cargas", value: "5" },
      { label: "Enfriamiento", value: "1 segundo" },
      { label: "Asusta a", value: "Oso sonámbulo y Ganso" },
    ],
    relatedEnemies: ["oso-sonambulo", "ganso-del-averno", "el-orejas"],
    relatedItems: ["petardo", "cerbatana"],
  },
  {
    slug: "cascara-de-platano",
    name: "Cáscara de plátano",
    art: "cascara-de-platano",
    kind: "Activo",
    charges: 1,
    categories: ["utilidad", "inventario"],
    tagline: "El clásico que funciona igual en dibujos y en el bosque.",
    description: [
      "Se deja en el suelo y espera. El primero que pase rápido por encima se va al suelo.",
    ],
    how: [
      "Se deja en el suelo.",
      "El primer jugador o monstruo que pase a más de 1,2 m/s resbala durante 2 segundos.",
    ],
    limits: ["Solo afecta al primero que pasa."],
    facts: [
      { label: "Tipo", value: "Activo" },
      { label: "Cargas", value: "1" },
      { label: "Activación", value: "Más de 1,2 m/s" },
      { label: "Resbalón", value: "2 segundos" },
    ],
    relatedEnemies: ["champi", "oso-sonambulo", "el-orejas", "ganso-del-averno", "buho-secuestrador"],
    relatedItems: ["petardo", "silbato"],
  },
  {
    slug: "cuerda",
    name: "Cuerda",
    art: "cuerda",
    kind: "Pasivo",
    charges: 1,
    categories: ["proteccion"],
    tagline: "Antídoto contra el secuestro aéreo.",
    description: [
      "Una cuerda que impide que el Búho secuestrador se lleve al jugador. Cuando se activa, se consume y deja al Búho aturdido durante 3 segundos.",
    ],
    how: [
      "Es un objeto pasivo que impide que el Búho secuestrador se lleve al jugador.",
      "Cuando se activa, se consume.",
      "El Búho queda aturdido durante 3 segundos.",
    ],
    limits: ["Una sola carga: se consume al activarse."],
    facts: [
      { label: "Tipo", value: "Pasivo" },
      { label: "Cargas", value: "1" },
      { label: "Protege de", value: "Búho secuestrador" },
      { label: "Aturde al Búho", value: "3 segundos" },
    ],
    relatedEnemies: ["buho-secuestrador"],
    relatedItems: ["paraguas", "cubo"],
  },
];

export function getItem(slug: string) {
  return items.find((item) => item.slug === slug);
}

export function getItemsBySlugs(slugs: string[]) {
  return slugs
    .map((slug) => getItem(slug))
    .filter((item): item is Item => Boolean(item));
}

export function itemsWithCategory(category: ItemCategory) {
  return items.filter((item) => item.categories.includes(category));
}

export function countByCategory(category: ItemCategory) {
  return itemsWithCategory(category).length;
}
