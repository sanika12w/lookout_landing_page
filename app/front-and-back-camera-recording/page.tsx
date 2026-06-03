import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { SeoLandingPage } from "@/components/seo/SeoLandingPage";
import { seoPages } from "@/data/seoPages";
import { breadcrumbSchema, createMetadata, faqPageSchema, softwareApplicationSchema } from "@/lib/seo";

const page = seoPages["front-and-back-camera-recording"];

export const metadata: Metadata = createMetadata({
  title: page.title,
  description: page.description,
  path: `/${page.slug}`,
  keywords: page.keywords,
});

export default function Page() {
  return (
    <>
      <JsonLd data={[softwareApplicationSchema(), faqPageSchema(page.faqs), breadcrumbSchema([{ name: "Home", path: "/" }, { name: page.eyebrow, path: `/${page.slug}` }])]} />
      <SeoLandingPage page={page} />
    </>
  );
}
