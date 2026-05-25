"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Play,
  Download,
  Camera,
  Sliders,
  Layers,
  ShieldCheck,
} from "lucide-react";

type LayoutMode = "split" | "pip" | "full";

export default function Hero() {
  const [layoutMode, setLayoutMode] = useState<LayoutMode>("split");

  return (
    <section className="relative min-h-screen pt-[90px] md:pt-[90px] pb-82 overflow-hidden bg-gradient-to-b from-[#f6f7ff] via-[#fbfbff] to-[#f5f5f5]">
      <div className="mesh-bg">
        <div className="mesh-blob mesh-blob-blue w-[400px] h-[400px] top-[-100px] left-[-150px] opacity-15 animate-blob-spin"></div>
        <div className="mesh-blob mesh-blob-purple w-[500px] h-[500px] bottom-[-200px] right-[-200px] opacity-15"></div>
        <div className="mesh-blob mesh-blob-pink w-[300px] h-[300px] top-[20%] right-[10%] opacity-10 animate-float-slow"></div>
        <div className="mesh-blob mesh-blob-cyan w-[250px] h-[250px] bottom-[30%] left-[10%] opacity-15 animate-float-medium"></div>
      </div>

      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.012)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none"></div>

      <div className="section-container relative z-10 w-full">
        {/* <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"> */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          {/* Hero Left Content */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-neutral-900 leading-[1.08] mb-6 text-balance"
            >
              Two Cameras.
              <br />
              <span className="bg-clip-text text-transparent bg-linear-to-r from-electric-blue via-cyan-glow to-soft-purple animate-pulse-glow">
                One Vision.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-neutral-500 font-medium max-w-xl leading-relaxed mb-14"
            >
              Capture everything around you with the ultimate dual-camera
              recorder for iPhone. Perfect sync, privacy first, built for
              creators.
            </motion.p>
            <br></br>
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="#download"
                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-neutral-950 text-white font-bold text-sm hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 shadow-sm shadow-neutral-950/10"
              >
                <Download className="w-4 h-4 text-cyan-glow" />
                Download on App Store
              </a>

              <a
                href="#experience"
                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-white/70 hover:bg-white text-neutral-800 font-bold text-sm border border-neutral-200/50 backdrop-blur-md transition-all flex items-center justify-center gap-1.5"
              >
                <Play className="w-3.5 h-3.5 fill-neutral-800 text-neutral-800" />
                Watch Demo
              </a>
            </motion.div>
            <br></br>
            {/* Quick Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-20 flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-3 border-t border-neutral-200/40 pt-8 w-full"
            >
              <div className="flex items-center gap-2 text-xs font-semibold text-neutral-500">
                <ShieldCheck className="w-4 h-4 text-electric-blue" />
                100% Local Processing
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-neutral-500">
                <Camera className="w-4 h-4 text-soft-purple" />
                Simultaneous feeds
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-neutral-500">
                <Layers className="w-4 h-4 text-pink-glow" />
                Dual exports
              </div>
            </motion.div>
          </div>

          {/* Hero Right Visuals - Phone Mockup & Cinematic Dashboard */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left gap-10">
            {/* Subtle Orbit Rings behind Phone */}
            <div className="absolute w-[340px] h-[340px] md:w-[440px] md:h-[440px] rounded-full border border-dashed border-neutral-300/20 animate-spin [animation-duration:80s] pointer-events-none"></div>
            <div className="absolute w-[260px] h-[260px] md:w-[350px] md:h-[350px] rounded-full border border-neutral-300/10 pointer-events-none"></div>

            {/* Glowing Accent Spotlights */}
            <div className="absolute -inset-8 rounded-full bg-radial from-cyan-glow/10 to-transparent blur-3xl pointer-events-none -z-10"></div>

            {/* Floating Premium Dashboard Cards */}
            {/* Card 1: Vitals */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: -15 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute left-[-30px] top-[15%] z-20 hidden xl:block p-4 rounded-2xl glass-panel border-white/60 shadow-xs animate-float-slow"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-electric-blue/10 flex items-center justify-center">
                  <Sliders className="w-4.5 h-4.5 text-electric-blue" />
                </div>
                <div>
                  <div className="text-[9px] uppercase font-bold text-neutral-400 tracking-wider">
                    Bitrate
                  </div>
                  <div className="text-xs font-extrabold text-neutral-800">
                    ProRes 422 HQ
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Status */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute right-[-20px] bottom-[20%] z-20 hidden xl:block p-4 rounded-2xl glass-panel border-white/60 shadow-xs animate-float-medium"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-pink-glow/10 flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-pink-glow animate-ping"></span>
                </div>
                <div>
                  <div className="text-[9px] uppercase font-bold text-neutral-400 tracking-wider">
                    Status
                  </div>
                  <div className="text-xs font-extrabold text-neutral-800">
                    UHD 4K Sync
                  </div>
                </div>
              </div>
            </motion.div>

            {/* iPhone Simulator Frame */}
            <div className="w-[260px] h-[540px] md:w-[285px] md:h-[580px] bg-neutral-900 rounded-[48px] p-2.5 shadow-2xl relative border-4 border-neutral-800/80 flex flex-col overflow-hidden">
              {/* Dynamic Island */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-26 h-5.5 bg-black rounded-full z-30 flex items-center justify-between px-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#111]"></div>
                <div className="w-2 h-2 rounded-full bg-blue-950 flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-blue-400/70"></div>
                </div>
              </div>

              {/* Inner Screen Container */}
              <div className="w-full h-full bg-neutral-950 rounded-[38px] overflow-hidden relative flex flex-col z-10 select-none">
                {/* Camera Feeds Content */}
                <div className="w-full h-full relative flex flex-col overflow-hidden">
                  {/* BACK LENS FEED (Scenic Road/POV) */}
                  <motion.div
                    layout
                    className={`relative overflow-hidden ${
                      layoutMode === "split" ? "h-1/2 w-full" : "h-full w-full"
                    }`}
                  >
                    <div className="absolute inset-0 bg-cover bg-center transition-all bg-[url('https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?auto=format&fit=crop&w=600&q=80')]">
                      <div className="absolute inset-0 bg-black/10"></div>
                    </div>

                    <div className="absolute top-8 left-4 z-20">
                      <span className="px-1.5 py-0.5 rounded-md bg-black/45 text-[8px] text-white/90 font-bold uppercase tracking-wider backdrop-blur-xs">
                        BACK LENS
                      </span>
                    </div>
                  </motion.div>

                  {/* FRONT LENS FEED (Selfie Vlogger) */}
                  <motion.div
                    layout
                    className={`absolute overflow-hidden shadow-2xl transition-all border border-white/10 ${
                      layoutMode === "split"
                        ? "top-1/2 left-0 bottom-0 right-0 w-full h-1/2 z-10"
                        : layoutMode === "pip"
                          ? "bottom-18 right-3.5 w-[85px] h-[120px] rounded-2xl z-20"
                          : "opacity-0 pointer-events-none z-0"
                    }`}
                  >
                    <div className="absolute inset-0 bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80')]">
                      <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent"></div>
                    </div>

                    <div className="absolute top-2 left-2 z-20">
                      <span className="px-1.5 py-0.5 rounded-md bg-pink-glow/60 text-[7px] text-white font-bold uppercase tracking-wider backdrop-blur-xs">
                        FRONT
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* Simulated iOS App HUD overlays */}
                <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-4 z-20 text-white font-sans text-xs">
                  {/* Top HUD Row */}
                  <div className="flex items-center justify-between w-full mt-6">
                    <div className="flex items-center gap-1 bg-black/35 px-2 py-0.75 rounded-full backdrop-blur-xs">
                      <span className="w-1 h-1 rounded-full bg-red-600 animate-pulse"></span>
                      <span className="text-[8px] font-extrabold uppercase tracking-wider">
                        REC 00:02
                      </span>
                    </div>
                    <div className="text-[8px] font-extrabold uppercase tracking-wider bg-black/35 px-2 py-0.75 rounded-full backdrop-blur-xs">
                      4K 60
                    </div>
                  </div>

                  {/* Camera Settings HUD overlays */}
                  <div className="mb-20 flex flex-col gap-2">
                    <div className="flex items-center gap-2 self-start bg-black/40 px-2 py-0.75 rounded-lg backdrop-blur-xs">
                      <div className="w-2 h-1 bg-neutral-300 rounded-xs"></div>
                      <div className="w-2 h-1.5 bg-neutral-300 rounded-xs"></div>
                      <div className="w-2 h-2 bg-electric-blue rounded-xs"></div>
                      <span className="text-[7px] font-bold tracking-wider">
                        AUDIO
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom App Layout Selector Bar (Controls) */}
                <div className="absolute bottom-0 inset-x-0 bg-neutral-950/80 backdrop-blur-lg border-t border-white/[0.06] p-4 flex flex-col gap-3 items-center z-25">
                  <div className="flex items-center justify-center gap-4 w-full">
                    {/* Split Button */}
                    <button
                      onClick={() => setLayoutMode("split")}
                      className={`flex flex-col items-center gap-1 transition-all ${
                        layoutMode === "split"
                          ? "text-cyan-glow scale-105"
                          : "text-neutral-500 hover:text-neutral-300"
                      }`}
                      aria-label="Split layout"
                    >
                      <div className="w-7.5 h-7.5 rounded-lg bg-neutral-850 flex items-center justify-center border border-white/5">
                        <div className="w-4 h-3.5 border border-current flex flex-col justify-between p-[1px]">
                          <div className="h-[35%] bg-current"></div>
                          <div className="h-[35%] bg-current"></div>
                        </div>
                      </div>
                      <span className="text-[8px] font-bold uppercase tracking-wider">
                        Split
                      </span>
                    </button>

                    {/* PiP Button */}
                    <button
                      onClick={() => setLayoutMode("pip")}
                      className={`flex flex-col items-center gap-1 transition-all ${
                        layoutMode === "pip"
                          ? "text-cyan-glow scale-105"
                          : "text-neutral-500 hover:text-neutral-300"
                      }`}
                      aria-label="Picture in Picture layout"
                    >
                      <div className="w-7.5 h-7.5 rounded-lg bg-neutral-850 flex items-center justify-center border border-white/5">
                        <div className="w-4 h-3.5 border border-current relative p-[1px]">
                          <div className="absolute bottom-0.5 right-0.5 w-1.5 h-1.2 bg-current rounded-xs"></div>
                        </div>
                      </div>
                      <span className="text-[8px] font-bold uppercase tracking-wider">
                        PiP
                      </span>
                    </button>

                    {/* Full Button */}
                    <button
                      onClick={() => setLayoutMode("full")}
                      className={`flex flex-col items-center gap-1 transition-all ${
                        layoutMode === "full"
                          ? "text-cyan-glow scale-105"
                          : "text-neutral-500 hover:text-neutral-300"
                      }`}
                      aria-label="Full screen layout"
                    >
                      <div className="w-7.5 h-7.5 rounded-lg bg-neutral-850 flex items-center justify-center border border-white/5">
                        <div className="w-4 h-3.5 border border-current rounded-xs"></div>
                      </div>
                      <span className="text-[8px] font-bold uppercase tracking-wider">
                        Full
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Blurstreaks */}
            <div className="absolute bottom-[-40px] right-[-40px] w-80 h-1 bg-gradient-to-r from-transparent via-cyan-glow/40 to-transparent blur-md -z-10 rotate-12"></div>
            <div className="absolute top-[-20px] left-[-20px] w-80 h-1 bg-gradient-to-r from-transparent via-soft-purple/40 to-transparent blur-md -z-10 -rotate-12"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
