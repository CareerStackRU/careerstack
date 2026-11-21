import type { HTMLAttributes, ReactNode } from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

/** White content card with soft border and shadow, per the sketches. */
export default function Card({ className = "", children, ...props }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-cs-gray-light bg-white shadow-[0_1px_3px_rgba(11,31,58,0.06)] ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
