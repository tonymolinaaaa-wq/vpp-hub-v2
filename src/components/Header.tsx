import { Logo } from "./Logo";
import { siteConfig } from "@/lib/siteConfig";

/**
 * Sticky header. Sand background, hairline rule at the bottom.
 * Desktop: logo left, nav center, phone + CTA right.
 * Mobile: logo + phone + CTA (nav collapses).
 */
export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-sand/95 backdrop-blur supports-[backdrop-filter]:bg-sand/80 border-b border-slate/15">
      <div className="mx-auto max-w-7xl px-4 md:px-8 h-16 md:h-20 flex items-center justify-between gap-6">
        <Logo variant="header" />

        <nav
          className="hidden lg:flex items-center gap-8 font-body text-sm font-semibold uppercase tracking-[0.08em] text-midnight"
          aria-label="Primary"
        >
          <a href="/services/cabinet-refinishing" className="hover:text-terracotta transition-colors">
            Services
          </a>
          <a href="/gallery" className="hover:text-terracotta transition-colors">
            Our Work
          </a>
          <a href="/about" className="hover:text-terracotta transition-colors">
            About
          </a>
          <a href="/service-areas" className="hover:text-terracotta transition-colors">
            Areas
          </a>
        </nav>

        <div className="flex items-center gap-3 md:gap-5">
          <a
            href={`tel:${siteConfig.contact.phoneRaw}`}
            className="hidden sm:inline font-body text-sm font-semibold uppercase tracking-[0.08em] text-midnight hover:text-terracotta transition-colors"
          >
            {siteConfig.contact.phone}
          </a>
          <a
            href="#estimate"
            className="inline-flex items-center px-4 md:px-5 py-2.5 md:py-3 bg-terracotta text-sand font-body text-xs md:text-sm font-bold uppercase tracking-[0.06em] rounded-sm hover:opacity-90 transition-opacity"
          >
            Free Estimate
          </a>
        </div>
      </div>
    </header>
  );
}
