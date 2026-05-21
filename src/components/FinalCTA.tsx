import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";

/**
 * Final CTA — section 10 of the hub. Midnight full-bleed.
 * Anchored by the knockout stacked lockup (Sand wordmark on Midnight).
 * Last conversion moment before the footer.
 */
export function FinalCTA() {
  return (
    <section
      id="estimate"
      className="bg-midnight text-sand py-24 md:py-32 scroll-mt-20"
    >
      <div className="mx-auto max-w-5xl px-6 md:px-8 text-center">
        <p className="font-body text-xs md:text-sm font-semibold uppercase tracking-[0.16em] text-adobe">
          Get your estimate
        </p>

        {/* Brand lockup — knockout variant designed for dark backgrounds. */}
        <div className="flex justify-center mt-8">
          <Image
            src="/logos/vpp-wordmark-stacked-knockout.svg"
            alt={siteConfig.brand.name}
            width={420}
            height={472}
            className="h-48 md:h-64 w-auto"
          />
        </div>

        <p className="font-body text-lg md:text-xl text-sand/85 mt-10 leading-relaxed max-w-2xl mx-auto">
          Ricardo personally responds to every inquiry within 24 hours and
          delivers the estimate in person. No callbacks lost, no remote quotes.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
          <a
            href={`tel:${siteConfig.contact.phoneRaw}`}
            className="flex flex-col items-center justify-center px-7 py-6 bg-terracotta text-sand rounded-sm hover:opacity-90 transition-opacity"
          >
            <span className="font-body text-xs uppercase tracking-[0.12em] text-sand/85">
              Call
            </span>
            <span className="font-display font-black text-2xl md:text-3xl text-sand mt-1 tracking-tight">
              {siteConfig.contact.phone}
            </span>
          </a>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="flex flex-col items-center justify-center px-7 py-6 border-2 border-sand/40 text-sand rounded-sm hover:border-sand hover:bg-sand/5 transition-colors"
          >
            <span className="font-body text-xs uppercase tracking-[0.12em] text-sand/85">
              Email
            </span>
            <span className="font-body font-semibold text-base md:text-lg text-sand mt-1 break-all">
              {siteConfig.contact.email}
            </span>
          </a>
        </div>

        <p className="font-body text-xs uppercase tracking-[0.12em] text-sand/60 mt-12">
          {siteConfig.credentials.roc} · Bonded · {siteConfig.credentials.bbb}
        </p>
      </div>
    </section>
  );
}
