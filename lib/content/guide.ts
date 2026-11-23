import type { Block, Section, UpdateEntry, Zone } from "./types";
import { impactRule, impactRuleTitle } from "./site";

export const zones: Zone[] = [
  {
    slug: "campamento",
    name: "Campamento",
    order: 1,
    art: "campamento",
    tagline: "Donde empieza la huida.",
    description: [
      "El primer tramo del recorrido. La furgoneta se ha quedado atrás y el grupo de excursionistas arranca la marcha con lo que lleva encima.",
      "A partir de aquí, el objetivo es siempre el mismo: atravesar el bosque, cruzar el río y superar la montaña hasta la gasolinera.",
    ],
    elements: ["Punto de partida del recorrido", "Zona de acampada", "Furgoneta averiada (ver Historia)"],
    related: [
      { label: "Historia: el planteamiento", href: "/historia#planteamiento" },
      { label: "Guía: inventario", href: "/guia#inventario" },
    ],
    emptyState:
      "Esta zona del bosque todavía no ha sido explorada… Aquí aparecerán capturas del campamento y detalles del escenario cuando estén disponibles.",
  },
  {
    slug: "bosque-frondoso",
    name: "Bosque frondoso",
    order: 2,
    art: "bosque-frondoso",
    tagline: "Árboles, arbustos y muy poca visibilidad.",
    description: [
      "El segundo tramo. La vegetación se cierra y el camino se vuelve estrecho: el sitio perfecto para que algo te sorprenda por la espalda.",
    ],
    elements: ["Vegetación densa", "Caminos de tierra", "Zona de aparición de enemigos nocturnos"],
    related: [
      { label: "Enemigos", href: "/enemigos" },
      { label: "Guía: sonido y sigilo", href: "/guia#sonido-y-sigilo" },
    ],
    emptyState:
      "Esta zona del bosque todavía no ha sido explorada… Aquí aparecerán capturas de Unreal Engine 5 y secretos del escenario.",
  },
  {
    slug: "rio-puentes",
    name: "Río y puentes",
    order: 3,
    art: "rio-puentes",
    tagline: "Cruzar sin caerse.",
    description: [
      "El tercer tramo. El recorrido obliga a cruzar el río, así que los puentes se convierten en el único camino cómodo para seguir avanzando.",
    ],
    elements: ["Río", "Puentes", "Orilla y vegetación de ribera"],
    related: [
      { label: "Objetos", href: "/objetos" },
      { label: "Mundo: Cascada y barranco", href: "/mundo/cascada-barranco" },
    ],
    emptyState:
      "Esta zona del bosque todavía no ha sido explorada… Falta documentar los puentes y las rutas de cruce.",
  },
  {
    slug: "cascada-barranco",
    name: "Cascada y barranco",
    order: 4,
    art: "cascada-barranco",
    tagline: "El tramo más ruidoso del recorrido.",
    description: [
      "El cuarto tramo. La cascada y el barranco marcan el punto más espectacular del camino, y también el más difícil de rodear.",
    ],
    elements: ["Cascada", "Barranco", "Agua y rocas"],
    related: [
      { label: "Guía: sonido y sigilo", href: "/guia#sonido-y-sigilo" },
      { label: "Enemigos: El Orejas", href: "/enemigos/el-orejas" },
    ],
    emptyState:
      "Esta zona del bosque todavía no ha sido explorada… Aquí aparecerán las capturas de la cascada y los detalles del barranco.",
  },
  {
    slug: "montana-rocosa",
    name: "Montaña rocosa",
    order: 5,
    art: "montana-rocosa",
    tagline: "Subida, piedras y altura.",
    description: [
      "El quinto tramo. El bosque deja paso a la piedra: el grupo tiene que superar la montaña para seguir acercándose a la gasolinera.",
    ],
    elements: ["Montaña", "Rocas", "Terreno en pendiente"],
    related: [
      { label: "Objetos: Casco de obra", href: "/objetos/casco-de-obra" },
      { label: "Historia: el recorrido", href: "/historia#recorrido" },
    ],
    emptyState:
      "Esta zona del bosque todavía no ha sido explorada… Falta documentar las rutas de subida y los miradores.",
  },
  {
    slug: "pinar",
    name: "Pinar",
    order: 6,
    art: "pinar",
    tagline: "La última arboleda antes del asfalto.",
    description: [
      "El sexto tramo. Un bosque de pinos separa al grupo de la carretera. Después de esto solo queda la gasolinera.",
    ],
    elements: ["Pinares", "Suelo de acículas", "Última zona de bosque"],
    related: [
      { label: "Enemigos: Oso sonámbulo", href: "/enemigos/oso-sonambulo" },
      { label: "Mundo: Gasolinera", href: "/mundo/gasolinera" },
    ],
    emptyState:
      "Esta zona del bosque todavía no ha sido explorada… Aquí se añadirán las capturas del pinar y sus detalles.",
  },
  {
    slug: "gasolinera",
    name: "Gasolinera",
    order: 7,
    art: "gasolinera",
    tagline: "El final del recorrido.",
    description: [
      "El séptimo y último tramo. Es el destino de la partida: la meta que el grupo intenta alcanzar desde el primer minuto.",
      "La partida se gana cuando al menos un jugador llega a la gasolinera.",
    ],
    elements: ["Gasolinera", "Surtidores", "Final del recorrido"],
    related: [
      { label: "Historia: el final", href: "/historia#final" },
      { label: "Guía de supervivencia", href: "/guia" },
    ],
    emptyState:
      "Esta zona del bosque todavía no ha sido explorada… Falta documentar la gasolinera y su entorno.",
  },
];

export function getZone(slug: string) {
  return zones.find((zone) => zone.slug === slug);
}

const guideSections: Section[] = [
  {
    id: "ciclo-dia-y-noche",
    title: "Ciclo de día y noche",
    tagline: "Siete minutos de sol, siete minutos de dientes.",
    blocks: [
      {
        type: "p",
        text: "La partida se divide en dos mitades iguales. El día dura 7 minutos y la noche dura 7 minutos. La diferencia no es solo de luz: con la noche llegan casi todos los monstruos.",
      },
      {
        type: "facts",
        items: [
          { label: "Día", value: "7 minutos" },
          { label: "Noche", value: "7 minutos" },
          { label: "Peligro diurno", value: "Ganso del averno" },
          { label: "Peligro nocturno", value: "Todos los monstruos" },
        ],
      },
      {
        type: "list",
        items: [
          "Los enemigos aparecen principalmente durante la noche.",
          "El Ganso del averno puede aparecer tanto de día como de noche.",
          "Champi puede aparecer ocasionalmente durante el día.",
        ],
      },
      {
        type: "callout",
        tone: "warning",
        title: "La noche no es el único problema",
        text: "Durante el día solo aparece el Ganso del averno y, ocasionalmente, Champi. Pero un ganso ladrón a plena luz también puede arruinarte el inventario.",
      },
    ],
  },
  {
    id: "inventario",
    title: "Inventario",
    tagline: "Dos huecos. Elige bien.",
    blocks: [
      {
        type: "p",
        text: "El jugador dispone de dos huecos de inventario. Todo lo que lleves tiene que caber ahí, así que cada partida se convierte en una decisión entre protegerte, curarte o llevar algo que haga ruido.",
      },
      {
        type: "facts",
        items: [
          { label: "Huecos", value: "2" },
          { label: "Cargas", value: "Variables por objeto" },
          { label: "Tipos", value: "Activos y pasivos" },
        ],
      },
      {
        type: "table",
        head: ["Tipo", "Qué hace", "Ejemplos"],
        rows: [
          [
            "Activo",
            "Se utiliza cuando el jugador decide hacerlo.",
            "Bocadillo, petardo, silbato",
          ],
          [
            "Pasivo",
            "Actúa solo mientras está en la mano.",
            "Paraguas, cubo, cuerda",
          ],
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "Las cargas se gastan",
        text: "Algunos objetos tienen un número limitado de cargas (el paraguas 6, el cubo 4, el silbato 5, el petardo 2). Cuando se agotan, dejan de proteger o de funcionar.",
      },
    ],
  },
  {
    id: "sonido-y-sigilo",
    title: "Sonido y sigilo",
    tagline: "Hay un monstruo que solo tiene oídos.",
    blocks: [
      {
        type: "p",
        text: "Algunos enemigos reaccionan a los ruidos. El caso más claro es El Orejas: es ciego, pero detecta la voz real de los jugadores vivos y otros sonidos del entorno.",
      },
      {
        type: "list",
        items: [
          "La voz real de los jugadores vivos.",
          "Los petardos.",
          "El móvil de los cuervos.",
          "El silbato.",
        ],
      },
      {
        type: "p",
        text: "Cuando El Orejas escucha el primer ruido, permanece quieto durante 1,5 segundos, ruge y se dirige hacia el lugar donde se produjo el sonido. Esconderse y permanecer en silencio es la única respuesta documentada.",
      },
      {
        type: "callout",
        tone: "warning",
        title: "Piensa antes de silbar",
        text: "El silbato asusta al Ganso del averno y al Oso sonámbulo, pero El Orejas puede escucharlo. Un objeto de utilidad puede ser una señal luminosa gigante para el monstruo estrella.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Los fantasmas no le afectan",
        text: "Los jugadores muertos pueden hablar como fantasmas sin que El Orejas los detecte.",
      },
    ],
  },
  {
    id: "supervivencia-en-grupo",
    title: "Supervivencia en grupo",
    tagline: "La cooperación que el juego ya permite.",
    blocks: [
      {
        type: "p",
        text: "HEADS UP! es una aventura cooperativa de supervivencia. Estas son las posibilidades de cooperación que ya están definidas; no hay más mecánicas documentadas por ahora.",
      },
      {
        type: "list",
        items: [
          "Revivir a los compañeros muertos en una fogata mediante un ritual.",
          "Los jugadores muertos se convierten en fantasmas: pueden hablar y lanzar objetos pequeños.",
          "La cerbatana duerme tanto a los monstruos como a los compañeros.",
          "Un petardo derriba a los jugadores en un radio de 5 metros.",
          "El silbato puede usarse para asustar al Oso sonámbulo o al Ganso del averno.",
          "La cuerda evita que el Búho secuestrador se lleve a un compañero.",
        ],
      },
      {
        type: "callout",
        tone: "note",
        title: "El ritual de la fogata",
        text: "Lo realiza un jugador vivo, dura aproximadamente 5 segundos y revive a todos los jugadores muertos. A cambio se aplican dos penalizaciones aleatorias, y nunca las dos al mismo jugador.",
      },
    ],
  },
];

const storySections: Section[] = [
  {
    id: "planteamiento",
    title: "Planteamiento",
    tagline: "Una furgoneta averiada y un bosque demasiado grande.",
    blocks: [
      {
        type: "p",
        text: "Un grupo de excursionistas se queda tirado en medio de un bosque después de que su furgoneta se averíe.",
      },
      {
        type: "p",
        text: "Su objetivo es atravesar el bosque, cruzar el río y superar la montaña hasta llegar a una gasolinera.",
      },
      {
        type: "p",
        text: "Es una aventura cooperativa de supervivencia con situaciones absurdas, peligros imprevisibles y monstruos ridículos.",
      },
    ],
  },
  {
    id: "tono",
    title: "Tono del juego",
    tagline: "Friend slop cooperativo en primera persona.",
    blocks: [
      {
        type: "p",
        text: "HEADS UP! es un friend slop cooperativo en primera persona: la clase de partida en la que el grupo se ríe más de lo que corre.",
      },
      {
        type: "list",
        items: [
          "Árboles.",
          "Piñas.",
          "Rocas.",
          "Neveras.",
          "Lavadoras.",
          "Pianos.",
        ],
      },
      {
        type: "p",
        text: "Todo eso puede caer del cielo durante la partida. Durante la noche aparecen monstruos más ridículos que terroríficos.",
      },
      {
        type: "callout",
        tone: "note",
        title: "Lema del menú",
        text: "«No mires solo al frente…»",
      },
    ],
  },
  {
    id: "recorrido",
    title: "El recorrido en siete tramos",
    tagline: "Del campamento a la gasolinera.",
    blocks: [
      {
        type: "p",
        text: "La huida se divide en siete tramos. Cada uno es una parada del camino y una parte más de la distancia que separa al grupo de la gasolinera.",
      },
    ],
  },
  {
    id: "muerte-y-resurreccion",
    title: "Muerte y resurrección",
    tagline: "Morir no es el final, pero tampoco sale gratis.",
    blocks: [
      {
        type: "p",
        text: "Cuando un jugador muere se convierte en fantasma. Los fantasmas pueden hablar y lanzar objetos pequeños.",
      },
      {
        type: "p",
        text: "En cada fogata existe la posibilidad de revivir a los compañeros. El ritual lo realiza un jugador vivo, dura aproximadamente 5 segundos y revive a todos los jugadores muertos.",
      },
      {
        type: "callout",
        tone: "warning",
        title: "Dos penalizaciones aleatorias",
        text: "A cambio de revivir, se aplican dos penalizaciones aleatorias. Nunca se aplican las dos penalizaciones al mismo jugador.",
      },
    ],
  },
  {
    id: "final",
    title: "Final de la partida",
    tagline: "Victoria en la gasolinera, derrota en grupo.",
    blocks: [
      {
        type: "p",
        text: "La partida se gana cuando al menos un jugador llega a la gasolinera. Se reproduce una animación corta y unos resultados graciosos.",
      },
      {
        type: "p",
        text: "La partida termina cuando todos los jugadores mueren a la vez. No existe límite de tiempo.",
      },
    ],
  },
  {
    id: "recompensas",
    title: "Recompensas",
    tagline: "Monedas, logros y premios.",
    blocks: [
      {
        type: "p",
        text: "Se consiguen monedas en función de los tramos completados y de los supervivientes. También existen logros y premios.",
      },
    ],
  },
];

export const guide = {
  title: "Guía de supervivencia",
  intro:
    "Todo lo que un excursionista necesita saber antes de dar un paso hacia la gasolinera. Mecánicas confirmadas, sin inventos.",
  sections: guideSections,
};

export const story = {
  title: "Historia y recorrido",
  intro:
    "Cómo empieza HEADS UP!, qué tono tiene y qué hay que hacer para llegar al final del camino.",
  motto: "No mires solo al frente…",
  sections: storySections,
};

export const impactSystem = {
  id: "sistema-de-impactos",
  title: impactRuleTitle,
  rule: impactRule,
  detail:
    "Un golpe no letal solamente provoca un derribo cuando causa 8 o más puntos de daño. Por debajo de esa cifra el golpe se siente, pero no te tumba.",
  examples: [
    { label: "Por debajo de 8 de daño", value: "Golpe sin derribo" },
    { label: "8 de daño o más", value: "Golpe con derribo" },
  ],
};

export const updates: UpdateEntry[] = [
  {
    id: "demo-panel",
    title: "Panel preparado para las notas oficiales",
    date: null,
    kind: "Aviso de la wiki",
    body: "Este espacio está listo para publicar novedades de la wiki y del juego. Todavía no hay actualizaciones oficiales registradas.",
    isDemo: true,
  },
  {
    id: "demo-contenido",
    title: "Ejemplo de nota de contenido",
    date: null,
    kind: "Contenido",
    body: "Cuando se añada un nuevo enemigo, objeto o tramo, su nota aparecerá aquí con un enlace directo a la ficha correspondiente.",
    isDemo: true,
  },
  {
    id: "demo-balance",
    title: "Ejemplo de nota de balance",
    date: null,
    kind: "Balance",
    body: "Las notas de cambios de balance se publicarán aquí, indicando qué mecánica cambia y en qué ficha está documentada.",
    isDemo: true,
  },
];

export type GuideBlock = Block;
