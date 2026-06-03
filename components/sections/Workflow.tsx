import Image from "next/image";
import { workflow } from "@/data/workflow";

export function Workflow() {
  return (
    <section id="workflow" className="section-shell">
      <div className="grid items-center gap-14 lg:grid-cols-[.85fr_1.15fr]">
        <div>
          <p className="eyebrow text-left">CREATOR FLOW</p>
          <h2 className="section-title text-left">How can creators record front and back cameras simultaneously?</h2>
          <p className="section-copy mx-0 text-left">
            Lookout lets creators record the front and rear cameras together, choose Split, PiP, or Focus, and publish a richer clip from one take.
          </p>
          <article className="answer-card mt-8">
            <h3>How do I record front and back cameras on iPhone?</h3>
            <p>Open Lookout, choose a dual camera layout, frame the front and rear cameras, then record both perspectives in one synced take.</p>
          </article>
          <div className="mt-10 grid gap-4">
            {workflow.map((step, i) => (
              <article
                key={step.title}
                className="workflow-step"
              >
                <span>{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="recording-flow-visual">
          <Image
            src="/appstore/dual-camera.webp"
            alt="Dual camera recording workflow with iPhone and Apple Watch control"
            fill
            sizes="(max-width: 1024px) 92vw, 720px"
            className="recording-flow-image object-contain"
          />
          <div className="flow-glass-card flow-card-phone">
            <span>Split</span>
            <b>Front + rear armed</b>
          </div>
          <div className="flow-glass-card flow-card-watch">
            <span>Watch</span>
            <b>Remote REC ready</b>
          </div>
        </div>
      </div>
    </section>
  );
}
