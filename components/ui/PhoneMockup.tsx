"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { m, useReducedMotion } from "framer-motion";

type PhoneMode = "Split" | "PiP" | "Focus";

const phoneModes: PhoneMode[] = ["Split", "PiP", "Focus"];

const modeCopy = {
  Split: {
    status: "REC 04:27",
    rear: "City POV",
    selfie: "Creator",
  },
  PiP: {
    status: "PiP LIVE",
    rear: "Main Scene",
    selfie: "Face Cam",
  },
  Focus: {
    status: "FOCUS ON",
    rear: "Quiet Capture",
    selfie: "Controls",
  },
} as const;

export function PhoneMockup({ hero = false, mode = "Split" }: { hero?: boolean; mode?: PhoneMode }) {
  const reduceMotion = useReducedMotion();
  const [activeMode, setActiveMode] = useState<PhoneMode>(mode);

  useEffect(() => {
    if (!hero || reduceMotion) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveMode((current) => phoneModes[(phoneModes.indexOf(current) + 1) % phoneModes.length]);
    }, 2600);

    return () => window.clearInterval(timer);
  }, [hero, reduceMotion]);

  const renderedMode = hero && !reduceMotion ? activeMode : mode;
  const copy = modeCopy[renderedMode];

  return (
    <m.div
      initial={{ opacity: 0, y: hero ? 26 : 12, rotate: hero ? -1 : 0 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: reduceMotion ? 0.01 : 0.58, ease: "easeOut" }}
      className={`phone ${hero ? "phone-hero" : ""}`}
    >
      <div className="phone-bezel">
        <div className="dynamic-island" />
        <div className={`screen phone-screen-${renderedMode.toLowerCase()}`}>
          <div className="camera-grid">
            <div className="lens rear">
              <Image
                src={renderedMode === "Focus" ? "/images/lookout/lookout-focus-interface.webp" : "/images/lookout/lookout-rear-scene.webp"}
                alt={renderedMode === "Focus" ? "Dimmed Focus recording interface" : "Rear camera city point of view"}
                fill
                sizes={hero ? "(max-width: 768px) 74vw, 390px" : "330px"}
                priority={hero}
                className={renderedMode === "Focus" ? "lens-image object-contain" : "lens-image"}
              />
              {renderedMode !== "Focus" && <div className="scanline" />}
              {renderedMode !== "Focus" && <span>REAR</span>}
              {renderedMode !== "Focus" && <strong>{copy.rear}</strong>}
            </div>
            {renderedMode !== "Focus" && (
              <div className="lens selfie">
                <Image
                  src="/images/lookout/lookout-creator-camera.webp"
                  alt="Creator face camera view"
                  fill
                  sizes={hero ? "(max-width: 768px) 42vw, 180px" : "160px"}
                  priority={hero}
                  className="lens-image"
                />
                <span>SELFIE</span>
                <strong>{copy.selfie}</strong>
              </div>
            )}
          </div>
          <div className="recording-pill">
            <span />
            {copy.status}
          </div>
          <div className="mode-rail">
            {phoneModes.map((item) => (
              <b key={item} className={renderedMode === item ? "active" : ""}>
                {item}
              </b>
            ))}
          </div>
        </div>
      </div>
    </m.div>
  );
}
