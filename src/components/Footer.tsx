"use client";

import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from "react-icons/fa";
import { motion, MotionFadeUp } from "@/components/motion";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 py-10 px-4">
      <MotionFadeUp className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <p className="text-slate-400 text-sm">
              © {year} Tanzim Ahmed. All rights reserved.
            </p>
            <p className="text-slate-500 text-xs mt-1 flex items-center justify-center sm:justify-start gap-1">
              Built with{" "}
              <motion.span
                animate={{ scale: [1, 1.25, 1] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                className="inline-flex"
              >
                <FaHeart className="text-red-500" size={10} />
              </motion.span>{" "}
              using Next.js & Tailwind CSS
            </p>
          </div>

          <div className="flex items-center gap-4">
            {[
              { href: "https://github.com", label: "GitHub", Icon: FaGithub },
              {
                href: "https://linkedin.com",
                label: "LinkedIn",
                Icon: FaLinkedin,
              },
              {
                href: "https://twitter.com",
                label: "Twitter",
                Icon: FaTwitter,
              },
            ].map(({ href, label, Icon }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-indigo-400 transition-colors"
                aria-label={label}
                whileHover={{ y: -3, scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>
      </MotionFadeUp>
    </footer>
  );
}
