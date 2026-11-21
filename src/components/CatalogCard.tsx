import type { ReactNode } from "react";
import Card from "./Card";
import DifficultyStars from "./DifficultyStars";
import { ChevronRightIcon } from "./icons";

export type CatalogItem = {
  title: string;
  /** Two short description lines, rendered as bullets like the sketches. */
  description: string[];
  /** 0–5 */
  difficulty: number;
  icon: ReactNode;
  /** Optional badge, e.g. "Real dataset" on projects. */
  badge?: string;
};

/** Row card used for both certifications and projects in the hub lists. */
export default function CatalogCard({ item }: { item: CatalogItem }) {
  return (
    <Card className="flex items-center gap-4 p-5 transition-shadow hover:shadow-md sm:gap-5 sm:p-6">
      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-cs-light text-cs-blue sm:h-16 sm:w-16">
        {item.icon}
      </span>

      <span className="min-w-0 flex-1">
        <span className="flex flex-wrap items-center gap-2">
          <span className="text-lg font-bold text-cs-navy">{item.title}</span>
          {item.badge && (
            <span className="rounded-full bg-cs-light px-2.5 py-0.5 text-xs font-bold text-cs-blue">
              {item.badge}
            </span>
          )}
        </span>
        <span className="mt-1 block">
          {item.description.map((line) => (
            <span
              key={line}
              className="block text-sm leading-relaxed text-cs-gray-dark/70"
            >
              • {line}
            </span>
          ))}
        </span>
      </span>

      <span className="hidden shrink-0 flex-col items-end gap-1 sm:flex">
        <span className="text-xs font-medium text-cs-gray-dark/50">
          Difficulty
        </span>
        <DifficultyStars value={item.difficulty} />
      </span>

      <ChevronRightIcon className="h-5 w-5 shrink-0 text-cs-bright" />
    </Card>
  );
}
