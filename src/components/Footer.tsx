import Link from "next/link";
import Logo from "./Logo";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Certifications", href: "/#catalog" },
  { label: "Projects", href: "/#catalog" },
  { label: "Portfolio", href: "/portfolio" },
];

const resources = [
  { label: "Help Center", href: "/help" },
  { label: "News", href: "/news" },
  { label: "Contact Us", href: "/contact" },
  { label: "Pricing", href: "/pricing" },
];

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com" },
  { label: "Instagram", href: "https://www.instagram.com/career_stack/" },
  { label: "X", href: "https://x.com" },
  { label: "YouTube", href: "https://www.youtube.com" },
];

export default function Footer() {
  return (
    <footer className="border-t border-cs-gray-light bg-white">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <div>
          <Logo withTagline />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cs-gray-dark/70">
            Empowering students with the skills, experience, and confidence to
            build successful careers.
          </p>
        </div>

        <nav aria-label="Quick links">
          <h3 className="text-sm font-bold tracking-wide text-cs-navy">
            Quick Links
          </h3>
          <ul className="mt-3 space-y-2">
            {quickLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-sm text-cs-gray-dark/75 transition-colors hover:text-cs-blue"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Resources">
          <h3 className="text-sm font-bold tracking-wide text-cs-navy">
            Resources
          </h3>
          <ul className="mt-3 space-y-2">
            {resources.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-sm text-cs-gray-dark/75 transition-colors hover:text-cs-blue"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-bold tracking-wide text-cs-navy">
            Connect With Us
          </h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {socials.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-lg bg-cs-light px-3 py-1.5 text-sm font-semibold text-cs-blue transition-colors hover:bg-cs-blue hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-cs-gray-light py-5 text-center text-sm text-cs-gray-dark/60">
        © CareerStack. All rights reserved.
      </div>
    </footer>
  );
}
