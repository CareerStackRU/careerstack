"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { buttonClasses } from "./Button";
import { CloseIcon, MenuIcon, UserIcon } from "./icons";

/**
 * Header — founder requirement: logo top-left, links home, on every page.
 *
 * DEVIATION FROM SKETCHES (founder-approved partner call, Nov 21 2026):
 * the sketches are hamburger-only. On desktop (md+) we instead show a real
 * inline top nav (Home, Certifications, Projects, Portfolio, Pricing) plus a
 * Log In / Sign Up button, because hiding the product behind a hamburger on
 * desktop hurts discoverability. The secondary/account items live in an
 * "Account" dropdown on desktop (no duplication of the primary nav) and in
 * the hamburger menu on mobile.
 */

const primaryNav = [
  { label: "Home", href: "/" },
  { label: "Certifications", href: "/#catalog" },
  { label: "Projects", href: "/#catalog" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
];

const accountNav = [
  { label: "My Account", href: "/account" },
  { label: "My Progress", href: "/progress" },
  { label: "Billing", href: "/billing" },
  { label: "Help Center", href: "/help" },
  { label: "Contact Us", href: "/contact" },
  { label: "News", href: "/news" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-cs-gray-light bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-[72px] w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Logo />

        {/* Desktop inline nav */}
        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {primaryNav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-lg px-3 py-2 text-[15px] font-semibold text-cs-navy transition-colors hover:bg-cs-light hover:text-cs-blue"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Desktop account dropdown (secondary items only) */}
          <div className="relative hidden md:block">
            <button
              type="button"
              onClick={() => setAccountOpen((v) => !v)}
              aria-expanded={accountOpen}
              aria-haspopup="menu"
              className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-[15px] font-semibold text-cs-navy transition-colors hover:bg-cs-light"
            >
              <UserIcon className="h-5 w-5" />
              Account
            </button>
            {accountOpen && (
              <div
                role="menu"
                className="absolute right-0 top-full mt-2 w-52 rounded-xl border border-cs-gray-light bg-white py-2 shadow-lg"
              >
                {accountNav.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    role="menuitem"
                    onClick={() => setAccountOpen(false)}
                    className="block px-4 py-2 text-sm font-medium text-cs-gray-dark transition-colors hover:bg-cs-light hover:text-cs-blue"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/login"
            className={`${buttonClasses("primary", "md")} hidden md:inline-flex`}
          >
            Log In / Sign Up
          </Link>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="inline-flex items-center justify-center rounded-lg p-2 text-cs-navy transition-colors hover:bg-cs-light md:hidden"
          >
            {mobileOpen ? (
              <CloseIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu — full nav from the sketches */}
      {mobileOpen && (
        <nav
          aria-label="Mobile"
          className="border-t border-cs-gray-light bg-white px-4 py-3 md:hidden"
        >
          <ul className="flex flex-col">
            {[...primaryNav, ...accountNav].map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-[15px] font-semibold text-cs-navy transition-colors hover:bg-cs-light"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="mt-2 px-3 pb-2">
              <Link
                href="/login"
                onClick={() => setMobileOpen(false)}
                className={`${buttonClasses("primary", "md")} w-full`}
              >
                Log In / Sign Up
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
