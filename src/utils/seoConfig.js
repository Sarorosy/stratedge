// SEO configuration for all pages
const BASE_URL = "https://stratedge.com";
const OG_IMAGE = `${BASE_URL}/og-image.png`;

export const seoConfig = {
  home: {
    title: "Stratedge - Strategic Digital Marketing & Growth Solutions",
    description: "Stratedge - Expert digital marketing, strategy consulting, and business growth solutions. Transform your business with strategic marketing.",
    keywords: "digital marketing, strategy, growth, consulting, business transformation, marketing agency",
    canonical: `${BASE_URL}/`,
    ogImage: OG_IMAGE,
  },
  about: {
    title: "About Us - Stratedge | Strategic Marketing Experts",
    description: "Learn about Stratedge's mission, vision, and expertise in delivering strategic digital marketing solutions. Meet our team of experts.",
    keywords: "about us, team, expertise, mission, digital marketing agency",
    canonical: `${BASE_URL}/about`,
    ogImage: OG_IMAGE,
  },
  services: {
    title: "Our Services - Stratedge | Strategic Digital Marketing",
    description: "Explore our comprehensive digital marketing services including SEO, social media marketing, content strategy, branding, and more.",
    keywords: "digital marketing services, SEO, content marketing, social media, branding, marketing strategy",
    canonical: `${BASE_URL}/services`,
    ogImage: OG_IMAGE,
  },
  course: {
    title: "Marketing Courses - Stratedge | Learn Digital Marketing",
    description: "Enroll in our comprehensive digital marketing courses. Learn from industry experts and master modern marketing strategies.",
    keywords: "digital marketing courses, online learning, marketing education, professional development",
    canonical: `${BASE_URL}/course`,
    ogImage: OG_IMAGE,
  },
  contact: {
    title: "Contact Us - Stratedge | Get in Touch",
    description: "Get in touch with Stratedge. Contact our team for digital marketing solutions, consultations, and inquiries.",
    keywords: "contact us, inquiry, consultation, support, marketing help",
    canonical: `${BASE_URL}/contact-us`,
    ogImage: OG_IMAGE,
  },
  privacy: {
    title: "Privacy Policy - Stratedge",
    description: "Read Stratedge's privacy policy to understand how we collect and use your data.",
    keywords: "privacy policy, data protection, cookies",
    canonical: `${BASE_URL}/privacy-policy`,
    ogImage: OG_IMAGE,
  },
  terms: {
    title: "Terms & Conditions - Stratedge",
    description: "Read Stratedge's terms and conditions. Legal policies governing the use of our website and services.",
    keywords: "terms and conditions, legal, privacy policy",
    canonical: `${BASE_URL}/terms`,
    ogImage: OG_IMAGE,
  },
};

export const getPageSEO = (pageName) => {
  return (
    seoConfig[pageName] || {
      title: "Stratedge - Strategic Digital Marketing & Growth Solutions",
      description: "Stratedge - Your partner in strategic digital marketing and business growth.",
      keywords: "digital marketing, strategy, growth",
      ogImage: OG_IMAGE,
    }
  );
};
