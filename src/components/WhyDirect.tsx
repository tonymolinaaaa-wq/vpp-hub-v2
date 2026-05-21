/**
 * Why Direct — section 02 of the hub. Sand background.
 * Homepage TEASER for the about story. Full locked story lives at /about
 * (single source of truth: docs/about-story.md).
 *
 * Voice rule: name the fear first; introduce VPP second.
 */
export function WhyDirect() {
  return (
    <section className="bg-sand text-midnight py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 md:px-8">
        <p className="font-body text-xs md:text-sm font-semibold uppercase tracking-[0.16em] text-slate">
          Our story
        </p>
        <h2 className="font-display font-black uppercase tracking-tight text-4xl md:text-5xl lg:text-6xl text-midnight mt-4 leading-[0.95]">
          From the inside.
        </h2>
        <div className="h-1 w-16 bg-terracotta mt-6" aria-hidden />

        <div className="font-body text-base md:text-lg text-midnight mt-10 leading-relaxed space-y-5">
          <p>
            Hiring a painter is harder than it should be. Crews disappear
            after the deposit clears. Jobs drag past the date that was
            promised. Prep gets skipped on the parts you can&apos;t see.
          </p>
          <p>
            We know — because we&apos;ve spent years watching it happen from
            the inside, painting under the names of bigger companies. We
            did the prep when they told us not to. We applied the second
            coat. We talked to the homeowner like the job mattered.
          </p>
          <p className="font-semibold text-midnight">
            So we put our own name on the contract.
          </p>
        </div>

        <a
          href="/about"
          className="inline-flex items-center gap-2 mt-10 font-body text-sm font-bold uppercase tracking-[0.08em] text-terracotta hover:text-midnight transition-colors"
        >
          Read the full story →
        </a>
      </div>
    </section>
  );
}
