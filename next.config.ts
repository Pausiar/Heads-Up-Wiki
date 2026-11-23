import type { NextConfig } from "next";

// En GitHub Pages el sitio se sirve desde /Heads-Up-Wiki/, así que el build de CI
// recibe el prefijo por entorno. En local queda vacío y la app vive en la raíz.
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  ...(basePath ? { basePath } : {}),
};

export default nextConfig;
