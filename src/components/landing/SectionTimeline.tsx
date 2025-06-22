import { motion } from "framer-motion";

export default function SectionTimeline() {
  const milestones = [
    {
      quarter: "Q3 2025",
      title: "Lab Foundation",
      status: "completed",
      items: [
        "Team assembly complete",
        "Shipping container HQ operational",
        "100% bootstrapped operations",
        "Division leads onboarded",
      ],
    },
    {
      quarter: "Q4 2025",
      title: "MVP Development",
      status: "in-progress",
      items: [
        "Tech Division: Smart Waste Classifier beta",
        "Robotics Division: Litter Rover prototype",
        "Sports Division: Form Analytics MVP",
        "First customer pilots initiated",
      ],
    },
    {
      quarter: "Q1 2026",
      title: "Seed Round Close",
      status: "upcoming",
      items: [
        "Revenue validation for all MVPs",
        "Customer acquisition proven",
        "$5M seed funding secured",
        "Scale team to 15+ members",
      ],
    },
    {
      quarter: "Q2 2026",
      title: "Market Expansion",
      status: "upcoming",
      items: [
        "First venture spin-out complete",
        "Additional market validation",
        "Series A prep initiated",
        "Next division research begins",
      ],
    },
    {
      quarter: "Q3 2026",
      title: "Portfolio Growth",
      status: "upcoming",
      items: [
        "Second spin-out in progress",
        "New division verticals explored",
        "Strategic partnerships activated",
        "International expansion planning",
      ],
    },
    {
      quarter: "Q4 2026",
      title: "Scale & Multiply",
      status: "upcoming",
      items: [
        "3-venture portfolio active",
        "Lab model proven & documented",
        "Industry recognition achieved",
        "Series B planning initiated",
      ],
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "jade-green";
      case "in-progress":
        return "electric-purple";
      case "upcoming":
        return "signal-white/40";
      default:
        return "signal-white/20";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return "✓";
      case "in-progress":
        return "⚡";
      case "upcoming":
        return "○";
      default:
        return "○";
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-obsidian-black to-granite-gray/20">
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
            Traction{" "}
            <span className="bg-radix-gradient bg-clip-text text-transparent">
              Timeline
            </span>
          </h2>
          <p className="text-xl text-signal-white/80 max-w-3xl mx-auto mb-4">
            Our roadmap from lab foundation to portfolio of successful
            spin-outs, tracked in real-time.
          </p>
          <div className="inline-flex items-center gap-2 text-sm text-signal-white/60">
            <div className="w-2 h-2 bg-jade-green rounded-full animate-pulse" />
            Live updates via Supabase Realtime
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-signal-white/20" />

            {/* Milestones */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  className="relative flex items-start gap-8"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div
                      className={`w-16 h-16 rounded-full border-4 border-${getStatusColor(
                        milestone.status,
                      )} bg-obsidian-black flex items-center justify-center`}
                    >
                      <span
                        className={`text-${getStatusColor(
                          milestone.status,
                        )} text-xl`}
                      >
                        {getStatusIcon(milestone.status)}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="bg-signal-white/5 backdrop-blur-sm border border-signal-white/10 rounded-xl p-6 hover:border-signal-white/20 transition-colors">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-display font-semibold text-signal-white mb-1">
                            {milestone.title}
                          </h3>
                          <div className="text-signal-white/60 text-sm">
                            {milestone.quarter}
                          </div>
                        </div>

                        {/* Status Badge */}
                        <div
                          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${
                            milestone.status === "completed"
                              ? "bg-jade-green/20 text-jade-green"
                              : milestone.status === "in-progress"
                                ? "bg-electric-purple/20 text-electric-purple"
                                : "bg-signal-white/10 text-signal-white/60"
                          }`}
                        >
                          <span>{getStatusIcon(milestone.status)}</span>
                          {milestone.status.replace("-", " ").toUpperCase()}
                        </div>
                      </div>

                      {/* Milestone Items */}
                      <ul className="space-y-2">
                        {milestone.items.map((item, itemIndex) => (
                          <motion.li
                            key={itemIndex}
                            className="flex items-start gap-3 text-signal-white/70"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.4,
                              delay: index * 0.1 + itemIndex * 0.05,
                            }}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full bg-${getStatusColor(
                                milestone.status,
                              )} mt-2 flex-shrink-0`}
                            />
                            <span className="text-sm">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Progress Stats */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="text-center p-6 bg-signal-white/5 backdrop-blur-sm rounded-xl border border-signal-white/10">
            <div className="text-3xl font-bold text-jade-green mb-2">33%</div>
            <div className="text-signal-white/80">Milestones Complete</div>
            <div className="text-signal-white/60 text-xs mt-1">
              On track for Series A
            </div>
          </div>
          <div className="text-center p-6 bg-signal-white/5 backdrop-blur-sm rounded-xl border border-signal-white/10">
            <div className="text-3xl font-bold text-electric-purple mb-2">
              Q1 2026
            </div>
            <div className="text-signal-white/80">Seed Round Target</div>
            <div className="text-signal-white/60 text-xs mt-1">
              MVP traction driving timeline
            </div>
          </div>
          <div className="text-center p-6 bg-signal-white/5 backdrop-blur-sm rounded-xl border border-signal-white/10">
            <div className="text-3xl font-bold text-signal-white mb-2">$5M</div>
            <div className="text-signal-white/80">Seed Target</div>
            <div className="text-signal-white/60 text-xs mt-1">
              Bootstrapped momentum strong
            </div>
          </div>
        </motion.div>

        {/* Real-time Update Disclaimer */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-signal-white/50 text-sm">
            This timeline updates automatically as we hit milestones. Last
            updated via Supabase Realtime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
