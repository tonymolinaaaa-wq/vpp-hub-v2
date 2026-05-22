import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";
import { Brushstroke } from "./Brushstroke";

/**
 * Hero — Phase 1.1 (brief §2.1).
 *
 * Direct-response structure with the Big Idea as H1 (Option A from the brief):
 *   "The owner walks every job. Or it's $300 a day until it's done."
 *
 * Order: trust ribbon → H1 → brushstroke → subhead → CTA pair → social proof → badges.
 * Page-load reveal: staggered fade-up over ~700ms total. Disabled at prefers-reduced-motion.
 *
 * TODO(photo): Replace scottsdale-exterior.png with a real photo of Ricardo + work van
 * + a finished East Valley home (see TODOS.md). Target 1920×1080 minimum.
 */
export function Hero() {
  return (
    <section className="relative bg-midnight text-sand overflow-hidden">
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="/photos/scottsdale-exterior.png"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight/85 via-midnight/40 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-8 py-20 md:py-32 flex flex-col items-start max-w-3xl">
        {/* Trust ribbon — sits above H1 per brief §2.1. Four specific credentials. */}
        <ul className="fade-up flex flex-wrap items-center gap-x-3 gap-y-2 font-body text-[11px] md:text-xs uppercase tracking-[0.14em] text-sand/90 mb-8">
          <li>{siteConfig.credentials.roc}</li>
          <li aria-hidden className="text-terracotta">·</li>
          <li>Google Guaranteed</li>
          <li aria-hidden className="text-terracotta">·</li>
          <li>BBB A+</li>
          <li aria-hidden className="text-terracotta">·</li>
          <li>5.0★ Google</li>
        </ul>

        <h1 className="fade-up fade-up-100 font-display font-black uppercase tracking-tight text-sand text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95]">
          The owner walks every job.{" "}
          <span className="text-terracotta">Or it&apos;s $300 a day</span>{" "}
          until it&apos;s done.
        </h1>

        <Brushstroke
          variant="sweep"
          width={96}
          className="fade-up fade-up-200 text-terracotta mt-6"
        />

        <p className="fade-up fade-up-300 font-body text-base md:text-lg text-sand/90 mt-8 max-w-xl leading-snug">
          Residential cabinets, interiors, and exteriors for Queen Creek,
          Chandler, Gilbert, Mesa, Tempe, and Scottsdale — direct with
          Ricardo Parra, owner.
        </p>

        <div className="fade-up fade-up-400 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mt-10">
          <a
            href="#estimate"
            className="inline-flex items-center min-h-[44px] px-7 py-4 bg-terracotta text-sand font-body text-sm md:text-base font-bold uppercase tracking-[0.06em] rounded-sm hover:opacity-90 transition-opacity"
          >
            Get My Free In-Home Estimate →
          </a>
          <a
            href={`tel:${siteConfig.contact.phoneRaw}`}
            className="inline-flex items-center min-h-[44px] font-body text-sm font-semibold uppercase tracking-[0.1em] text-sand hover:text-terracotta transition-colors"
          >
            Or call {siteConfig.contact.phone}
          </a>
        </div>

        {/* Live Google review count — kept as supplementary social proof beneath the credentials ribbon up top. */}
        <a
          href={siteConfig.social.googleBusinessProfile}
          target="_blank"
          rel="noopener noreferrer"
          className="fade-up fade-up-500 mt-8 inline-flex items-center gap-2 font-body text-sm text-sand hover:text-terracotta transition-colors group"
        >
          <span aria-hidden className="text-terracotta tracking-[0.05em]">★★★★★</span>
          <span className="font-semibold">7 five-star reviews on Google</span>
          <span aria-hidden className="text-sand/60 group-hover:text-terracotta">→</span>
        </a>

        {/* Verification badges */}
        <div className="fade-up fade-up-600 mt-8 pt-8 border-t border-sand/20 flex flex-wrap items-center gap-6 md:gap-8">
          <p className="font-body text-xs uppercase tracking-[0.16em] text-sand/70 w-full sm:w-auto">
            Verified by
          </p>
          <Image
            src="/photos/badge-google-guaranteed.webp"
            alt="Google Guaranteed"
            width={80}
            height={80}
            className="h-16 md:h-20 w-auto"
          />
          <Image
            src="/photos/badge-bbb.png"
            alt="BBB Accredited Business, A+ Rating"
            width={80}
            height={80}
            className="h-16 md:h-20 w-auto"
          />
        </div>
      </div>
    </section>
  );
}
