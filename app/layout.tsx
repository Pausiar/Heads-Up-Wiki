import type { Metadata, Viewport } from "next";
import { Baloo_2, Nunito, Patrick_Hand } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { SearchProvider } from "@/components/site/SearchProvider";
import { site } from "@/lib/content/site";

const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-baloo",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

const patrick = Patrick_Hand({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-patrick",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "HEADS UP! WIKI — La guía de supervivencia del bosque",
    template: "%s · HEADS UP! WIKI",
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "HEADS UP!",
    "wiki",
    "videojuego",
    "Unreal Engine 5",
    "El Orejas",
    "Champi",
    "guía de supervivencia",
  ],
  openGraph: {
    title: "HEADS UP! WIKI",
    description: site.description,
    type: "website",
    locale: "es_ES",
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "HEADS UP! WIKI",
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#1e4726",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${baloo.variable} ${nunito.variable} ${patrick.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[200] focus:rounded-full focus:border-4 focus:border-bark-800 focus:bg-sun-400 focus:px-4 focus:py-2 focus:font-display focus:font-extrabold focus:text-bark-900"
        >
          Saltar al contenido
        </a>
        <SearchProvider>
          <Header />
          <main id="contenido" className="flex-1 pt-6 sm:pt-8">
            {children}
          </main>
          <Footer />
        </SearchProvider>
      </body>
    </html>
  );
}
