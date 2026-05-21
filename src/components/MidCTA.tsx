import { siteConfig } from "@/lib/siteConfig";

/**
 * Mid-page CTA strip — captures intent between Promise and Process.
 * Sand background to break up the dark Promise section visually.
 * Bold treatment with the Terracotta accent on the button.
 */
export function MidCTA() {
  return (
    <section className="bg-sand text-midnight border-y border-slate/15">
      <div className="mx-auto max-w-7xl px-6 md:px-8 py-10 md:py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="font-display font-black uppercase text-2xl md:text-3xl text-midnight tracking-tight leading-tight">
            Lock in your deadline.{" "}
            <span className="text-terracotta">In writing.</span>
          </p>
          <p className="font-body text-sm md:text-base text-slate mt-2">
            Ricardo responds within 24 hours and walks the job in person.
          </p>
        </div>
        <div className="flex items-center gap-5 shrink-0">
          <a
            href="#estimate"
            className="inline-flex items-center px-7 py-4 bg-terracotta text-sand font-body text-sm font-bold uppercase tracking-[0.06em] rounded-sm hover:opacity-90 transition-opacity"
          >
            Get a Free Estimate →
          </a>
          <a
            href={`tel:${siteConfig.contact.phoneRaw}`}
            className="hidden md:inline font-body text-sm font-semibold uppercase tracking-[0.1em] text-midnight hover:text-terracotta transition-colors"
          >
            {siteConfig.contact.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
