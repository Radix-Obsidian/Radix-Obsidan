import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SectionDivisions() {
  const [activeTab, setActiveTab] = useState("tech");

  const divisions = {
    tech: {
      title: "Fintech Division",
      lead: {
        name: "Sarah Chen",
        role: "Lead Engineer",
        avatar: "SC",
        bio: "Former Meta AI researcher specializing in ML infrastructure and rapid prototyping.",
      },
      mvp: {
        name: "Phoenix",
        description:
          "Fintech-edtech platform that helps people close the wealth gap using adaptive credit-building tools, personalized coaching, and proprietary 'Readiness Scores'",
        kpi: "93% user satisfaction",
        metric: "93%",
        metricLabel: "User Satisfaction",
      },
      preview: "Phoenix Platform Screenshot",
      color: "electric-purple",
    },
    robotics: {
      title: "Hardware Division",
      lead: {
        name: "Marcus Johnson",
        role: "Hardware Engineer",
        avatar: "MJ",
        bio: "Ex-Boston Dynamics engineer with expertise in wearable sensor systems.",
      },
      mvp: {
        name: "Kinetix FlexSense™ Patch",
        description:
          "Flexible, sensor-infused athletic tape that streams real-time rehab and workload data into the Kinetix ecosystem to verify injured area readiness",
        kpi: "Real-time data streaming",
        metric: "24/7",
        metricLabel: "Live Monitoring",
      },
      preview: "FlexSense Patch Demo",
      color: "jade-green",
    },
    sports: {
      title: "Sports Division",
      lead: {
        name: "Alex Rodriguez",
        role: "Sports Tech Lead",
        avatar: "AR",
        bio: "Former Nike innovation lab director focused on athlete performance optimization.",
      },
      mvp: {
        name: "Kinetix AI",
        description:
          "Real-time injury-risk and athlete-health platform that ingests live biometric and workload data, predicts each player's likelihood of injury with color-coded scores",
        kpi: "3 HS pilots active",
        metric: "3",
        metricLabel: "High School Pilots",
      },
      preview: "Kinetix AI Platform Screenshot",
      color: "electric-purple",
    },
  };

  return (
    <section
      id="divisions"
      className="py-24 bg-gradient-to-b from-obsidian-black to-granite-gray/20"
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
            Three MVPs.{" "}
            <span className="bg-radix-gradient bg-clip-text text-transparent">
              Active Pilots.
            </span>
          </h2>
          <p className="text-xl text-signal-white/80 max-w-3xl mx-auto">
            Phoenix tackles wealth gaps, Kinetix AI prevents sports injuries,
            and FlexSense™ provides real-time athlete monitoring—all piloting
            this Fall.
          </p>
        </motion.div>

        {/* Tabbed Interface */}
        <div className="max-w-6xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="flex bg-signal-white/5 backdrop-blur-sm rounded-xl p-2 border border-signal-white/10">
              {Object.entries(divisions).map(([key, division]) => (
                <motion.button
                  key={key}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${
                    activeTab === key
                      ? "bg-radix-gradient text-signal-white shadow-lg"
                      : "text-signal-white/70 hover:text-signal-white hover:bg-signal-white/5"
                  }`}
                  onClick={() => setActiveTab(key)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {division.title}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              className="grid lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Left Side - Team & Info */}
              <div className="space-y-8">
                {/* Division Lead */}
                <div className="p-6 bg-signal-white/5 backdrop-blur-sm rounded-xl border border-signal-white/10">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-radix-gradient rounded-full flex items-center justify-center text-signal-white font-bold text-lg">
                      {divisions[activeTab].lead.avatar}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-signal-white">
                        {divisions[activeTab].lead.name}
                      </h3>
                      <p className="text-signal-white/70 mb-3">
                        {divisions[activeTab].lead.role}
                      </p>
                      <p className="text-signal-white/60 text-sm">
                        {divisions[activeTab].lead.bio}
                      </p>
                    </div>
                  </div>
                </div>

                {/* MVP Info */}
                <div className="space-y-4">
                  <h4 className="text-2xl font-display font-semibold text-signal-white">
                    Flagship MVP
                  </h4>
                  <h5 className="text-xl text-signal-white/90">
                    {divisions[activeTab].mvp.name}
                  </h5>
                  <p className="text-signal-white/70 leading-relaxed">
                    {divisions[activeTab].mvp.description}
                  </p>

                  {/* KPI Highlight */}
                  <div className="inline-flex items-center gap-3 p-4 bg-radix-gradient rounded-lg">
                    <div className="text-3xl font-bold text-signal-white">
                      {divisions[activeTab].mvp.metric}
                    </div>
                    <div className="text-signal-white/90 text-sm">
                      {divisions[activeTab].mvp.metricLabel}
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <button className="px-6 py-3 border-2 border-signal-white/20 text-signal-white font-medium rounded-lg hover:border-signal-white/40 transition-colors">
                  View {divisions[activeTab].title} Details
                </button>
              </div>

              {/* Right Side - MVP Screenshot/Demo */}
              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-granite-gray/20 to-obsidian-black border border-signal-white/10 rounded-2xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 mx-auto bg-signal-white/10 rounded-full flex items-center justify-center">
                      <svg
                        className="w-10 h-10 text-signal-white/60"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div className="text-signal-white/60">
                      {divisions[activeTab].preview}
                      <br />
                      <span className="text-xs">Demo Coming Soon</span>
                    </div>
                  </div>
                </div>

                {/* Floating Metrics */}
                <motion.div
                  className="absolute -top-4 -right-4 p-4 bg-signal-white/10 backdrop-blur-sm rounded-lg border border-signal-white/20"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-signal-white">
                      {divisions[activeTab].mvp.metric}
                    </div>
                    <div className="text-xs text-signal-white/70">
                      Success Rate
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 p-3 bg-radix-gradient rounded-lg"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="text-center">
                    <div className="text-lg font-bold text-signal-white">
                      Q1 2025
                    </div>
                    <div className="text-xs text-signal-white/90">
                      Launch Ready
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Division Overview Stats */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center p-6 bg-signal-white/5 backdrop-blur-sm rounded-xl border border-signal-white/10">
            <div className="text-3xl font-bold text-signal-white mb-2">3</div>
            <div className="text-signal-white/80">Active Pilots</div>
          </div>
          <div className="text-center p-6 bg-signal-white/5 backdrop-blur-sm rounded-xl border border-signal-white/10">
            <div className="text-3xl font-bold text-signal-white mb-2">3</div>
            <div className="text-signal-white/80">High Schools</div>
          </div>
          <div className="text-center p-6 bg-signal-white/5 backdrop-blur-sm rounded-xl border border-signal-white/10">
            <div className="text-3xl font-bold text-signal-white mb-2">
              $6.1M
            </div>
            <div className="text-signal-white/80">Projected Value</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
