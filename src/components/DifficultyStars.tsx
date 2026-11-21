import { StarIcon } from "./icons";

/** Difficulty rating shown as gold stars out of 5, e.g. "3/5". */
export default function DifficultyStars({
  value,
  showLabel = true,
  className = "",
}: {
  /** 0–5 */
  value: number;
  showLabel?: boolean;
  className?: string;
}) {
  const clamped = Math.max(0, Math.min(5, Math.round(value)));
  return (
    <span
      className={`inline-flex flex-col items-end gap-0.5 ${className}`}
      role="img"
      aria-label={`Difficulty ${clamped} out of 5`}
    >
      <span className="flex items-center gap-0.5" aria-hidden>
        {Array.from({ length: 5 }, (_, i) => (
          <StarIcon
            key={i}
            filled={i < clamped}
            className={`h-3.5 w-3.5 ${i < clamped ? "text-cs-gold" : "text-cs-gray-dark/25"}`}
          />
        ))}
      </span>
      {showLabel && (
        <span className="text-xs font-medium text-cs-gray-dark/60">
          {clamped}/5
        </span>
      )}
    </span>
  );
}
