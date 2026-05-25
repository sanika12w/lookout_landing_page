"use client";

import { motion } from "framer-motion";
import { Smartphone, Watch, Monitor, ArrowRight, Layers } from "lucide-react";

export default function Ecosystem() {
  const devices = [
    {
      id: "iphone",
      icon: Smartphone,
      tag: "Capture Engine",
      name: "iPhone",
      title: "Core capture system.",
      description: "Dual-feed recording with neural sync.",
      specs: [
        "4K ProRes capture",
        "Multi-lens sync",
        "Voice isolation",
        "On-device encryption",
      ],
      iconColor: "text-neutral-400",
      bg: "",
    },
    {
      id: "watch",
      icon: Watch,
      tag: "Wrist Control",
      name: "Apple Watch",
      title: "Control from your wrist.",
      description: "Frame, trigger, and monitor remotely.",
      specs: [
        "Live preview",
        "Start / stop control",
        "Audio monitoring",
        "Haptic alerts",
      ],
      iconColor: "text-neutral-400",
      bg: "",
    },
    {
      id: "mac",
      icon: Monitor,
      tag: "Editing Hub",
      name: "Mac",
      title: "Instant editing workflow.",
      description: "Sync and edit in real time.",
      specs: [
        "AirDrop sync",
        "Continuity Camera",
        "Multi-angle editing",
        "Pro timeline support",
      ],
      iconColor: "text-neutral-400",
      bg: "",
    },
  ];

  return (
    <section
      id="ecosystem"
      className="relative py-20 sm:py-28 overflow-hidden  bg-radial from-[#f6f7ff] via-[#fbfbfb] to-[#f5f5f5]"
    >
      {/* background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-electric-blue/5 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-soft-purple/5 blur-[140px] rounded-full" />
      </div>

      <div className="section-container relative z-10">
        {/* HEADER */}
        <div className="max-w-2xl mb-12 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-extrabold tracking-widest text-neutral-400 uppercase mb-3"
          >
            Ecosystem Integration
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-neutral-900"
          >
            Better together.
          </motion.h2>

          <p className="text-neutral-500 text-sm sm:text-base mt-3">
            Seamless capture across Apple devices.
          </p>
        </div>
        <br />

        {/* CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {devices.map((d, i) => {
            const Icon = d.icon;

            return (
              <motion.div
                key={d.id}
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`
                  relative overflow-hidden
                  rounded-3xl p-6 sm:p-7
                  border border-white/10
                  bg-gradient-to-br ${d.bg}
                  backdrop-blur-xl
                  shadow-sm
                  `}
              >
                {/* hover glow */}
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-electric-blue/[0.03] to-soft-purple/[0.03]" />

                {/* header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                    <Icon className={`w-5 h-5 ${d.iconColor}`} />
                  </div>

                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-neutral-400">
                      {d.tag}
                    </div>
                    <h3 className="font-bold text-neutral-900">{d.name}</h3>
                  </div>
                </div>

                {/* text */}
                <h4 className="font-semibold text-neutral-800 mb-2">
                  {d.title}
                </h4>

                <p className="text-sm text-neutral-500 mb-5">{d.description}</p>

                {/* specs */}
                <ul className="space-y-2">
                  {d.specs.map((s, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + idx * 0.05 }}
                      className="flex items-center gap-2 text-xs text-neutral-600 font-medium"
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${d.iconColor}`}
                      />
                      {s}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* BANNER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.01 }}
          className="
            mt-8 p-6 sm:p-7 rounded-3xl
            bg-white border border-neutral-200
            flex flex-col md:flex-row items-center justify-between gap-5
            shadow-sm
          "
        >
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-blue-500/10 to-purple-500/10 flex items-center justify-center">
              <Layers className="w-5 h-5 text-electric-blue" />
            </div>

            <div>
              <h4 className="font-bold text-neutral-900">
                Unified Sync — Fall 2026
              </h4>
              <p className="text-sm text-neutral-500">
                Seamless device sync across Apple ecosystem.
              </p>
            </div>
          </div>

          <a
            href="#download"
            className="flex items-center gap-1 text-xs font-bold text-electric-blue hover:text-blue-700"
          >
            Learn more
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
