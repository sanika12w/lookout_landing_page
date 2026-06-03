import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { faqs } from "@/data/faqs";

export function FAQ() {
  return (
    <section id="faq" className="section-shell" aria-labelledby="faq-heading">
      <SectionTitle
        eyebrow="DUAL CAMERA FAQ"
        title="Dual camera recording app questions for iPhone creators"
        text="Helpful answers for dual camera recording, split-screen video, PiP capture, Apple Watch control, and iPhone vlog recording workflows."
        id="faq-heading"
      />
      <div className="mx-auto mt-14 max-w-3xl space-y-3">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="faq-item group"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-semibold text-white">
              {faq.question}
              <ChevronDown className="h-5 w-5 text-zinc-500 transition group-open:rotate-180" />
            </summary>
            <p className="mt-4 leading-7 text-zinc-400">{faq.answer}</p>
          </details>
        ))}
      </div>
      <div className="mx-auto mt-8 flex max-w-3xl flex-wrap gap-4 text-sm">
        <Link className="text-link" href="/dual-camera-recording-app">Dual camera recording guide</Link>
        <Link className="text-link" href="/split-screen-video-recorder">Split screen video recorder guide</Link>
        <Link className="text-link" href="/blog/how-to-record-front-and-back-camera-on-iphone">How to record both cameras</Link>
      </div>
    </section>
  );
}
