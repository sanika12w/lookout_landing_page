import { Clock3, Compass, Film, MapPinned, Mic2 } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import Image from "next/image";

export function Preview() {
  return (
    <section className="section-shell">
      <SectionTitle
        eyebrow="CONTROL SURFACE"
        title="How does Focus mode keep iPhone recording distraction-free?"
        text="Camera modes, watch control, voice triggers, focus mode, and recording data stay within reach without overwhelming the capture experience."
        id="focus-mode-heading"
      />
      <div className="preview-shell mt-16">
        <div className="preview-inner">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm text-zinc-500">Live Session</p>
              <h3 className="text-2xl font-semibold text-white">Creator Walkthrough</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {["UHD", "Split", "GPS", "Watch"].map((chip) => (
                <span key={chip} className="preview-chip">
                  {chip}
                </span>
              ))}
            </div>
          </div>
          <div className="grid gap-4 lg:grid-cols-[1.2fr_.8fr]">
            <div className="dashboard-stage">
              <div className="dashboard-video relative rounded-2xl overflow-hidden shadow-lg flex items-center justify-center bg-[#07080d]">
                <Image
                  src="/appstore/privacy.webp"
                  alt="Focus Mode Screenshot"
                  fill
                  sizes="(max-width: 1024px) 100vw, 800px"
                  className="object-contain"
                  priority
                />
              </div>
              <div className="timeline" aria-label="Audio timeline visualization">
                {Array.from({ length: 28 }).map((_, i) => (
                  <i key={i} style={{ height: `${20 + ((i * 17) % 48)}px` }} />
                ))}
              </div>
            </div>
            <div className="grid gap-4">
              {[
                [Clock3, "04:27", "Current recording"],
                [Compass, "18 km/h", "Speed overlay"],
                [MapPinned, "37.7749", "Location metadata"],
                [Mic2, "Listening", "Hey Lookout armed"],
              ].map(([Icon, value, label]) => {
                const TypedIcon = Icon as typeof Clock3;
                return (
                  <article key={String(label)} className="data-card">
                    <TypedIcon className="h-5 w-5 text-cyan-200" />
                    <div>
                      <h3>{String(value)}</h3>
                      <span>{String(label)}</span>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
