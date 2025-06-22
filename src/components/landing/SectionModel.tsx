import { motion } from "framer-motion";

export default function SectionModel() {
  const steps = [
    {
      number: "01",
      title: "Identify Root Pain",
      description:
        "Deep research into systemic problems across our target sectors",
      icon: "🔍",
      metrics: "Research Phase",
    },
    {
      number: "02",
      title: "Rapid MVP",
      description:
        "Build functional prototype in ≤90 days with core problem-solving features",
      icon: "⚡",
      metrics: "≤90 Days",
    },
    {
      number: "03",
      title: "Pilot & Monetize",
      description:
        "Test with real customers, validate revenue model, iterate based on feedback",
      icon: "💰",
      metrics: "Cash-Flow+",
    },
    {
      number: "04",
      title: "Spin-out w/ IP & Equity",
      description:
        "Graduate successful ventures as independent companies with lab equity stake",
      icon: "🚀",
      metrics: "Exit Strategy",
    },
  ];

  return (
    <section
      id="model"
      className="py-24 bg-gradient-to-b from-granite-gray/20 to-obsidian-black"
    >
      <div className="container max-w-screen-xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-signal-white mb-6">
            From Root Problem to{" "}
            <span className="bg-radix-gradient bg-clip-text text-transparent">
              Revenue in &lt; 90 Days
            </span>
          </h2>
          <p className="text-xl text-signal-white/80 max-w-3xl mx-auto">
            Our proven model transforms deep industry pain points into
            profitable ventures through rapid iteration and strategic spin-outs.
          </p>
        </motion.div>

        {/* Process Stepper */}
        <div className="relative">
          {/* Desktop Horizontal Stepper */}
          <div className="hidden lg:block">
            <div className="flex items-center justify-between mb-12">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Connection Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-signal-white/20 to-signal-white/20 z-0" />
                  )}

                  {/* Step Circle */}
                  <motion.div
                    className="w-32 h-32 bg-signal-white/5 backdrop-blur-sm border-2 border-signal-white/20 rounded-full flex items-center justify-center mb-4 relative z-10"
                    whileHover={{
                      scale: 1.05,
                      borderColor: "hsl(var(--accent))",
                    }}
                  >
                    <span className="text-3xl">{step.icon}</span>
                  </motion.div>

                  {/* Step Content */}
                  <div className="text-center max-w-xs">
                    <div className="text-sm font-mono text-electric-purple mb-2">
                      {step.number}
                    </div>
                    <h3 className="text-lg font-semibold text-signal-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-signal-white/70 text-sm leading-relaxed mb-3">
                      {step.description}
                    </p>
                    <div className="inline-block px-3 py-1 bg-radix-gradient rounded-full text-xs text-signal-white font-medium">
                      {step.metrics}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Vertical Stepper */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex gap-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Step Circle */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-signal-white/5 backdrop-blur-sm border-2 border-signal-white/20 rounded-full flex items-center justify-center">
                    <span className="text-xl">{step.icon}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-12 bg-signal-white/20 mx-auto mt-4" />
                  )}
                </div>

                {/* Step Content */}
                <div className="flex-1 pb-8">
                  <div className="text-sm font-mono text-electric-purple mb-2">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-signal-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-signal-white/70 mb-4">
                    {step.description}
                  </p>
                  <div className="inline-block px-3 py-1 bg-radix-gradient rounded-full text-xs text-signal-white font-medium">
                    {step.metrics}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Metrics Chips */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="px-6 py-3 bg-signal-white/5 backdrop-blur-sm border border-signal-white/10 rounded-full">
            <span className="text-signal-white/60 text-sm">
              Average Build Cost:{" "}
            </span>
            <span className="text-signal-white font-semibold">$50K-150K</span>
          </div>
          <div className="px-6 py-3 bg-signal-white/5 backdrop-blur-sm border border-signal-white/10 rounded-full">
            <span className="text-signal-white/60 text-sm">
              Time to Pilot:{" "}
            </span>
            <span className="text-signal-white font-semibold">4-8 Weeks</span>
          </div>
          <div className="px-6 py-3 bg-signal-white/5 backdrop-blur-sm border border-signal-white/10 rounded-full">
            <span className="text-signal-white/60 text-sm">Success Rate: </span>
            <span className="text-signal-white font-semibold">Target 70%+</span>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <button className="px-8 py-4 bg-radix-gradient text-signal-white font-semibold rounded-lg text-lg hover:scale-105 transition-transform">
            See Our Model in Action
          </button>
        </motion.div>
      </div>
    </section>
  );
}
