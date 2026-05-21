import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";

/**
 * What We Do — section 03 of the hub. Adobe (warm) break per CLAUDE.md §05.
 * Three equal-weight service cards. Cabinet refinishing is the anchor service
 * but all three render at the same visual weight per brand brief §01.
 */

const serviceMeta = {
  "cabinet-refinishing": {
    photo: "/photos/cabinet-refinishing-kitchen.png",
    photoAlt: "Refinished cream and navy kitchen cabinets with brass hardware",
  },
  "interior-painting": {
    photo: "/photos/interior-sage-living-room.png",
    photoAlt: "Sage green accent wall in a warm living room",
  },
  "exterior-painting": {
    photo: null, // placeholder until exterior photo arrives
    photoAlt: "",
  },
} as const;

export function Services() {
  return (
    <section className="bg-adobe/40 text-midnight py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="max-w-3xl">
          <p className="font-body text-xs md:text-sm font-semibold uppercase tracking-[0.16em] text-slate">
            What we do
          </p>
          <h2 className="font-display font-black uppercase tracking-tight text-4xl md:text-5xl lg:text-6xl text-midnight mt-4 leading-[0.95]">
            Three things.
            <br />
            All done right.
          </h2>
          <div className="h-1 w-16 bg-terracotta mt-6" aria-hidden />
          <p className="font-body text-base md:text-lg text-midnight mt-8 leading-relaxed">
            We don&apos;t do remodels. We don&apos;t do drywall. We paint —
            cabinets, interiors, exteriors — and we do all three the same way,
            with the same crew under our own license.
          </p>
        </div>

        <ul className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {siteConfig.services.map((service) => {
            const meta = serviceMeta[service.slug];
            return (
              <li
                key={service.slug}
                className="bg-sand rounded-sm overflow-hidden flex flex-col group"
              >
                <a
                  href={`/services/${service.slug}`}
                  className="flex flex-col h-full"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-adobe/30">
                    {meta.photo ? (
                      <Image
                        src={meta.photo}
                        alt={meta.photoAlt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                        <p className="font-body text-xs uppercase tracking-[0.12em] text-slate/70 max-w-[10rem]">
                          Exterior photo coming soon
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="p-6 md:p-7 flex-1 flex flex-col">
                    <h3 className="font-display font-black uppercase text-xl md:text-2xl text-midnight tracking-tight">
                      {service.name}
                    </h3>
                    <p className="font-body text-sm md:text-base text-slate mt-3 leading-relaxed flex-1">
                      {service.teaser}
                    </p>
                    <span className="font-body text-sm font-bold uppercase tracking-[0.08em] text-terracotta mt-5 inline-flex items-center gap-2">
                      Learn more →
                    </span>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
