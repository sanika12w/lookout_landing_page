import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lookout - Dual Camera Recorder for iPhone, Apple Watch, and Mac",
  description:
    "Lookout is a dual camera recording app for iPhone creators with front and back camera recording, split-screen video, PiP capture, Apple Watch control, and macOS compatibility.",
  keywords: [
    "dual camera recording app",
    "iPhone dual camera app",
    "front and back camera recording",
    "split screen video recorder",
    "PiP recording app",
    "vlog recording app iPhone",
    "Apple Watch camera control",
    "dual video recording iPhone",
    "best dual camera app for iPhone",
  ],
  alternates: {
    canonical: "https://apps.apple.com/in/app/lookout-dual-camera-recorder/id6744577632",
  },
  openGraph: {
    title: "Lookout - Dual Camera Recorder",
    description:
      "Record front and back camera video together on iPhone with Apple Watch control and Mac-compatible workflows.",
    url: "https://apps.apple.com/in/app/lookout-dual-camera-recorder/id6744577632",
    siteName: "Lookout",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeScript = `
    (() => {
      try {
        const saved = localStorage.getItem("lookout-theme");
        const preferred = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
        document.documentElement.dataset.theme = saved || preferred;
      } catch {
        document.documentElement.dataset.theme = "dark";
      }
    })();
  `;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
