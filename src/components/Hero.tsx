import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";

/**
 * Hero. Midnight background with a faded AZ desert home photograph behind the type.
 * Type-dominant per design-research.md §06. Photo gives location context without
 * competing with the headline.
 */
export function Hero() {
  return (
    <section className="relative bg-midnight text-sand overflow-hidden">
      {/* Background photo with Midnight overlay biased to the left for text contrast. */}
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="/photos/scottsdale-exterior.png"
          alt=""
          fill
          priority
          className="object-cover opacity-90"
          sizes="100vw"
        />
        {/* Horizontal scrim: heavy Midnight on the left where copy sits, fading right so the photo shows. */}
        <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/80 to-midnight/30" />
        {/* Bottom fade so the section ends on Midnight before the next section starts. */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-midnight to-transparent" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 md:px-8 py-24 md:py-36 flex flex-col items-start max-w-3xl">
        <p className="font-body text-xs md:text-sm font-semibold uppercase tracking-[0.16em] text-adobe">
          East Valley · Licensed · Bonded · Insured
        </p>

        <h1 className="font-display font-black uppercase tracking-tight text-sand mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.92]">
          Painting.
          <br />
          Done right.
        </h1>

        <div className="h-1 w-16 bg-terracotta mt-6" aria-hidden />

        <p className="font-body text-base md:text-lg text-sand/85 mt-8 max-w-xl leading-relaxed">
          Cabinet refinishing, interior, and exterior repainting for East Valley
          homeowners. Written completion deadlines. HOA submittals handled. The owner
          on every estimate. Painting done the way it should have been done the first
          time.
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
      </div>
    </section>
  );
}
