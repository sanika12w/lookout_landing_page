import type { Metadata } from "next";

export const APP_STORE_URL = "https://apps.apple.com/in/app/lookout-dual-camera-recorder/id6744577632";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://lookout.kidastudios.com";
export const APP_NAME = "Lookout";
export const APP_LOGO = "/lookout-logo.png";
export const OG_IMAGE = "/og-image.jpg";
export const DEFAULT_LAST_MODIFIED = "2026-06-01";

export const seoKeywords = [
  "dual camera recording app",
  "iPhone dual camera app",
  "front and back camera recording",
  "split screen video recorder",
  "PiP recording app",
  "vlog recording app iPhone",
  "creator recording app",
  "simultaneous camera recording",
  "Apple Watch camera control",
  "dual video recording iPhone",
  "camera app for content creators",
  "best dual camera app for iPhone",
];

export type FaqItem = {
  question: string;
  answer: string;
};

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) {
    return path;
  }

  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function createMetadata({
  title,
  description,
  path = "/",
  keywords = [],
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
}): Metadata {
  const url = absoluteUrl(path);
  const socialTitle = title.includes(APP_NAME) ? title : `${title} | ${APP_NAME}`;

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    keywords: [...seoKeywords, ...keywords],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: socialTitle,
      description,
      url,
      siteName: APP_NAME,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          alt: "Lookout dual camera recorder for iPhone creators",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [OG_IMAGE],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: APP_NAME,
    url: absoluteUrl("/"),
    inLanguage: "en",
    publisher: {
      "@id": absoluteUrl("/#organization"),
    },
  };
}

export function softwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": absoluteUrl("/#software-application"),
    name: APP_NAME,
    applicationCategory: "MultimediaApplication",
    applicationSubCategory: "Dual camera recording app",
    operatingSystem: "iOS",
    description:
      "Lookout is a dual camera recording app for iPhone creators with front and back camera recording, split-screen video, PiP capture, Apple Watch control, and privacy-focused on-device workflows.",
    image: absoluteUrl(APP_LOGO),
    url: absoluteUrl("/"),
    downloadUrl: APP_STORE_URL,
    installUrl: APP_STORE_URL,
    sameAs: [APP_STORE_URL],
    publisher: {
      "@type": "Organization",
      "@id": absoluteUrl("/#organization"),
      name: "KIDA STUDIOS",
      url: "https://www.kidastudios.com",
    },
    creator: {
      "@type": "Organization",
      "@id": absoluteUrl("/#organization"),
      name: "KIDA STUDIOS",
      url: "https://www.kidastudios.com",
    },
    featureList: [
      "Front and back camera recording",
      "Split-screen video recording",
      "PiP recording",
      "Focus mode",
      "Apple Watch camera control",
    ],
    offers: {
      "@type": "Offer",
      url: APP_STORE_URL,
      availability: "https://schema.org/InStock",
    },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": absoluteUrl("/#organization"),
    name: "KIDA STUDIOS",
    url: "https://www.kidastudios.com",
    logo: absoluteUrl(APP_LOGO),
    sameAs: [APP_STORE_URL],
  };
}

export function faqPageSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function articleSchema({
  title,
  description,
  path,
  datePublished,
}: {
  title: string;
  description: string;
  path: string;
  datePublished?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: absoluteUrl(OG_IMAGE),
    datePublished,
    dateModified: DEFAULT_LAST_MODIFIED,
    author: {
      "@type": "Organization",
      name: "KIDA STUDIOS",
    },
    publisher: {
      "@type": "Organization",
      name: "KIDA STUDIOS",
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(APP_LOGO),
      },
    },
    mainEntityOfPage: absoluteUrl(path),
  };
}
