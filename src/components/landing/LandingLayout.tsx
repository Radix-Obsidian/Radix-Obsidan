import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface LandingLayoutProps {
  children: React.ReactNode;
}

export default function LandingLayout({ children }: LandingLayoutProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-obsidian-black">
      {/* Sticky Navigation */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrollY > 64
            ? "bg-obsidian-black/95 backdrop-blur-md border-b border-granite-gray/20"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container max-w-screen-xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <span className="text-signal-white font-display font-bold text-xl">
                Radix ⚒︎
              </span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#mission"
                className="text-signal-white/80 hover:text-signal-white transition-colors font-medium"
                data-scroll="soft"
              >
                Mission
              </a>
              <a
                href="#model"
                className="text-signal-white/80 hover:text-signal-white transition-colors font-medium"
                data-scroll="soft"
              >
                Model
              </a>
              <a
                href="#divisions"
                className="text-signal-white/80 hover:text-signal-white transition-colors font-medium"
                data-scroll="soft"
              >
                Divisions
              </a>
              <a
                href="#investment"
                className="text-signal-white/80 hover:text-signal-white transition-colors font-medium"
                data-scroll="soft"
              >
                Investment
              </a>
            </div>

            {/* CTA Button */}
            <div className="flex items-center space-x-4">
              <button className="hidden sm:inline-flex px-4 py-2 text-sm font-medium text-signal-white/80 hover:text-signal-white transition-colors">
                Download 1-Pager
              </button>
              <button className="px-6 py-3 bg-radix-gradient text-signal-white font-semibold rounded-lg hover:scale-105 transition-transform">
                Request Investor Deck
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <main className="relative">{children}</main>

      {/* Smooth scroll behavior */}
      <style jsx>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
