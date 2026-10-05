"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaDownload,
} from "react-icons/fa";
import {
  motion,
  fadeUp,
  scaleIn,
  staggerContainer,
} from "@/components/motion";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: FaLinkedin,
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: FaTwitter,
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: FaFacebook,
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={fadeUp}
              className="text-indigo-400 font-medium mb-3 tracking-wide"
            >
              Hello, I&apos;m
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight"
            >
              Tanzim Ahmed
            </motion.h1>
            <motion.h2
              variants={fadeUp}
              className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-300 mb-6"
            >
              Junior Frontend Developer
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              I build clean, responsive, and user-friendly interfaces with
              modern frontend technologies. Passionate about learning, writing
              readable code, and turning designs into delightful experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10"
            >
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/tanzim-ahmed-resume.pdf"
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40"
                >
                  <FaDownload />
                  Download Resume
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-slate-600 hover:border-indigo-500 text-slate-200 hover:text-white font-semibold rounded-xl transition-all"
                >
                  Get In Touch
                </Link>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={fadeUp}
              className="flex items-center justify-center lg:justify-start gap-4"
            >
              {socialLinks.map((social, i) => (
                <motion.div
                  key={social.name}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55 + i * 0.08 }}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.92 }}
                >
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="w-11 h-11 flex items-center justify-center rounded-full bg-slate-800 text-slate-300 hover:bg-indigo-600 hover:text-white transition-colors duration-300"
                  >
                    <social.icon size={20} />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Photo with motion frame */}
          <motion.div
            className="shrink-0"
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72">
              <div className="motion-frame-glow" aria-hidden="true" />
              <div className="motion-frame w-full h-full shadow-2xl shadow-indigo-500/20">
                <div className="motion-frame-inner border-2 border-slate-800">
                  <Image
                    src="/tanzim-ahmed.png"
                    alt="Tanzim Ahmed"
                    fill
                    priority
                    sizes="(max-width: 640px) 224px, (max-width: 768px) 256px, 288px"
                    className="object-cover object-[50%_35%]"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
