import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { JsonLd } from "@/components/seo/JsonLd";
import { blogIndex } from "@/data/blogPosts";
import { breadcrumbSchema, createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Dual Camera Recording Guides for iPhone Creators",
  description:
    "Creator guides for dual camera recording, front and back camera capture, PiP recording, split-screen video, and Apple Watch camera control.",
  path: "/blog",
  keywords: ["dual camera recording guides", "iPhone creator recording blog"],
});

export default function BlogPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }])} />
      <PageShell>
        <main className="content-page">
          <section className="content-hero">
            <p className="eyebrow">LOOKOUT BLOG</p>
            <h1 className="content-title">How can creators record better dual-camera video on iPhone?</h1>
            <p className="content-lede">
              Practical, answer-first guides for iPhone creators using front and back camera recording, split-screen
              video, PiP recording, and Apple Watch camera control.
            </p>
          </section>
          <section className="blog-grid" aria-label="Blog articles">
            {blogIndex.map((post) => (
              <article key={post.slug} className="content-card">
                <p className="content-meta">
                  <time dateTime={post.date}>{post.date}</time>
                  <span>{post.readingTime}</span>
                </p>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                <Link href={`/blog/${post.slug}`} className="text-link">Read guide</Link>
              </article>
            ))}
          </section>
        </main>
      </PageShell>
    </>
  );
}
