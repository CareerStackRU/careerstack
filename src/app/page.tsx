import Button from "@/components/Button";
import Card from "@/components/Card";
import SupplyChainHub from "@/components/SupplyChainHub";

const steps = [
  {
    title: "Learn",
    line: "Short, structured lessons on the concepts behind the work — starting with supply chain fundamentals.",
  },
  {
    title: "Build",
    line: "Hands-on projects built on real company datasets, using the tools the field actually uses.",
  },
  {
    title: "Prove",
    line: "A portfolio of finished work and verifiable certificates you can link on your resume and LinkedIn.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-cs-light to-white">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center px-4 py-20 text-center sm:px-6">
          <p className="text-sm font-bold tracking-[0.18em] text-cs-blue uppercase">
            Learn. Build. Prove.
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-cs-navy sm:text-5xl">
            Graduate with proof, not just a GPA.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-cs-gray-dark/75">
            CareerStack helps business students turn coursework into real
            projects, portfolios, and verifiable certificates, starting with
            Supply Chain at Rutgers.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#catalog" size="lg">
              Start your first project
            </Button>
            <Button href="#catalog" variant="secondary" size="lg">
              Explore certifications
            </Button>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto w-full max-w-6xl px-4 pt-16 sm:px-6">
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-cs-navy">
          How it works
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {steps.map((step, i) => (
            <Card key={step.title} className="p-6">
              <p className="text-sm font-bold text-cs-bright">
                STEP {i + 1}
              </p>
              <h3 className="mt-1 text-xl font-bold text-cs-navy">
                {step.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-cs-gray-dark/70">
                {step.line}
              </p>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button href="#catalog" variant="secondary">
            See it in the Supply Chain hub
          </Button>
        </div>
      </section>

      {/* Supply Chain hub (toggle + catalog) */}
      <SupplyChainHub />

      {/* Closing call to action */}
      <section className="bg-cs-navy">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center px-4 py-16 text-center sm:px-6">
          <h2 className="text-3xl font-extrabold tracking-tight text-white">
            Your first project is the first line of proof.
          </h2>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-white/75">
            Pick a project, work a real dataset, and finish with something you
            can actually show — not just a course you sat through.
          </p>
          <div className="mt-7">
            <Button href="#catalog" size="lg">
              Start your first project
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
