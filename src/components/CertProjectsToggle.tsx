"use client";

import { AwardIcon, BriefcaseIcon } from "./icons";

export type CatalogMode = "certifications" | "projects";

/**
 * Certifications / Projects switch from the Supply Chain hub sketches.
 * Certifications active state is gold; Projects active state is blue.
 */
export default function CertProjectsToggle({
  value,
  onChange,
}: {
  value: CatalogMode;
  onChange: (mode: CatalogMode) => void;
}) {
  const options: {
    mode: CatalogMode;
    label: string;
    icon: typeof AwardIcon;
    activeClasses: string;
  }[] = [
    {
      mode: "certifications",
      label: "Certifications",
      icon: AwardIcon,
      activeClasses: "bg-cs-gold text-cs-navy shadow-sm",
    },
    {
      mode: "projects",
      label: "Projects",
      icon: BriefcaseIcon,
      activeClasses: "bg-cs-blue text-white shadow-sm",
    },
  ];

  return (
    <div
      role="tablist"
      aria-label="Choose certifications or projects"
      className="grid w-full max-w-xl grid-cols-2 gap-1 rounded-2xl border border-cs-gray-light bg-white p-1.5 shadow-[0_1px_3px_rgba(11,31,58,0.06)]"
    >
      {options.map(({ mode, label, icon: Icon, activeClasses }) => {
        const active = value === mode;
        return (
          <button
            key={mode}
            role="tab"
            aria-selected={active}
            onClick={() => onChange(mode)}
            className={`inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-[15px] font-semibold transition-colors ${
              active
                ? activeClasses
                : "text-cs-gray-dark/60 hover:bg-cs-gray-light"
            }`}
          >
            <Icon className="h-5 w-5" />
            {label}
          </button>
        );
      })}
    </div>
  );
}
