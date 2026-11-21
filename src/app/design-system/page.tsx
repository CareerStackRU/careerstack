import type { Metadata } from "next";
import Button from "@/components/Button";
import CatalogCard from "@/components/CatalogCard";
import DifficultyStars from "@/components/DifficultyStars";
import Logo from "@/components/Logo";
import ToggleDemo from "@/components/ToggleDemo";
import { certifications, projects } from "@/data/catalog";

export const metadata: Metadata = {
  title: "CareerStack — Design System",
  description: "CareerStack brand tokens and component reference.",
};

const colors = [
  { token: "cs-blue", name: "CareerStack Blue", hex: "#1557B0", usage: "Primary brand color, buttons, links", dark: true },
  { token: "cs-navy", name: "Deep Navy", hex: "#0B1F3A", usage: "Headings, main text, logo", dark: true },
  { token: "cs-bright", name: "Bright Blue", hex: "#2563EB", usage: "Highlights and accents", dark: true },
  { token: "cs-light", name: "Light Blue", hex: "#EAF2FF", usage: "Backgrounds and cards", dark: false },
  { token: "cs-gold", name: "Gold", hex: "#F5B301", usage: "Certifications toggle, difficulty stars", dark: false },
  { token: "white", name: "White", hex: "#FFFFFF", usage: "Main background", dark: false },
  { token: "cs-gray-dark", name: "Dark Gray", hex: "#1F2937", usage: "Body text", dark: true },
  { token: "cs-gray-light", name: "Light Gray", hex: "#F3F4F6", usage: "Borders and secondary backgrounds", dark: false },
];

const bgClass: Record<string, string> = {
  "cs-blue": "bg-cs-blue",
  "cs-navy": "bg-cs-navy",
  "cs-bright": "bg-cs-bright",
  "cs-light": "bg-cs-light",
  "cs-gold": "bg-cs-gold",
  white: "bg-white",
  "cs-gray-dark": "bg-cs-gray-dark",
  "cs-gray-light": "bg-cs-gray-light",
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-14">
      <h2 className="border-b border-cs-gray-light pb-3 text-2xl font-extrabold text-cs-navy">
        {title}
      </h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

export default function DesignSystemPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
      <p className="text-sm font-bold tracking-[0.18em] text-cs-blue uppercase">
        CareerStack Design System
      </p>
      <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-cs-navy">
        Tokens &amp; components
      </h1>
      <p className="mt-3 max-w-2xl text-lg text-cs-gray-dark/70">
        The living reference for the CareerStack brand system. Every page —
        including this one — is built from these tokens and components.
      </p>

      <Section title="Logo">
        <div className="flex flex-wrap items-start gap-10">
          <div>
            <p className="mb-2 text-sm font-semibold text-cs-gray-dark/60">
              Wordmark
            </p>
            <Logo href={null} />
          </div>
          <div>
            <p className="mb-2 text-sm font-semibold text-cs-gray-dark/60">
              With tagline
            </p>
            <Logo href={null} withTagline />
          </div>
        </div>
      </Section>

      <Section title="Colors">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {colors.map((c) => (
            <div
              key={c.token}
              className="overflow-hidden rounded-2xl border border-cs-gray-light"
            >
              <div className={`h-20 ${bgClass[c.token]}`} />
              <div className="bg-white p-3">
                <p className="text-sm font-bold text-cs-navy">{c.name}</p>
                <p className="text-sm text-cs-gray-dark/60">
                  {c.hex} · <code>{c.token}</code>
                </p>
                <p className="mt-1 text-xs text-cs-gray-dark/50">{c.usage}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Typography — Inter">
        <div className="space-y-3">
          <p className="text-5xl font-extrabold tracking-tight text-cs-navy">
            Heading 1 / Extrabold
          </p>
          <p className="text-3xl font-extrabold tracking-tight text-cs-navy">
            Heading 2 / Extrabold
          </p>
          <p className="text-xl font-bold text-cs-navy">Heading / Bold</p>
          <p className="max-w-2xl text-base leading-relaxed text-cs-gray-dark/80">
            Body text is set in Inter, in Dark Gray (#1F2937). CareerStack
            helps business students turn coursework into real projects,
            portfolios, and verifiable certificates.
          </p>
          <p className="text-sm text-cs-gray-dark/60">
            Small / secondary text for captions, labels, and metadata.
          </p>
        </div>
      </Section>

      <Section title="Buttons">
        <div className="flex flex-wrap items-center gap-3">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="gold">Gold</Button>
          <Button size="sm">Small</Button>
          <Button size="lg">Large</Button>
          <Button disabled>Disabled</Button>
        </div>
      </Section>

      <Section title="Difficulty stars">
        <div className="flex flex-wrap gap-8">
          {[0, 1, 2, 3, 4, 5].map((v) => (
            <div key={v} className="flex flex-col items-center gap-1">
              <DifficultyStars value={v} showLabel={false} />
              <span className="text-xs text-cs-gray-dark/50">{v}/5</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Certifications / Projects toggle">
        <ToggleDemo />
      </Section>

      <Section title="Catalog cards">
        <div className="flex max-w-4xl flex-col gap-4">
          <CatalogCard item={certifications[0]} />
          <CatalogCard item={projects[0]} />
        </div>
        <p className="mt-3 text-sm text-cs-gray-dark/60">
          Same card for both catalogs; project cards carry a “Real dataset”
          badge.
        </p>
      </Section>

      <Section title="Next step">
        <p className="max-w-2xl text-base text-cs-gray-dark/70">
          This system is the foundation for the public website build (Chunk
          2). To see the components in a real page, open the homepage.
        </p>
        <div className="mt-4">
          <Button href="/">View the homepage</Button>
        </div>
      </Section>
    </div>
  );
}
