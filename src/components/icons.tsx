import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function base(props: IconProps) {
  return {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    viewBox: "0 0 24 24",
    "aria-hidden": true,
    ...props,
  };
}

export function TruckIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M2.5 6h11v10h-11z" />
      <path d="M13.5 10h4l4 4v2h-8" />
      <circle cx="6.5" cy="17.5" r="1.8" />
      <circle cx="17" cy="17.5" r="1.8" />
    </svg>
  );
}

export function ClipboardCheckIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 4.5V3h6v1.5" />
      <path d="m9 13.5 2.2 2.2L15.5 11" />
    </svg>
  );
}

export function ClipboardListIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 4.5V3h6v1.5" />
      <path d="M9 10h6M9 14h6M9 18h4" />
    </svg>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.7 2.6 4 5.6 4 9s-1.3 6.4-4 9c-2.7-2.6-4-5.6-4-9s1.3-6.4 4-9Z" />
    </svg>
  );
}

export function CartIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M3 4h2.2l2.3 12.2a1.5 1.5 0 0 0 1.5 1.2h7.9a1.5 1.5 0 0 0 1.5-1.2L20 8H6" />
      <circle cx="10" cy="20.4" r="1.3" />
      <circle cx="17.5" cy="20.4" r="1.3" />
    </svg>
  );
}

export function NetworkIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="8.5" y="2.8" width="7" height="5" rx="1" />
      <rect x="2.8" y="16.2" width="7" height="5" rx="1" />
      <rect x="14.2" y="16.2" width="7" height="5" rx="1" />
      <path d="M12 7.8v3.4M12 11.2 6.3 16.2M12 11.2l5.7 5" />
    </svg>
  );
}

export function ChevronRightIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m9 5 7 7-7 7" />
    </svg>
  );
}

export function AwardIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="9" r="5.5" />
      <path d="m8.8 13.4-1.6 7.1 4.8-2.6 4.8 2.6-1.6-7.1" />
    </svg>
  );
}

export function BriefcaseIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="7.5" width="18" height="12" rx="2" />
      <path d="M9 7.5v-2A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5v2M3 12.5h18" />
    </svg>
  );
}

export function StarIcon({
  filled,
  ...props
}: IconProps & { filled: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinejoin="round"
      {...props}
    >
      <path d="m12 3.2 2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L3.5 9.4l5.9-.9L12 3.2Z" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

export function UserIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="8" r="3.6" />
      <path d="M5 20c1.2-3.2 3.8-4.8 7-4.8s5.8 1.6 7 4.8" />
    </svg>
  );
}

export function RobotIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="4.5" y="8" width="15" height="10" rx="3" />
      <path d="M12 8V4.8M12 4.8h.01" />
      <circle cx="9.3" cy="13" r="0.6" fill="currentColor" />
      <circle cx="14.7" cy="13" r="0.6" fill="currentColor" />
      <path d="M9.5 16h5" />
    </svg>
  );
}
