import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";

/**
 * /about — the full locked story from docs/about-story.md, rendered verbatim
 * with the voice notes applied. Do not edit copy here without updating
 * docs/about-story.md.
 */

export const metadata: Metadata = {
  title: `Our story — ${siteConfig.brand.name}`,
  description:
    "How Valley Painting Pros came to be. Ricardo Parra's path from painter's apprentice subcontracting under bigger brands to owner-operator with his own name on the contract.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page hero — Sand background, anchored by the stacked brand lockup. */}
      <section className="bg-sand text-midnight pt-16 md:pt-24 pb-12 md:pb-16 border-b border-slate/15">
        <div className="mx-auto max-w-3xl px-6 md:px-8 text-center">
          <div className="flex justify-center">
            <Image
              src="/logos/vpp-wordmark-stacked.svg"
              alt={siteConfig.brand.name}
              width={420}
              height={472}
              className="h-56 md:h-72 w-auto"
              priority
            />
          </div>
          <p className="font-body text-xs md:text-sm font-semibold uppercase tracking-[0.16em] text-slate mt-10">
            About Valley Painting Pros
          </p>
          <h1 className="font-display font-black uppercase tracking-tight text-5xl md:text-6xl lg:text-7xl text-midnight mt-4 leading-[0.95]">
            From the inside.
          </h1>
          <div className="h-1 w-16 bg-terracotta mt-6 mx-auto" aria-hidden />
          <p className="font-body text-base md:text-lg text-midnight mt-8 leading-relaxed max-w-2xl mx-auto">
            The full story behind Valley Painting Pros — why we exist, who&apos;s
            doing the work, and what we put in writing.
          </p>
        </div>
      </section>

      {/* The locked story */}
      <section className="bg-sand text-midnight py-16 md:py-20">
        <article className="mx-auto max-w-3xl px-6 md:px-8 font-body text-base md:text-lg leading-relaxed space-y-6">
          <p>
            Hiring a painter is harder than it should be. Crews disappear
            after the deposit clears. Jobs drag past the date that was
            promised. Prep gets skipped on the parts you can&apos;t see. And the
            phone stops getting answered the day the final check clears.
          </p>

          <p>We know — because we&apos;ve spent years watching it happen from the inside.</p>

          <p>
            My name is Ricardo Parra. I came up as a painter&apos;s apprentice in
            2017. By 2020 I&apos;d gone independent — picking up subcontract work
            under the names of bigger painting companies, with a truck, some
            tools, and a willingness to outwork anybody on the job. I painted
            under their names, wore their shirts, and saw how those companies
            ran jobs from the inside — starting with one of the biggest
            franchised brands in the country, then half a dozen others after
            that.
          </p>

          <p>What I saw bothered me.</p>

          <p>
            Crew chiefs and project managers — the people supposedly setting
            the standard — would walk up to me at the start of a job and say
            things like:
          </p>

          <blockquote className="pl-6 border-l-4 border-terracotta my-2 space-y-3 not-italic">
            <p className="italic text-slate">
              &ldquo;One coat is fine — don&apos;t worry about a second.&rdquo;
            </p>
            <p className="italic text-slate">
              &ldquo;Power-washing&apos;s just for show. Wet the walls down and start painting.&rdquo;
            </p>
            <p className="italic text-slate">
              &ldquo;Just finish it up and let us know when we can come collect.&rdquo;
            </p>
          </blockquote>

          <p>That was the industry I came up in.</p>

          <p>
            My partner Gereimy and I never ran a job that way. Years before
            painting, I&apos;d worked for an old transmission shop owner who
            taught me to do the right thing whether anyone was looking or
            not — and that line stuck. We did the prep. We power-washed
            properly. We applied the second coat. We talked to the homeowner
            like the job mattered, because to us, it did.
          </p>

          <p>
            The customers noticed. The companies we worked under started
            calling us their A-team and putting us on their highest-end jobs.
            They charged premium prices for our work. We were the ones doing
            it. Someone else was answering for it. So we put our own name on
            the contract.
          </p>

          <p>
            That&apos;s how Valley Painting Pros got built — to do the work
            without the parts of the industry that don&apos;t serve the
            homeowner. Every VPP contract carries a written completion
            deadline — if we miss it, we credit you $300 a day until we&apos;re
            done. Every job ends with a 12-month wellness check and a
            lifetime touch-up kit, because the work isn&apos;t done until
            you&apos;re still happy with it a year later. Every day we&apos;re at
            your house, you get photo updates so you know what&apos;s happening
            while you&apos;re at work.
          </p>

          <p className="font-semibold text-midnight">
            Other painters promise integrity in their marketing. We sign it
            on the contract.
          </p>

          <p>
            If you&apos;ve been burned by a painter before — or you&apos;ve heard
            the right things on a sales call and watched the wrong things
            show up at your house — that&apos;s exactly why we built this
            company.
          </p>
        </article>

        {/* Sign-off */}
        <div className="mx-auto max-w-3xl px-6 md:px-8 mt-16">
          <p className="font-display font-black uppercase text-5xl md:text-6xl text-midnight tracking-tight">
            Painting. Done right.
          </p>
          <div className="h-1 w-16 bg-terracotta mt-4" aria-hidden />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-midnight text-sand py-20">
        <div className="mx-auto max-w-3xl px-6 md:px-8 text-center">
          <h2 className="font-display font-black uppercase tracking-tight text-3xl md:text-4xl text-sand">
            Ready to talk?
          </h2>
          <p className="font-body text-base md:text-lg text-sand/85 mt-4 leading-relaxed">
            Ricardo responds to every inquiry within 24 hours and delivers the
            estimate in person.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
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
    </>
  );
}
