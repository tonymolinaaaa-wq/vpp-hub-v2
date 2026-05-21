import Image from "next/image";

/**
 * Recent Work — section 04 of the hub. Sand background.
 * Gallery of completed jobs. v1 ships with the 3 available photos.
 * Before/after sliders and a 6-12 photo grid come as more work is photographed.
 */

const work = [
  {
    photo: "/photos/cabinet-refinishing-kitchen.png",
    alt: "Refinished cream cabinets with a navy island in an East Valley kitchen",
    label: "Cabinet Refinishing",
    location: "East Valley",
  },
  {
    photo: "/photos/interior-sage-living-room.png",
    alt: "Sage green accent wall with warm-toned furniture in a living room",
    label: "Interior Painting",
    location: "East Valley",
  },
  {
    photo: "/photos/hero-az-desert-home.png",
    alt: "Arizona desert home at dusk with stucco exterior",
    label: "Exterior Painting",
    location: "East Valley",
  },
];

export function RecentWork() {
  return (
    <section className="bg-sand text-midnight py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="max-w-3xl">
          <p className="font-body text-xs md:text-sm font-semibold uppercase tracking-[0.16em] text-slate">
            Recent work
          </p>
          <h2 className="font-display font-black uppercase tracking-tight text-4xl md:text-5xl lg:text-6xl text-midnight mt-4 leading-[0.95]">
            What done right
            <br />
            looks like.
          </h2>
          <div className="h-1 w-16 bg-terracotta mt-6" aria-hidden />
          <p className="font-body text-base md:text-lg text-midnight mt-8 leading-relaxed">
            A sample of recent work. Full gallery — including before-and-after
            comparisons — grows as we complete more jobs under the VPP name.
          </p>
        </div>

        <ul className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {work.map((item) => (
            <li key={item.label} className="group">
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-adobe/30">
                <Image
                  src={item.photo}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <p className="font-body text-xs uppercase tracking-[0.12em] text-slate mt-4">
                {item.label} · {item.location}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
