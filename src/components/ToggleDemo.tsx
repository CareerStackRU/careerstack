"use client";

import { useState } from "react";
import CertProjectsToggle, { type CatalogMode } from "./CertProjectsToggle";

/** Interactive toggle demo for the /design-system reference page. */
export default function ToggleDemo() {
  const [mode, setMode] = useState<CatalogMode>("certifications");
  return (
    <div className="flex flex-col items-start gap-3">
      <CertProjectsToggle value={mode} onChange={setMode} />
      <p className="text-sm text-cs-gray-dark/60">
        Current value: <code className="font-semibold">{mode}</code> — gold
        active state for Certifications, blue for Projects.
      </p>
    </div>
  );
}
