"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Experience", href: "#experience" },
    { name: "Privacy", href: "#privacy" },
    { name: "Why Lookout", href: "#why-lookout" },
    { name: "Ecosystem", href: "#ecosystem" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-white/80 backdrop-blur-md border-b border-neutral-200/40 shadow-xs"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="section-container flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-7 h-7 rounded-lg bg-linear-to-tr from-electric-blue via-cyan-glow to-soft-purple flex items-center justify-center p-[1px] shadow-sm">
              <div className="w-full h-full bg-white rounded-[6px] flex items-center justify-center relative overflow-hidden">
                <span className="w-3.5 h-3.5 rounded-full bg-linear-to-tr from-electric-blue via-cyan-glow to-soft-purple opacity-90 flex items-center justify-center">
                  <span className="w-1 h-1 rounded-full bg-white"></span>
                </span>
              </div>
            </div>
            <span className="font-bold text-lg tracking-tight text-neutral-900">
              Lookout<span className="text-electric-blue">.</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-9">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                // className="text-xs font-semibold text-neutral-500 hover:text-neutral-900 transition-colors"
                className="text-[11px] tracking-wide font-semibold text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="#download"
              className="group px-4 py-2 text-xs font-bold text-white bg-neutral-950 rounded-full hover:bg-neutral-800 transition-all flex items-center gap-1.5"
            >
              Get Lookout
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.25 group-hover:-translate-y-0.25 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-neutral-600 hover:text-neutral-900 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-x-0 top-[56px] z-45 md:hidden border-b border-neutral-200/40 bg-white/95 backdrop-blur-lg shadow-lg"
          >
            <div className="px-6 py-8 flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-semibold text-neutral-700 hover:text-neutral-950 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-neutral-200/30" />
              <a
                href="#download"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 bg-neutral-950 text-white rounded-xl font-bold text-xs text-center hover:bg-neutral-800 transition-colors flex items-center justify-center gap-1.5"
              >
                Download Lookout
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <br/>
    </>
  );
}
