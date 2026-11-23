import type { Block } from "@/lib/content/types";
import { FactGrid } from "./Primitives";
import { Icon } from "./Icon";

const calloutTones = {
  note: {
    border: "border-l-river-500",
    bg: "bg-river-500/10",
    icon: "info" as const,
    title: "text-river-600",
  },
  warning: {
    border: "border-l-berry-500",
    bg: "bg-berry-500/10",
    icon: "warning" as const,
    title: "text-berry-500",
  },
  tip: {
    border: "border-l-forest-600",
    bg: "bg-forest-600/10",
    icon: "tip" as const,
    title: "text-forest-700",
  },
};

export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-5">
      {blocks.map((block, index) => {
        if (block.type === "p") {
          return (
            <p key={index} className="text-pretty text-[1.01rem] leading-relaxed text-ink-soft">
              {block.text}
            </p>
          );
        }
        if (block.type === "list") {
          const ListTag = block.ordered ? "ol" : "ul";
          return (
            <ListTag key={index} className="space-y-2">
              {block.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex gap-2.5 text-[1.01rem] leading-relaxed text-ink-soft">
                  <span
                    aria-hidden="true"
                    className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-forest-600/40 bg-forest-600/10 font-display text-[0.68rem] font-extrabold text-forest-700"
                  >
                    {block.ordered ? itemIndex + 1 : "•"}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ListTag>
          );
        }
        if (block.type === "facts") {
          return <FactGrid key={index} facts={block.items} compact />;
        }
        if (block.type === "table") {
          return <ResponsiveTable key={index} head={block.head} rows={block.rows} />;
        }
        const tone = calloutTones[block.tone ?? "note"];
        return (
          <aside key={index} className={`rounded-r-xl border-l-[5px] px-4 py-3.5 ${tone.border} ${tone.bg}`}>
            <p className={`flex items-center gap-1.5 font-display text-sm font-extrabold ${tone.title}`}>
              <Icon name={tone.icon} className="h-4 w-4" />
              {block.title}
            </p>
            <p className="mt-1 text-[0.95rem] leading-relaxed text-ink-soft">{block.text}</p>
          </aside>
        );
      })}
    </div>
  );
}

function ResponsiveTable({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <>
      <div className="hidden overflow-hidden rounded-xl border-2 border-bark-700/35 md:block">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="bg-bark-700/12">
              {head.map((cell) => (
                <th
                  key={cell}
                  scope="col"
                  className="px-3 py-2 font-display text-xs font-extrabold uppercase tracking-wide text-bark-700"
                >
                  {cell}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-t border-bark-700/20 align-top">
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className={`px-3 py-2.5 text-ink-soft ${cellIndex === 0 ? "font-display font-bold text-bark-800" : ""}`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="space-y-2.5 md:hidden">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="panel-parchment-flat px-3 py-2.5">
            {row.map((cell, cellIndex) => (
              <div key={cellIndex} className={cellIndex === 0 ? "" : "mt-1"}>
                <span className="font-display text-[0.64rem] font-extrabold uppercase tracking-wide text-bark-600">
                  {head[cellIndex]}
                </span>
                <p
                  className={`text-sm leading-snug text-ink-soft ${
                    cellIndex === 0 ? "font-display text-base font-bold text-bark-800" : ""
                  }`}
                >
                  {cell}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
