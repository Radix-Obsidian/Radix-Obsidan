import { useState } from "react";
import { motion } from "framer-motion";

export default function SectionCTA() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission to Supabase
    try {
      // This would typically POST to /investor-request endpoint
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSubmitted(true);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-24 bg-gradient-to-b from-signal-white/5 to-obsidian-black">
      <div className="container max-w-screen-xl mx-auto px-6">
        {/* Main CTA Card */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative p-12 lg:p-16 bg-radix-gradient rounded-3xl overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-electric-purple/20 to-jade-green/20" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-signal-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-signal-white/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />

            <div className="relative z-10">
              {/* Header */}
              <div className="text-center mb-12">
                <motion.h2
                  className="text-4xl lg:text-6xl font-display font-bold text-signal-white mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Join us before Series A closes
                </motion.h2>
                <motion.p
                  className="text-xl text-signal-white/90 leading-relaxed max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Be part of the lab that transforms systemic problems into
                  profitable ventures. Limited spots available for founding
                  investors.
                </motion.p>
              </div>

              {!isSubmitted ? (
                <motion.div
                  className="grid lg:grid-cols-2 gap-8 items-end"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-signal-white/80 text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-4 bg-signal-white/10 backdrop-blur-sm border border-signal-white/20 rounded-lg text-signal-white placeholder-signal-white/50 focus:border-signal-white/40 focus:outline-none transition-colors"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-signal-white/80 text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-4 bg-signal-white/10 backdrop-blur-sm border border-signal-white/20 rounded-lg text-signal-white placeholder-signal-white/50 focus:border-signal-white/40 focus:outline-none transition-colors"
                        placeholder="Enter your email address"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-8 py-4 bg-signal-white text-obsidian-black font-bold rounded-lg text-lg hover:bg-signal-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg
                            className="animate-spin h-5 w-5"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                              fill="none"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          Submitting...
                        </span>
                      ) : (
                        "Request Investor Deck"
                      )}
                    </motion.button>
                  </form>

                  {/* Benefits */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-display font-semibold text-signal-white">
                      What You'll Receive:
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "Complete investor deck with financials",
                        "Executive summary & term sheet",
                        "Technology demo access",
                        "Direct founder meeting invitation",
                      ].map((benefit, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start gap-3 text-signal-white/90"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.4,
                            delay: 0.8 + index * 0.1,
                          }}
                        >
                          <span className="w-6 h-6 bg-signal-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-signal-white text-sm">✓</span>
                          </span>
                          <span>{benefit}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ) : (
                /* Success State */
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-20 h-20 bg-signal-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-signal-white text-3xl">✓</span>
                  </div>
                  <h3 className="text-3xl font-display font-bold text-signal-white mb-4">
                    Request Received!
                  </h3>
                  <p className="text-signal-white/80 mb-8">
                    We'll send you the complete investor package within 24
                    hours. Check your email for confirmation.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-3 border-2 border-signal-white/20 text-signal-white font-medium rounded-lg hover:border-signal-white/40 transition-colors"
                  >
                    Submit Another Request
                  </button>
                </motion.div>
              )}

              {/* Secondary CTA */}
              {!isSubmitted && (
                <motion.div
                  className="text-center mt-12 pt-8 border-t border-signal-white/20"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <p className="text-signal-white/80 mb-4">
                    Prefer to discuss directly?
                  </p>
                  <a
                    href="https://calendly.com/radix-obsidian/investor-call"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 border-2 border-signal-white/30 text-signal-white font-medium rounded-lg hover:border-signal-white/50 transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    Schedule a Call
                  </a>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-8 mt-16 text-signal-white/60"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 1l3.09 6.26L22 9l-5 4.87L18.18 21 12 17.77 5.82 21 7 13.87 2 9l6.91-1.74L12 1z" />
            </svg>
            SOC 2 Compliant
          </div>
          <div className="w-px h-4 bg-signal-white/20" />
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9l-5 4.87L18.18 21 12 17.77 5.82 21 7 13.87 2 9l6.91-1.74L12 1z" />
            </svg>
            GDPR Protected
          </div>
          <div className="w-px h-4 bg-signal-white/20" />
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Secure & Encrypted
          </div>
        </motion.div>
      </div>
    </section>
  );
}
