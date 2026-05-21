import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";

/**
 * Hero. Midnight background with the Scottsdale exterior photo behind type.
 * Direct-response structure: hook → tagline → ONE sub-line → CTA + tap-to-call
 * → social proof + trust badges. No paragraph filler.
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

      <div className="relative mx-auto max-w-7xl px-6 md:px-8 py-24 md:py-36 flex flex-col items-start max-w-3xl">
        <h1 className="font-display font-black uppercase tracking-tight text-sand text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.92]">
          Painting.
          <br />
          Done right.
        </h1>

        <div className="h-1 w-16 bg-terracotta mt-6" aria-hidden />

        <p className="font-body text-lg md:text-xl text-sand/90 mt-8 max-w-xl leading-snug">
          Cabinets, interiors, exteriors. With the integrity in writing.
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6 mt-10">
          <a
            href="#estimate"
            className="inline-flex items-center px-7 py-4 bg-terracotta text-sand font-body text-sm font-bold uppercase tracking-[0.06em] rounded-sm hover:opacity-90 transition-opacity"
          >
            Get a Free Estimate →
          </a>
          <a
            href={`tel:${siteConfig.contact.phoneRaw}`}
            className="font-body text-sm font-semibold uppercase tracking-[0.1em] text-sand hover:text-terracotta transition-colors"
          >
            Or call {siteConfig.contact.phone}
          </a>
        </div>

        {/* Social proof — sits between CTAs and badges, the natural "should I click" moment. */}
        <a
          href={siteConfig.social.googleBusinessProfile}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 font-body text-sm text-sand hover:text-terracotta transition-colors group"
        >
          <span aria-hidden className="text-terracotta tracking-[0.05em]">★★★★★</span>
          <span className="font-semibold">7 five-star reviews on Google</span>
          <span aria-hidden className="text-sand/60 group-hover:text-terracotta">→</span>
        </a>

        {/* Trust badges */}
        <div className="mt-8 pt-8 border-t border-sand/20 flex flex-wrap items-center gap-6 md:gap-8">
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
