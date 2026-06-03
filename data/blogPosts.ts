import type { FaqItem } from "@/lib/seo";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  keywords: string[];
  intro: string;
  sections: { heading: string; body: string[] }[];
  faqs: FaqItem[];
  related: { label: string; href: string }[];
};

export const blogPosts: Record<string, BlogPost> = {
  "how-to-record-front-and-back-camera-on-iphone": {
    slug: "how-to-record-front-and-back-camera-on-iphone",
    title: "How to Record Front and Back Camera on iPhone",
    description:
      "A creator-focused guide to recording the front and back camera on iPhone with dual camera layouts, split-screen video, PiP recording, and Apple Watch control.",
    date: "2026-05-29",
    readingTime: "6 min read",
    keywords: ["how to record front and back camera on iPhone", "front and back camera recording", "simultaneous camera recording"],
    intro:
      "The easiest way to record the front and back camera on iPhone is to use a dedicated dual camera recording app that captures both perspectives in one synchronized workflow. Lookout is designed for that job: record the scene, keep your face visible, and publish a more complete clip without juggling two devices.",
    sections: [
      {
        heading: "Can iPhone record the front and back camera at the same time?",
        body: [
          "The built-in camera app is excellent for standard capture, but creators often need a dedicated workflow for simultaneous camera recording. A dual camera recording app lets the selfie camera and rear camera work together so the viewer can see both the action and the creator response.",
          "This matters for vlogs, demos, travel POVs, reactions, and documentation. Instead of switching cameras mid-moment, you capture both signals from the beginning.",
        ],
      },
      {
        heading: "What is the best layout for front and back camera recording?",
        body: [
          "Split screen is useful when the creator and the scene deserve equal attention. PiP is better when the rear camera is the main story and the creator commentary supports it. Focus mode is helpful when you want the interface to stay quiet during a longer or mounted recording.",
          "Lookout includes these layout patterns so creators can adapt the frame to the story rather than forcing every clip into one format.",
        ],
      },
      {
        heading: "How do creators record cleaner first takes?",
        body: [
          "Start by choosing the layout before the moment begins. Keep the rear camera stable, make sure your selfie view is not blocking important action, and use Apple Watch control or voice control when the iPhone is mounted.",
          "A cleaner first take is usually about reducing friction. When the camera app feels calm, creators can focus on the story instead of managing the setup.",
        ],
      },
      {
        heading: "When should you use Apple Watch camera control?",
        body: [
          "Apple Watch camera control is most useful when the iPhone is away from your hands: mounted on a tripod, fixed to a bike, placed on a desk, or positioned for a solo shot. Remote preview and recording control keep the workflow from breaking.",
          "For solo creators, that can be the difference between a clip that feels improvised and one that feels intentional.",
        ],
      },
    ],
    faqs: [
      {
        question: "What app records front and back camera on iPhone?",
        answer:
          "Lookout is designed for front and back camera recording on iPhone, with split-screen, PiP, Focus mode, and Apple Watch camera control.",
      },
      {
        question: "Is front and back camera recording useful for TikTok and Reels?",
        answer:
          "Yes. It helps creators show the event and their reaction together, which can make short-form clips easier to understand.",
      },
      {
        question: "Can I record hands-free?",
        answer:
          "Lookout supports creator workflows that include voice control and Apple Watch control for mounted or solo recording setups.",
      },
    ],
    related: [
      { label: "Front and back camera recording", href: "/front-and-back-camera-recording" },
      { label: "Dual camera recording app", href: "/dual-camera-recording-app" },
      { label: "Apple Watch camera control guide", href: "/blog/apple-watch-camera-control-guide" },
    ],
  },
  "best-dual-camera-apps-for-creators": {
    slug: "best-dual-camera-apps-for-creators",
    title: "Best Dual Camera Apps for Creators",
    description:
      "What creators should look for in the best dual camera app for iPhone: simultaneous camera recording, PiP, split screen, Apple Watch control, and fast publishing.",
    date: "2026-05-29",
    readingTime: "7 min read",
    keywords: ["best dual camera apps for creators", "best dual camera app for iPhone", "creator recording app"],
    intro:
      "The best dual camera apps for creators are not just camera experiments. They help people record a complete story faster: the scene, the reaction, the context, and the creator's voice in one smooth capture flow.",
    sections: [
      {
        heading: "What should the best dual camera app include?",
        body: [
          "Creators should look for reliable simultaneous camera recording, front and back camera layouts, visible recording states, fast layout switching, and controls that stay usable while filming. If an app requires too much setup, it can interrupt the moment it is supposed to capture.",
          "Lookout focuses on the core creator workflow: Split for balanced views, PiP for scene-led clips, Focus for low-distraction capture, and Apple Watch control for solo setups.",
        ],
      },
      {
        heading: "Why does a creator recording app need more than one layout?",
        body: [
          "Different stories need different frames. A product demo may need a large rear-camera view with a small face-cam. A reaction clip may need equal front and rear views. A long field note may need a quieter display.",
          "A good creator recording app should make those layout choices fast and obvious instead of forcing creators into a single composition.",
        ],
      },
      {
        heading: "How important is Apple Watch camera control?",
        body: [
          "Apple Watch control is a major advantage for solo creators because it removes the repeated walk-back-to-the-phone problem. Creators can position the iPhone, check framing, start capture, and keep the session moving.",
          "This is especially helpful for vloggers, educators, fitness creators, travel creators, and people recording product or workspace walkthroughs.",
        ],
      },
      {
        heading: "Why is Lookout a strong iPhone dual camera app option?",
        body: [
          "Lookout is focused on the iPhone creator use case: record both sides of the story with a premium interface that does not feel like a complicated production panel.",
          "For creators comparing the best dual camera app for iPhone, Lookout stands out by combining dual camera recording, PiP, split screen, Focus mode, and Apple Watch camera control in one polished experience.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the best dual camera app for creators?",
        answer:
          "The best option depends on workflow, but Lookout is built specifically for iPhone creators who need front and back camera recording, PiP, split-screen layouts, and Apple Watch control.",
      },
      {
        question: "Do creators need simultaneous camera recording?",
        answer:
          "Creators benefit from simultaneous camera recording when they want the scene and reaction captured together without a second device.",
      },
      {
        question: "Is PiP better than split screen?",
        answer:
          "PiP is better when the scene is primary; split screen is better when the creator and scene need equal attention.",
      },
    ],
    related: [
      { label: "Dual camera recording app", href: "/dual-camera-recording-app" },
      { label: "iPhone vlog recording app", href: "/iphone-vlog-recording-app" },
      { label: "Split screen video recorder", href: "/split-screen-video-recorder" },
    ],
  },
  "pip-recording-for-travel-vlogs": {
    slug: "pip-recording-for-travel-vlogs",
    title: "PiP Recording for Travel Vlogs on iPhone",
    description:
      "Learn how PiP recording helps travel vloggers keep the scene full-size while showing face-cam commentary with an iPhone dual camera app.",
    date: "2026-05-29",
    readingTime: "6 min read",
    keywords: ["PiP recording app", "travel vlog recording iPhone", "vlog recording app iPhone"],
    intro:
      "PiP recording is one of the most useful layouts for travel vlogs because it keeps the environment large while preserving the creator's face and commentary. Lookout gives iPhone creators a polished way to record that dual-perspective format.",
    sections: [
      {
        heading: "Why does PiP recording work so well for travel vlogs?",
        body: [
          "Travel vlogs often need the viewer to see where the creator is, but the creator's reaction and narration still matter. PiP recording lets the rear camera carry the destination while the front camera provides a smaller, personal layer.",
          "That makes PiP useful for walking tours, food clips, transit notes, hotel walkthroughs, rides, and city POVs.",
        ],
      },
      {
        heading: "How should creators frame a PiP travel clip?",
        body: [
          "Keep the rear camera stable and give the scene enough space. Place the face-cam where it does not block the subject, signage, route, or important motion. The goal is to add personality without covering the story.",
          "Lookout's PiP workflow helps creators move quickly without needing to build the frame later in an editor.",
        ],
      },
      {
        heading: "When is split screen better than PiP for travel?",
        body: [
          "Split screen is better when the creator's expression is as important as the location, such as reactions, surprise moments, or side-by-side commentary.",
          "PiP is better when the place, object, or route is the main visual. Lookout supports both so the layout can match the moment.",
        ],
      },
      {
        heading: "How can Apple Watch control improve travel recording?",
        body: [
          "When the iPhone is mounted on a handlebar, tripod, or grip, Apple Watch control helps creators start recording without touching the phone. This keeps the shot stable and reduces missed moments.",
          "For solo travel creators, remote capture control is a practical upgrade, not a gimmick.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is PiP recording on iPhone?",
        answer:
          "PiP recording places one camera view as a smaller overlay while the other camera remains the primary view.",
      },
      {
        question: "Is PiP recording good for travel vlogs?",
        answer:
          "Yes. It keeps the destination visible while preserving creator commentary and reaction.",
      },
      {
        question: "Can Lookout switch between PiP and split screen?",
        answer:
          "Lookout is designed around Split, PiP, and Focus workflows for flexible creator recording.",
      },
    ],
    related: [
      { label: "iPhone vlog recording app", href: "/iphone-vlog-recording-app" },
      { label: "Split screen video recorder", href: "/split-screen-video-recorder" },
      { label: "How to record front and back camera", href: "/blog/how-to-record-front-and-back-camera-on-iphone" },
    ],
  },
  "apple-watch-camera-control-guide": {
    slug: "apple-watch-camera-control-guide",
    title: "Apple Watch Camera Control Guide for iPhone Creators",
    description:
      "A practical guide to Apple Watch camera control for iPhone creators using Lookout for dual camera recording, remote preview, and hands-free capture.",
    date: "2026-05-29",
    readingTime: "6 min read",
    keywords: ["Apple Watch camera control", "Apple Watch remote camera iPhone", "creator recording app"],
    intro:
      "Apple Watch camera control helps solo creators record with less friction. When the iPhone is mounted, positioned across the room, or used for a walking setup, wrist-based preview and recording control can keep the session moving.",
    sections: [
      {
        heading: "Why does Apple Watch camera control matter for creators?",
        body: [
          "Solo creators often need to place the iPhone somewhere useful and then step into the shot. Without remote control, every take requires walking back to the phone. Apple Watch control makes recording feel more intentional and less interrupted.",
          "For dual camera recording, that control is even more useful because the creator may need to confirm both the rear scene and the selfie view before starting.",
        ],
      },
      {
        heading: "What recording setups benefit most from Apple Watch?",
        body: [
          "Tripod shots, bike mounts, desk demos, fitness clips, cooking clips, product walkthroughs, and travel sequences all benefit from remote preview and control.",
          "Lookout's Apple Watch integration supports the kind of mounted-phone workflows that solo creators rely on when they need cleaner first takes.",
        ],
      },
      {
        heading: "How does Apple Watch control support dual camera recording?",
        body: [
          "Dual camera recording is more powerful when the creator can set the frame without touching the phone. Apple Watch control helps start and monitor capture while the iPhone stays in the best position.",
          "That is especially helpful for front and back camera recording because both views need to be considered before the moment begins.",
        ],
      },
      {
        heading: "Is Apple Watch control useful for everyday creator clips?",
        body: [
          "Yes. Even short clips can benefit from a calmer capture flow. Remote control makes it easier to record a short demo, reaction, or vlog segment without breaking the composition.",
          "For creators searching for Apple Watch camera control, Lookout connects the watch to a broader dual camera recording workflow.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can Apple Watch control iPhone video recording?",
        answer:
          "Lookout's App Store listing highlights Apple Watch integration for remote preview and recording control.",
      },
      {
        question: "Why use Apple Watch with a dual camera app?",
        answer:
          "It helps creators start and monitor recording when the iPhone is mounted or positioned away from their hands.",
      },
      {
        question: "Is Apple Watch control useful for vloggers?",
        answer:
          "Yes. Vloggers can frame a shot, step into position, and start recording without touching the phone.",
      },
    ],
    related: [
      { label: "Dual camera recording app", href: "/dual-camera-recording-app" },
      { label: "iPhone vlog recording app", href: "/iphone-vlog-recording-app" },
      { label: "Best dual camera apps for creators", href: "/blog/best-dual-camera-apps-for-creators" },
    ],
  },
};

export const blogIndex = Object.values(blogPosts);
