"use client";

import { AnimatePresence, m } from "framer-motion";
import { Eye } from "lucide-react";
import Image from "next/image";
import { showcaseModes, type ShowcaseMode } from "@/data/showcaseModes";

export function ShowcasePreview({ mode }: { mode: ShowcaseMode }) {
  const content = showcaseModes[mode];

  return (
    <AnimatePresence mode="wait">
      <m.div
        key={mode}
        initial={{ opacity: 0, scale: 0.98, y: 18 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.98, y: -12 }}
        transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
        className={`showcase-stage showcase-${mode.toLowerCase()}`}
      >
        <div className="showcase-glow" />
        <div className="absolute inset-4 sm:inset-6 bottom-[98px] sm:bottom-[110px] rounded-2xl overflow-hidden flex items-center justify-center">
          <Image
            src={mode === "Focus" ? "/appstore/privacy.webp" : "/appstore/dual-camera.webp"}
            alt={mode === "Focus" ? "Focus mode privacy screenshot" : "Dual-camera recording screenshot showing front and rear cameras simultaneously"}
            fill
            sizes="(max-width: 1024px) 92vw, 720px"
            className="object-contain"
            priority
          />
        </div>
        {mode === "Focus" && (
          <div className="focus-overlay">
            <Eye className="h-7 w-7" />
            <span>REC continues quietly</span>
          </div>
        )}
        <div className="showcase-control">
          <div>
            <span className="record-dot" />
            {content.status}
          </div>
          <p>{content.title}</p>
        </div>
      </m.div>
    </AnimatePresence>
  );
}
