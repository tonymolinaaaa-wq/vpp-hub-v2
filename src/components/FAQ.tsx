/**
 * Questions — section 09 of the hub. Adobe warm-break per CLAUDE.md §05.
 * Six accordion items using semantic <details>/<summary> so it works
 * without JavaScript (CLAUDE.md §09 — accessibility floor).
 */

const faqs = [
  {
    q: "Do you really do interior and exterior, or just cabinets?",
    a: "All three. Cabinet refinishing is our strongest service — highest margin, most technical — but interior and exterior painting are equal disciplines under the same crew and the same license. Gereimy, our field operations partner, has mastered all three personally.",
  },
  {
    q: "How long does cabinet refinishing take?",
    a: "Most kitchens take 5 to 8 working days, depending on door count, hardware, and whether we spray off-site or brush on-site. We give you a specific deadline on the contract, and if we miss it, you get $300/day credit until we finish.",
  },
  {
    q: "What's your warranty?",
    a: "Five-year written warranty on workmanship. The 12-Month Wellness Check is built into every contract — exactly one year after job completion we come back for a free 30-minute walkthrough, and any workmanship issues get touched up free. After year one, the warranty still covers paint failure attributable to our prep or application.",
  },
  {
    q: "How is your pricing different?",
    a: "Our quotes are itemized — prep is a real line item, not a vague mention. Three paint-grade tiers (good/better/best) are spelled out with manufacturer and product line named on the contract. The price is locked for 60 days. No bait-and-switch on paint brand, no surprise change orders for drywall repair, no inflated final invoice.",
  },
  {
    q: "How soon can you start?",
    a: "We respond to every inquiry within 24 hours and Ricardo personally walks the job before leaving with the estimate. Once you sign, start dates are typically 2 to 4 weeks out depending on the season and the job. For HOA exteriors, we initiate the architectural-review submittal the day you sign so paperwork runs in parallel with the queue.",
  },
  {
    q: "What's your service area?",
    a: "Queen Creek, Chandler, Gilbert, Mesa, Tempe, and Scottsdale — the East Valley. Queen Creek is our priority area. If your home is outside these six cities, call us anyway and we'll tell you honestly whether the job fits.",
  },
];

export function FAQ() {
  return (
    <section className="bg-adobe/40 text-midnight py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6 md:px-8">
        <div>
          <p className="font-body text-xs md:text-sm font-semibold uppercase tracking-[0.16em] text-slate">
            Questions, answered
          </p>
          <h2 className="font-display font-black uppercase tracking-tight text-4xl md:text-5xl lg:text-6xl text-midnight mt-4 leading-[0.95]">
            Before you call.
          </h2>
          <div className="h-1 w-16 bg-terracotta mt-6" aria-hidden />
        </div>

        <ul className="mt-12 space-y-3">
          {faqs.map((faq) => (
            <li key={faq.q}>
              <details className="group bg-sand rounded-sm overflow-hidden">
                <summary className="flex items-start justify-between gap-4 p-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <h3 className="font-display font-black uppercase text-base md:text-lg text-midnight tracking-tight leading-tight">
                    {faq.q}
                  </h3>
                  <span
                    className="font-display font-black text-terracotta text-2xl leading-none transition-transform group-open:rotate-45 shrink-0"
                    aria-hidden
                  >
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="font-body text-base text-slate leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
