"use client";

import Link from "next/link";
import { AppLogo } from "@/components/ui/AppLogo";
import { ExternalAppStoreLink } from "@/components/ui/AppStoreButton";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Footer() {
  return (
    <footer className="px-5 pb-10">
      <div className="footer-shell">
        <div>
          <div className="flex items-center gap-3">
            <AppLogo size={36} />
            <b>Lookout</b>
          </div>
          <p className="mt-4 max-w-sm">
            Premium dual-camera recording for iPhone creators, Apple Watch control, and Mac-compatible workflows.
          </p>
        </div>
        <nav className="flex flex-wrap items-center gap-6" aria-label="Footer navigation">
          <Link href="/#showcase">Split Screen, PiP, and Focus demo</Link>
          <Link href="/#platforms">Apple Watch camera control</Link>
          <Link href="/dual-camera-recording-app">Dual camera recording app guide</Link>
          <Link href="/split-screen-video-recorder">Split screen video recorder guide</Link>
          <Link href="/blog">Dual camera recording blog</Link>
          <ExternalAppStoreLink className="footer-store-link">App Store</ExternalAppStoreLink>
          <ThemeToggle />
        </nav>
      </div>
    </footer>
  );
}
