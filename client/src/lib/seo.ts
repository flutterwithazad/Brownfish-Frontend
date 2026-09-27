export interface PageSeo {
  title: string;
  description: string;
  canonical: string;
  jsonLd?: Record<string, unknown>;
}

const SITE = "https://brownfishtech.com";
const BRAND = "Brown Fish Technologies";

function serviceSchema(path: string, name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${SITE}${path}`,
    areaServed: "Worldwide",
    provider: {
      "@type": "Organization",
      name: BRAND,
      url: `${SITE}/`,
    },
  };
}

export const DEFAULT_SEO: PageSeo = {
  title: "Brown Fish Technologies | Custom Software, Mobile Apps & MVPs",
  description:
    "Brown Fish Technologies builds scalable web apps, Flutter mobile apps and MVPs for startups and enterprises. 12+ years, 200+ projects delivered.",
  canonical: `${SITE}/`,
};

const ROUTES: Record<string, PageSeo> = {
  "/": { ...DEFAULT_SEO },
  "/services": {
    title: "Software Development Services | Web, Mobile, Backend — Brown Fish",
    description:
      "End-to-end software development services: web applications, Flutter mobile apps, backend architecture and MVP builds for startups and enterprises.",
    canonical: `${SITE}/services`,
  },
  "/services/mobile-development": {
    title: "Flutter App Development Company | iOS & Android — Brown Fish",
    description:
      "We build high-performance iOS and Android apps with Flutter. 12+ years shipping mobile products, from MVP to millions of users.",
    canonical: `${SITE}/services/mobile-development`,
    jsonLd: serviceSchema(
      "/services/mobile-development",
      "Flutter Mobile App Development",
      "Cross-platform iOS and Android app development with Flutter, from MVP to scale."
    ),
  },
  "/services/web-applications": {
    title: "Custom Web Application Development Services — Brown Fish",
    description:
      "Scalable web applications built with modern stacks — React, Node.js and cloud-native architecture engineered for growth.",
    canonical: `${SITE}/services/web-applications`,
    jsonLd: serviceSchema(
      "/services/web-applications",
      "Custom Web Application Development",
      "Scalable, mission-critical web applications built with modern stacks and cloud-native architecture."
    ),
  },
  "/services/backend-architecture": {
    title: "Backend Architecture & API Development — Brown Fish",
    description:
      "Mission-critical backend systems and APIs designed for scale: cloud architecture, DevOps and performance engineering.",
    canonical: `${SITE}/services/backend-architecture`,
    jsonLd: serviceSchema(
      "/services/backend-architecture",
      "Backend Architecture & API Development",
      "Mission-critical backend systems, APIs and cloud architecture designed for scale and resilience."
    ),
  },
  "/services/mvp-development": {
    title: "MVP Development Services for Startups — Brown Fish",
    description:
      "Launch your startup MVP in weeks, not months. Rapid prototyping, Flutter apps and web platforms built to validate and scale.",
    canonical: `${SITE}/services/mvp-development`,
    jsonLd: serviceSchema(
      "/services/mvp-development",
      "MVP Development for Startups",
      "Rapid MVP development for startups: prototypes, Flutter apps and web platforms built to validate and scale."
    ),
  },
  "/services/digital-marketing": {
    title: "Digital Marketing Services for Tech Brands — Brown Fish",
    description:
      "SEO, content and growth marketing for software companies and startups. Turn your product into a pipeline.",
    canonical: `${SITE}/services/digital-marketing`,
    jsonLd: serviceSchema(
      "/services/digital-marketing",
      "Digital Marketing Services",
      "SEO, content and growth marketing for software companies and startups."
    ),
  },
  "/projects": {
    title: "Our Work & Portfolio — Brown Fish Technologies",
    description:
      "Explore 200+ projects: Ummah360, UstaHub, Attendio, DispoMail, Bitewise AI and more — mobile apps, platforms and AI products we've shipped.",
    canonical: `${SITE}/projects`,
  },
  "/contact": {
    title: "Contact Us | Free Consultation — Brown Fish Technologies",
    description:
      "Tell us about your project. Get a free consultation and estimate from a team with 12+ years and 200+ projects delivered.",
    canonical: `${SITE}/contact`,
  },
  "/privacy-policy": {
    title: "Privacy Policy — Brown Fish Technologies",
    description: "How Brown Fish Technologies collects, uses and protects your data.",
    canonical: `${SITE}/privacy-policy`,
  },
  "/terms": {
    title: "Terms of Service — Brown Fish Technologies",
    description: "The terms governing use of Brown Fish Technologies' website and services.",
    canonical: `${SITE}/terms`,
  },
  "/portfolio-brochure": {
    title: "Portfolio Brochure — Brown Fish Technologies",
    description:
      "Download the Brown Fish Technologies portfolio brochure: services, case studies and 200+ shipped projects.",
    canonical: `${SITE}/portfolio-brochure`,
  },
};

export function getPageSeo(path: string): PageSeo {
  return ROUTES[path] ?? DEFAULT_SEO;
}
