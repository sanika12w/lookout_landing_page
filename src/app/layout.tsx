import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lookout – Dual Camera Recorder by KIDA STUDIOS",
  description: "Capture everything around you with the ultimate dual-camera recorder for iPhone and Apple ecosystem. Built with Apple-level polish.",
  keywords: "Lookout, Dual Camera, iPhone Recorder, Security Recorder, KIDA STUDIOS, Front and Back Camera, Dashcam Mode, Apple Watch Camera Remote",
  authors: [{ name: "KIDA STUDIOS", url: "https://kidastudios.com" }],
  openGraph: {
    title: "Lookout – Dual Camera Recorder by KIDA STUDIOS",
    description: "Capture everything around you with the ultimate dual-camera recorder for iPhone. Front & back simultaneously.",
    url: "https://kidastudios.com/lookout",
    siteName: "Lookout by KIDA STUDIOS",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lookout – Dual Camera Recorder by KIDA STUDIOS",
    description: "Capture everything around you with the ultimate dual-camera recorder for iPhone. Front & back simultaneously.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="font-sans h-full antialiased scroll-smooth"
    >
      {/* <body className="min-h-full flex flex-col bg-[#fbfbfb] text-[#0d0d0f]"> */}
      
<body className="bg-[#fbfbfb] text-[#0d0d0f] overflow-x-hidden">


        {children}
      </body>
    </html>
  );
}
