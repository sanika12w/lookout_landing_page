"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { Camera, CirclePlay, Sparkles, Watch } from "lucide-react";
import { AppStoreButton } from "@/components/ui/AppStoreButton";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { fade } from "@/components/ui/motion";

export function Hero() {
  return (
    <section className="hero-section relative flex w-full flex-col items-center justify-center px-5" aria-labelledby="home-hero">
      <div className="aurora aurora-a" />
      <div className="aurora aurora-b" />
      <div className="light-streaks" />
      <div className="particles">
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`particle particle-${i}`} />
        ))}
      </div>
      <div className="grid-noise" />
      <div className="hero-grid mx-auto grid w-full max-w-7xl items-center">
        <div className="hero-content relative z-10">
          <m.div variants={fade} initial="hidden" animate="visible">
            <div className="hero-badge">
              <Sparkles className="h-4 w-4 text-cyan-200" />
              Dual camera recorder for the Apple ecosystem
            </div>
            <h1 id="home-hero" className="hero-title">Dual Camera Recording App for iPhone Creators</h1>
            <p className="hero-copy">
              Lookout records front and rear cameras simultaneously for split-screen vlogs, reactions,
              travel POVs, demos, and social clips, with Apple Watch control built in.
            </p>
            <div className="hero-cta-group mt-8 flex flex-row items-center gap-3 w-full max-w-[420px]">
              <AppStoreButton />
              <Link href="/#showcase" className="secondary-button flex-1">
                <CirclePlay className="h-5 w-5" />
                Watch Demo
              </Link>
            </div>
          </m.div>
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.45 }}
            className="hero-stats mt-10 grid max-w-xl grid-cols-3 gap-2"
          >
            {["iPhone", "Apple Watch", "macOS"].map((item) => (
              <div key={item} className="stat-card">
                <span>{item}</span>
              </div>
            ))}
          </m.div>
        </div>
        <div className="hero-phone-stage relative w-full">
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />
          <m.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="hero-phone-wrap relative flex w-full items-center justify-center"
          >
            <PhoneMockup hero />
          </m.div>
          <m.div className="floating-panel left-0 top-[15%]" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
            <Camera className="h-5 w-5 text-cyan-200" />
            <span>Front + Rear</span>
          </m.div>
          <m.div className="floating-panel bottom-[15%] right-0" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}>
            <Watch className="h-5 w-5 text-fuchsia-200" />
            <span>Watch Remote</span>
          </m.div>
        </div>
      </div>
    </section>
  );
}
