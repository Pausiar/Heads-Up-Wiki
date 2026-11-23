import type { MetadataRoute } from "next";
import { enemies } from "@/lib/content/enemies";
import { items } from "@/lib/content/items";
import { zones } from "@/lib/content/guide";

export const dynamic = "force-static";

const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { path: "/", priority: 1 },
    { path: "/guia", priority: 0.9 },
    { path: "/enemigos", priority: 0.9 },
    { path: "/objetos", priority: 0.9 },
    { path: "/mundo", priority: 0.8 },
    { path: "/historia", priority: 0.8 },
    { path: "/actualizaciones", priority: 0.5 },
    { path: "/peligros/enjambre", priority: 0.4 },
  ];

  const contentRoutes = [
    ...enemies.map((enemy) => ({ path: `/enemigos/${enemy.slug}`, priority: 0.8 })),
    ...items.map((item) => ({ path: `/objetos/${item.slug}`, priority: 0.7 })),
    ...zones.map((zone) => ({ path: `/mundo/${zone.slug}`, priority: 0.6 })),
  ];

  return [...staticRoutes, ...contentRoutes].map((route) => ({
    url: `${baseUrl}${route.path === "/" ? "/" : `${route.path}/`}`,
    lastModified: new Date(),
    changeFrequency: route.priority >= 0.8 ? "weekly" : "monthly",
    priority: route.priority,
  }));
}
