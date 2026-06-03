export const showcaseModes = {
  Split: {
    label: "Split",
    title: "Split shows both sides at once.",
    text: "Place the rear scene and creator commentary side by side for reactions, demos, coaching clips, and explainers.",
    answer: "Split Screen recording places the front and rear iPhone camera feeds side by side so both perspectives share the frame.",
    status: "Recording split-screen in UHD",
    rearLabel: "REAR CAMERA",
    rearTitle: "Street-level POV",
    selfieLabel: "SELFIE CAMERA",
    selfieTitle: "Creator commentary",
  },
  PiP: {
    label: "PiP",
    title: "PiP keeps the creator in frame.",
    text: "Give the rear camera the main stage while a floating face-cam handles narration, reviews, and reactions.",
    answer: "PiP recording displays one camera feed inside another, making it ideal for reactions, commentary, interviews, and creator content.",
    status: "PiP face-cam locked to creator view",
    rearLabel: "MAIN SCENE",
    rearTitle: "Full-height capture",
    selfieLabel: "FACE CAM",
    selfieTitle: "Live reaction",
  },
  Focus: {
    label: "Focus",
    title: "Focus quiets the interface.",
    text: "Dim the preview and keep capture running when the iPhone is mounted or the setup needs less screen glow.",
    answer: "Focus mode keeps recording controls quiet and low-distraction while the iPhone continues capturing the scene.",
    status: "Focus mode recording with display dimmed",
    rearLabel: "FOCUS VIEW",
    rearTitle: "Dimmed POV",
    selfieLabel: "CONTROL",
    selfieTitle: "Quiet capture",
  },
} as const;

export type ShowcaseMode = keyof typeof showcaseModes;
