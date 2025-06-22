import { useState } from "react";
import { motion } from "framer-motion";

export default function SectionPrinciples() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const principles = [
    {
      id: "dalio",
      name: "Dalio",
      title: "Radical Transparency",
      quote: "Radical dashboards; 6-month cash runway locked.",
      principles: [
        "All metrics visible to all team members",
        "6-month cash runway minimum at all times",
        "Weekly transparent progress reviews",
        "Failure post-mortems shared company-wide",
      ],
      example:
        "Every team member can see real-time burn rate, runway, and KPIs",
      color: "electric-purple",
    },
    {
      id: "turner",
      name: "Turner",
      title: "Revenue Validation",
      quote: "Cash-flow test every MVP.",
      principles: [
        "No venture without paying customers",
        "Revenue model validated before scale",
        "Customer discovery drives all decisions",
        "Profitability path defined at MVP stage",
      ],
      example: "Every MVP must show positive unit economics within 90 days",
      color: "jade-green",
    },
    {
      id: "apple",
      name: "Apple",
      title: "Design Excellence",
      quote: "Matte-black UX. Zero friction.",
      principles: [
        "User experience is non-negotiable",
        "Simplicity over feature bloat",
        "Design thinking in every decision",
        "Aesthetic and functional harmony",
      ],
      example: "Every interface passes the 'grandmother test' for usability",
      color: "electric-purple",
    },
    {
      id: "bezos",
      name: "Bezos",
      title: "Day 1 Mentality",
      quote: "Permanent Day 1. Ship at 70% confidence.",
      principles: [
        "Bias toward action over analysis paralysis",
        "Customer obsession drives everything",
        "Disagree and commit culture",
        "Long-term thinking with urgency",
      ],
      example: "Launch when 70% confident, iterate based on real feedback",
      color: "jade-green",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-granite-gray/20 to-obsidian-black">
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
            Guiding{" "}
            <span className="bg-radix-gradient bg-clip-text text-transparent">
              Principles
            </span>
          </h2>
          <p className="text-xl text-signal-white/80 max-w-3xl mx-auto">
            We stand on the shoulders of giants. These operational principles
            from proven leaders guide every decision we make.
          </p>
        </motion.div>

        {/* Principles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.id}
              className="relative group h-80"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredCard(principle.id)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              {/* Card Front */}
              <motion.div
                className={`absolute inset-0 p-6 bg-signal-white/5 backdrop-blur-sm border border-signal-white/10 rounded-xl cursor-pointer transition-all duration-300 ${
                  hoveredCard === principle.id ? "opacity-0" : "opacity-100"
                }`}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex flex-col h-full">
                  {/* Icon/Initial */}
                  <div
                    className={`w-12 h-12 rounded-full bg-${principle.color}/20 flex items-center justify-center mb-4`}
                  >
                    <span className="text-signal-white font-bold text-lg">
                      {principle.name[0]}
                    </span>
                  </div>

                  {/* Name & Title */}
                  <h3 className="text-xl font-display font-semibold text-signal-white mb-2">
                    {principle.name}
                  </h3>
                  <h4 className="text-signal-white/80 text-sm mb-4">
                    {principle.title}
                  </h4>

                  {/* Quote */}
                  <blockquote className="text-signal-white/70 italic text-sm leading-relaxed flex-1">
                    "{principle.quote}"
                  </blockquote>

                  {/* Hover Indicator */}
                  <div className="mt-auto pt-4">
                    <div className="text-signal-white/40 text-xs">
                      Hover for details →
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card Back - Detailed View */}
              <motion.div
                className={`absolute inset-0 p-6 bg-gradient-to-br from-${principle.color}/10 to-obsidian-black border border-${principle.color}/20 rounded-xl transition-all duration-300 ${
                  hoveredCard === principle.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-lg font-display font-semibold text-signal-white mb-1">
                      {principle.name} Principles
                    </h3>
                    <div
                      className={`w-8 h-0.5 bg-${principle.color} rounded-full`}
                    />
                  </div>

                  {/* Principles List */}
                  <ul className="space-y-2 flex-1 text-xs">
                    {principle.principles.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-signal-white/80"
                      >
                        <span
                          className={`w-1 h-1 rounded-full bg-${principle.color} mt-2 flex-shrink-0`}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Example SOP */}
                  <div className="mt-4 pt-3 border-t border-signal-white/10">
                    <div className="text-signal-white/60 text-xs font-medium mb-1">
                      Example SOP:
                    </div>
                    <div className="text-signal-white/70 text-xs">
                      {principle.example}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-signal-white/70 mb-6">
            These principles aren't just wall art—they're our operating system.
          </p>
          <button className="px-8 py-4 border-2 border-signal-white/20 text-signal-white font-semibold rounded-lg hover:border-signal-white/40 transition-colors">
            View Our Full Playbook
          </button>
        </motion.div>
      </div>
    </section>
  );
}
