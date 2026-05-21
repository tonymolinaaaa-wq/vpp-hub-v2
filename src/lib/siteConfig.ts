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
      name: "$300/Day Finish Promise",
      body: "Every contract carries a written completion deadline. If we miss it, $300/day credit to you until we're done.",
    },
    {
      n: "02",
      name: "HOA Champion Service",
      body: "We handle the entire HOA Architectural Review submittal and approval. Free. One free resubmission included.",
    },
    {
      n: "03",
      name: "Daily Photo Updates",
      body: "Four milestone SMS photos every working day: morning setup, prep complete, paint in progress, clean job site at end of day.",
    },
    {
      n: "04",
      name: "Lifetime Touch-Up Kit",
      body: "At job completion: a sealed kit with one quart of each color used, a brush, and a log of which color went where.",
    },
    {
      n: "05",
      name: "12-Month Wellness Check",
      body: "One year out, we return for a free 30-minute walkthrough. Workmanship issues get touched up free.",
    },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
