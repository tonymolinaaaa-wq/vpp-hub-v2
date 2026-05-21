import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";

/**
 * Scaffold home page. Confirms the brand system is wired:
 * — Sand background, Midnight text
 * — Montserrat Black for display
 * — Source Sans 3 for body
 * — Terracotta accent rule under the wordmark
 * — Logo loads from /logos
 *
 * The full 12-section hub gets built in task #4.
 */
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 py-16 bg-sand text-midnight">
      <div className="flex flex-col items-center text-center max-w-2xl">
        <Image
          src="/logos/vpp-icon.svg"
          alt={`${siteConfig.brand.name} icon`}
          width={140}
          height={160}
          priority
        />

        <h1 className="font-display font-black uppercase mt-8 tracking-tight text-5xl md:text-7xl leading-[0.95] text-midnight">
          Valley
          <span className="block text-terracotta">Painting Pros</span>
        </h1>
        <div className="h-1 w-16 bg-terracotta mt-4" aria-hidden />

        <p className="font-body text-sm font-semibold tracking-[0.12em] uppercase text-slate mt-6">
          {siteConfig.brand.region}
        </p>

        <p className="font-body text-lg text-midnight mt-10 leading-relaxed">
          {siteConfig.brand.tagline}
        </p>

        <p className="font-body text-base text-slate mt-6 leading-relaxed">
          Site under construction. The full hub launches soon. In the meantime, call us directly.
        </p>

        <a
          href={`tel:${siteConfig.contact.phoneRaw}`}
          className="inline-block mt-8 px-8 py-4 bg-terracotta text-sand font-body font-bold uppercase tracking-[0.04em] rounded-sm hover:opacity-90 transition-opacity"
        >
          Call {siteConfig.contact.phone}
        </a>

        <p className="font-body text-xs tracking-[0.08em] uppercase text-slate mt-12">
          {siteConfig.credentials.roc} · Bonded · Insured
        </p>
      </div>
    </main>
  );
}
