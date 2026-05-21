import { Logo } from "./Logo";
import { FacebookIcon, InstagramIcon, StarIcon } from "./icons";
import { siteConfig } from "@/lib/siteConfig";

/**
 * Footer. Midnight background, Sand text. NAP + license + 4 link columns + brand close.
 * Sign-off line at the bottom uses the locked tagline with Terracotta underline.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-midnight text-sand">
      <div className="mx-auto max-w-7xl px-6 md:px-8 pt-16 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-8">
          <div className="col-span-2 md:col-span-2">
            <Logo variant="footer" />
            <p className="font-body text-sm leading-relaxed text-sand/80 mt-6 max-w-xs">
              East Valley, Arizona. Residential repainting and cabinet refinishing,
              direct with the owner. {siteConfig.credentials.ownerOperator}.
            </p>
            <ul className="flex items-center gap-4 mt-6" aria-label="Social media">
              <li>
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Valley Painting Pros on Facebook"
                  className="inline-flex items-center justify-center w-9 h-9 rounded-sm border border-sand/20 text-sand/90 hover:text-terracotta hover:border-terracotta transition-colors"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Valley Painting Pros on Instagram"
                  className="inline-flex items-center justify-center w-9 h-9 rounded-sm border border-sand/20 text-sand/90 hover:text-terracotta hover:border-terracotta transition-colors"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.googleBusinessProfile}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Read our Google reviews"
                  className="inline-flex items-center gap-1.5 px-3 h-9 rounded-sm border border-sand/20 text-sand/90 hover:text-terracotta hover:border-terracotta transition-colors font-body text-xs font-semibold uppercase tracking-[0.08em]"
                >
                  <StarIcon className="w-3.5 h-3.5" />
                  Reviews
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-body text-xs font-semibold uppercase tracking-[0.12em] text-adobe mb-4">
              Contact
            </h3>
            <ul className="space-y-2 font-body text-sm text-sand/90">
              <li>
                <a
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  className="hover:text-terracotta transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-terracotta transition-colors break-all"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="text-sand/70 pt-2">
                {siteConfig.hours.weekdays}
                <br />
                {siteConfig.hours.weekend}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-body text-xs font-semibold uppercase tracking-[0.12em] text-adobe mb-4">
              Services
            </h3>
            <ul className="space-y-2 font-body text-sm text-sand/90">
              {siteConfig.services.map((s) => (
                <li key={s.slug}>
                  <a
                    href={`/services/${s.slug}`}
                    className="hover:text-terracotta transition-colors"
                  >
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-body text-xs font-semibold uppercase tracking-[0.12em] text-adobe mb-4">
              Areas
            </h3>
            <ul className="space-y-2 font-body text-sm text-sand/90">
              {siteConfig.serviceArea.map((c) => (
                <li key={c.slug}>
                  <a
                    href={`/service-areas/${c.slug}`}
                    className="hover:text-terracotta transition-colors"
                  >
                    {c.name}
                    {"priority" in c && c.priority && (
                      <span className="ml-1.5 inline-block w-1.5 h-1.5 rounded-full bg-terracotta align-middle" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-sand/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-display font-black uppercase text-2xl md:text-3xl text-sand">
              {siteConfig.brand.tagline}
            </p>
            <div className="h-0.5 w-12 bg-terracotta mt-2" aria-hidden />
          </div>
          <div className="font-body text-xs uppercase tracking-[0.08em] text-sand/60 md:text-right">
            © {year} {siteConfig.brand.name}
            <br />
            {siteConfig.credentials.roc} · Bonded · Insured
            <br />
            Owner: Ricardo Parra
          </div>
        </div>
      </div>
    </footer>
  );
}
