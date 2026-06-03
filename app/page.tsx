import { HomePage } from "@/components/sections/HomePage";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqs } from "@/data/faqs";
import {
  breadcrumbSchema,
  faqPageSchema,
  organizationSchema,
  softwareApplicationSchema,
  websiteSchema,
} from "@/lib/seo";

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          softwareApplicationSchema(),
          organizationSchema(),
          websiteSchema(),
          faqPageSchema(faqs),
          breadcrumbSchema([{ name: "Home", path: "/" }]),
        ]}
      />
      <HomePage />
    </>
  );
}
