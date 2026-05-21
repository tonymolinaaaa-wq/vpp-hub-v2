type BrushstrokeProps = {
  className?: string;
  /** Stroke variant — "sweep" (default, soft horizontal), "tapered" (filled, thicker
   *  in middle), or "double" (main stroke + ghost). Use different variants in
   *  different sections so the brand mark feels hand-applied, not stamped. */
  variant?: "sweep" | "tapered" | "double";
  /** Display width in px. Default 80. */
  width?: number;
};

/**
 * Hand-drawn brushstroke that replaces the rigid 4×64px rectangle as the
 * section-title underline and signature accent. Inherits text color via
 * currentColor, so set the color on a parent or pass `text-terracotta`
 * (light bg) or `text-terracotta` (dark bg also works — Terracotta has
 * AA-Large contrast on both Sand and Midnight).
 */
export function Brushstroke({
  className = "",
  variant = "sweep",
  width = 80,
}: BrushstrokeProps) {
  const aspectRatio = 14 / 80;
  const height = Math.round(width * aspectRatio);

  if (variant === "tapered") {
    // Filled path, thicker at start tapering to thin tail at right.
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 80 14"
        fill="currentColor"
        aria-hidden="true"
        className={className}
      >
        <path d="M2.5,4.5 Q 22,2.5 48,5 Q 64,7 76,6.2 L 78,7.6 Q 64,8.4 48,7 Q 22,4.5 3.5,9 Z" />
      </svg>
    );
  }

  if (variant === "double") {
    // Two strokes — a primary sweep with a small ghost underline beneath.
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 80 14"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        aria-hidden="true"
        className={className}
      >
        <path d="M3 6 Q 20 3, 42 5 T 77 5" strokeWidth="4" />
        <path d="M8 10 Q 30 11, 55 10 L 70 10.5" strokeWidth="1.2" opacity="0.45" />
      </svg>
    );
  }

  // Default: "sweep" — single soft brushstroke with a tiny tapered tail.
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 80 14"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M3 7 Q 18 4, 40 6 T 77 5" strokeWidth="3.5" />
      <path d="M73 6 L 78 5.5" strokeWidth="1.2" opacity="0.5" />
    </svg>
  );
}
