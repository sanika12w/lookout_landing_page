import type { Metadata, Viewport } from "next";
import { absoluteUrl, APP_NAME, OG_IMAGE, seoKeywords, SITE_URL } from "@/lib/seo";
import "./globals.css";

const defaultTitle = "Lookout – Dual Camera Recording App for iPhone";
const defaultDescription =
  "Record front and rear cameras simultaneously using Split Screen, PiP, and Focus modes. Built for creators, vloggers, interviews, reactions, and content recording.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: APP_NAME,
  title: {
    default: defaultTitle,
    template: `%s | ${APP_NAME}`,
  },
  description: defaultDescription,
  keywords: seoKeywords,
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: absoluteUrl("/"),
    siteName: APP_NAME,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Lookout dual camera recorder for iPhone creators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f8fb" },
    { media: "(prefers-color-scheme: dark)", color: "#030407" },
  ],
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
        document.documentElement.dataset.theme = saved === "dark" || saved === "light" ? saved : "light";
      } catch {
        document.documentElement.dataset.theme = "light";
      }
    })();
  `;

  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
