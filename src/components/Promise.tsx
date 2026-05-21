import { siteConfig } from "@/lib/siteConfig";

/**
 * The VPP Promise — the brand's competitive wedge. Five-piece offer stack
 * on Midnight (the high-contrast moment per CLAUDE.md §05 + design-research §03).
 * No photography here — type and numerals do the work.
 */
export function Promise() {
  return (
    <section className="bg-midnight text-sand py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="max-w-3xl">
          <p className="font-body text-xs md:text-sm font-semibold uppercase tracking-[0.16em] text-adobe">
            What we put in writing
          </p>
          <h2 className="font-display font-black uppercase tracking-tight text-4xl md:text-5xl lg:text-6xl text-sand mt-4 leading-[0.95]">
            The Valley Painting Pros Promise
          </h2>
          <div className="h-1 w-16 bg-terracotta mt-6" aria-hidden />
          <p className="font-body text-base md:text-lg text-sand/85 mt-8 leading-relaxed max-w-2xl">
            Other painters promise integrity in their marketing. We sign it on
            the contract. Every VPP job includes all five of these — not as
            upsells, not as optional add-ons. They&apos;re how we work.
          </p>
        </div>

        <ul className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-sand/15 border border-sand/15 rounded-sm overflow-hidden">
          {siteConfig.promise.map((item) => (
            <li
              key={item.n}
              className="bg-midnight p-6 md:p-7 flex flex-col"
            >
              <span className="font-display font-black text-terracotta text-5xl md:text-4xl lg:text-5xl leading-none">
                {item.n}
              </span>
              <h3 className="font-display font-black uppercase text-lg md:text-base lg:text-lg text-sand mt-5 leading-tight tracking-tight">
                {item.name}
              </h3>
              <p className="font-body text-sm text-sand/80 mt-3 leading-relaxed">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
