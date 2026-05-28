"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { LazyMotion, AnimatePresence, domAnimation, m, useReducedMotion, type Variants } from "framer-motion";
import {
  Apple,
  ArrowRight,
  Camera,
  ChevronDown,
  CirclePlay,
  Clock3,
  Compass,
  Eye,
  Film,
  Laptop,
  Layers3,
  MapPinned,
  Mic2,
  Moon,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Sun,
  Watch,
} from "lucide-react";

const APP_STORE_URL = "https://apps.apple.com/in/app/lookout-dual-camera-recorder/id6744577632";
const APP_ICON_URL =
  "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/0c/fb/16/0cfb163f-b135-bfab-b0f9-6888fd0aa35e/AppIcon-0-0-1x_U007epad-0-1-85-220.png/200x200bb.jpg";

const fade: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const features = [
  {
    icon: Layers3,
    title: "Dual camera recording",
    text: "Capture front and rear perspectives at the same time, ready for reactions, explainers, travel logs, and POV content.",
  },
  {
    icon: Smartphone,
    title: "Split, PiP, or full-screen",
    text: "Switch between cinematic split-screen, picture-in-picture, and single-camera framing without breaking the flow.",
  },
  {
    icon: Mic2,
    title: "Hands-free voice control",
    text: 'Say "Hey Lookout" to control recording when your phone is mounted, handheld, or out of reach.',
  },
  {
    icon: Watch,
    title: "Apple Watch remote",
    text: "Preview, trigger, and control capture from your wrist for solo shoots and clean creator setups.",
  },
  {
    icon: MapPinned,
    title: "GPS, speed, and map data",
    text: "Add context for rides, inspections, travel stories, or evidence-style recordings with location-aware capture.",
  },
  {
    icon: ShieldCheck,
    title: "Private by design",
    text: "On-device workflows keep your footage in your hands, with the iPhone-native experience creators expect.",
  },
];

const platforms = [
  [Smartphone, "iPhone", "Dual front and rear camera capture"],
  [Watch, "Apple Watch", "Remote preview and recording control"],
  [Laptop, "macOS", "Compatible with Mac workflows"],
] as const;

const workflow = [
  ["Frame", "Pick front + rear, split, PiP, or single-lens mode."],
  ["Command", "Start with voice, watch, or a tactile one-tap capture surface."],
  ["Create", "Record reactions, walkthroughs, travel POVs, product demos, or safety logs."],
  ["Share", "Export social-ready footage for TikTok, Reels, Shorts, and creator channels."],
];

const quotes = [
  [
    "Lookout makes solo shooting feel like a studio rig. I can narrate and show the scene in one clean take.",
    "Maya R.",
    "Travel creator",
  ],
  [
    "The split-screen workflow is exactly what I wanted for product walkthroughs and quick reaction content.",
    "Drew K.",
    "Founder",
  ],
  [
    "Voice control and Watch preview change the entire feel of mobile recording. It is fast, calm, and polished.",
    "Leah S.",
    "Vlogger",
  ],
];

const faqs = [
  [
    "What is the best dual camera app for iPhone creators?",
    "Lookout is built for creators who need a focused iPhone dual camera app for recording the front and back camera at the same time. It is designed for vlogs, reactions, walkthroughs, interviews, product demos, travel clips, and other creator recording workflows where your face and the scene both matter.",
  ],
  [
    "Can Lookout record the front and back camera simultaneously?",
    "Yes. Lookout is a simultaneous camera recording app for iPhone that captures selfie and rear camera perspectives together. This makes it useful for dual selfie and rear camera recording, reaction videos, field notes, ride footage, creator commentary, and clips where a single camera would miss important context.",
  ],
  [
    "Does Lookout support split screen video recording?",
    "Lookout supports split-screen style dual video recording so creators can show the scene and their reaction in one synced take. A split screen video recorder is especially helpful for iPhone vloggers, reviewers, educators, and content creators who want both perspectives without setting up a second device.",
  ],
  [
    "Can I use picture-in-picture recording for vlogs and reactions?",
    "Yes. Lookout includes PiP recording layouts so the rear camera can carry the main story while your face-cam remains visible. This picture-in-picture recording app workflow is ideal for iPhone video recording for vloggers, product walkthroughs, travel narration, reaction content, and quick social clips.",
  ],
  [
    "How does Focus mode help with discreet or low-distraction recording?",
    "Focus mode is designed for moments when you want to keep recording without a bright, distracting screen. It keeps the dual camera recording workflow centered on the capture itself, which can be useful for professional environments, mounted-phone setups, private journaling, or long recording sessions.",
  ],
  [
    "Does Lookout work with Apple Watch camera control?",
    "Yes. The App Store listing highlights Apple Watch integration for remote preview and control. That means you can frame a shot, trigger recording, and manage a creator setup from your wrist when the iPhone is mounted, across the room, or positioned for a solo shoot.",
  ],
  [
    "Is Lookout useful as a vlog recording app for iPhone?",
    "Lookout is well suited to iPhone vlog recording because it captures your commentary and your environment together. Instead of switching between selfie and rear camera clips, vloggers can record a more complete story in one take using dual camera, split screen, PiP, and hands-free controls.",
  ],
  [
    "Who should use a dual camera recording app like Lookout?",
    "Lookout is made for content creators, vloggers, journalists, founders, educators, commuters, and anyone who needs context-rich iPhone recording. If you search for a creator recording app, front and back camera recording app, or camera app for content creators, Lookout fits that dual-perspective use case.",
  ],
];

const showcaseModes = {
  Split: {
    label: "Split",
    title: "Balanced dual-view storytelling",
    text: "Show the rear-camera scene and your commentary side by side for reactions, demos, and creator explainers.",
    status: "Recording split-screen in UHD",
  },
  PiP: {
    label: "PiP",
    title: "Main scene with a floating face-cam",
    text: "Keep the action full-height while your front camera stays pinned for narration, reactions, and travel context.",
    status: "PiP face-cam locked to creator view",
  },
  Focus: {
    label: "Focus",
    title: "Discreet capture with minimal glow",
    text: "Dim the interface, keep the recording running, and reduce distractions when the iPhone is mounted or nearby.",
    status: "Focus mode recording with display dimmed",
  },
} as const;

type ShowcaseMode = keyof typeof showcaseModes;
type Theme = "dark" | "light";

function ExternalAppStoreLink({
  className,
  children,
  ariaLabel = "Download Lookout on the App Store",
}: {
  className: string;
  children: React.ReactNode;
  ariaLabel?: string;
}) {
  return (
    <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel} className={className}>
      {children}
    </a>
  );
}

function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <m.div
      variants={fade}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="mx-auto max-w-3xl text-center"
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      <p className="section-copy">{text}</p>
    </m.div>
  );
}

function AppStoreButton({ dark = false }: { dark?: boolean }) {
  return (
    <ExternalAppStoreLink
      className={`group inline-flex h-14 items-center gap-3 rounded-full px-6 text-sm font-semibold transition hover:scale-[1.02] ${
        dark
          ? "bg-black text-white shadow-[0_20px_70px_rgba(0,0,0,.28)] hover:bg-zinc-900"
          : "border border-white/15 bg-white text-black shadow-[0_0_60px_rgba(255,255,255,.18)] hover:bg-cyan-50"
      }`}
    >
      <Apple className="h-5 w-5" />
      Download on App Store
      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
    </ExternalAppStoreLink>
  );
}

function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") {
      return "dark";
    }

    const saved = window.localStorage.getItem("lookout-theme") as Theme | null;
    return saved ?? (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("lookout-theme", nextTheme);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <span aria-hidden="true">{theme === "dark" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}</span>
    </button>
  );
}

function PhoneMockup({ hero = false }: { hero?: boolean }) {
  const reduceMotion = useReducedMotion();
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
        <div className="screen">
          <div className="camera-grid">
            <div className="lens rear">
              <div className="scanline" />
              <span>REAR</span>
              <strong>City POV</strong>
            </div>
            <div className="lens selfie">
              <span>SELFIE</span>
              <strong>Creator</strong>
            </div>
          </div>
          <div className="recording-pill">
            <span />
            REC 04:27
          </div>
          <div className="mode-rail">
            <b>Split</b>
            <b>PiP</b>
            <b>Focus</b>
          </div>
        </div>
      </div>
    </m.div>
  );
}

function Navbar() {
  return (
    <m.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed left-0 right-0 top-0 z-50 px-4 pt-4"
    >
      <nav className="nav-shell">
        <a href="#" className="brand-link" aria-label="Lookout home">
          <span className="app-icon-wrap">
            <Image src={APP_ICON_URL} alt="Lookout app icon" width={40} height={40} priority className="app-icon" />
          </span>
          <span className="brand-text">Lookout</span>
        </a>
        <div className="hidden items-center gap-7 text-sm md:flex">
          <a href="#showcase">Showcase</a>
          <a href="#platforms">Platforms</a>
          <a href="#features">Features</a>
          <a href="#faq">FAQ</a>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <ExternalAppStoreLink className="nav-cta">App Store</ExternalAppStoreLink>
        </div>
      </nav>
    </m.header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-5 pb-24 pt-32 sm:pt-40">
      <div className="aurora aurora-a" />
      <div className="aurora aurora-b" />
      <div className="grid-noise" />
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
        <div className="relative z-10">
          <m.div variants={fade} initial="hidden" animate="visible">
            <div className="hero-badge">
              <Sparkles className="h-4 w-4 text-cyan-200" />
              Dual camera recorder for the Apple ecosystem
            </div>
            <h1 className="hero-title">Record both sides of the story.</h1>
            <p className="hero-copy">
              Lookout turns your iPhone into a cinematic dual-camera studio for split-screen vlogs, reactions,
              travel POVs, demos, and social clips, with Apple Watch integration and macOS compatibility for a
              connected creator workflow.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <AppStoreButton />
              <a href="#showcase" className="secondary-button">
                <CirclePlay className="h-5 w-5" />
                Watch Demo
              </a>
            </div>
          </m.div>
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.45 }}
            className="mt-12 grid max-w-xl grid-cols-3 gap-3"
          >
            {["iPhone", "Apple Watch", "macOS"].map((item) => (
              <div key={item} className="stat-card">
                <span>{item}</span>
              </div>
            ))}
          </m.div>
        </div>
        <div className="relative min-h-[620px]">
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />
          <m.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 grid place-items-center"
          >
            <PhoneMockup hero />
          </m.div>
          <m.div className="floating-panel left-0 top-16" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
            <Camera className="h-5 w-5 text-cyan-200" />
            <span>Front + Rear</span>
          </m.div>
          <m.div className="floating-panel bottom-20 right-0" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}>
            <Watch className="h-5 w-5 text-fuchsia-200" />
            <span>Watch Remote</span>
          </m.div>
        </div>
        <br/>  <br/>  <br/>  <br/>  <br/>
        <br/>  <br/>  <br/>  <br/>  <br/>
      </div>
    </section>
  );
}

function PlatformAvailability() {
  return (
    <section id="platforms" className="section-shell">
      <SectionTitle
        eyebrow="APPLE ECOSYSTEM"
        title="Works seamlessly across the Apple ecosystem."
        text="Available on iPhone, integrated with Apple Watch, and compatible with macOS workflows for creators who move between devices."
      />
      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {platforms.map(([Icon, title, text], i) => (
          <m.article
            key={title}
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-70px" }}
            transition={{ delay: i * 0.07 }}
            whileHover={{ y: -5 }}
            className="platform-card"
          >
            <div className="platform-icon">
              <Icon className="h-6 w-6" />
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
          </m.article>
        ))}
      </div>
    </section>
  );
}

function ShowcasePreview({ mode }: { mode: ShowcaseMode }) {
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
        <div className="split-pane rear-pane">
          <span>REAR CAMERA</span>
          <b>{mode === "Focus" ? "Dimmed POV" : "Street-level POV"}</b>
        </div>
        <div className="split-pane selfie-pane">
          <span>SELFIE CAMERA</span>
          <b>Creator commentary</b>
        </div>
        <div className="focus-overlay">
          <Eye className="h-7 w-7" />
          <span>REC continues quietly</span>
        </div>
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

function Showcase() {
  const [mode, setMode] = useState<ShowcaseMode>("Split");
  const active = showcaseModes[mode];

  return (
    <section id="showcase" className="section-shell">
      <SectionTitle
        eyebrow="CINEMATIC CAPTURE"
        title="Split-screen creator footage without the production rig."
        text="Record reaction and context together, then shape the frame for the platform you are publishing to."
      />
      <div className="mt-16 grid gap-6 lg:grid-cols-[1.2fr_.8fr]">
        <m.div variants={fade} initial="hidden" whileInView="visible" viewport={{ once: true }} className="cinema-card min-h-[580px] p-4 sm:p-6">
          <ShowcasePreview mode={mode} />
        </m.div>
        <div className="grid gap-6">
          <div className="premium-card p-4">
            <div className="showcase-tabs" role="tablist" aria-label="Recording layout modes">
              {(Object.keys(showcaseModes) as ShowcaseMode[]).map((key) => (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  aria-selected={mode === key}
                  onClick={() => setMode(key)}
                  className={mode === key ? "active" : ""}
                >
                  {showcaseModes[key].label}
                </button>
              ))}
            </div>
          </div>
          <m.article key={mode} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.32 }} className="premium-card p-8">
            <p className="text-xl font-semibold text-white">{active.title}</p>
            <p className="mt-4 leading-7 text-zinc-400">{active.text}</p>
          </m.article>
          {[
            ["Social-ready framing", "Shoot for vertical formats creators actually publish every day."],
            ["Context-rich moments", "Perfect for reactions, reviews, cycling, travel, demos, and field notes."],
          ].map(([title, text], i) => (
            <m.div
              key={title}
              variants={fade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="premium-card p-8"
            >
              <p className="text-xl font-semibold text-white">{title}</p>
              <p className="mt-4 leading-7 text-zinc-400">{text}</p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="section-shell">
      <SectionTitle
        eyebrow="IPHONE-NATIVE POWER"
        title="Built for creators who move fast."
        text="Lookout brings multi-camera capture, remote control, and contextual recording into a polished mobile workflow across iPhone, Apple Watch, and Mac."
      />
      <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, i) => {
          const Icon = feature.icon;
          return (
            <m.article
              key={feature.title}
              variants={fade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-70px" }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="premium-card group p-7"
            >
              <div className="feature-icon">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-4 leading-7 text-zinc-400">{feature.text}</p>
            </m.article>
          );
        })}
      </div>
    </section>
  );
}

function Workflow() {
  return (
    <section id="workflow" className="section-shell">
      <div className="grid items-center gap-14 lg:grid-cols-[.85fr_1.15fr]">
        <m.div variants={fade} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <p className="eyebrow text-left">CREATOR FLOW</p>
          <h2 className="section-title text-left">From idea to dual-perspective clip in one take.</h2>
          <p className="section-copy mx-0 text-left">
            A calm, focused recording flow for solo creators: choose your layout, start hands-free, keep the shot
            composed, then publish with more context than a single camera can capture.
          </p>
          <div className="mt-10 grid gap-4">
            {workflow.map(([title, text], i) => (
              <m.div
                key={title}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.65 }}
                className="workflow-step"
              >
                <span>{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <b>{title}</b>
                  <p>{text}</p>
                </div>
              </m.div>
            ))}
          </div>
        </m.div>
        <div className="relative min-h-[620px]">
          <div className="absolute inset-0 rounded-[3rem] bg-[radial-gradient(circle_at_center,rgba(34,211,238,.14),transparent_55%)]" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <PhoneMockup />
          </div>
          <div className="halo-ring" />
        </div>
      </div>
    </section>
  );
}

function Preview() {
  return (
    <section className="section-shell">
      <SectionTitle
        eyebrow="CONTROL SURFACE"
        title="A Liquid Glass-inspired recording cockpit."
        text="The interface is designed to feel calm under pressure: camera modes, watch control, voice triggers, focus mode, and recording data stay within reach."
      />
      <m.div variants={fade} initial="hidden" whileInView="visible" viewport={{ once: true }} className="preview-shell mt-16">
        <div className="preview-inner">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm text-zinc-500">Live Session</p>
              <h3 className="text-2xl font-semibold text-white">Creator Walkthrough</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {["UHD", "Split", "GPS", "Watch"].map((chip) => (
                <span key={chip} className="preview-chip">
                  {chip}
                </span>
              ))}
            </div>
          </div>
          <div className="grid gap-4 lg:grid-cols-[1.2fr_.8fr]">
            <div className="dashboard-stage">
              <div className="dashboard-video">
                <Film className="h-9 w-9 text-white/60" />
                <span>Dual-camera canvas</span>
              </div>
              <div className="timeline">
                {Array.from({ length: 28 }).map((_, i) => (
                  <i key={i} style={{ height: `${20 + ((i * 17) % 48)}px` }} />
                ))}
              </div>
            </div>
            <div className="grid gap-4">
              {[
                [Clock3, "04:27", "Current recording"],
                [Compass, "18 km/h", "Speed overlay"],
                [MapPinned, "37.7749", "Location metadata"],
                [Mic2, "Listening", "Hey Lookout armed"],
              ].map(([Icon, value, label]) => {
                const TypedIcon = Icon as typeof Clock3;
                return (
                  <div key={String(label)} className="data-card">
                    <TypedIcon className="h-5 w-5 text-cyan-200" />
                    <div>
                      <b>{String(value)}</b>
                      <span>{String(label)}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </m.div>
    </section>
  );
}

function WhyCreators() {
  return (
    <section className="section-shell">
      <div className="creator-panel">
        <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <m.div variants={fade} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="eyebrow text-left">WHY CREATORS USE IT</p>
            <h2 className="section-title text-left">Because one camera rarely tells the whole story.</h2>
          </m.div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Record reactions and action together.",
              "Keep your face in the story without a second device.",
              "Capture evidence-grade context with maps and speed.",
              "Control recording when your iPhone is mounted.",
            ].map((item, i) => (
              <m.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="reason-card"
              >
                <Sparkles className="h-5 w-5 text-cyan-200" />
                <p>{item}</p>
              </m.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="section-shell">
      <SectionTitle
        eyebrow="SOCIAL PROOF"
        title="Designed for solo creators, founders, and mobile storytellers."
        text="Realistic creator scenarios inspired by the App Store positioning and dual-camera workflows."
      />
      <div className="mt-16 grid gap-5 lg:grid-cols-3">
        {quotes.map(([quote, name, role], i) => (
          <m.article
            key={name}
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="premium-card p-8"
          >
            <p className="text-lg leading-8 text-zinc-200">&quot;{quote}&quot;</p>
            <div className="mt-8 flex items-center gap-3">
              <span className="avatar">{name[0]}</span>
              <div>
                <b className="block text-white">{name}</b>
                <span className="text-sm text-zinc-500">{role}</span>
              </div>
            </div>
          </m.article>
        ))}
      </div>
    </section>
  );
}

function FAQ() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };

  return (
    <section id="faq" className="section-shell" aria-labelledby="faq-heading">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <SectionTitle
        eyebrow="SEO FAQ"
        title="Dual camera recording questions for iPhone creators."
        text="Helpful answers for creators comparing dual camera recording, split-screen video, PiP capture, Apple Watch control, and iPhone vlog recording workflows."
      />
      <div className="sr-only">
        <h2 id="faq-heading">Dual camera recording app FAQ</h2>
      </div>
      <div className="mx-auto mt-14 max-w-3xl space-y-3">
        {faqs.map(([q, a]) => (
          <m.details
            key={q}
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="faq-item group"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-semibold text-white">
              {q}
              <ChevronDown className="h-5 w-5 text-zinc-500 transition group-open:rotate-180" />
            </summary>
            <p className="mt-4 leading-7 text-zinc-400">{a}</p>
          </m.details>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="px-5 py-20">
      <m.div variants={fade} initial="hidden" whileInView="visible" viewport={{ once: true }} className="cta-panel">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_20%,rgba(34,211,238,.35),transparent_28%),radial-gradient(circle_at_80%_70%,rgba(217,70,239,.25),transparent_30%)]" />
        <div className="relative grid items-center gap-10 p-8 sm:p-12 lg:grid-cols-[1fr_.7fr] lg:p-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-[.28em] text-zinc-500">Download Lookout</p>
            <h2 className="mt-5 max-w-3xl text-5xl font-semibold leading-[.95] tracking-[-.05em] sm:text-6xl">
              Turn your iPhone into a dual-camera studio.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
              Capture selfie and rear-camera footage together for cinematic, social-ready creator stories across iPhone,
              Apple Watch, and macOS-compatible workflows.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4 lg:items-end">
            <AppStoreButton dark />
            <p className="text-sm text-zinc-500">Available on iPhone, Apple Watch, and macOS according to the App Store listing.</p>
          </div>
        </div>
      </m.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-5 pb-10">
      <div className="footer-shell">
        <div>
          <div className="flex items-center gap-3">
            <span className="app-icon-wrap small">
              <Image src={APP_ICON_URL} alt="Lookout app icon" width={36} height={36} className="app-icon" />
            </span>
            <b>Lookout</b>
          </div>
          <p className="mt-4 max-w-sm">Premium dual-camera recording for iPhone creators, Apple Watch control, and Mac-compatible workflows.</p>
        </div>
        <div className="flex flex-wrap items-center gap-6">
          <a href="#showcase">Showcase</a>
          <a href="#platforms">Platforms</a>
          <a href="#features">Features</a>
          <a href="#faq">FAQ</a>
          <ExternalAppStoreLink className="footer-store-link">App Store</ExternalAppStoreLink>
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <LazyMotion features={domAnimation} strict>
      <main>
        <Navbar />
        <Hero />
        <Showcase />
        <PlatformAvailability />
        <Features />
        <Workflow />
        <Preview />
        <WhyCreators />
        <Testimonials />
        <FAQ />
        <CTA />
        <Footer />
      </main>
    </LazyMotion>
  );
}
