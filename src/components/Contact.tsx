"use client";

import { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import { AnimatePresence } from "framer-motion";
import {
  motion,
  MotionFadeUp,
  MotionItem,
  MotionSectionHeader,
  MotionStagger,
} from "@/components/motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <MotionSectionHeader
          title="Get In Touch"
          subtitle="Have a project in mind or just want to say hello? Feel free to reach out."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <MotionFadeUp>
            <div className="bg-slate-800/70 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-semibold text-white mb-6">
                Contact Information
              </h3>

              <MotionStagger className="space-y-5" fast>
                <MotionItem>
                  <a
                    href="mailto:tanzim.ahmed@example.com"
                    className="flex items-center gap-4 text-slate-300 hover:text-indigo-400 transition-colors group"
                  >
                    <motion.div
                      className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all"
                      whileHover={{ scale: 1.08, rotate: -4 }}
                    >
                      <FaEnvelope size={18} />
                    </motion.div>
                    <div>
                      <p className="text-sm text-slate-500">Email</p>
                      <p className="font-medium">tanzimahmed575@.com</p>
                    </div>
                  </a>
                </MotionItem>

                <MotionItem>
                  <a
                    href="tel:+15551234567"
                    className="flex items-center gap-4 text-slate-300 hover:text-indigo-400 transition-colors group"
                  >
                    <motion.div
                      className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all"
                      whileHover={{ scale: 1.08, rotate: -4 }}
                    >
                      <FaPhone size={18} />
                    </motion.div>
                    <div>
                      <p className="text-sm text-slate-500">Phone</p>
                      <p className="font-medium">+1 (555) 123-4567</p>
                    </div>
                  </a>
                </MotionItem>

                <MotionItem>
                  <a
                    href="https://wa.me/8801611332175"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-slate-300 hover:text-indigo-400 transition-colors group"
                  >
                    <motion.div
                      className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all"
                      whileHover={{ scale: 1.08, rotate: -4 }}
                    >
                      <FaWhatsapp size={20} />
                    </motion.div>
                    <div>
                      <p className="text-sm text-slate-500">WhatsApp</p>
                      <p className="font-medium">01611 332175</p>
                    </div>
                  </a>
                </MotionItem>

                <MotionItem>
                  <div className="flex items-center gap-4 text-slate-300">
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                      <FaMapMarkerAlt size={18} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Location</p>
                      <p className="font-medium">Barguna,Barishal,Bangladesh</p>
                    </div>
                  </div>
                </MotionItem>
              </MotionStagger>
            </div>
          </MotionFadeUp>

          {/* Contact Form */}
          <MotionFadeUp delay={0.1}>
            <div className="bg-slate-800/70 rounded-2xl p-6 sm:p-8 border border-slate-700/50">
              <h3 className="text-xl font-semibold text-white mb-6">
                Send a Message
              </h3>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    className="h-64 flex items-center justify-center text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.35 }}
                  >
                    <div>
                      <motion.div
                        className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-2xl"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 260, delay: 0.1 }}
                      >
                        ✓
                      </motion.div>
                      <p className="text-white font-medium text-lg">
                        Message sent!
                      </p>
                      <p className="text-slate-400 text-sm mt-1">
                        Thanks for reaching out. I&apos;ll get back to you soon.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-slate-300 mb-1.5"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-600 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-slate-300 mb-1.5"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-600 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
                        placeholder="you@example.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-slate-300 mb-1.5"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-600 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition resize-none"
                        placeholder="Tell me about your project or just say hi..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-indigo-500/20"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FaPaperPlane />
                      Send Message
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </MotionFadeUp>
        </div>
      </div>
    </section>
  );
}
