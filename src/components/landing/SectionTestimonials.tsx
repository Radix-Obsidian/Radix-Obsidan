import { motion } from "framer-motion";

export default function SectionTestimonials() {
  const testimonials = [
    {
      quote:
        "Radix prototype cut our recycling labor by 40% in the first pilot week. This isn't just innovation—it's transformation.",
      author: "Maria Santos",
      role: "Sustainability Director",
      company: "Metro Waste Management",
      logo: "MW",
      impact: "40% labor reduction",
    },
    {
      quote:
        "The Litter Rover exceeded every expectation. Beach cleanup efficiency increased 300% while reducing human exposure to hazardous waste.",
      author: "Dr. James Chen",
      role: "Environmental Program Lead",
      company: "California Coastal Commission",
      logo: "CC",
      impact: "300% efficiency gain",
    },
    {
      quote:
        "Form Analytics identified injury risks we never saw coming. Our athlete injury rate dropped 40% in just one season.",
      author: "Coach Angela Rivera",
      role: "Head Athletic Trainer",
      company: "Pacific Sports Institute",
      logo: "PS",
      impact: "40% injury reduction",
    },
  ];

  const advisors = [
    {
      name: "Dr. Sarah Kim",
      role: "Former Google AI Research",
      company: "AI Strategy Advisor",
      avatar: "SK",
      expertise: "Machine Learning & Product Strategy",
    },
    {
      name: "Marcus Thompson",
      role: "Ex-Tesla Robotics",
      company: "Engineering Advisor",
      avatar: "MT",
      expertise: "Autonomous Systems & Hardware",
    },
    {
      name: "Jessica Park",
      role: "Former Y Combinator Partner",
      company: "Investment Advisor",
      avatar: "JP",
      expertise: "Venture Strategy & Scaling",
    },
  ];

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
            Early{" "}
            <span className="bg-radix-gradient bg-clip-text text-transparent">
              Validation
            </span>
          </h2>
          <p className="text-xl text-signal-white/80 max-w-3xl mx-auto">
            Real results from our pilot customers and strategic guidance from
            industry leaders who believe in our mission.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="h-full p-8 bg-signal-white/5 backdrop-blur-sm border border-signal-white/10 rounded-xl hover:border-signal-white/20 transition-all group-hover:scale-[1.02]">
                {/* Quote */}
                <div className="mb-6">
                  <svg
                    className="w-8 h-8 text-electric-purple mb-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                  </svg>
                  <blockquote className="text-signal-white text-lg leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                </div>

                {/* Author Info */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-radix-gradient rounded-full flex items-center justify-center text-signal-white font-bold">
                    {testimonial.logo}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-signal-white font-semibold">
                      {testimonial.author}
                    </h4>
                    <p className="text-signal-white/70 text-sm">
                      {testimonial.role}
                    </p>
                    <p className="text-signal-white/60 text-sm">
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Impact Badge */}
                <div className="absolute -top-3 -right-3 px-3 py-1 bg-radix-gradient rounded-full text-signal-white text-xs font-semibold">
                  {testimonial.impact}
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-radix-gradient opacity-0 group-hover:opacity-5 rounded-xl transition-opacity pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Advisors Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-display font-semibold text-signal-white mb-6">
            Strategic Advisors
          </h3>
          <p className="text-signal-white/70 max-w-2xl mx-auto">
            Industry veterans guiding our strategic decisions and providing
            access to networks that matter.
          </p>
        </motion.div>

        {/* Advisors Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {advisors.map((advisor, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-signal-white/5 backdrop-blur-sm border border-signal-white/10 rounded-xl hover:border-signal-white/20 transition-all"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Avatar */}
              <div className="w-20 h-20 bg-radix-gradient rounded-full flex items-center justify-center text-signal-white font-bold text-xl mx-auto mb-4">
                {advisor.avatar}
              </div>

              {/* Info */}
              <h4 className="text-signal-white font-semibold text-lg mb-1">
                {advisor.name}
              </h4>
              <p className="text-signal-white/70 text-sm mb-1">
                {advisor.role}
              </p>
              <p className="text-signal-white/60 text-sm mb-3">
                {advisor.company}
              </p>
              <p className="text-signal-white/50 text-xs">
                {advisor.expertise}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-8 mt-16 pt-8 border-t border-signal-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-signal-white mb-1">15+</div>
            <div className="text-signal-white/60 text-sm">Pilot Partners</div>
          </div>
          <div className="w-px h-8 bg-signal-white/20" />
          <div className="text-center">
            <div className="text-2xl font-bold text-signal-white mb-1">98%</div>
            <div className="text-signal-white/60 text-sm">
              Satisfaction Rate
            </div>
          </div>
          <div className="w-px h-8 bg-signal-white/20" />
          <div className="text-center">
            <div className="text-2xl font-bold text-signal-white mb-1">6</div>
            <div className="text-signal-white/60 text-sm">
              Strategic Advisors
            </div>
          </div>
          <div className="w-px h-8 bg-signal-white/20" />
          <div className="text-center">
            <div className="text-2xl font-bold text-signal-white mb-1">
              $2.1M
            </div>
            <div className="text-signal-white/60 text-sm">Value Created</div>
          </div>
        </motion.div>

        {/* Social Proof CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <button className="px-8 py-4 border-2 border-signal-white/20 text-signal-white font-semibold rounded-lg hover:border-signal-white/40 transition-colors">
            Join Our Pilot Program
          </button>
        </motion.div>
      </div>
    </section>
  );
}
