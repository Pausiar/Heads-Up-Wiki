import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "./Icon";
import { LeafSprig, Nail } from "@/components/art/Decor";
import type { Fact } from "@/lib/content/types";

export function PageShell({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
  );
}

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Migas de pan" className="mb-4">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm font-semibold text-parch-200/90">
        <li>
          <Link href="/" className="underline decoration-sun-500/50 decoration-2 underline-offset-4 hover:text-sun-300">
            Inicio
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-1.5">
            <span aria-hidden="true" className="text-parch-200/40">
              /
            </span>
            {item.href && index < items.length - 1 ? (
              <Link href={item.href} className="underline decoration-sun-500/50 decoration-2 underline-offset-4 hover:text-sun-300">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-parch-100">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  children,
  icon,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  icon?: ReactNode;
}) {
  return (
    <header className="relative mb-8">
      <div className="panel-parchment relative overflow-hidden px-5 py-7 sm:px-8 sm:py-9">
        <LeafSprig className="pointer-events-none absolute -right-6 -top-8 h-32 w-44 opacity-30 sm:h-40 sm:w-56" />
        <div className="relative">
          {eyebrow && (
            <p className="mb-1 font-display text-xs font-extrabold uppercase tracking-[0.18em] text-forest-700">
              {eyebrow}
            </p>
          )}
          <div className="flex items-start gap-4">
            {icon && (
              <span className="mt-1 hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl border-[3px] border-bark-700 bg-wood-300/60 text-bark-800 shadow-[0_4px_0_rgba(74,46,23,0.35)] sm:flex">
                {icon}
              </span>
            )}
            <div>
              <h1 className="text-balance text-3xl leading-[1.05] text-bark-800 sm:text-4xl lg:text-5xl">
                {title}
              </h1>
              {subtitle && (
                <p className="mt-3 max-w-2xl text-pretty text-[1.02rem] leading-relaxed text-ink-soft">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
          {children && <div className="mt-5">{children}</div>}
        </div>
      </div>
    </header>
  );
}

export function SectionHeading({
  title,
  eyebrow,
  action,
  id,
  icon,
  tone = "light",
}: {
  title: string;
  eyebrow?: string;
  action?: ReactNode;
  id?: string;
  icon?: ReactNode;
  tone?: "light" | "dark";
}) {
  const isDark = tone === "dark";
  return (
    <div id={id} className="mb-5 flex flex-wrap items-end justify-between gap-3 scroll-mt-28">
      <div>
        {eyebrow && (
          <p
            className={`mb-1 font-display text-[0.7rem] font-extrabold uppercase tracking-[0.2em] ${
              isDark ? "text-forest-700" : "text-lime-300"
            }`}
          >
            {eyebrow}
          </p>
        )}
        <h2 className={`flex items-center gap-2.5 text-2xl sm:text-[1.75rem] ${isDark ? "text-bark-800" : "text-parch-50"}`}>
          {icon && <span className={isDark ? "text-tang-500" : "text-sun-400"}>{icon}</span>}
          <span className={isDark ? "title-ink" : "text-carved-sm"}>{title}</span>
        </h2>
      </div>
      {action}
    </div>
  );
}

export function Tag({
  children,
  tone = "default",
  className = "",
}: {
  children: ReactNode;
  tone?: "default" | "night" | "day" | "forest" | "demo";
  className?: string;
}) {
  const toneClass =
    tone === "night" ? "chip chip-night" : tone === "day" ? "chip chip-day" : tone === "forest" ? "chip chip-forest" : tone === "demo" ? "chip chip-demo" : "chip";
  return <span className={`${toneClass} ${className}`}>{children}</span>;
}

export function FactGrid({ facts, compact = false }: { facts: Fact[]; compact?: boolean }) {
  return (
    <dl className={`grid gap-2.5 ${compact ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"}`}>
      {facts.map((fact) => (
        <div
          key={`${fact.label}-${fact.value}`}
          className="panel-parchment-flat px-3.5 py-2.5"
        >
          <dt className="font-display text-[0.68rem] font-bold uppercase tracking-[0.12em] text-bark-600">
            {fact.label}
          </dt>
          <dd className="mt-0.5 font-display text-base font-bold leading-snug text-bark-800">
            {fact.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function EmptyState({ title, text }: { title: string; text: string }) {
  return (
    <div className="panel-parchment relative overflow-hidden px-5 py-8 text-center sm:px-8">
      <LeafSprig className="pointer-events-none absolute -bottom-10 -left-8 h-36 w-48 opacity-25" flip />
      <div className="relative">
        <p className="font-hand text-xl text-forest-700 sm:text-2xl">{title}</p>
        <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-ink-soft">{text}</p>
      </div>
    </div>
  );
}

export function RelatedLink({
  href,
  label,
  meta,
  icon,
}: {
  href: string;
  label: string;
  meta?: string;
  icon?: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-3 rounded-xl border-2 border-bark-700/40 bg-parch-50 px-3 py-2.5 transition hover:-translate-y-0.5 hover:border-bark-700 hover:bg-parch-100 hover:shadow-[0_4px_0_rgba(74,46,23,0.2)]"
    >
      {icon && <span className="text-bark-700">{icon}</span>}
      <span className="min-w-0 flex-1">
        <span className="block font-display font-bold leading-tight text-bark-800">{label}</span>
        {meta && <span className="mt-0.5 block text-xs font-semibold uppercase tracking-wide text-bark-600">{meta}</span>}
      </span>
      <Icon name="arrow-right" className="h-4 w-4 shrink-0 text-bark-600 transition group-hover:translate-x-0.5" />
    </Link>
  );
}

export function NailedPanel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <Nail className="absolute left-2 top-2 z-10 h-5 w-5 opacity-80" />
      <Nail className="absolute right-2 top-2 z-10 h-5 w-5 opacity-80" />
      {children}
    </div>
  );
}
