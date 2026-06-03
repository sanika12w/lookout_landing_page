import Link from "next/link";
import { Sparkles } from "lucide-react";

export function WhyCreators() {
  return (
    <section className="section-shell">
      <div className="creator-panel">
        <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="eyebrow text-left">WHY CREATORS USE IT</p>
            <h2 className="section-title text-left">Why record the selfie and rear camera together?</h2>
            <p className="section-copy mx-0 text-left">
              Lookout helps creators capture reaction and context in one take. Learn more about{" "}
              <Link href="/front-and-back-camera-recording" className="text-link">
                front and back camera recording
              </Link>
              .
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Record reactions and action together.",
              "Keep your face in the story without a second device.",
              "Capture evidence-grade context with maps and speed.",
              "Control recording when your iPhone is mounted.",
            ].map((item) => (
              <article
                key={item}
                className="reason-card"
              >
                <Sparkles className="h-5 w-5 text-cyan-200" />
                <h3>{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
