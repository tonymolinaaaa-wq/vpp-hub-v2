import Image from "next/image";

type LogoProps = {
  variant?: "header" | "footer";
  className?: string;
};

/**
 * Brand lockup. Icon SVG + live Montserrat Black wordmark.
 * Locked by CLAUDE.md §04. Header variant: icon at full color + Midnight text on Sand.
 * Footer variant: icon at full color + Sand text on Midnight (knockout).
 */
export function Logo({ variant = "header", className = "" }: LogoProps) {
  const isFooter = variant === "footer";
  const wordmarkColor = isFooter ? "text-sand" : "text-midnight";
  const ruleColor = isFooter ? "bg-terracotta" : "bg-terracotta";

  return (
    <a
      href="/"
      className={`flex items-center gap-3 group ${className}`}
      aria-label="Valley Painting Pros — home"
    >
      <Image
        src="/logos/vpp-icon.svg"
        alt=""
        width={64}
        height={74}
        className="h-12 md:h-16 w-auto"
        priority={!isFooter}
      />
      <div className="flex flex-col leading-none">
        <span className="font-display font-black uppercase tracking-tight text-xl md:text-3xl whitespace-nowrap">
          <span className={wordmarkColor}>Valley</span>
          <span className="text-terracotta ml-2">Painting Pros</span>
        </span>
        <span className={`h-1 w-16 md:w-20 ${ruleColor} mt-2`} aria-hidden />
      </div>
    </a>
  );
}
