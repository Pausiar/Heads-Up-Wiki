"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { useSearch } from "./SearchProvider";

export function HeroSearch() {
  const { openSearch } = useSearch();
  const [value, setValue] = useState("");

  return (
    <form
      role="search"
      onSubmit={(event) => {
        event.preventDefault();
        openSearch(value.trim());
      }}
      className="mt-5 flex w-full items-center gap-2 rounded-full border-[3px] border-bark-700 bg-parch-50 px-2 py-1.5 shadow-[inset_0_2px_6px_rgba(90,60,26,0.18)]"
    >
      <span className="hidden pl-1.5 text-bark-600 sm:block" aria-hidden="true">
        <Icon name="search" className="h-5 w-5" />
      </span>
      <label htmlFor="hero-search" className="sr-only">
        Buscar en la wiki
      </label>
      <input
        id="hero-search"
        type="search"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Busca en la wiki…"
        className="min-w-0 flex-1 bg-transparent py-1 text-base text-ink outline-none placeholder:text-bark-600/60"
        autoComplete="off"
      />
      <button type="submit" className="btn btn-sm btn-forest shrink-0">
        Buscar
      </button>
    </form>
  );
}
