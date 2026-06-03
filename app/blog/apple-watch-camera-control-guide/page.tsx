import type { Metadata } from "next";
import { BlogArticlePage } from "@/components/seo/BlogArticlePage";
import { JsonLd } from "@/components/seo/JsonLd";
import { blogPosts } from "@/data/blogPosts";
import { articleSchema, breadcrumbSchema, createMetadata, faqPageSchema } from "@/lib/seo";

const post = blogPosts["apple-watch-camera-control-guide"];

export const metadata: Metadata = createMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${post.slug}`,
  keywords: post.keywords,
});

export default function Page() {
  return (
    <>
      <JsonLd data={[articleSchema({ title: post.title, description: post.description, path: `/blog/${post.slug}`, datePublished: post.date }), faqPageSchema(post.faqs), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }, { name: post.title, path: `/blog/${post.slug}` }])]} />
      <BlogArticlePage post={post} />
    </>
  );
}
