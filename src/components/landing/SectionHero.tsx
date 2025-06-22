import { motion } from "framer-motion";

export default function SectionHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-obsidian-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-obsidian-black via-granite-gray/20 to-obsidian-black" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-electric-purple/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-20 w-80 h-80 bg-jade-green/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="container max-w-screen-xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* A/B Test Variant Container */}
          <div data-builder-io-ab-test="hero-headline">
            <h1 className="text-5xl lg:text-7xl font-display font-bold text-signal-white leading-tight">
              A Lab Forged to{" "}
              <span className="bg-radix-gradient bg-clip-text text-transparent">
                Solve Root Problems
              </span>
            </h1>
          </div>

          <p className="text-xl text-signal-white/80 leading-relaxed max-w-lg">
            Radix Obsidian incubates AI-driven ventures that erase systemic pain
            points—then spins them out with equity back to the lab.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              className="px-8 py-4 bg-radix-gradient text-signal-white font-semibold rounded-lg text-lg hover:scale-105 transition-transform shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Request Investor Deck
            </motion.button>

            <motion.button
              className="px-8 py-4 border-2 border-signal-white/20 text-signal-white font-semibold rounded-lg text-lg hover:border-signal-white/40 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See MVP Demos
            </motion.button>
          </div>

          {/* Stats Preview */}
          <div className="flex items-center space-x-8 pt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-signal-white">3</div>
              <div className="text-sm text-signal-white/60">Divisions</div>
            </div>
            <div className="w-px h-8 bg-signal-white/20" />
            <div className="text-center">
              <div className="text-2xl font-bold text-signal-white">90</div>
              <div className="text-sm text-signal-white/60">Days to MVP</div>
            </div>
            <div className="w-px h-8 bg-signal-white/20" />
            <div className="text-center">
              <div className="text-2xl font-bold text-signal-white">
                Q2 2026
              </div>
              <div className="text-sm text-signal-white/60">
                Series A Target
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Content - Container Campus Render */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative">
            {/* Placeholder for shipping container HQ render */}
            <div className="aspect-square bg-gradient-to-br from-granite-gray/20 to-obsidian-black border border-signal-white/10 rounded-2xl flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 mx-auto bg-signal-white/10 rounded-full flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-signal-white/60"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m0 0h3M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <div className="text-signal-white/60 text-sm">
                  Container Campus HQ
                  <br />
                  <span className="text-xs">3D Render Coming Soon</span>
                </div>
              </div>
            </div>

            {/* Parallax Effect Wrapper */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-electric-purple/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-jade-green/20 rounded-full blur-xl" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-signal-white/60 text-sm">
            Scroll to explore
          </span>
          <motion.div
            className="w-6 h-10 border-2 border-signal-white/30 rounded-full flex justify-center"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-1 h-3 bg-signal-white/60 rounded-full mt-2" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
