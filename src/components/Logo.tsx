import Link from "next/link";

/**
 * CareerStack logo: a blue "C" with an upward arrow at its opening,
 * plus the wordmark — "Career" in Deep Navy, "Stack" in CareerStack Blue.
 * Optional tagline variant: "LEARN. BUILD. PROVE." in spaced capitals.
 */
export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden role="presentation">
      {/* C ring with a gap at the upper right */}
      <path
        d="M38.6 13.2A17 17 0 1 0 38.6 34.8"
        fill="none"
        stroke="#1557B0"
        strokeWidth="7"
        strokeLinecap="round"
      />
      {/* Upward arrow breaking out of the opening */}
      <path
        d="M30.5 17.5 41 7m0 0h-9.2M41 7v9.2"
        fill="none"
        stroke="#2563EB"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Logo({
  withTagline = false,
  href = "/",
  className = "",
}: {
  withTagline?: boolean;
  href?: string | null;
  className?: string;
}) {
  const content = (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span className="text-[26px] font-extrabold tracking-tight">
          <span className="text-cs-navy">Career</span>
          <span className="text-cs-blue">Stack</span>
        </span>
        {withTagline && (
          <span className="mt-1 text-[9px] font-semibold tracking-[0.32em] text-cs-gray-dark/70">
            LEARN. BUILD. PROVE.
          </span>
        )}
      </span>
    </span>
  );

  if (href === null) return content;
  return (
    <Link href={href} aria-label="CareerStack — home" className="shrink-0">
      {content}
    </Link>
  );
}
