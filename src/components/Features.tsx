"use client";

import React, { useState, MouseEvent } from "react";
import { motion, Variants } from "framer-motion";
import { Camera, Watch, Mic, ShieldCheck, Cpu, WifiOff } from "lucide-react";

interface BentoCardProps {
  className?: string;
  title: string;
  eyebrow?: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  children?: React.ReactNode;
}

function BentoCard({
  className = "",
  title,
  eyebrow,
  description,
  icon: Icon,
  gradient,
  children,
}: BentoCardProps) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -6, scale: 1.012 }}
      transition={{ type: "spring", stiffness: 180, damping: 18 }}
      className={`relative overflow-hidden rounded-3xl border border-neutral-200/70 bg-white/80 backdrop-blur-xl p-6 md:p-8 flex flex-col gap-4 justify-between shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_80px_rgba(0,112,243,0.08)] transition-all duration-500 ${gradient} ${className}`}
    >
      {/* Ambient Hover Glow */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-[0.6] pointer-events-none`}
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(
            450px circle at ${coords.x}px ${coords.y}px,
            rgba(0,112,243,0.08),
            rgba(121,40,202,0.04) 40%,
            transparent 80%
          )`,
        }}
      />

      {/* Border Glow */}
      <div
        className="absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-500 border border-electric-blue/20"
        style={{
          opacity: isHovered ? 1 : 0,
        }}
      />

      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay bg-[url('/noise.png')]" />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div
            className={`inline-flex items-center justify-center p-2.5 rounded-2xl bg-gradient-to-tr ${gradient} text-white shadow-lg`}
          >
            <Icon className="w-5 h-5" />
          </div>

          {eyebrow && (
            <span className="text-[10px] font-black text-neutral-500 uppercase tracking-[0.2em] bg-neutral-100 px-2 py-[3px] rounded-md border border-neutral-200">
              {eyebrow}
            </span>
          )}
        </div>

        {/* Text */}
        <h3 className="text-[1.35rem] font-black tracking-tight text-neutral-900 mb-2">
          {title}
        </h3>

        <p className="text-neutral-500 text-sm leading-relaxed font-medium ">
          {description}
        </p>
      </div>

      {/* Visual */}
      {children && (
        <div className="mt-4 flex items-center justify-center">{children}</div>
      )}
    </motion.div>
  );
}

export default function Features() {
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="features"
      className="section-container overflow-hidden bg-[#fbfbfb] "
    >
      <br></br>
      {/* Ambient Mesh */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[8%] w-[500px] h-[500px] rounded-full bg-electric-blue/10 blur-[140px]" />
        <div className="absolute bottom-[10%] right-[5%] w-[450px] h-[450px] rounded-full bg-soft-purple/10 blur-[140px]" />
        <div className="absolute top-[40%] left-[45%] w-[300px] h-[300px] rounded-full bg-pink-glow/5 blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-electric-blue/5 border border-electric-blue/10 text-electric-blue text-[11px] font-black uppercase tracking-[0.25em] mb-5 mx-auto"
          >
            Capabilities
          </motion.div>
          <br />
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-[-0.05em] text-neutral-900 leading-[0.95] mb-6 text-center"
          >
            Powerful simplicity.
            <br />
            Built for creators.
          </motion.h2>
          <br />
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-neutral-500 font-semibold leading-relaxed max-w-2xl mx-auto text-center"
          >
            Capture both sides of the story with a cinematic dual-camera
            workflow designed for creators, journalists, and everyday moments.
          </motion.p>
        </div>
        <br />
        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 lg:grid-cols-12 auto-rows-
            [200px] lg:auto-rows-[240px] gap-6"
        >
          {/* HERO CARD */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-8 lg:row-span-2"
          >
            <BentoCard
              className="h-full"
              title="Dual Camera Capture"
              eyebrow="Primary Feature"
              icon={Camera}
              gradient="from-blue-400 to-cyan-300"
              description="Capture synchronized front and rear camera feeds simultaneously with Apple-grade performance and buttery smooth encoding."
            >
              <div className="relative w-full h-[230px] lg:h-[300px] rounded-3xl overflow-hidden border border-white/10 bg-neutral-950 p-3 flex gap-3 shadow-inner">
                {/* Left Camera */}
                <div
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=900&q=80')",
                  }}
                  className="relative flex-1 rounded-2xl overflow-hidden bg-cover bg-center"
                >
                  <div className="absolute inset-0 bg-black/20" />

                  <div className="absolute top-3 left-3 px-2 py-1 rounded-lg bg-black/50 backdrop-blur-sm text-[10px] font-bold tracking-widest text-white">
                    BACK WIDE 1X
                  </div>

                  <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-black/50 px-2 py-1 rounded-full text-[9px] text-white font-bold">
                    <span className="w-2 h-2 rounded-full bg-cyan-glow animate-pulse" />
                    ACTIVE
                  </div>
                </div>

                {/* Right Camera */}
                <div
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80')",
                  }}
                  className="relative flex-1 rounded-2xl overflow-hidden bg-cover bg-center"
                >
                  <div className="absolute inset-0 bg-black/20" />

                  <div className="absolute top-3 left-3 px-2 py-1 rounded-lg bg-black/50 backdrop-blur-sm text-[10px] font-bold tracking-widest text-white">
                    FRONT HD
                  </div>

                  <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-black/50 px-2 py-1 rounded-full text-[9px] text-white font-bold">
                    <span className="w-2 h-2 rounded-full bg-pink-glow animate-pulse" />
                    ACTIVE
                  </div>
                </div>

                {/* Center HUD */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/70 backdrop-blur-xl border border-white/10 rounded-full px-4 py-2 flex items-center gap-2 shadow-2xl">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />

                  <span className="text-[10px] font-black tracking-[0.25em] text-white uppercase">
                    UHD 60 FPS
                  </span>
                </div>
              </div>
            </BentoCard>
          </motion.div>

          {/* Watch */}
          <motion.div variants={itemVariants} className="lg:col-span-4">
            <BentoCard
              title="Apple Watch Remote"
              eyebrow="Remote Control"
              icon={Watch}
              gradient="from-pink-glow to-brand-orange"
              description="Monitor framing, trigger recording, and preview shots from your wrist."
              className="h-full"
            >
              <div className="relative w-28 h-32 rounded-[2rem] bg-neutral-950 border-4 border-neutral-800 shadow-[0_20px_50px_rgba(0,0,0,0.35)] p-2">
                <div className="absolute -right-1 top-10 w-1.5 h-8 bg-neutral-700 rounded-full" />

                <div className="w-full h-full rounded-[1.5rem] bg-black border border-white/5 overflow-hidden p-2 flex flex-col gap-4">
                  <div className="text-[8px] text-neutral-500 font-bold tracking-wider text-center">
                    LIVE PREVIEW
                  </div>

                  <div
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=300&q=80')",
                    }}
                    className="h-12 rounded-xl bg-cover bg-center border border-white/10 relative overflow-hidden"
                  >
                    <span className="absolute bottom-1 left-1 w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  </div>

                  <div className="bg-red-600 rounded-lg text-center py-1 text-[8px] font-black uppercase tracking-widest text-white">
                    Stop Rec
                  </div>
                </div>
              </div>
            </BentoCard>
          </motion.div>

          {/* Smart Focus */}
          <motion.div variants={itemVariants} className="lg:col-span-4">
            <BentoCard
              title="Smart Focus Mode"
              eyebrow="Neural Engine"
              icon={Cpu}
              gradient="from-soft-purple to-pink-glow"
              description="AI-powered subject tracking intelligently adjusts exposure and focus in real time."
              className="h-full"
            >
              <div
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80')",
                }}
                className="relative w-36 h-24 rounded-2xl overflow-hidden bg-cover bg-center border border-white/10"
              >
                <div className="absolute inset-0 bg-black/20" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute w-14 h-14 rounded-full border border-cyan-glow animate-spin [animation-duration:10s]" />

                  <div className="w-3 h-3 rounded-full bg-cyan-glow shadow-[0_0_20px_#00f2fe]" />
                </div>

                <div className="absolute bottom-2 left-2 px-2 py-1 rounded-lg bg-black/50 backdrop-blur-sm text-[8px] font-bold uppercase tracking-widest text-white">
                  Face Locked
                </div>
              </div>
            </BentoCard>
          </motion.div>

          {/* Privacy */}
          <motion.div variants={itemVariants} className="lg:col-span-4">
            <BentoCard
              title="Privacy First"
              eyebrow="Zero Cloud"
              icon={ShieldCheck}
              gradient="from-electric-blue to-soft-purple"
              description="Everything stays on-device. No accounts, telemetry, or background tracking."
              className="h-full"
            >
              <div className="relative">
                <div className="absolute inset-0 blur-2xl bg-electric-blue/20 rounded-full" />

                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-tr from-electric-blue/10 to-soft-purple/10 border border-electric-blue/20 flex items-center justify-center">
                  <ShieldCheck className="w-8 h-8 text-electric-blue" />
                </div>
              </div>
            </BentoCard>
          </motion.div>

          {/* Voice */}
          <motion.div variants={itemVariants} className="lg:col-span-4">
            <BentoCard
              title="Voice Control"
              eyebrow="Hands-Free"
              icon={Mic}
              gradient="from-cyan-glow to-soft-purple"
              description="Start recording, switch layouts, and flag moments entirely hands-free."
              className="h-full"
            >
              <div className="flex items-center gap-3 bg-neutral-950 text-white px-4 py-3 rounded-2xl border border-white/5">
                <Mic className="w-4 h-4 text-cyan-glow" />

                <div className="flex items-end gap-[3px] h-5">
                  <div className="w-[3px] h-2 rounded-full bg-cyan-glow animate-bounce" />
                  <div className="w-[3px] h-5 rounded-full bg-cyan-glow animate-bounce [animation-delay:100ms]" />
                  <div className="w-[3px] h-3 rounded-full bg-cyan-glow animate-bounce [animation-delay:200ms]" />
                  <div className="w-[3px] h-4 rounded-full bg-cyan-glow animate-bounce [animation-delay:300ms]" />
                </div>

                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-300">
                  Hey Lookout
                </span>
              </div>
            </BentoCard>
          </motion.div>

          {/* Offline */}
          <motion.div variants={itemVariants} className="lg:col-span-4">
            <BentoCard
              title="Offline Recording"
              eyebrow="No Internet"
              icon={WifiOff}
              gradient="from-pink-glow to-brand-orange"
              description="Record high-fidelity footage completely offline in remote locations."
              className="h-full"
            >
              <div className="relative">
                <div className="absolute inset-0 blur-2xl bg-pink-glow/20 rounded-full" />

                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-tr from-pink-glow/10 to-brand-orange/10 border border-pink-glow/20 flex items-center justify-center">
                  <WifiOff className="w-7 h-7 text-pink-glow" />
                </div>
              </div>
            </BentoCard>
          </motion.div>
        </motion.div>
        <br />
        <br />
      </div>
      {/* </div> */}
    </section>
  );
}
