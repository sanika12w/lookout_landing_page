"use client";

import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section id="download" className="relative py-24 bg-[#fbfbfb] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Cinematic Gradient Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[32px] overflow-hidden bg-neutral-950 p-8 md:p-16 text-center text-white border border-white/5 shadow-2xl"
        >
          {/* Animated Background Mesh Blobs */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
            <div className="absolute top-[-50%] left-[-20%] w-[600px] h-[600px] rounded-full bg-radial from-electric-blue/40 to-transparent blur-3xl animate-blob-spin"></div>
            <div className="absolute bottom-[-50%] right-[-20%] w-[600px] h-[600px] rounded-full bg-radial from-soft-purple/40 to-transparent blur-3xl"></div>
            <div className="absolute top-[20%] right-[10%] w-[350px] h-[350px] rounded-full bg-radial from-pink-glow/30 to-transparent blur-3xl animate-float-medium"></div>
          </div>

          {/* Thin Grid view inside CTA */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>

          {/* Content */}
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            
            <span className="text-[10px] font-extrabold tracking-widest text-cyan-glow uppercase mb-4 px-3 py-1 bg-white/5 rounded-full border border-white/10 backdrop-blur-xs">
              Instant Download
            </span>

            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.08] mb-6">
              Always Recording.<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-glow via-white to-pink-glow">
                Always Ready.
              </span>
            </h2>

            <p className="text-neutral-400 text-base md:text-lg font-medium leading-relaxed max-w-xl mb-10">
              Get Lookout today on your iPhone. Capture your stories, log your commutes, and secure your environment with ultimate privacy.
            </p>

            {/* Buttons Row */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a
                href="#download-store"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white text-neutral-900 font-bold hover:bg-neutral-100 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 shadow-lg shadow-white/5"
              >
                <Download className="w-5 h-5 text-electric-blue" />
                Download App Store
              </a>
              <a
                href="#features"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/5 hover:bg-white/10 text-white font-bold border border-white/10 backdrop-blur-xs hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                Explore Features
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Platform Requirement notice */}
            <div className="mt-8 text-[11px] font-semibold text-neutral-500">
              Requires iOS 17.0 or later • Compatible with Apple Watch Series 6+
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
