/**
 * Centralized marketing site configuration and copy blocks.
 */
export type AnalyticsConfig =
  | { provider: "none" }
  | { provider: "ga4"; ga4MeasurementId: string }
  | { provider: "plausible"; plausibleDomain: string };

export type SpamProtectionConfig = {
  turnstileEnabled: boolean;
  turnstileSiteKey?: string;
  // Turnstile secret key should be stored in server-only environment variables, not in shared config.
};

export type CopyBlocks = {
  heroHeadline: string;
  heroSubheadline: string;
  heroBullets: [string, string, string];
  ctaSectionHeadline: string;
  ctaSectionSubheadline: string;
};

export type ServiceItem = {
  slug: string;
  name: string;
  shortDescription: string;
  longDescriptionParagraphs: [string, string, ...string[]];
  priceRange?: string;
};

export type ProjectCaseStudy = {
  slug: string;
  title: string;
  city?: string;
  problem: string;
  solution: string;
  scopeBullets: string[];
  timelineText: string;
  resultsText: string;
  beforeImage?: string;
  afterImage?: string;
};

export type ServiceAreaCity = {
  city: string;
  headline: string;
  paragraphs: [string, string, ...string[]];
  featuredProjectSlugs: string[];
};

export type EstimateWizardConfig = {
  steps: {
    id: "service" | "project_details" | "property" | "contact";
    title: string;
    fields: {
      name: string;
      label: string;
      type: "text" | "select" | "textarea" | "tel" | "email";
      required?: boolean;
      options?: string[];
    }[];
  }[];
  enablePhotoUpload: boolean;
  maxPhotos: number;
};

export interface SiteConfig {
  baseUrl: string;
  businessName: string;
  tagline: string;

  copy: CopyBlocks;

  phoneDisplay: string;
  phoneDial: string;
  email?: string;

  address: { serviceAreaOnly: true } | { line1: string; line2?: string; city: string; state: string; zip: string };
  hours: { day: string; open: string; close: string; closed?: boolean }[];

  services: ServiceItem[];
  projects: ProjectCaseStudy[];
  serviceAreas: ServiceAreaCity[];

  estimateWizard: EstimateWizardConfig;

  proof: { yearsInBusiness?: string; credentials?: string[]; guarantees?: string[] };
  reviews: { highlightQuotes: { name?: string; text: string }[]; reviewPlatformLinks: { label: string; url: string }[] };
  faqs: { q: string; a: string }[];

  policiesCopy: { cancellation?: string; noShow?: string; deposits?: string; warranties?: string; financing?: string };

  leadRouting: { webhookUrl?: string };
  seo: { siteTitle: string; titleTemplate: string; metaDescription: string; primaryServiceKeywords: string[]; ogImagePath?: string };

  analytics: AnalyticsConfig;
  spamProtection: SpamProtectionConfig;
}

export const siteConfig: SiteConfig = {
  baseUrl: "TODO:INPUT",
  businessName: "Coastal Crafts Remodeling",
  tagline: "Design-forward renovations with clear estimates first.",

  copy: {
    heroHeadline: "Plan your remodel with a crystal-clear estimate",
    heroSubheadline: "We help homeowners understand scope, budget, and timelines before any work begins.",
    heroBullets: [
      "Licensed and insured project teams",
      "Detailed proposals with phased options",
      "Responsive updates from consultation to punch list",
    ],
    ctaSectionHeadline: "Ready for a detailed estimate?",
    ctaSectionSubheadline: "Share your project goals and we will confirm next steps within one business day.",
  },

  phoneDisplay: "(555) 123-4567",
  phoneDial: "+15551234567",
  email: "hello@coastalcrafts.test",

  address: { serviceAreaOnly: true },
  hours: [
    { day: "Monday", open: "08:00", close: "17:00" },
    { day: "Tuesday", open: "08:00", close: "17:00" },
    { day: "Wednesday", open: "08:00", close: "17:00" },
    { day: "Thursday", open: "08:00", close: "17:00" },
    { day: "Friday", open: "08:00", close: "16:00" },
    { day: "Saturday", open: "09:00", close: "12:00" },
    { day: "Sunday", open: "00:00", close: "00:00", closed: true },
  ],

  services: [
    {
      slug: "kitchen-renovations",
      name: "Kitchen Renovations",
      shortDescription: "Custom cabinetry, lighting, and layout updates tailored to how you cook and host.",
      longDescriptionParagraphs: [
        "We modernize kitchens with smart layouts, durable finishes, and lighting plans that make every task easier.",
        "Our team coordinates design selections, permits, and trades so you can focus on the decisions that matter most.",
      ],
      priceRange: "Most projects start at $45k+ depending on scope.",
    },
    {
      slug: "bathroom-remodels",
      name: "Bathroom Remodels",
      shortDescription: "Spa-inspired baths with efficient waterproofing and ventilation details handled for you.",
      longDescriptionParagraphs: [
        "From curbless showers to heated floors, we focus on comfort and longevity in every bath renovation.",
        "You receive clear timelines for demo, rough-in, and finish work so schedules stay predictable.",
      ],
      priceRange: "Typical primary baths range from $25k-$60k depending on finishes.",
    },
    {
      slug: "basement-finishing",
      name: "Basement Finishing",
      shortDescription: "Transform underused space into offices, guest suites, or recreation areas with dry, warm finishes.",
      longDescriptionParagraphs: [
        "We address moisture control, insulation, and egress requirements before design selections begin.",
        "Expect thoughtful lighting, storage, and AV planning so the new space feels integrated with the rest of your home.",
      ],
      priceRange: "Project estimates vary; we provide tiered proposals after inspection.",
    },
  ],

  projects: [
    {
      slug: "seaside-kitchen-refresh",
      title: "Seaside Kitchen Refresh",
      city: "Harborview",
      problem: "A cramped peninsula blocked traffic and limited prep space.",
      solution: "We opened the layout with an island, added task lighting, and installed durable quartz counters.",
      scopeBullets: ["Wall removal with beam", "Custom cabinetry", "Under-cabinet lighting"],
      timelineText: "10 weeks from demo to final walkthrough.",
      resultsText: "TODO:INPUT",
      beforeImage: "/projects/seaside-before.jpg",
      afterImage: "/projects/seaside-after.jpg",
    },
    {
      slug: "spa-bath-conversion",
      title: "Spa Bath Conversion",
      city: "Lakeside",
      problem: "Outdated tub and poor ventilation created humidity issues.",
      solution: "We built a walk-in shower with linear drain and added a quiet exhaust system tied to humidity sensors.",
      scopeBullets: ["Curbless shower", "Large-format tile", "Ventilation upgrade"],
      timelineText: "7 weeks including inspection lead times.",
      resultsText: "Homeowners now have a calm retreat with predictable maintenance.",
      beforeImage: "/projects/spa-before.jpg",
      afterImage: "/projects/spa-after.jpg",
    },
  ],

  serviceAreas: [
    {
      city: "harborview",
      headline: "Remodeling support for Harborview homeowners",
      paragraphs: [
        "We know Harborview properties often balance coastal light with limited storage; our plans address both.",
        "Permitting timelines and HOA approvals in the area shape our scheduling so you get realistic milestones.",
      ],
      featuredProjectSlugs: ["seaside-kitchen-refresh"],
    },
    {
      city: "lakeside",
      headline: "Detailed estimates for Lakeside renovations",
      paragraphs: [
        "Homes near the lake face moisture considerations; we design ventilation and material choices accordingly.",
        "Expect clear coordination with local inspectors and utility partners to keep your project on track.",
      ],
      featuredProjectSlugs: ["spa-bath-conversion"],
    },
  ],

  estimateWizard: {
    steps: [
      {
        id: "service",
        title: "Project type",
        fields: [
          {
            name: "service",
            label: "Which service do you need?",
            type: "select",
            required: true,
            options: ["Kitchen renovation", "Bathroom remodel", "Basement finishing", "Other"],
          },
        ],
      },
      {
        id: "project_details",
        title: "Project details",
        fields: [
          { name: "budget", label: "Target budget (optional)", type: "text" },
          { name: "timeline", label: "Ideal start date", type: "text" },
          { name: "goals", label: "What are your goals?", type: "textarea", required: true },
        ],
      },
      {
        id: "property",
        title: "Property",
        fields: [
          { name: "address", label: "Project address", type: "text", required: true },
          { name: "propertyType", label: "Property type", type: "select", options: ["Single-family", "Condo", "Townhome", "Other"], required: true },
        ],
      },
      {
        id: "contact",
        title: "Contact",
        fields: [
          { name: "name", label: "Full name", type: "text", required: true },
          { name: "email", label: "Email", type: "email", required: true },
          { name: "phone", label: "Phone", type: "tel", required: true },
        ],
      },
    ],
    enablePhotoUpload: true,
    maxPhotos: 5,
  },

  proof: {
    yearsInBusiness: "12+ years designing and delivering residential remodels",
    credentials: ["Licensed General Contractor", "Lead-safe certified", "Insured for residential projects"],
    guarantees: ["Clear change order approvals", "Progress updates every week"],
  },
  reviews: {
    highlightQuotes: [
      { name: "Maya P.", text: "They mapped out every phase so we always knew what was happening next." },
      { name: "Jordan K.", text: "Estimate was transparent and the team stuck to the schedule." },
    ],
    reviewPlatformLinks: [
      { label: "Google", url: "https://example.com/TODO:INPUT" },
      { label: "Houzz", url: "https://example.com/TODO:INPUT" },
    ],
  },
  faqs: [
    { q: "How soon can you start after the estimate?", a: "We typically begin within 4-6 weeks after approvals; timelines vary by scope." },
    { q: "Do you help with permits?", a: "Yes, we prepare drawings and manage permit submissions for remodeling projects." },
    { q: "Can you work with my designer?", a: "Absolutely. We collaborate with outside designers and integrate their plans into our build schedules." },
  ],

  policiesCopy: {
    cancellation: "Please provide 72 hours notice to reschedule consultations.",
    noShow: "Missed onsite appointments may require a new visit fee to cover travel.",
    deposits: "Project deposits are outlined in the proposal and tied to milestone scheduling.",
    warranties: "Workmanship warranty terms are provided with each contract.",
    financing: "Financing options are available on request; TODO:INPUT for provider details.",
  },

  leadRouting: { },
  seo: {
    siteTitle: "Coastal Crafts Remodeling",
    titleTemplate: "%s | Coastal Crafts Remodeling",
    metaDescription: "Remodeling estimates and project planning for kitchens, baths, and basements in your area.",
    primaryServiceKeywords: ["kitchen remodeling", "bathroom renovation", "basement finishing"],
    ogImagePath: "/projects/seaside-after.jpg",
  },

  analytics: { provider: "none" },
  spamProtection: { turnstileEnabled: false, turnstileSiteKey: "TODO:INPUT", turnstileSecretKey: "TODO:INPUT" },
};
