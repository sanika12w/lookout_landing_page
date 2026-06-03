"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, m } from "framer-motion";
import { Menu, X } from "lucide-react";
import { AppLogo } from "@/components/ui/AppLogo";
import { ExternalAppStoreLink } from "@/components/ui/AppStoreButton";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const navLinks = [
  { href: "/#showcase", label: "Split, PiP, Focus" },
  { href: "/#platforms", label: "Apple Watch Control" },
  { href: "/#features", label: "Dual Camera Tools" },
  { href: "/#workflow", label: "How to Record" },
  { href: "/#faq", label: "Dual Camera FAQ" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const firstMobileLink = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);

    if (open) {
      firstMobileLink.current?.focus();
    }

    return () => document.body.classList.remove("nav-open");
  }, [open]);

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <m.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed left-0 right-0 top-0 z-50 px-4 pt-4"
    >
      <nav className="nav-shell" aria-label="Primary navigation">
        <Link href="/" className="brand-link" aria-label="Lookout home">
          <AppLogo priority />
          <span className="brand-text">Lookout</span>
        </Link>
        <div className="nav-links" aria-label="Primary sections">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <ExternalAppStoreLink className="nav-cta">App Store</ExternalAppStoreLink>
          <button
            type="button"
            className="menu-button"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <>
            <m.div
              className="mobile-nav-backdrop open"
              aria-hidden="true"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.24 }}
            />
            <m.div
              id="mobile-navigation"
              className="mobile-nav-panel"
              aria-hidden="false"
              initial={{ opacity: 0, y: -18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -18, scale: 0.98 }}
              transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
            >
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  ref={index === 0 ? firstMobileLink : undefined}
                  href={link.href}
                  tabIndex={0}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <ExternalAppStoreLink className="mobile-store-link" tabIndex={0} onClick={() => setOpen(false)}>
                App Store
              </ExternalAppStoreLink>
            </m.div>
          </>
        )}
      </AnimatePresence>
    </m.header>
  );
}
