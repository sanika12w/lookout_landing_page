import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { AppStoreButton } from "@/components/ui/AppStoreButton";
import type { BlogPost } from "@/data/blogPosts";

export function BlogArticlePage({ post }: { post: BlogPost }) {
  return (
    <PageShell>
      <main className="content-page">
        <article>
          <header className="content-hero">
            <p className="eyebrow">LOOKOUT GUIDE</p>
            <h1 className="content-title">{post.title}</h1>
            <p className="content-lede">{post.intro}</p>
            <div className="content-meta">
              <time dateTime={post.date}>{post.date}</time>
              <span>{post.readingTime}</span>
            </div>
          </header>

          <div className="content-grid">
            {post.sections.map((section) => (
              <section key={section.heading} className="content-card">
                <h2>{section.heading}</h2>
                {section.body.map((paragraph, index) => (
                  <p key={paragraph} className={index === 0 ? "answer-first" : undefined}>
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
          </div>
        </article>

        <section className="content-panel" aria-labelledby="article-faq-title">
          <h2 id="article-faq-title">Quick answers</h2>
          <div className="content-faqs">
            {post.faqs.map((faq) => (
              <article key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-panel">
          <h2>Keep exploring</h2>
          <div className="related-links">
            {post.related.map((item) => (
              <Link key={item.href} href={item.href}>{item.label}</Link>
            ))}
          </div>
        </section>

        <section className="content-cta">
          <div>
            <p className="eyebrow">DOWNLOAD LOOKOUT</p>
            <h2>Record both sides of your next creator clip.</h2>
            <p>Use Lookout for front and back camera recording, split-screen video, PiP capture, and Apple Watch camera control.</p>
          </div>
          <AppStoreButton variant="dark" />
        </section>
      </main>
    </PageShell>
  );
}
