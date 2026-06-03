import Link from "next/link";
import { AppStoreButton } from "@/components/ui/AppStoreButton";

export function CTA() {
  return (
    <section className="px-5 py-20">
      <div className="cta-panel">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_20%,rgba(34,211,238,.35),transparent_28%),radial-gradient(circle_at_80%_70%,rgba(217,70,239,.25),transparent_30%)]" />
        <div className="relative grid items-center gap-10 p-8 sm:p-12 lg:grid-cols-[1fr_.7fr] lg:p-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-[.16em] text-zinc-500">Download Lookout</p>
            <h2 className="mt-5 max-w-3xl text-5xl font-semibold leading-[.95] tracking-normal sm:text-6xl">
              Turn your iPhone into a dual-camera studio.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
              Capture selfie and rear-camera footage together for cinematic, social-ready creator stories.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              <Link href="/iphone-vlog-recording-app" className="cta-link">Vlog recording workflow</Link>
              <Link href="/front-and-back-camera-recording" className="cta-link">Front and back camera guide</Link>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4 lg:items-end">
            <AppStoreButton variant="dark" />
            <p className="text-sm text-zinc-500">Available across the Apple ecosystem according to the App Store listing.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
