"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Check, X, Lock, AlertTriangle } from "lucide-react";

export default function Privacy() {
  const lookoutPoints = [
    { title: "Local Sandbox", desc: "Runs fully on-device. No cloud processing." },
    { title: "Direct Storage", desc: "Saved straight to Photos. No uploads." },
    { title: "No Tracking", desc: "No analytics, cookies, or telemetry." },
  ];

  const standardPoints = [
    { title: "Cloud Uploads", desc: "Data processed on external servers." },
    { title: "Account Required", desc: "Login needed to access features." },
    { title: "User Tracking", desc: "Behavior and usage is monitored." },
  ];

  return (
    <section
      id="privacy"
      className="py-20 sm:py-28 relative bg-[#050508] text-white overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[450px] h-[450px] rounded-full bg-soft-purple/10 blur-[120px]" />
        <div className="absolute bottom-[-15%] right-[-10%] w-[450px] h-[450px] rounded-full bg-pink-glow/10 blur-[120px]" />
      </div>

      <div className="section-container relative z-10 w-full ">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="w-12 h-12 mx-auto rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center mb-4">
            <ShieldCheck className="w-5 h-5 text-cyan-glow" />
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-black tracking-tight"
          >
            Privacy First.
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-glow to-pink-glow">
              {" "}No Cloud.
            </span>
          </motion.h2>

          <p className="text-sm text-neutral-400 mt-3">
            Everything runs locally. Nothing leaves your device.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-neutral-900/40 border border-cyan-glow/20 p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Lock className="text-cyan-glow w-5 h-5" />
              <h3 className="font-bold text-white">Lookout</h3>
            </div>

            <ul className="space-y-5">
              {lookoutPoints.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <Check className="w-4 h-4 text-cyan-glow mt-1" />
                  <div>
                    <p className="font-semibold text-sm">{item.title}</p>
                    <p className="text-xs text-neutral-400">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-neutral-950/40 border border-white/10 p-6 sm:p-8 opacity-80"
          >
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="text-neutral-500 w-5 h-5" />
              <h3 className="font-bold text-neutral-400">
                Standard Apps
              </h3>
            </div>

            <ul className="space-y-5">
              {standardPoints.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <X className="w-4 h-4 text-neutral-500 mt-1" />
                  <div>
                    <p className="font-semibold text-sm text-neutral-300">
                      {item.title}
                    </p>
                    <p className="text-xs text-neutral-500">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}