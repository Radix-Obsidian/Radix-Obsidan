import { motion } from "framer-motion";

export default function SectionMission() {
  return (
    <section
      id="mission"
      className="py-24 bg-gradient-to-b from-obsidian-black to-granite-gray/20"
    >
      <div className="container max-w-screen-xl mx-auto px-6">
        {/* Stats Bar */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center p-8 bg-signal-white/5 backdrop-blur-sm rounded-xl border border-signal-white/10">
            <div className="text-4xl font-display font-bold text-signal-white mb-2">
              3
            </div>
            <div className="text-signal-white/80 font-medium">Divisions</div>
            <div className="text-signal-white/60 text-sm mt-1">
              Tech • Robotics • Sports
            </div>
          </div>

          <div className="text-center p-8 bg-signal-white/5 backdrop-blur-sm rounded-xl border border-signal-white/10">
            <div className="text-4xl font-display font-bold text-signal-white mb-2">
              3
            </div>
            <div className="text-signal-white/80 font-medium">
              Active Pilots
            </div>
            <div className="text-signal-white/60 text-sm mt-1">
              Canton, Ohio high schools
            </div>
          </div>

          <div className="text-center p-8 bg-signal-white/5 backdrop-blur-sm rounded-xl border border-signal-white/10">
            <div className="text-4xl font-display font-bold text-signal-white mb-2">
              $5M
            </div>
            <div className="text-signal-white/80 font-medium">Seed Target</div>
            <div className="text-signal-white/60 text-sm mt-1">
              MVP-driven funding round
            </div>
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-signal-white mb-8 leading-tight">
            Rooted in Truth.{" "}
            <span className="bg-radix-gradient bg-clip-text text-transparent">
              Forged in Fire.
            </span>
          </h2>

          <p className="text-xl text-signal-white/80 leading-relaxed mb-8">
            We don't chase trends or build solutions looking for problems. At
            Radix Obsidian, we start with the deepest pain points that matter
            most—then architect the future around solving them definitively.
          </p>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="space-y-4">
              <h3 className="text-2xl font-display font-semibold text-signal-white">
                Our North Star
              </h3>
              <p className="text-signal-white/70">
                Build ventures that don't just succeed—they transform entire
                industries by addressing root causes, not symptoms.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-display font-semibold text-signal-white">
                Our Promise
              </h3>
              <p className="text-signal-white/70">
                Every lab creation becomes a spin-out with shared equity,
                creating a diversified portfolio of world-changing companies.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          className="grid md:grid-cols-4 gap-6 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {[
            {
              title: "Problem-First",
              description: "Start with pain, not product ideas",
            },
            { title: "Rapid MVP", description: "90-day build cycles maximum" },
            {
              title: "Cash-Flow Test",
              description: "Revenue validation before scale",
            },
            {
              title: "Equity Return",
              description: "Lab shares in every spin-out",
            },
          ].map((value, index) => (
            <motion.div
              key={index}
              className="p-6 bg-signal-white/5 backdrop-blur-sm rounded-lg border border-signal-white/10 hover:border-signal-white/20 transition-colors"
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="text-lg font-semibold text-signal-white mb-2">
                {value.title}
              </h4>
              <p className="text-signal-white/70 text-sm">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
