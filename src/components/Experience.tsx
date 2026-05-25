"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sliders, Activity, Disc, Volume2 } from "lucide-react";

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yCenter = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const yLeft = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const yRight = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const yBottom = useTransform(scrollYProgress, [0, 1], [120, -60]);
  const opacityFade = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.6, 1, 1, 0.6],
  );

  return (
    <section
      ref={containerRef}
      id="experience"
      className="relative min-h-[100vh] mt-32 pt-40 pb-32 sm:pt-48 sm:pb-40  bg-gradient-to-b from-[#0a0a0c] via-[#0d0d0f] to-[#fbfbfb] text-white overflow-hidden"
    >
      <br />
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-soft-purple/20 blur-[150px]"></div>
        <div className="absolute bottom-[30%] right-[-10%] w-[600px] h-[600px] rounded-full bg-electric-blue/15 blur-[160px]"></div>
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

      {/* <div className="section-container relative z-10 w-full"> */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        {/* <div className="text-center max-w-2xl mx-auto mb-20"> */}
        <div className="text-center w-full max-w-2xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-extrabold tracking-widest text-cyan-glow uppercase mb-3"
          >
            Tactile Control
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black tracking-tight leading-none mb-5"
          >
            The Tactile Viewfinder
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base text-neutral-400 font-medium leading-relaxed"
          >
            Interactive overlays, customizable dashboards, and real-time
            settings give you complete creative control inside the recording
            viewport.
          </motion.p>
        </div>

        {/* 3D Parallax Display */}
        <div className="relative w-full h-[650px] flex items-center justify-center">
          {/* Center Phone Mockup */}
          <motion.div
            style={{ y: yCenter, opacity: opacityFade }}
            className="w-[300px] h-[550px] rounded-[48px] bg-neutral-950 border border-white/10 shadow-2xl p-2 relative flex flex-col z-20"
          >
            <div className="w-full h-full rounded-[40px] overflow-hidden bg-neutral-900 relative flex flex-col justify-between p-4 border border-white/5">
              <div className="absolute inset-0 bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80')]">
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-black/40"></div>
                <div className="absolute inset-0 border-x border-white/10 flex justify-between pointer-events-none">
                  <div className="w-1/3 h-full border-r border-white/10"></div>
                  <div className="w-1/3 h-full border-r border-white/10"></div>
                </div>
                <div className="absolute inset-0 border-y border-white/10 flex flex-col justify-between pointer-events-none">
                  <div className="w-full h-1/3 border-b border-white/10"></div>
                  <div className="w-full h-1/3 border-b border-white/10"></div>
                </div>
              </div>

              <div className="relative z-10 flex items-center justify-between w-full">
                <div className="flex items-center gap-1.5 bg-red-600/80 px-2 py-0.5 rounded-md text-[8px] font-bold tracking-wider">
                  <Disc className="w-3 h-3 text-white animate-spin" />
                  REC 00:12:04
                </div>
                <div className="text-[8px] font-bold bg-white/10 px-2 py-0.5 rounded-md">
                  HDR 10-BIT
                </div>
              </div>

              <div className="relative z-10 w-24 h-32 rounded-xl border border-white/20 self-end overflow-hidden shadow-xl bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80')]">
                <div className="absolute inset-0 bg-black/15"></div>
              </div>

              <div className="relative z-10 w-full flex flex-col gap-3 mt-4">
                <div className="flex justify-between items-center text-[9px] font-bold text-white/80">
                  <span>EXPOSURE</span>
                  <span>-0.3 EV</span>
                </div>
                <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                  <div className="w-2/5 h-full bg-cyan-glow"></div>
                </div>
                <div className="flex items-center justify-between text-[9px] font-bold text-white/80 pt-1">
                  <span>ZOOM</span>
                  <div className="flex gap-2">
                    <span className="text-cyan-glow">1x</span>
                    <span className="opacity-50">2.5x</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Left: Focus Card */}
          <motion.div
            style={{ y: yLeft, opacity: opacityFade }}
            className="absolute left-[5%] md:left-[15%] top-[10%] w-[210px] p-5 rounded-2xl glass-panel-dark shadow-2xl z-30 flex flex-col gap-4 animate-float-medium"
          >
            <div className="flex items-center gap-2">
              <Sliders className="w-4 h-4 text-cyan-glow" />
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-300">
                Tactile Focus
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-[10px] font-medium text-neutral-400">
                <span>ISO Sensitivity</span>
                <span className="text-white font-semibold">125</span>
              </div>
              <div className="w-full h-1 bg-white/10 rounded-full relative">
                <div className="absolute top-1/2 left-[30%] -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-glow"></div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-[10px] font-medium text-neutral-400">
                <span>Lens Focus</span>
                <span className="text-white font-semibold">Manual</span>
              </div>
              <div className="flex items-center justify-between gap-1 text-[9px] font-semibold text-neutral-500">
                <span>0.1m</span>
                <span className="text-cyan-glow">Macro</span>
                <span>Infinity</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Pipeline Card */}
          <motion.div
            style={{ y: yRight, opacity: opacityFade }}
            className="absolute right-[5%] md:right-[15%] top-[25%] w-[220px] p-5 rounded-2xl glass-panel-dark shadow-2xl z-30 flex flex-col gap-4 animate-float-slow"
          >
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-soft-purple" />
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-300">
                Video Pipeline
              </span>
            </div>
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center justify-between text-xs font-bold text-neutral-300">
                <span>Format</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-soft-purple/20 text-soft-purple border border-soft-purple/10">
                  ProRes
                </span>
              </div>
              <div className="flex items-center justify-between text-xs font-bold text-neutral-300">
                <span>Bit depth</span>
                <span className="text-neutral-400 font-medium">10-bit YUV</span>
              </div>
              <div className="flex items-center justify-between text-xs font-bold text-neutral-300">
                <span>Encoding</span>
                <span className="text-neutral-400 font-medium">
                  Hardware accel.
                </span>
              </div>
            </div>
          </motion.div>

          {/* Bottom: Audio Monitor */}
          <motion.div
            style={{ y: yBottom, opacity: opacityFade }}
            className="absolute bottom-[5%] w-[320px] md:w-[440px] p-4 rounded-2xl glass-panel-dark shadow-2xl z-30 flex items-center justify-between gap-4 border-l-2 border-l-cyan-glow"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-glow/10 flex items-center justify-center">
                <Volume2 className="w-4 h-4 text-cyan-glow" />
              </div>
              <div>
                <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">
                  Audio Monitor
                </div>
                <div className="text-xs font-extrabold text-neutral-200">
                  Isolation Mode · Stereo
                </div>
              </div>
            </div>
            <div className="flex items-end gap-[3px] h-6 flex-1 justify-end">
              <div className="w-[3px] h-2 bg-cyan-glow/40 rounded-full"></div>
              <div className="w-[3px] h-4 bg-cyan-glow/60 rounded-full animate-pulse"></div>
              <div className="w-[3px] h-6 bg-cyan-glow rounded-full"></div>
              <div className="w-[3px] h-3 bg-cyan-glow/80 rounded-full"></div>
              <div className="w-[3px] h-5 bg-cyan-glow rounded-full"></div>
              <div className="w-[3px] h-1 bg-cyan-glow/30 rounded-full"></div>
              <div className="w-[3px] h-4 bg-cyan-glow/60 rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
