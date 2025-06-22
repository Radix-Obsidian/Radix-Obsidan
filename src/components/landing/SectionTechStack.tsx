import { motion } from "framer-motion";

export default function SectionTechStack() {
  const techStack = [
    { name: "Figma", category: "Design", logo: "F" },
    { name: "Builder.io", category: "CMS", logo: "B" },
    { name: "Supabase", category: "Backend", logo: "S" },
    { name: "n8n", category: "Automation", logo: "n8" },
    { name: "Jetson", category: "AI Hardware", logo: "J" },
    { name: "React", category: "Frontend", logo: "R" },
    { name: "TypeScript", category: "Language", logo: "TS" },
    { name: "TailwindCSS", category: "Styling", logo: "T" },
    { name: "Framer Motion", category: "Animation", logo: "FM" },
    { name: "Vercel", category: "Deployment", logo: "V" },
    { name: "Docker", category: "Containers", logo: "D" },
    { name: "GitHub", category: "Version Control", logo: "G" },
  ];

  const facilityFeatures = [
    { name: "Modular Workspace", description: "Configurable lab spaces" },
    { name: "Rapid Prototyping", description: "3D printing & fabrication" },
    { name: "Test Yard", description: "Outdoor robotics testing" },
    { name: "AI Compute Cluster", description: "GPU farm for training" },
    { name: "Video Production", description: "Content creation studio" },
    { name: "Meeting Pods", description: "Investor & team spaces" },
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
            Tech Stack &{" "}
            <span className="bg-radix-gradient bg-clip-text text-transparent">
              Facility
            </span>
          </h2>
          <p className="text-xl text-signal-white/80 max-w-3xl mx-auto">
            The tools and space that power rapid innovation. Our shipping
            container HQ combines cutting-edge technology with agile workspace
            design.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Tech Stack */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h3 className="text-2xl font-display font-semibold text-signal-white mb-6">
                Technology Stack
              </h3>
              <p className="text-signal-white/70 mb-8">
                Modern, scalable tools that enable rapid MVP development and
                seamless iteration cycles.
              </p>
            </div>

            {/* Tech Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  className="group relative p-4 bg-signal-white/5 backdrop-blur-sm border border-signal-white/10 rounded-lg hover:border-signal-white/20 transition-all cursor-pointer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {/* Logo/Icon */}
                  <div className="w-10 h-10 bg-radix-gradient rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <span className="text-signal-white font-bold text-sm">
                      {tech.logo}
                    </span>
                  </div>

                  {/* Name & Category */}
                  <div>
                    <h4 className="text-signal-white font-medium text-sm mb-1">
                      {tech.name}
                    </h4>
                    <p className="text-signal-white/60 text-xs">
                      {tech.category}
                    </p>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-radix-gradient opacity-0 group-hover:opacity-5 rounded-lg transition-opacity" />
                </motion.div>
              ))}
            </div>

            {/* Integration Note */}
            <div className="p-4 bg-signal-white/5 backdrop-blur-sm border border-signal-white/10 rounded-lg">
              <p className="text-signal-white/70 text-sm">
                <span className="text-electric-purple">
                  ⚡ Rapid Integration:
                </span>{" "}
                Our stack is designed for 90-day MVP cycles with seamless
                deployment pipelines.
              </p>
            </div>
          </motion.div>

          {/* Right Side - Facility Schematic */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <h3 className="text-2xl font-display font-semibold text-signal-white mb-6">
                Container Campus HQ
              </h3>
              <p className="text-signal-white/70 mb-8">
                Modular, sustainable workspace designed for maximum productivity
                and rapid prototyping capabilities.
              </p>
            </div>

            {/* Facility Schematic */}
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-signal-white/5 to-obsidian-black border border-signal-white/10 rounded-2xl p-6">
                {/* Container Outline */}
                <div className="w-full h-full border-2 border-signal-white/20 rounded-lg relative overflow-hidden">
                  {/* Grid Pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <svg
                      className="w-full h-full"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <pattern
                          id="grid"
                          width="20"
                          height="20"
                          patternUnits="userSpaceOnUse"
                        >
                          <path
                            d="M 20 0 L 0 0 0 20"
                            fill="none"
                            stroke="white"
                            strokeWidth="0.5"
                          />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                  </div>

                  {/* Room Divisions */}
                  <div className="absolute inset-4 grid grid-cols-3 grid-rows-2 gap-2">
                    {/* Lab Space */}
                    <div className="col-span-2 bg-electric-purple/10 rounded border border-electric-purple/30 flex items-center justify-center">
                      <span className="text-electric-purple text-xs font-medium">
                        Lab Space
                      </span>
                    </div>

                    {/* Meeting */}
                    <div className="bg-jade-green/10 rounded border border-jade-green/30 flex items-center justify-center">
                      <span className="text-jade-green text-xs font-medium">
                        Meeting
                      </span>
                    </div>

                    {/* Fabrication */}
                    <div className="bg-signal-white/10 rounded border border-signal-white/30 flex items-center justify-center">
                      <span className="text-signal-white text-xs font-medium">
                        Fab
                      </span>
                    </div>

                    {/* AI Cluster */}
                    <div className="bg-electric-purple/10 rounded border border-electric-purple/30 flex items-center justify-center">
                      <span className="text-electric-purple text-xs font-medium">
                        AI Cluster
                      </span>
                    </div>

                    {/* Test Yard */}
                    <div className="bg-jade-green/10 rounded border border-jade-green/30 flex items-center justify-center">
                      <span className="text-jade-green text-xs font-medium">
                        Test Yard
                      </span>
                    </div>
                  </div>

                  {/* Center Label */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="text-center">
                      <div className="text-signal-white/60 text-sm font-medium">
                        Container HQ
                      </div>
                      <div className="text-signal-white/40 text-xs">
                        40ft x 20ft Modular Lab
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Labels */}
              <motion.div
                className="absolute -top-3 -right-3 p-2 bg-electric-purple/20 backdrop-blur-sm rounded-lg border border-electric-purple/30"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="text-electric-purple text-xs font-medium">
                  Solar Powered
                </span>
              </motion.div>

              <motion.div
                className="absolute -bottom-3 -left-3 p-2 bg-jade-green/20 backdrop-blur-sm rounded-lg border border-jade-green/30"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              >
                <span className="text-jade-green text-xs font-medium">
                  Relocatable
                </span>
              </motion.div>
            </div>

            {/* Facility Features */}
            <div className="grid grid-cols-2 gap-3">
              {facilityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="p-3 bg-signal-white/5 backdrop-blur-sm border border-signal-white/10 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <h4 className="text-signal-white font-medium text-sm mb-1">
                    {feature.name}
                  </h4>
                  <p className="text-signal-white/60 text-xs">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          className="grid md:grid-cols-4 gap-6 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="text-center p-4 bg-signal-white/5 backdrop-blur-sm rounded-lg border border-signal-white/10">
            <div className="text-2xl font-bold text-signal-white mb-1">
              100%
            </div>
            <div className="text-signal-white/70 text-sm">Renewable Energy</div>
          </div>
          <div className="text-center p-4 bg-signal-white/5 backdrop-blur-sm rounded-lg border border-signal-white/10">
            <div className="text-2xl font-bold text-signal-white mb-1">12</div>
            <div className="text-signal-white/70 text-sm">
              Tech Integrations
            </div>
          </div>
          <div className="text-center p-4 bg-signal-white/5 backdrop-blur-sm rounded-lg border border-signal-white/10">
            <div className="text-2xl font-bold text-signal-white mb-1">800</div>
            <div className="text-signal-white/70 text-sm">Sq Ft Lab Space</div>
          </div>
          <div className="text-center p-4 bg-signal-white/5 backdrop-blur-sm rounded-lg border border-signal-white/10">
            <div className="text-2xl font-bold text-signal-white mb-1">
              24/7
            </div>
            <div className="text-signal-white/70 text-sm">Access Available</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
