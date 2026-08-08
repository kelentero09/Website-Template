// =============================================================================
// BUSINESS CONFIGURATION
// =============================================================================
// This single file controls every piece of client-facing content on the site.
// To hand this template to a client, only edit the values below and replace
// the images in `public/images/`. No component code needs to change.
//
// Icon names reference Lucide React icons:
// https://lucide.dev/icons
// (e.g. "Briefcase", "Store", "ShieldCheck", "Award", "Phone", ...)
// =============================================================================

export const business = {
  name: "Northstar Trading & Services",
  legalName: "Northstar Trading & Services",
  shortName: "Northstar",
  tagline: "Quality Service. Trusted by Our Community.",
  description:
    "A dependable local business providing quality products and professional services for homes, businesses, and communities across the region.",

  // --- Website & SEO ---------------------------------------------------------
  siteUrl: "https://<your-github-username>.github.io/Website-Template/",
  seo: {
    title: "Northstar Trading & Services | Quality Products & Services",
    description:
      "Northstar Trading & Services provides reliable products and professional services trusted by the local community. Get in touch today.",
    keywords:
      "trading, services, products, Davao, local business, professional services",
  },

  // --- Theme colors ----------------------------------------------------------
  // Change these two values to rebrand the whole site. The colors are applied
  // as CSS variables, so every Tailwind color utility updates automatically.
  // Construction -> dark blue/orange | Restaurant -> warm red | Salon -> purple
  // Dental -> teal | Real estate -> navy + gold | Hardware -> blue + orange
  theme: {
    primary: "#1F4E79", // deep professional blue
    primaryDark: "#173A59", // darker shade for hover states
    accent: "#E8922E", // warm amber accent
    accentSoft: "#FBF0E3", // pale accent used for subtle highlights
    primarySoft: "#EFF4F9", // pale primary used for subtle section tints
    ink: "#1A2230", // near-black body text
    inkSoft: "#5A6577", // muted secondary text
  },

  // --- Social links -------------------------------------------------------------
  social: {
    facebook: "#",
    instagram: "#",
    tiktok: "#",
    youtube: "#",
  },

  // --- Navigation ------------------------------------------------------------------
  nav: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Why Us", href: "#why-us" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ],

  // --- Hero -------------------------------------------------------------------------
  hero: {
    badge: "Proudly serving our local community since 2014",
    title: "Quality Products & Services You Can Trust",
    description:
      "Professional service, quality products, and customer-focused solutions for your everyday needs.",
    primaryButton: "Get in Touch",
    secondaryButton: "Explore Our Services",
    image: "/images/hero.jpg",
    imageAlt:
      "The Northstar team at work, delivering quality products and reliable service",
  },

  // --- Trust / Stats -----------------------------------------------------------------
  stats: [
    { value: "10+", label: "Years of Experience" },
    { value: "1,000+", label: "Happy Customers Served" },
    { value: "100%", label: "Customer-Focused Commitment" },
  ],

  // --- About --------------------------------------------------------------------------
  about: {
    eyebrow: "About Us",
    heading: "Built Around Quality and Trust",
    paragraphs: [
      "Northstar Trading & Services began with a simple goal: to give our community dependable products and honest, professional service. More than a decade later, we're still here — growing with the people we serve and earning their trust one job at a time.",
      "From everyday essentials to specialized projects, we treat every order and every service call with the same care and attention. No shortcuts, no surprises — just work done right the first time.",
      "When you work with us, you're not just getting a product or a service. You're getting a team that stands behind what we do.",
    ],
    ctaLabel: "Learn More About Us",
    ctaHref: "#services",
    image: "/images/about.jpg",
    imageAlt:
      "A member of the Northstar team at work, demonstrating quality and care",
    floatingStat: {
      value: "10+",
      label: "Years of Trusted Service",
    },
  },

  // --- Services --------------------------------------------------------------------------
  servicesIntro: {
    eyebrow: "What We Offer",
    heading: "Practical Solutions for Everyday Needs",
    description:
      "Practical solutions and dependable service designed to meet your needs.",
  },
  services: [
    {
      title: "Products & Supply",
      description:
        "Quality products and materials sourced from reliable partners, always delivered as promised.",
      icon: "Boxes",
    },
    {
      title: "Professional Services",
      description:
        "Skilled, experienced hands for installations, repairs, and general work done right.",
      icon: "Briefcase",
    },
    {
      title: "Repairs & Maintenance",
      description:
        "Keep things running smoothly with responsive, dependable upkeep and quick fixes.",
      icon: "Wrench",
    },
    {
      title: "Delivery & Logistics",
      description:
        "Fast, careful delivery so your orders arrive on time — and in perfect condition.",
      icon: "Truck",
    },
    {
      title: "Consultation & Advice",
      description:
        "Honest guidance from people who know their craft, so you can choose with confidence.",
      icon: "MessagesSquare",
    },
    {
      title: "Reliable Support",
      description:
        "Friendly, dependable support before, during, and long after your purchase.",
      icon: "Headphones",
    },
  ],

  // --- Why Choose Us -------------------------------------------------------------------------
  whyIntro: {
    eyebrow: "Why Choose Us",
    heading: "The Difference Is in the Details",
    description:
      "We keep things simple: do the job right, treat people with respect, and stand behind our work.",
  },
  whyUs: [
    {
      title: "Quality You Can Trust",
      description:
        "We source carefully and inspect everything ourselves so what reaches you is built to last.",
      icon: "BadgeCheck",
    },
    {
      title: "Experienced Team",
      description:
        "Years of hands-on experience across products, projects, and services you can rely on.",
      icon: "Users",
    },
    {
      title: "Customer-Focused Service",
      description:
        "Every decision starts with your needs. We listen first, recommend honestly, and deliver.",
      icon: "HeartHandshake",
    },
    {
      title: "Reliable & On Time",
      description:
        "We do what we say, when we say. No long waits, no excuses — just dependable service.",
      icon: "Clock",
    },
  ],

  // --- Gallery ------------------------------------------------------------------------------------
  galleryIntro: {
    eyebrow: "Gallery",
    heading: "A Look at Our Work",
    description:
      "From store displays to completed projects, here's a glimpse of the quality we deliver every day.",
  },
  gallery: [
    { image: "/images/gallery-1.jpg", title: "Store & Sales Area", alt: "A neatly organized store and sales area" },
    { image: "/images/gallery-2.jpg", title: "Stock & Inventory", alt: "Well-stocked, organized inventory ready for delivery" },
    { image: "/images/gallery-3.jpg", title: "Team at Work", alt: "The Northstar team working together on a project" },
    { image: "/images/gallery-4.jpg", title: "Completed Project", alt: "A finished project delivered to a happy customer" },
    { image: "/images/gallery-5.jpg", title: "Products We Carry", alt: "A selection of quality products we offer" },
    { image: "/images/gallery-6.jpg", title: "Service in Action", alt: "A team member providing hands-on service" },
  ],

  // --- Testimonials ------------------------------------------------------------------------------
  testimonials: [
    {
      quote:
        "Professional, responsive, and easy to work with. They delivered exactly what they promised — highly recommended.",
      name: "Maria Dela Cruz",
      role: "Local Business Owner",
      initials: "MD",
    },
    {
      quote:
        "Fair prices and honest advice. They took the time to explain our options instead of just pushing a sale.",
      name: "Jose Ramirez",
      role: "Regular Customer",
      initials: "JR",
    },
    {
      quote:
        "Fast, reliable service and great follow-through. You can tell they genuinely care about getting it right.",
      name: "Faith Reyes",
      role: "Homeowner",
      initials: "FR",
    },
  ],

  // --- CTA banner -----------------------------------------------------------------------------------
  cta: {
    heading: "Ready to Work With Us?",
    description: "Let's talk about how we can help you — products, projects, or services.",
    primaryLabel: "Contact Us",
    primaryHref: "#contact",
    secondaryLabel: "Call Now",
    secondaryHref: "tel:+639000000000",
  },

  // --- Contact ---------------------------------------------------------------------------------------
  contact: {
    eyebrow: "Contact Us",
    heading: "Let's Talk About Your Needs",
    description:
      "Reach out for inquiries, estimates, or appointments. We'd love to help.",
    address: "123 Mendoza St., Davao City, Philippines",
    phone: "+63 900 000 0000",
    phoneHref: "+639000000000",
    email: "hello@northstartrading.com",
    hours: [
      { days: "Monday – Saturday", time: "8:00 AM – 6:00 PM" },
      { days: "Sunday", time: "By Appointment" },
    ],
    // Form handling options:
    //   1. Leave empty to show a clear "demo" success message only.
    //   2. Use a FormSubmit-friendly endpoint by setting the action URL.
    form: {
      // e.g. "https://formspree.io/f/YOUR_FORM_ID" or "" for demo mode
      endpoint: "",
    },
  },

  // --- Google Maps (optional) -------------------------------------------------------------------------
  // Set enabled to true and provide an embed URL to show a map.
  map: {
    enabled: true,
    // Get an embed URL from https://maps.google.com -> Share -> Embed a map
    url: "https://www.google.com/maps?q=City%20Mall%20Davao%20City&output=embed",
    title: "Northstar Trading & Services location on Google Maps",
  },

  // --- Footer --------------------------------------------------------------------------------------------
  footer: {
    description:
      "Your trusted local partner for quality products and dependable professional services.",
    rights: "All rights reserved.",
    creditsLabel: "Built by your name", // Optional; set to "" to remove
  },
};

export type Business = typeof business;
export default business;