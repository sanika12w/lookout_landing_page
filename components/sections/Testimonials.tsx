import { SectionTitle } from "@/components/ui/SectionTitle";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="section-shell">
      <SectionTitle
        eyebrow="SOCIAL PROOF"
        title="Who uses Lookout for dual camera creator videos?"
        text="Solo creators, founders, vloggers, and mobile storytellers who need front and back camera recording in one polished workflow."
        id="creator-use-cases-heading"
      />
      <div className="mt-16 grid gap-5 lg:grid-cols-3">
        {testimonials.map((item) => (
          <article
            key={item.name}
            className="premium-card p-8"
          >
            <p className="text-lg leading-8 text-zinc-200">&quot;{item.quote}&quot;</p>
            <div className="mt-8 flex items-center gap-3">
              <span className="avatar">{item.name[0]}</span>
              <div>
                <h3 className="block text-base font-bold text-white">{item.name}</h3>
                <span className="text-sm text-zinc-500">{item.role}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
