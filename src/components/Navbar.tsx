"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Education", href: "/#education" },
  { name: "Projects", href: "/#projects" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg shadow-indigo-500/10"
          : "bg-transparent"
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/#home"
              className="flex items-center gap-2.5 text-xl md:text-2xl font-bold tracking-tight group"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-950 border border-indigo-500/60 text-indigo-300 text-xs font-bold shadow-sm group-hover:border-indigo-400 group-hover:text-indigo-200 transition-colors">
                TA
              </span>
              <span>
                <span className="text-indigo-400">Tanzim</span>
                <span className="text-white">Ahmed</span>
              </span>
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.05, duration: 0.35 }}
              >
                <Link
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-indigo-400 transition-colors rounded-lg hover:bg-slate-800/50 inline-block"
                >
                  <motion.span whileHover={{ y: -1 }} className="inline-block">
                    {link.name}
                  </motion.span>
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition"
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden pb-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <ul className="flex flex-col gap-1 bg-slate-800/90 rounded-xl p-3 backdrop-blur">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 text-slate-200 hover:text-indigo-400 hover:bg-slate-700/50 rounded-lg transition"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
