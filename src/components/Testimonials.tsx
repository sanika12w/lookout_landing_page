"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      quote: "Lookout has completely replaced my heavy dual-camera vlogging setup. I shoot high-quality ProRes reactions and POV feeds simultaneously in a single, perfectly synced file. It saves me hours in editing.",
      author: "Sarah Jenkins",
      role: "Tech YouTuber & Creator",
      handle: "@sarahcreates",
      avatarInitials: "SJ",
      avatarGrad: "from-electric-blue to-cyan-glow",
      stars: 5,
    },
    {
      quote: "In field journalism, security and integrity are paramount. Lookout's 100% offline, local-only processing ensures my sources' privacy. Having front-facing narrative reporting alongside raw back-lens event footage is a game changer.",
      author: "Marcus Vance",
      role: "Independent Investigative Reporter",
      handle: "@mvance_reports",
      avatarInitials: "MV",
      avatarGrad: "from-soft-purple to-pink-glow",
      stars: 5,
    },
    {
      quote: "The Dashcam mode loop-recording is incredibly optimized. It runs cold, uses very little battery, and captures crystal-clear feeds from both cabin and traffic perspectives. It's the most polished utility on my iPhone.",
      author: "David Chen",
      role: "Daily Commuter & Tech Reviewer",
      handle: "@dchen_tech",
      avatarInitials: "DC",
      avatarGrad: "from-pink-glow to-brand-orange",
      stars: 5,
    },
  ];

  return (
    <section id="testimonials" className="section-spacing relative bg-[#fbfbfb] overflow-hidden">
      {/* Decorative backing blobs */}
      <div className="absolute top-[20%] left-[-150px] w-80 h-80 rounded-full bg-cyan-glow/5 blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[-150px] w-80 h-80 rounded-full bg-soft-purple/5 blur-[100px] pointer-events-none"></div>

      <div className="section-container relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] font-black tracking-widest text-pink-glow uppercase mb-3 bg-pink-glow/5 inline-block px-3 py-1 rounded-full border border-pink-glow/10"
          >
            User Feedback
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-900 tracking-tight leading-none mb-5 text-balance"
          >
            Loved by creators & pros.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-neutral-500 font-medium leading-relaxed max-w-xl mx-auto"
          >
            See how vloggers, journalists, and everyday drivers capture their perspectives with Lookout.
          </motion.p>
        </div>

        {/* Testimonials Floating Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200/50 shadow-xs flex flex-col justify-between relative group transition-all duration-300"
            >
              {/* Card Quote icon decoration */}
              <div className="absolute top-6 right-8 text-neutral-100 group-hover:text-neutral-200 transition-colors pointer-events-none">
                <Quote className="w-8 h-8 fill-current" />
              </div>

              {/* Card Core Content */}
              <div>
                {/* Stars Rating */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: review.stars }).map((_, sIdx) => (
                    <Star key={sIdx} className="w-3.5 h-3.5 fill-brand-orange text-brand-orange" />
                  ))}
                </div>

                <p className="text-neutral-600 text-sm font-semibold leading-relaxed mb-6 italic relative z-10">
                  "{review.quote}"
                </p>
              </div>

              {/* Author Info Row */}
              <div className="flex items-center gap-3 pt-5 border-t border-neutral-100">
                {/* Initial Avatar */}
                <div className={`w-9 h-9 rounded-full bg-linear-to-tr ${review.avatarGrad} flex items-center justify-center font-bold text-xs text-white shadow-xs`}>
                  {review.avatarInitials}
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-neutral-900 leading-tight">
                    {review.author}
                  </h4>
                  <div className="text-[9px] text-neutral-400 font-bold flex gap-1 items-center">
                    <span>{review.role}</span>
                    <span className="opacity-50">•</span>
                    <span className="text-electric-blue">{review.handle}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
