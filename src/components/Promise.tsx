import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";
import { Brushstroke } from "./Brushstroke";

/**
 * The VPP Promise — section 05 of the hub. Midnight, the high-contrast moment.
 *
 * Direct-response reframing: each promise is a SENTENCE the homeowner reads
 * to themselves, not a noun describing a feature. Editorial row treatment —
 * numeral, big commitment headline, supporting body, hairline divider between.
 * Closes with a CTA so the moment converts.
 *
 * Decorated by an oversized mono icon watermark off to the right at low
 * opacity — adds visual texture to a type-only section without competing.
 */
export function Promise() {
  return (
    <section className="relative bg-midnight text-sand py-20 md:py-28 overflow-hidden">
      {/* Decorative mono icon watermark — sits behind content, off to the right. */}
      <Image
        src="/logos/vpp-icon-mono.svg"
        alt=""
        aria-hidden="true"
        width={600}
        height={696}
        className="absolute -right-20 top-1/2 -translate-y-1/2 w-[28rem] md:w-[36rem] h-auto opacity-[0.04] invert pointer-events-none select-none"
      />

      <div className="relative mx-auto max-w-5xl px-6 md:px-8">
        <div className="max-w-3xl">
          <p className="font-body text-xs md:text-sm font-semibold uppercase tracking-[0.16em] text-adobe">
            What we put in writing
          </p>
          <h2 className="font-display font-black uppercase tracking-tight text-4xl md:text-5xl lg:text-6xl text-sand mt-4 leading-[0.95]">
            Five promises.
            <br />
            On every contract.
          </h2>
          <Brushstroke variant="double" width={112} className="text-terracotta mt-6" />
          <p className="font-body text-base md:text-lg text-sand/85 mt-8 leading-relaxed">
            Other painters promise integrity in their marketing. We sign it on
            the contract. Every VPP job includes all five — not as upsells, not
            as optional add-ons. They&apos;re how we work.
          </p>
        </div>

        <ul className="mt-16 space-y-12 md:space-y-14">
          {siteConfig.promise.map((item, idx) => (
            <li
              key={item.n}
              className={`pt-12 md:pt-14 ${idx > 0 ? "border-t border-sand/15" : ""}`}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
                <div className="md:col-span-2">
                  <span className="font-display font-black text-terracotta text-6xl md:text-7xl leading-none">
                    {item.n}
                  </span>
                </div>
                <div className="md:col-span-10">
                  <h3 className="font-display font-black uppercase text-2xl md:text-3xl lg:text-4xl text-sand tracking-tight leading-[1.05]">
                    {item.headline}
                  </h3>
                  <p className="font-body text-xs uppercase tracking-[0.16em] text-adobe mt-3">
                    {item.label}
                  </p>
                  <p className="font-body text-base md:text-lg text-sand/85 mt-5 leading-relaxed max-w-2xl">
                    {item.body}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Section CTA — converts the trust this section just built. */}
        <div className="mt-20 pt-12 border-t border-sand/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="font-display font-black uppercase text-2xl md:text-3xl text-sand tracking-tight leading-tight">
            See it on your contract.
          </p>
          <a
            href="#estimate"
            className="inline-flex items-center px-7 py-4 bg-terracotta text-sand font-body text-sm font-bold uppercase tracking-[0.06em] rounded-sm hover:opacity-90 transition-opacity shrink-0"
          >
            Get a Free Estimate →
          </a>
        </div>
      </div>
    </section>
  );
}
