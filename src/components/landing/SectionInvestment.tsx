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
      className="py-24 bg-gradient-to-b from-granite-gray/20 to-obsidian-black relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-electric-purple/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-80 h-80 bg-jade-green/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radix-gradient opacity-5 rounded-full blur-3xl" />
      </div>

      <div className="container max-w-screen-xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-5xl lg:text-6xl font-display font-bold mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-signal-white">Why Invest </span>
            <span className="bg-radix-gradient bg-clip-text text-transparent">
              Now
            </span>
          </motion.h2>
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
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-radix-gradient opacity-20 rounded-2xl blur-xl group-hover:opacity-30 transition-opacity duration-500" />

              <motion.div
                className="relative p-8 bg-signal-white/5 backdrop-blur-sm border border-signal-white/10 rounded-2xl hover:border-signal-white/30 transition-all duration-300 h-full"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-start gap-6">
                  {/* Metric with animated circle */}
                  <div className="text-center relative">
                    <motion.div
                      className="relative"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="w-20 h-20 bg-radix-gradient rounded-full flex items-center justify-center mb-3 shadow-lg">
                        <span className="text-2xl font-display font-bold text-signal-white">
                          {point.value}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-radix-gradient rounded-full animate-pulse opacity-30" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-display font-semibold text-signal-white mb-3 group-hover:bg-radix-gradient group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {point.title}
                    </h3>
                    <p className="text-signal-white/70 mb-4 leading-relaxed">
                      {point.description}
                    </p>

                    {/* Details with enhanced styling */}
                    <ul className="space-y-3">
                      {point.details.map((detail, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-start gap-3 text-signal-white/80"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.4,
                            delay: index * 0.1 + idx * 0.1,
                          }}
                        >
                          <span className="w-2 h-2 rounded-full bg-jade-green mt-2 flex-shrink-0 shadow-sm shadow-jade-green/50" />
                          <span className="text-sm">{detail}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Decorative corner element */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-electric-purple/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-3 h-3 bg-electric-purple rounded-full animate-pulse" />
                </div>
              </motion.div>
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
                className="group relative text-center p-6 bg-signal-white/5 backdrop-blur-sm border border-signal-white/10 rounded-xl hover:border-signal-white/30 transition-all duration-300 overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Background gradient effect */}
                <div className="absolute inset-0 bg-radix-gradient opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

                <div className="relative z-10">
                  <motion.div
                    className="text-3xl font-bold text-signal-white mb-2"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {projection.value}
                  </motion.div>
                  <div className="text-signal-white/80 font-medium mb-1">
                    {projection.metric}
                  </div>
                  <div className="text-signal-white/60 text-sm">
                    {projection.status}
                  </div>
                </div>

                {/* Animated border effect */}
                <div className="absolute bottom-0 left-0 h-1 bg-radix-gradient transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Risk Mitigation */}
        <motion.div
          className="relative mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {/* Background container with enhanced styling */}
          <div className="relative bg-signal-white/5 backdrop-blur-sm border border-signal-white/10 rounded-3xl p-8 overflow-hidden">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-40 h-40 bg-electric-purple/30 rounded-full blur-2xl animate-pulse" />
              <div
                className="absolute bottom-0 right-0 w-32 h-32 bg-jade-green/30 rounded-full blur-2xl animate-pulse"
                style={{ animationDelay: "1s" }}
              />
            </div>

            <div className="relative z-10">
              <motion.h3
                className="text-3xl font-display font-semibold text-center mb-8"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-signal-white">Risk Mitigation </span>
                <span className="bg-radix-gradient bg-clip-text text-transparent">
                  Strategy
                </span>
              </motion.h3>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: "🎯",
                    title: "Portfolio Approach",
                    description:
                      "Multiple ventures reduce single-point-of-failure risk",
                    color: "electric-purple",
                  },
                  {
                    icon: "⚡",
                    title: "Rapid Validation",
                    description:
                      "4-8 week cycles minimize capital exposure per venture",
                    color: "jade-green",
                  },
                  {
                    icon: "💰",
                    title: "Revenue First",
                    description:
                      "Cash-flow positive MVPs before scaling investment",
                    color: "electric-purple",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="group text-center relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {/* Glow effect */}
                    <div
                      className={`absolute inset-0 bg-${item.color}/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl`}
                    />

                    <div className="relative p-6 bg-signal-white/5 rounded-2xl border border-signal-white/10 group-hover:border-signal-white/20 transition-all duration-300">
                      <motion.div
                        className={`w-20 h-20 bg-${item.color}/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-${item.color}/20 transition-all duration-300`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <span className={`text-${item.color} text-3xl`}>
                          {item.icon}
                        </span>
                      </motion.div>
                      <h4 className="font-semibold text-signal-white mb-3 text-lg">
                        {item.title}
                      </h4>
                      <p className="text-signal-white/70 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
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
          <h3 className="text-3xl font-display font-semibold text-signal-white mb-8">
            Investment Timeline
          </h3>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
            {[
              { text: "Seed Round: Q1 2026", color: "jade-green", delay: 0 },
              { text: "$5M Target", color: "electric-purple", delay: 0.1 },
              { text: "MVP-Driven ROI", color: "signal-white", delay: 0.2 },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`group flex items-center gap-3 px-8 py-4 bg-${item.color}/10 backdrop-blur-sm border border-${item.color}/20 rounded-full hover:border-${item.color}/40 transition-all duration-300 hover:scale-105`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: item.delay }}
              >
                <motion.span
                  className={`w-4 h-4 bg-${item.color} rounded-full shadow-lg shadow-${item.color}/50`}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-signal-white font-medium">
                  {item.text}
                </span>
              </motion.div>
            ))}
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
