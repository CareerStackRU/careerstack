"use client";

import { useState } from "react";
import { RobotIcon } from "./icons";

/**
 * CareerStack AI bubble — fixed bottom-right on every page, as in the
 * sketches. Placeholder for now: the assistant itself ships in a later
 * chunk; this only opens a small notice (UI state, no fake chat).
 */
export default function AIBubble() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed right-5 bottom-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="w-72 rounded-2xl border border-cs-gray-light bg-white p-4 shadow-xl">
          <p className="text-sm font-bold text-cs-navy">CareerStack AI</p>
          <p className="mt-1 text-sm leading-relaxed text-cs-gray-dark/70">
            Your AI study and project assistant is on the roadmap — it arrives
            in a later release, once courses and projects are live.
          </p>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="inline-flex items-center gap-2 rounded-full bg-cs-blue py-2 pr-4 pl-2 text-white shadow-lg transition-colors hover:bg-cs-navy"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
          <RobotIcon className="h-5 w-5" />
        </span>
        <span className="text-sm font-semibold">CareerStack AI</span>
      </button>
    </div>
  );
}
