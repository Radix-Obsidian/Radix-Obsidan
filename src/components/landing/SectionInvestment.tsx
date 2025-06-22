import { motion } from "framer-motion";

export default function SectionInvestment() {
  const investmentPoints = [
    {
      title: "Massive TAM",
      value: "$50B+",
      description:
        "Combined addressable market across fintech-edtech, sports tech, and wearable sensors",
      details: [
        "Financial literacy education: $15B",
        "Sports injury prevention: $20B",
        "Wearable health sensors: $15B+",
      ],
    },
    {
      title: "Cash-Flow Positive MVPs",
      value: "90 Days",
      description:
        "Every venture validates revenue model before spin-out, reducing investor risk",
      details: [
        "Customer validation before scale",
        "Proven unit economics",
        "Diversified revenue streams",
      ],
    },
    {
      title: "Diversified Equity Pool",
      value: "20-30%",
      description:
        "Lab retains equity in every spin-out, creating portfolio value multiplication",
      details: [
        "Equity stakes in all ventures",
        "Portfolio risk distribution",
        "Compounding value creation",
      ],
    },
    {
      title: "Black-Led Innovation",
      value: "ESG+",
      description:
        "Underrepresented leadership driving innovation in critical sectors",
      details: [
        "ESG investment thesis alignment",
        "Diverse perspective advantage",
        "Impact beyond returns",
      ],
    },
  ];

  const financialProjections = [
    {
      metric: "Current Status",
      value: "100% Bootstrapped",
      status: "pre-seed",
    },
    { metric: "Seed Round Target", value: "$5M", status: "2025" },
    { metric: "Expected Spin-outs", value: "3-5", status: "2025-2027" },
    { metric: "Series A Target", value: "$50M", status: "2027" },
  ];

  return (
    <section
      id="investment"
      className="py-24 bg-gradient-to-b from-granite-gray/20 to-signal-white/5"
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
          <h2 className="text-5xl lg:text-6xl font-serif text-signal-white mb-6">
            Why Invest Now
          </h2>
          <p className="text-xl text-signal-white/80 max-w-3xl mx-auto leading-relaxed">
            The convergence of AI maturity, market demand, and diverse
            leadership creates an unprecedented opportunity for venture returns.
          </p>
        </motion.div>

        {/* Investment Thesis Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {investmentPoints.map((point, index) => (
            <motion.div
              key={index}
              className="p-8 bg-signal-white/80 backdrop-blur-sm border border-obsidian-black/10 rounded-2xl hover:border-obsidian-black/20 transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-6">
                {/* Metric */}
                <div className="text-center">
                  <div className="text-4xl font-display font-bold text-signal-white mb-2">
                    {point.value}
                  </div>
                  <div className="w-12 h-0.5 bg-electric-purple rounded-full mx-auto" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-display font-semibold text-signal-white mb-3">
                    {point.title}
                  </h3>
                  <p className="text-signal-white/70 mb-4 leading-relaxed">
                    {point.description}
                  </p>

                  {/* Details */}
                  <ul className="space-y-2">
                    {point.details.map((detail, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-signal-white/60"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-jade-green mt-2 flex-shrink-0" />
                        <span className="text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Financial Projections */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-3xl font-display font-semibold text-signal-white text-center mb-8">
            Financial Trajectory
          </h3>

          <div className="grid md:grid-cols-4 gap-6">
            {financialProjections.map((projection, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-signal-white/80 backdrop-blur-sm border border-obsidian-black/10 rounded-xl"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-3xl font-bold text-obsidian-black mb-2">
                  {projection.value}
                </div>
                <div className="text-obsidian-black/70 font-medium mb-1">
                  {projection.metric}
                </div>
                <div className="text-obsidian-black/50 text-sm">
                  {projection.status}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Risk Mitigation */}
        <motion.div
          className="bg-signal-white/60 backdrop-blur-sm border border-obsidian-black/10 rounded-2xl p-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl font-display font-semibold text-signal-white mb-6 text-center">
            Risk Mitigation Strategy
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-electric-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-electric-purple text-2xl">🎯</span>
              </div>
              <h4 className="font-semibold text-signal-white mb-2">
                Portfolio Approach
              </h4>
              <p className="text-signal-white/70 text-sm">
                Multiple ventures reduce single-point-of-failure risk
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-jade-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-jade-green text-2xl">⚡</span>
              </div>
              <h4 className="font-semibold text-signal-white mb-2">
                Rapid Validation
              </h4>
              <p className="text-signal-white/70 text-sm">
                90-day cycles minimize capital exposure per venture
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-electric-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-electric-purple text-2xl">💰</span>
              </div>
              <h4 className="font-semibold text-signal-white mb-2">
                Revenue First
              </h4>
              <p className="text-signal-white/70 text-sm">
                Cash-flow positive MVPs before scaling investment
              </p>
            </div>
          </div>
        </motion.div>

        {/* Investment Timeline */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-2xl font-display font-semibold text-signal-white mb-6">
            Investment Timeline
          </h3>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <div className="flex items-center gap-3 px-6 py-3 bg-jade-green/20 rounded-full">
              <span className="w-3 h-3 bg-jade-green rounded-full" />
              <span className="text-signal-white font-medium">
                Seed Round: Q1 2026
              </span>
            </div>
            <div className="hidden md:block w-8 h-0.5 bg-signal-white/20" />
            <div className="flex items-center gap-3 px-6 py-3 bg-electric-purple/20 rounded-full">
              <span className="w-3 h-3 bg-electric-purple rounded-full" />
              <span className="text-signal-white font-medium">$5M Target</span>
            </div>
            <div className="hidden md:block w-8 h-0.5 bg-signal-white/20" />
            <div className="flex items-center gap-3 px-6 py-3 bg-signal-white/10 rounded-full">
              <span className="w-3 h-3 bg-signal-white rounded-full" />
              <span className="text-signal-white font-medium">
                MVP-Driven ROI
              </span>
            </div>
          </div>
        </motion.div>

        {/* Legal Disclaimer */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <p className="text-signal-white/40 text-xs max-w-4xl mx-auto leading-relaxed">
            * This presentation contains forward-looking statements. Past
            performance does not guarantee future results. Investment in early
            stage ventures involves substantial risk of loss. Projections are
            based on current market conditions and management assumptions.
            Consult with qualified financial advisors before making investment
            decisions. Securities offered under applicable exemptions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
