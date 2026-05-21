/**
 * Why Direct — section 02 of the hub. Sand background.
 * Condensed origin story: 80-100 words pulled from about-story.md.
 * Type-dominant per design-research §06.
 */
export function WhyDirect() {
  return (
    <section className="bg-sand text-midnight py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-8 grid md:grid-cols-12 gap-10 md:gap-16 items-center">
        <div className="md:col-span-7">
          <p className="font-body text-xs md:text-sm font-semibold uppercase tracking-[0.16em] text-slate">
            Our story
          </p>
          <h2 className="font-display font-black uppercase tracking-tight text-4xl md:text-5xl lg:text-6xl text-midnight mt-4 leading-[0.95]">
            The painters
            <br />
            behind the names
          </h2>
          <div className="h-1 w-16 bg-terracotta mt-6" aria-hidden />

          <div className="font-body text-base md:text-lg text-midnight mt-8 leading-relaxed space-y-5 max-w-2xl">
            <p>
              For years we painted under the names of bigger companies. Their
              crew chiefs told us to skip the second coat. To fake the
              power-washing. To finish jobs without checking back in.
            </p>
            <p>
              We did the opposite — and the homeowners noticed. The companies
              started calling us their A-team and putting us on their highest-end
              jobs. They charged premium prices for the work. We were the ones
              doing it. So we put our own name on the contract.
            </p>
            <p className="font-semibold text-midnight">
              Valley Painting Pros is what happens when the people who do the
              work also answer for it.
            </p>
          </div>

          <a
            href="/about"
            className="inline-flex items-center gap-2 mt-8 font-body text-sm font-bold uppercase tracking-[0.08em] text-terracotta hover:text-midnight transition-colors"
          >
            Read the full story →
          </a>
        </div>

        <div className="md:col-span-5">
          <div className="relative aspect-[4/5] rounded-sm overflow-hidden bg-adobe/20">
            {/* Founder photo placeholder — replaced when user uploads */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 text-slate">
              <p className="font-body text-xs uppercase tracking-[0.12em] mb-2">
                Founder photo
              </p>
              <p className="font-body text-sm leading-relaxed max-w-[12rem]">
                Ricardo Parra, on a recent job in the East Valley. Drop a photo
                into <code className="text-xs">public/photos/ricardo.jpg</code>{" "}
                to replace this placeholder.
              </p>
            </div>
            {/* When ready, uncomment:
            <Image
              src="/photos/ricardo.jpg"
              alt="Ricardo Parra, founder of Valley Painting Pros"
              fill
              className="object-cover"
            />
            */}
          </div>
          <p className="font-body text-xs uppercase tracking-[0.12em] text-slate mt-3">
            Ricardo Parra · Owner-operator · East Valley
          </p>
        </div>
      </div>
    </section>
  );
}
