import { siteConfig } from "@/lib/siteConfig";

/**
 * Final CTA — section 10 of the hub. Midnight full-bleed.
 * Last conversion moment before the footer. Single-purpose, no new info.
 * Quote form coming in task #5; for v1 we anchor on phone + email + write-us.
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
        <h2 className="font-display font-black uppercase tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-sand mt-4 leading-[0.92]">
          Painting.
          <br />
          Done right.
        </h2>
        <div className="h-1 w-16 bg-terracotta mt-8 mx-auto" aria-hidden />
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
