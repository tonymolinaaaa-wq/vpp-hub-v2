/**
 * How It Works — section 06 of the hub. Sand background.
 * 3-step process per brand brief §07. Numbered steps with descriptions.
 * De-risks first-time buyers.
 */

const steps = [
  {
    n: "01",
    name: "Inquiry & in-home estimate",
    body:
      "Within 24 hours of any call, text, or form, Ricardo personally responds and schedules an in-home walk. He arrives, captures the job in PaintScout, photographs problem areas, and delivers the estimate in person before leaving. No remote quotes.",
  },
  {
    n: "02",
    name: "Written quote with locked start date",
    body:
      "Within an hour of the walk: a written quote with three paint-grade tiers, itemized prep as a real line item, paint products named on the contract, a contracted start date, the completion deadline, and the $300/day late credit. Held at the locked price for 60 days.",
  },
  {
    n: "03",
    name: "Work, communication, completion",
    body:
      "The crew arrives 30 minutes early on the contracted start date. You get four milestone SMS photos every working day. Work finishes by the deadline or the credit kicks in. Final walkthrough, lifetime touch-up kit delivered, 12-month wellness check booked before we leave.",
  },
];

export function Process() {
  return (
    <section className="bg-sand text-midnight py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="max-w-3xl">
          <p className="font-body text-xs md:text-sm font-semibold uppercase tracking-[0.16em] text-slate">
            How it works
          </p>
          <h2 className="font-display font-black uppercase tracking-tight text-4xl md:text-5xl lg:text-6xl text-midnight mt-4 leading-[0.95]">
            From call to crew.
            <br />
            Three steps.
          </h2>
          <div className="h-1 w-16 bg-terracotta mt-6" aria-hidden />
          <p className="font-body text-base md:text-lg text-midnight mt-8 leading-relaxed">
            No mystery, no waiting on a callback, no surprise pricing.
            Here&apos;s the entire path from first contact to finished job.
          </p>
        </div>

        <ol className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {steps.map((step) => (
            <li key={step.n} className="border-t border-slate/20 pt-6">
              <span className="font-display font-black text-terracotta text-5xl md:text-6xl leading-none">
                {step.n}
              </span>
              <h3 className="font-display font-black uppercase text-xl md:text-2xl text-midnight tracking-tight mt-5 leading-tight">
                {step.name}
              </h3>
              <p className="font-body text-base text-slate mt-4 leading-relaxed">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
