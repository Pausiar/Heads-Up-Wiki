export const site = {
  name: "HEADS UP! WIKI",
  shortName: "HEADS UP! Wiki",
  tagline: "La guía de supervivencia del bosque",
  description:
    "Wiki oficial de HEADS UP!: enemigos, objetos, tramos del recorrido y guías de supervivencia para llegar a la gasolinera sin perder la cabeza.",
  motto: "No mires solo al frente…",
  nav: [
    { href: "/", label: "Inicio", icon: "home" as const },
    { href: "/guia", label: "Guía", icon: "book" as const },
    { href: "/enemigos", label: "Enemigos", icon: "monster" as const },
    { href: "/objetos", label: "Objetos", icon: "gear" as const },
    { href: "/mundo", label: "Mundo", icon: "leaf" as const },
    { href: "/historia", label: "Historia", icon: "flag" as const },
    { href: "/actualizaciones", label: "Actualizaciones", icon: "megaphone" as const },
  ],
};

export const impactRule =
  "Un golpe no letal solamente provoca un derribo cuando causa 8 o más puntos de daño.";

export const impactRuleTitle = "Sistema de impactos y derribos";
