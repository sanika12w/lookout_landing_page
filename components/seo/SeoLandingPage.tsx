import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { AppStoreButton } from "@/components/ui/AppStoreButton";
import type { SeoPage } from "@/data/seoPages";

export function SeoLandingPage({ page }: { page: SeoPage }) {
  return (
    <PageShell>
      <main className="content-page">
        <section className="content-hero" aria-labelledby="content-title">
          <p className="eyebrow">{page.eyebrow}</p>
          <h1 id="content-title" className="content-title">{page.h1}</h1>
          <p className="content-lede">{page.intro}</p>
          <div className="content-actions">
            <AppStoreButton />
            <Link href="/#showcase" className="secondary-button">Explore the demo</Link>
          </div>
        </section>

        <section className="content-grid" aria-label="Answer guide">
          {page.sections.map((section) => (
            <article key={section.heading} className="content-card">
              <h2>{section.heading}</h2>
              {section.body.map((paragraph, index) => (
                <p key={paragraph} className={index === 0 ? "answer-first" : undefined}>
                  {paragraph}
                </p>
              ))}
            </article>
          ))}
        </section>

        <section className="content-panel" aria-labelledby="faq-title">
          <h2 id="faq-title">Common questions</h2>
          <div className="content-faqs">
            {page.faqs.map((faq) => (
              <article key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-panel" aria-labelledby="related-title">
          <h2 id="related-title">Related creator guides</h2>
          <div className="related-links">
            {page.related.map((item) => (
              <Link key={item.href} href={item.href}>{item.label}</Link>
            ))}
          </div>
        </section>
      </main>
    </PageShell>
  );
}
