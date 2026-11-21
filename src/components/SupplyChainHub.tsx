"use client";

import { useState } from "react";
import Button from "./Button";
import CatalogCard from "./CatalogCard";
import CertProjectsToggle, { type CatalogMode } from "./CertProjectsToggle";
import { certifications, projects } from "@/data/catalog";

/**
 * Supply Chain hub section from the sketches: heading, the
 * Certifications/Projects toggle, and the matching catalog list.
 * Projects are the core product (real company datasets); certifications
 * are supporting credentials — the toggle order and copy reflect that.
 */
export default function SupplyChainHub() {
  const [mode, setMode] = useState<CatalogMode>("projects");
  const items = mode === "certifications" ? certifications : projects;

  return (
    <section id="catalog" className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-4xl font-extrabold tracking-tight text-cs-navy">
          Supply Chain
        </h2>
        <p className="mt-2 text-lg text-cs-gray-dark/70">
          Choose how you want to grow your skills.
        </p>
        <div className="mt-8 flex w-full justify-center">
          <CertProjectsToggle value={mode} onChange={setMode} />
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-2xl font-bold text-cs-navy">
          {mode === "certifications" ? "Certifications" : "Projects"}
        </h3>
        <p className="mt-1 text-[15px] text-cs-gray-dark/70">
          {mode === "certifications"
            ? "Structured lessons and assessments that prove what you learned."
            : "Apply your knowledge with real-world projects and build your portfolio."}
        </p>

        <div className="mt-6 flex flex-col gap-4">
          {items.map((item) => (
            <CatalogCard key={item.title} item={item} />
          ))}
        </div>

        <div className="mt-4 rounded-2xl bg-cs-light px-6 py-5 text-center">
          <p className="font-semibold text-cs-navy">
            More {mode === "certifications" ? "certifications" : "projects"}{" "}
            coming soon.
          </p>
          <p className="mt-1 text-sm text-cs-gray-dark/70">
            We&rsquo;re adding new hands-on{" "}
            {mode === "certifications" ? "certifications" : "projects"}{" "}
            regularly to help you build in-demand skills.
          </p>
        </div>

        <div className="mt-8 text-center">
          {mode === "projects" ? (
            <Button href="/login" size="lg">
              Start your first project
            </Button>
          ) : (
            <Button href="/login" variant="gold" size="lg">
              Explore certifications
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
