import { siteConfig } from "@/lib/siteConfig";

/**
 * Where We Work — section 08 of the hub. Sand background.
 * Six East Valley cities, each linking to a dedicated service-area page.
 * Queen Creek is marked as priority per brand brief §06.
 * Interactive map deferred to v2 (would need Mapbox/Google Maps API).
 */
export function ServiceAreas() {
  return (
    <section className="bg-sand text-midnight py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="max-w-3xl">
          <p className="font-body text-xs md:text-sm font-semibold uppercase tracking-[0.16em] text-slate">
            Where we work
          </p>
          <h2 className="font-display font-black uppercase tracking-tight text-4xl md:text-5xl lg:text-6xl text-midnight mt-4 leading-[0.95]">
            Six East Valley
            <br />
            cities.
          </h2>
          <div className="h-1 w-16 bg-terracotta mt-6" aria-hidden />
          <p className="font-body text-base md:text-lg text-midnight mt-8 leading-relaxed">
            Owner-operator service, same crew every job, across the East
            Valley. Queen Creek is our priority territory — minimal
            competitor coverage and the repaint cycles are hitting now.
          </p>
        </div>

        <ul className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-slate/15 border border-slate/15 rounded-sm overflow-hidden">
          {siteConfig.serviceArea.map((city) => {
            const isPriority = "priority" in city && city.priority;
            return (
              <li key={city.slug} className="bg-sand">
                <a
                  href={`/service-areas/${city.slug}`}
                  className="block p-6 md:p-7 h-full hover:bg-adobe/30 transition-colors"
                >
                  <div className="flex items-start gap-2">
                    <h3 className="font-display font-black uppercase text-lg md:text-xl text-midnight tracking-tight leading-tight">
                      {city.name}
                    </h3>
                    {isPriority && (
                      <span className="inline-block w-2 h-2 rounded-full bg-terracotta mt-2.5 shrink-0" aria-hidden />
                    )}
                  </div>
                  <p className="font-body text-xs uppercase tracking-[0.08em] text-slate mt-3">
                    {isPriority ? "Priority area" : "Active"}
                  </p>
                </a>
              </li>
            );
          })}
        </ul>

        <p className="font-body text-sm text-slate mt-8 max-w-2xl">
          Outside these six cities? Call us anyway — if the job is the right
          fit, we&apos;ll come look at it.
        </p>
      </div>
    </section>
  );
}
