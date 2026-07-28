"use client";

import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaDownload,
} from "react-icons/fa";

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
          <div className="flex-1 text-center lg:text-left">
            <p className="text-indigo-400 font-medium mb-3 tracking-wide">
              Hello, I&apos;m
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Tanzim Ahmed
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-300 mb-6">
              Junior Frontend Developer
            </h2>
            <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              I build clean, responsive, and user-friendly interfaces with
              modern frontend technologies. Passionate about learning, writing
              readable code, and turning designs into delightful experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <Link
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40"
              >
                <FaDownload />
                Download Resume
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-slate-600 hover:border-indigo-500 text-slate-200 hover:text-white font-semibold rounded-xl transition-all"
              >
                Get In Touch
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-11 h-11 flex items-center justify-center rounded-full bg-slate-800 text-slate-300 hover:bg-indigo-600 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <social.icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          {/* Photo */}
          <div className="shrink-0">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72">
              <div className="absolute inset-0 rounded-full bg-linear-to-br from-indigo-500 via-purple-500 to-cyan-400 opacity-70 blur-2xl animate-pulse" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-slate-700 shadow-2xl">
                {/* Placeholder avatar - replace with your photo */}
                <div className="w-full h-full bg-linear-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                  <span className="text-6xl sm:text-7xl font-bold text-indigo-300">
                    TA
                  </span>
                </div>
                {/* Uncomment and add your photo:
                <Image
                  src="/profile.jpg"
                  alt="Tanzim Ahmed"
                  fill
                  className="object-cover"
                  priority
                />
                */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
