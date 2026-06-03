import type { FaqItem } from "@/lib/seo";

export type SeoPage = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
  keywords: string[];
  sections: { heading: string; body: string[] }[];
  faqs: FaqItem[];
  related: { label: string; href: string }[];
};

export const seoPages: Record<string, SeoPage> = {
  "dual-camera-recording-app": {
    slug: "dual-camera-recording-app",
    title: "Best Dual Camera Recording App for iPhone Creators",
    description:
      "Learn how Lookout helps iPhone creators record front and back camera video simultaneously with split-screen, PiP, Focus mode, and Apple Watch camera control.",
    eyebrow: "DUAL CAMERA RECORDING APP",
    h1: "What is the best dual camera recording app for iPhone creators?",
    intro:
      "A strong dual camera recording app should make simultaneous camera recording feel simple: open the app, frame the front and rear cameras, choose a layout, and record a complete story in one take. Lookout is built around that exact workflow for iPhone creators who need commentary, action, and context in the same clip.",
    keywords: ["best dual camera recording app", "simultaneous camera recording", "iPhone dual camera app"],
    sections: [
      {
        heading: "How does dual camera recording work on iPhone?",
        body: [
          "Dual camera recording captures the selfie camera and rear camera at the same time. For creators, that means the reaction and the scene stay synchronized. Instead of filming a rear-camera clip, stopping, turning the phone around, and filming commentary separately, Lookout helps combine both perspectives inside one creator-friendly recording flow.",
          "This is especially useful for vlogs, walkthroughs, product demos, coaching moments, travel clips, field notes, rides, and reaction content. The viewer sees what happened and how the creator responded, which makes the footage feel more complete and easier to understand.",
        ],
      },
      {
        heading: "Why is simultaneous camera recording useful for creators?",
        body: [
          "Simultaneous camera recording saves setup time and reduces editing friction. A creator can capture a full moment with front and back camera recording, then publish a clip that already contains context, commentary, and visual proof. This matters for social video because short-form platforms reward clarity and speed.",
          "Lookout is designed for creators who move quickly. Split mode can show two balanced views, PiP can keep the creator visible over the scene, and Focus mode can reduce screen distraction when the iPhone is mounted or recording for longer sessions.",
        ],
      },
      {
        heading: "What should creators look for in an iPhone dual camera app?",
        body: [
          "A practical iPhone dual camera app should include reliable front and back camera recording, clear layout controls, readable recording states, hands-free options, and a workflow that does not feel like a technical camera utility. Lookout keeps the interface cinematic and calm while still surfacing the controls creators expect.",
          "Apple Watch camera control is also valuable for solo creators. When the phone is across the room, mounted on a bike, placed on a tripod, or used for a hands-free demo, wrist control makes the capture process feel less fragile.",
        ],
      },
      {
        heading: "Is Lookout built for professional creator workflows?",
        body: [
          "Lookout is built for content creators, vloggers, educators, founders, reviewers, and mobile storytellers who need more than a single camera angle. It is not just about novelty; it is about making a complete recording easier to capture in the first take.",
          "For searchers comparing the best dual camera app for iPhone, the core value is straightforward: record both sides of the story without needing a second phone, a separate action camera, or a complicated editing workflow.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can Lookout record two iPhone cameras at once?",
        answer:
          "Yes. Lookout is designed for simultaneous front and back camera recording on iPhone, with layouts for split-screen, PiP, and Focus-style capture.",
      },
      {
        question: "Is a dual camera recording app good for vlogging?",
        answer:
          "Yes. Vloggers can record their face and the environment together, which helps viewers understand both the creator's reaction and the scene being filmed.",
      },
      {
        question: "Does Lookout support Apple Watch control?",
        answer:
          "The App Store listing highlights Apple Watch integration for remote preview and recording control, which is useful for solo creators and mounted-phone setups.",
      },
    ],
    related: [
      { label: "How to record front and back camera on iPhone", href: "/blog/how-to-record-front-and-back-camera-on-iphone" },
      { label: "Split screen video recorder for iPhone", href: "/split-screen-video-recorder" },
      { label: "iPhone vlog recording app", href: "/iphone-vlog-recording-app" },
    ],
  },
  "split-screen-video-recorder": {
    slug: "split-screen-video-recorder",
    title: "Split Screen Video Recorder for iPhone Creators",
    description:
      "Explore how Lookout works as a split screen video recorder for iPhone creators who need front and back camera recording in one synced take.",
    eyebrow: "SPLIT SCREEN VIDEO RECORDER",
    h1: "How can creators record split screen video on iPhone?",
    intro:
      "A split screen video recorder lets creators show two perspectives at the same time. On iPhone, that usually means recording the rear camera for the main scene and the selfie camera for commentary, reaction, or narration. Lookout turns that workflow into a polished creator experience.",
    keywords: ["split screen video recorder", "split screen video recorder iPhone", "front and back camera recording"],
    sections: [
      {
        heading: "What is split screen video recording?",
        body: [
          "Split screen video recording places two camera views in one frame. For creator content, this usually means the viewer sees both the subject and the person explaining, reacting, or guiding the moment.",
          "This format works well for product demos, travel narration, reaction clips, education, founder updates, and behind-the-scenes content because it removes the need to cut between angles later.",
        ],
      },
      {
        heading: "Why does split screen help iPhone creators publish faster?",
        body: [
          "A split-screen recorder can reduce editing time because the final composition is already understandable. Instead of synchronizing separate clips, creators can record both views together and focus on the story.",
          "Lookout keeps split-screen capture clear and cinematic, with controls that feel native to the iPhone rather than like a desktop editor compressed onto a small screen.",
        ],
      },
      {
        heading: "When should creators use split screen instead of PiP?",
        body: [
          "Split screen is best when both views are equally important. If the scene and the creator's reaction need similar weight, split screen gives viewers a balanced frame.",
          "PiP is better when the rear camera carries the main action and the front camera provides supporting commentary. Lookout includes both patterns so creators can match the layout to the story.",
        ],
      },
      {
        heading: "How does Lookout make split screen recording feel premium?",
        body: [
          "Lookout combines Apple-style polish with practical recording states, layout switching, Apple Watch control, and a low-distraction Focus mode. The goal is not to overload creators with controls; it is to help them capture a better take.",
          "For searchers comparing split screen video recorder iPhone options, Lookout focuses on creator-ready capture rather than generic camera tricks.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I record split screen video with the front and rear iPhone cameras?",
        answer:
          "Yes. Lookout is built for front and back camera recording, including split-screen style layouts that show both perspectives in one take.",
      },
      {
        question: "Is split screen recording useful for reactions?",
        answer:
          "Yes. Reactions benefit from split screen because the viewer can see the event and the creator response at the same time.",
      },
      {
        question: "Does Lookout also support PiP recording?",
        answer:
          "Yes. Lookout includes PiP-style workflows for creators who want the scene full-size with a smaller face-cam overlay.",
      },
    ],
    related: [
      { label: "Dual camera recording app", href: "/dual-camera-recording-app" },
      { label: "PiP recording for travel vlogs", href: "/blog/pip-recording-for-travel-vlogs" },
      { label: "Front and back camera recording", href: "/front-and-back-camera-recording" },
    ],
  },
  "iphone-vlog-recording-app": {
    slug: "iphone-vlog-recording-app",
    title: "iPhone Vlog Recording App for Dual Camera Creators",
    description:
      "See how Lookout helps iPhone vloggers capture face-cam commentary and rear-camera context together with split-screen, PiP, and Apple Watch control.",
    eyebrow: "IPHONE VLOG RECORDING APP",
    h1: "What makes a great iPhone vlog recording app for creators?",
    intro:
      "A great iPhone vlog recording app should help creators capture a story without constantly flipping the camera or recording separate reaction clips. Lookout is designed for vloggers who want front and back camera recording, PiP narration, split-screen context, and a calm recording interface.",
    keywords: ["vlog recording app iPhone", "iPhone video recording for vloggers", "creator recording app"],
    sections: [
      {
        heading: "How do vloggers benefit from dual camera recording?",
        body: [
          "Vlogging often depends on two signals: what the creator sees and how the creator responds. Dual camera recording captures both signals together, which can make a clip feel more immediate and less edited.",
          "Lookout helps iPhone vloggers record the environment with the rear camera while keeping their commentary visible through the front camera. The result is more context in fewer takes.",
        ],
      },
      {
        heading: "Why is PiP recording helpful for travel vlogs?",
        body: [
          "PiP recording lets the travel scene stay large while the creator remains visible in a smaller frame. This is useful for walking tours, rides, food reviews, hotel walkthroughs, and city POV clips.",
          "For a vlog recording app iPhone users can rely on, the layout must be quick to understand and stable while recording. Lookout is built around that kind of mobile-first creator workflow.",
        ],
      },
      {
        heading: "How does Apple Watch control improve solo vlogging?",
        body: [
          "Solo vloggers often place their iPhone on a tripod, mount, ledge, or bike. Apple Watch camera control helps them preview and trigger recording without walking back to the phone for every take.",
          "That small workflow improvement can make a recording session feel more professional, especially when creators are capturing a sequence alone.",
        ],
      },
      {
        heading: "Can Lookout replace a multi-device vlog setup?",
        body: [
          "For many creator clips, yes. A second phone or camera can still help in advanced productions, but Lookout covers the common need: capturing the creator and the scene together in one synchronized iPhone recording.",
          "This makes Lookout a practical creator recording app for vloggers who value speed, context, and polished mobile capture.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is Lookout good for travel vlogging?",
        answer:
          "Yes. Lookout is useful for travel vlogs because it can record the rear-camera scene and front-camera commentary together.",
      },
      {
        question: "Can I use PiP for iPhone vlogs?",
        answer:
          "Yes. PiP recording is useful when the rear camera should dominate the frame while your face-cam remains visible.",
      },
      {
        question: "Does Lookout work for solo creators?",
        answer:
          "Yes. Voice control and Apple Watch camera control help solo creators record when the iPhone is mounted or out of reach.",
      },
    ],
    related: [
      { label: "Best dual camera apps for creators", href: "/blog/best-dual-camera-apps-for-creators" },
      { label: "PiP travel vlog guide", href: "/blog/pip-recording-for-travel-vlogs" },
      { label: "Apple Watch camera control guide", href: "/blog/apple-watch-camera-control-guide" },
    ],
  },
  "front-and-back-camera-recording": {
    slug: "front-and-back-camera-recording",
    title: "Front and Back Camera Recording on iPhone",
    description:
      "Learn how front and back camera recording helps iPhone creators capture reactions, context, vlogs, demos, and simultaneous camera footage with Lookout.",
    eyebrow: "FRONT AND BACK CAMERA RECORDING",
    h1: "How do you record front and back camera video on iPhone?",
    intro:
      "Front and back camera recording means capturing the selfie camera and rear camera at the same time. For creators, it solves a simple problem: a single camera often misses either the action or the human reaction. Lookout is designed to capture both.",
    keywords: ["front and back camera recording", "dual selfie and rear camera recording", "how to record front and back camera on iPhone"],
    sections: [
      {
        heading: "Why record the selfie and rear camera together?",
        body: [
          "Recording both cameras together gives viewers context. The rear camera shows the scene, while the selfie camera shows the creator's expression, explanation, or response.",
          "This makes front and back camera recording useful for reactions, tutorials, rides, inspections, demos, interviews, and daily creator updates.",
        ],
      },
      {
        heading: "How does simultaneous camera recording reduce editing?",
        body: [
          "When two camera angles are recorded separately, creators need to align, crop, and export them later. Simultaneous camera recording keeps the perspectives connected from the beginning.",
          "Lookout focuses on that first-take efficiency. Creators can choose Split, PiP, or Focus based on the story and capture a more complete clip directly on iPhone.",
        ],
      },
      {
        heading: "What layouts work best for front and back camera recording?",
        body: [
          "Split works well when both perspectives need equal space. PiP works well when the rear camera is primary and the selfie view supports the narration. Focus works well when creators need a quieter interface.",
          "Because different moments need different layouts, Lookout treats layout switching as part of the recording experience instead of burying it in settings.",
        ],
      },
      {
        heading: "Is front and back camera recording useful beyond social video?",
        body: [
          "Yes. It can help with field notes, evidence-style capture, creator education, product walkthroughs, training clips, and personal documentation. The point is simple: the viewer understands more when they can see both the subject and the recorder.",
          "For creators searching for dual selfie and rear camera recording, Lookout offers a focused iPhone-native path.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can iPhone record front and back cameras together?",
        answer:
          "With a purpose-built app like Lookout, creators can record front and back camera perspectives together in creator-friendly layouts.",
      },
      {
        question: "What is front and back camera recording best for?",
        answer:
          "It is best for reactions, vlogs, product demos, travel clips, tutorials, and context-rich recordings where the scene and the creator both matter.",
      },
      {
        question: "Can Apple Watch help with front and back camera recording?",
        answer:
          "Yes. Apple Watch remote preview and control can help when the iPhone is mounted or positioned away from the creator.",
      },
    ],
    related: [
      { label: "How to record front and back camera on iPhone", href: "/blog/how-to-record-front-and-back-camera-on-iphone" },
      { label: "Dual camera recording app", href: "/dual-camera-recording-app" },
      { label: "Split screen video recorder", href: "/split-screen-video-recorder" },
    ],
  },
};
