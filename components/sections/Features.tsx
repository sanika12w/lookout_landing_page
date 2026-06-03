import { Layers3, MapPinned, Mic2, ShieldCheck, Smartphone, Watch } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { features } from "@/data/features";

const icons = {
  layers: Layers3,
  smartphone: Smartphone,
  mic: Mic2,
  watch: Watch,
  map: MapPinned,
  shield: ShieldCheck,
};

export function Features() {
  return (
    <section id="features" className="section-shell">
      <SectionTitle
        eyebrow="IPHONE-NATIVE POWER"
        title="What iPhone dual camera recording features does Lookout include?"
        text="Lookout brings multi-camera capture, remote control, and contextual recording into a polished mobile workflow across iPhone, Apple Watch, and Mac."
        id="features-heading"
      />
      <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => {
          const Icon = icons[feature.icon];
          return (
            <article
              key={feature.title}
              className="premium-card group p-7"
            >
              <div className="feature-icon">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-4 leading-7 text-zinc-400">{feature.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
