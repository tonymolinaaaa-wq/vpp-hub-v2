/**
 * Site-wide constants. Single source of truth for NAP, license,
 * insurance, services, service area. Imported by every component
 * that needs them. CLAUDE.md §11 — keep this file editable.
 */

export const siteConfig = {
  brand: {
    name: "Valley Painting Pros",
    short: "VPP",
    tagline: "Painting. Done right.",
    region: "East Valley, Arizona",
  },

  contact: {
    phone: "(480) 433-2680",
    phoneRaw: "+14804332680",
    email: "info@valleypaintingpros.com",
    emailOperational: "valleypaintingprosllc@gmail.com",
  },

  hours: {
    weekdays: "Mon–Fri 8am–5pm",
    weekend: "Sat–Sun closed",
  },

  social: {
    facebook: "https://www.facebook.com/valleyprosaz",
    instagram: "https://www.instagram.com/valleyprosaz/",
    googleBusinessProfile: "https://share.google/aJ346E8iYRSr4f2L5",
  },

  credentials: {
    roc: "AZ ROC #363664",
    rocClass: "Class CR-34 Dual (Residential & Commercial Painting)",
    bonded: true,
    insurance: "$1M per occurrence / $2M aggregate general liability via ERGO NEXT",
    bbb: "BBB A+ Accredited",
    googleGuaranteed: true,
    ownerOperator: "Ricardo Parra on every estimate, every contract, every escalation",
  },

  services: [
    {
      slug: "cabinet-refinishing",
      name: "Cabinet Refinishing",
      teaser: "Refinish the 1990s honey-oak or builder-grade cabinets without replacing them.",
    },
    {
      slug: "interior-painting",
      name: "Interior Painting",
      teaser: "Color refresh, accent walls, full interiors — prep done right, two coats, premium paint named on the contract.",
    },
    {
      slug: "exterior-painting",
      name: "Exterior Painting",
      teaser: "HOA-letter exteriors, full repaints, with our HOA Champion Service handling submittals.",
    },
  ],

  serviceArea: [
    { slug: "queen-creek", name: "Queen Creek", priority: true },
    { slug: "chandler", name: "Chandler" },
    { slug: "gilbert", name: "Gilbert" },
    { slug: "mesa", name: "Mesa" },
    { slug: "tempe", name: "Tempe" },
    { slug: "scottsdale", name: "Scottsdale" },
  ],

  promise: [
    {
      n: "01",
      headline: "Late? You get $300 a day. Until we're done.",
      label: "The $300/Day Finish Promise",
      body: "Every VPP contract carries a written completion deadline. If we miss it, $300/day credit to you until the work is finished. The deadline is a not-later-than date — finishing early is the normal outcome.",
    },
    {
      n: "02",
      headline: "Your HOA paperwork? We handle it. Free.",
      label: "The HOA Champion Service",
      body: "We submit the entire architectural-review package on your behalf and shepherd it through approval. One free resubmission if the first proposal is denied. You don't touch a form.",
    },
    {
      n: "03",
      headline: "Four photo updates. Every working day. By text.",
      label: "Daily Photo Updates",
      body: "Morning arrival and setup. Mid-morning prep complete. Afternoon paint in progress. End-of-day stop point and clean site. You'll know what's happening without leaving work.",
    },
    {
      n: "04",
      headline: "Sealed touch-up kit. Labeled wall by wall. For life.",
      label: "The Lifetime Touch-Up Kit",
      body: "At job completion we leave you a quart of each color used, a brush, and a written log of which color went where. Re-order is free as long as you own the home.",
    },
    {
      n: "05",
      headline: "One year later, we come back. Free walkthrough.",
      label: "The 12-Month Wellness Check",
      body: "Exactly twelve months after the job, we return for a 30-minute walkthrough. Any workmanship issues we find — touched up free. The work isn't finished until you're still happy a year later.",
    },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
