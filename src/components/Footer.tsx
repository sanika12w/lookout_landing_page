"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Support", href: "#support" },
    { name: "Press Kit", href: "#press" },
  ];

  return (
    <footer className="bg-[#fbfbfb] border-t border-neutral-200/40 py-12 md:py-16">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1.5">
            <div className="flex items-center gap-2">
              <div className="w-5.5 h-5.5 rounded-md bg-linear-to-tr from-electric-blue via-cyan-glow to-soft-purple flex items-center justify-center p-[0.75px]">
                <div className="w-full h-full bg-white rounded-[4.5px] flex items-center justify-center relative overflow-hidden">
                  <span className="w-2.5 h-2.5 rounded-full bg-linear-to-tr from-electric-blue via-cyan-glow to-soft-purple opacity-90 flex items-center justify-center">
                    <span className="w-0.75 h-0.75 rounded-full bg-white"></span>
                  </span>
                </div>
              </div>
              <span className="font-extrabold text-sm tracking-tight text-neutral-800">
                Lookout
              </span>
            </div>
            <p className="text-[10px] font-semibold text-neutral-400">
              &copy; {currentYear} KIDA STUDIOS. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] font-bold text-neutral-400 hover:text-neutral-700 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

        </div>
        
        {/* Apple Ecosystem disclaimer */}
        <div className="mt-10 pt-8 border-t border-neutral-200/20 text-center text-[9px] font-semibold text-neutral-400 max-w-2xl mx-auto leading-normal">
          Apple, iPhone, Apple Watch, Mac, FaceTime, AirDrop, and Final Cut Pro are trademarks of Apple Inc., registered in the U.S. and other countries. Lookout is an independent application published by KIDA STUDIOS and is not affiliated with or endorsed by Apple Inc.
        </div>
      </div>
    </footer>
  );
}
