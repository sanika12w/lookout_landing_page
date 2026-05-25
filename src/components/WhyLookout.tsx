"use client";

import { motion } from "framer-motion";
import { Sparkles, Shield, Compass, CheckCircle } from "lucide-react";

export default function WhyLookout() {
  const pillars = [
    {
      title: "Creators",
      tagline: "One unified capture.",
      description: "Sync front + back feeds in real time.",
      icon: Sparkles,
      color: "text-electric-blue",
      bg: "from-electric-blue/10 via-cyan-glow/5 to-transparent",
      points: [
        "Dual camera sync",
        "Pro workflows",
        "Watch preview",
      ],
    },
    {
      title: "Safety",
      tagline: "Always private.",
      description: "Everything stays on-device.",
      icon: Shield,
      color: "text-soft-purple",
      bg: "from-soft-purple/10 via-pink-glow/5 to-transparent",
      points: [
        "Sandbox storage",
        "No cloud uploads",
        "Encrypted files",
      ],
    },
    {
      title: "Moments",
      tagline: "Instant capture.",
      description: "Open and record instantly.",
      icon: Compass,
      color: "text-brand-orange",
      bg: "from-pink-glow/10 via-brand-orange/5 to-transparent",
      points: [
        "Zero setup",
        "Voice trigger",
        "Lightweight capture",
      ],
    },
  ];

  return (
    <section
      id="why-lookout"
      className="py-20 sm:py-28 relative bg-[radial-gradient(circle_at_top,#f6f7ff_0%,#fbfbfb_65%)] overflow-hidden"
    >
      {/* Background color blobs */}
      <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] rounded-full bg-electric-blue/10 blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-soft-purple/10 blur-[120px]" />

      <div className="section-container">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] font-black tracking-widest text-soft-purple uppercase mb-3 bg-soft-purple/10 px-3 py-1 rounded-full inline-block"
          >
            Philosophy
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-900"
          >
            Why Lookout?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-neutral-500 text-sm sm:text-base mt-3"
          >
            A capture system built for speed, safety, and simplicity.
          </motion.p>
        </div>
<br/>
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {pillars.map((p, i) => {
            const Icon = p.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`
                  relative overflow-hidden
                  rounded-3xl p-6 sm:p-7
                  border border-white/10
                 bg-white/80
                  backdrop-blur-xl
                  shadow-sm
                `}
              >
                {/* glow hover layer */}
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 bg-white/5" />

                {/* header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-white/80 flex items-center justify-center shadow-sm">
                    <Icon className={`w-5 h-5 ${p.color}`} />
                  </div>

                  <div>
                    <h3 className="font-bold text-neutral-900">{p.title}</h3>
                    <p className="text-[10px] uppercase tracking-widest text-neutral-400">
                      {p.tagline}
                    </p>
                  </div>
                </div>

                {/* description */}
                <p className="text-sm text-neutral-600 mb-5">
                  {p.description}
                </p>

                {/* points */}
                <ul className="space-y-2">
                  {p.points.map((pt, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + idx * 0.05 }}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle className={`w-4 h-4 ${p.color}`} />
                      <span className="text-xs text-neutral-600 font-medium">
                        {pt}
                      </span>
                    </motion.li>
                  ))}
                </ul>

              </motion.div>
            );
          })}
<br/>
        </div>
      </div>
    </section>
  );
}