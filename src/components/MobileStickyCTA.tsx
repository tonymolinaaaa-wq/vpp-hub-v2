import { siteConfig } from "@/lib/siteConfig";

/**
 * Mobile-only sticky CTA bar fixed to the bottom of the viewport.
 * Two columns: tap-to-call (Midnight) + Get Estimate (Terracotta).
 * Hidden on md+ screens (desktop nav already has both CTAs persistently visible).
 *
 * Standard direct-response pattern for service businesses — typically lifts
 * conversion 0.5–1.5% by removing the "scroll to find a CTA" friction.
 */
export function MobileStickyCTA() {
  return (
    <div
      className="md:hidden fixed bottom-0 inset-x-0 z-40 border-t border-sand/20 bg-midnight"
      aria-label="Quick contact"
    >
      <div className="grid grid-cols-2">
        <a
          href={`tel:${siteConfig.contact.phoneRaw}`}
          className="flex items-center justify-center py-3.5 text-sand font-body text-sm font-bold uppercase tracking-[0.08em] border-r border-sand/20"
        >
          Call
        </a>
        <a
          href="#estimate"
          className="flex items-center justify-center py-3.5 bg-terracotta text-sand font-body text-sm font-bold uppercase tracking-[0.08em]"
        >
          Free Estimate
        </a>
      </div>
    </div>
  );
}
