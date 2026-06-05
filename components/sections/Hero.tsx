"use client";

import Link from "next/link";
import { m } from "framer-motion";

export function Hero() {
  return (
    <section className="hero-section relative w-full h-[100vh] min-h-[600px] overflow-hidden" aria-labelledby="home-hero">
      {/* Background Mirror-Flipped Image (moves iPhone to the right) */}
      <img
        src="/images/lookout/hero-background.png"
        alt="Lookout app split-screen dual camera recording creator walking outdoors in golden hour"
        className="hero-bg-image"
      />

      {/* Layer 2: Left-Side Gradient Blur Mask (de-emphasizes creator head, provides text canvas) */}
      <div className="hero-creator-fade" />

      {/* Layer 3: Subtle Global Overlay */}
      <div className="hero-video-overlay" />

      {/* Layer 4: Center-Left Content Block */}
      <div className="hero-content-new">
        <div className="hero-text-col">
          <m.h1
            id="home-hero"
            className="hero-title-new"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            Dual Camera Recording App <br className="hidden md:inline" />
            for iPhone Creators
          </m.h1>
          
          <m.p
            className="hero-copy-new"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            Lookout records front and rear cameras simultaneously for split-screen vlogs, reactions, 
            travel POVs, demos, and social clips, with Apple Watch control built in.
          </m.p>
          
          <m.div
            className="hero-cta-group-new"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href="https://apps.apple.com/in/app/lookout-dual-camera-recorder/id6744577632"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta-btn"
              aria-label="Download Lookout on the App Store (opens in a new tab)"
            >
              Download on App Store
            </Link>
          </m.div>
        </div>
      </div>
    </section>
  );
}
