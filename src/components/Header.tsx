import { Logo } from "./Logo";
import { siteConfig } from "@/lib/siteConfig";

/**
 * Sticky header with a thin Midnight credentials strip on top,
 * then the main Sand nav below.
 * Desktop: logo left, nav center, phone + CTA right.
 * Mobile: nav collapses; logo + phone + CTA stay visible.
 */
export function Header() {
  return (
    <header className="sticky top-0 z-50">
      {/* Credentials strip — locked by brand voice ("ROC #363664" beats "licensed"). */}
      <div className="bg-midnight text-sand">
        <div className="mx-auto max-w-7xl px-4 md:px-8 py-2 flex items-center justify-center md:justify-between gap-4">
          <p className="font-body text-[10.5px] md:text-xs uppercase tracking-[0.14em] text-sand/90 text-center md:text-left">
            {siteConfig.credentials.roc} · Licensed · Bonded · Insured
          </p>
          <p className="hidden md:block font-body text-xs uppercase tracking-[0.12em] text-sand/80">
            Owner-operator · {siteConfig.brand.region}
          </p>
        </div>
      </div>

      {/* Main nav bar */}
      <div className="bg-sand/95 backdrop-blur supports-[backdrop-filter]:bg-sand/80 border-b border-slate/15">
        <div className="mx-auto max-w-7xl px-4 md:px-8 h-20 md:h-24 flex items-center justify-between gap-6">
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
      </div>
    </header>
  );
}
