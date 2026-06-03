"use client";

import { useState } from "react";
import { m } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ShowcasePreview } from "@/components/showcase/ShowcasePreview";
import { fade } from "@/components/ui/motion";
import { showcaseModes, type ShowcaseMode } from "@/data/showcaseModes";

export function Showcase() {
  const [mode, setMode] = useState<ShowcaseMode>("Split");
  const active = showcaseModes[mode];

  return (
    <section id="showcase" className="section-shell" aria-labelledby="showcase-heading">
      <SectionTitle
        eyebrow="CINEMATIC CAPTURE"
        title="How do Split Screen, PiP, and Focus recording modes work?"
        text="Record reaction and context together, then shape the frame for the platform."
        id="showcase-heading"
      />
      <div className="mt-16 grid gap-6 lg:grid-cols-[1.2fr_.8fr]">
        <m.div variants={fade} initial="hidden" whileInView="visible" viewport={{ once: true }} className="cinema-card min-h-[580px] p-4 sm:p-6">
          <ShowcasePreview mode={mode} />
        </m.div>
        <div className="grid gap-6">
          <div className="premium-card p-4">
            <div className="showcase-tabs" role="tablist" aria-label="Recording layout modes">
              {(Object.keys(showcaseModes) as ShowcaseMode[]).map((key) => (
                <button
                  key={key}
                  id={`showcase-tab-${key.toLowerCase()}`}
                  type="button"
                  role="tab"
                  aria-selected={mode === key}
                  aria-controls="showcase-panel"
                  tabIndex={mode === key ? 0 : -1}
                  onClick={() => setMode(key)}
                  onKeyDown={(event) => {
                    const keys = Object.keys(showcaseModes) as ShowcaseMode[];
                    const current = keys.indexOf(mode);
                    if (event.key === "ArrowRight") {
                      setMode(keys[(current + 1) % keys.length]);
                    }
                    if (event.key === "ArrowLeft") {
                      setMode(keys[(current - 1 + keys.length) % keys.length]);
                    }
                  }}
                  className={mode === key ? "active" : ""}
                >
                  {showcaseModes[key].label}
                </button>
              ))}
            </div>
          </div>
          <m.article
            id="showcase-panel"
            role="tabpanel"
            aria-labelledby={`showcase-tab-${mode.toLowerCase()}`}
            key={mode}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.32 }}
            className="premium-card p-8"
          >
            <h3 className="text-xl font-semibold text-white">{active.title}</h3>
            <p className="mt-4 leading-7 text-zinc-400">{active.text}</p>
          </m.article>
          <article className="answer-card">
            <h3>What is {mode === "PiP" ? "PiP" : mode === "Split" ? "Split Screen" : "Focus mode"} recording?</h3>
            <p>{active.answer}</p>
          </article>
          {[
            ["How does Lookout keep framing social-ready?", "Shoot for vertical formats creators actually publish every day."],
            ["Why does context matter in creator video?", "Record reactions, reviews, travel, demos, and field notes with both perspectives in one take."],
          ].map(([title, text], i) => (
            <m.article
              key={title}
              variants={fade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="premium-card p-8"
            >
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="mt-4 leading-7 text-zinc-400">{text}</p>
            </m.article>
          ))}
        </div>
      </div>
    </section>
  );
}
