import { Laptop, Smartphone, Watch } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { platforms } from "@/data/platforms";

const icons = {
  phone: Smartphone,
  watch: Watch,
  laptop: Laptop,
};

export function Platforms() {
  return (
    <section id="platforms" className="section-shell">
      <SectionTitle
        eyebrow="APPLE ECOSYSTEM"
        title="Does Lookout work across iPhone, Apple Watch, and Mac workflows?"
        text="Lookout works across iPhone, Apple Watch, and macOS-compatible creator workflows so recording stays connected across the Apple ecosystem."
        id="platforms-heading"
      />
      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {platforms.map((platform) => {
          const Icon = icons[platform.icon];
          return (
            <article
              key={platform.title}
              className="platform-card"
            >
              <div className="platform-icon">
                <Icon className="h-6 w-6" />
              </div>
              <h3>{platform.title}</h3>
              <p>{platform.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
