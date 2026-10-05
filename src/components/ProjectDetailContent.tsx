"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import type { Project } from "@/data/projects";
import {
  motion,
  MotionFadeUp,
  MotionItem,
  MotionStagger,
  fadeUp,
  scaleIn,
} from "@/components/motion";

export default function ProjectDetailContent({ project }: { project: Project }) {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-indigo-400 transition-colors mb-8 text-sm"
        >
          <FaArrowLeft size={12} />
          Back to Projects
        </Link>
      </motion.div>

      <motion.div
        className="relative h-56 sm:h-72 md:h-80 rounded-2xl overflow-hidden mb-8 border border-slate-700/50"
        variants={scaleIn}
        initial="hidden"
        animate="visible"
      >
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover"
          sizes="(max-width: 896px) 100vw, 896px"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-slate-900/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            {project.name}
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl">
            {project.shortDescription}
          </p>
        </div>
      </motion.div>

      <MotionStagger className="flex flex-wrap gap-3 mb-8" fast>
        {project.liveLink && (
          <MotionItem>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-xl transition-colors text-sm"
            >
              <FaExternalLinkAlt size={12} />
              Live Demo
            </a>
          </MotionItem>
        )}
        {project.githubLink && (
          <MotionItem>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-slate-600 hover:border-indigo-500 text-slate-200 hover:text-white font-medium rounded-xl transition-colors text-sm"
            >
              <FaGithub size={16} />
              GitHub
            </a>
          </MotionItem>
        )}
      </MotionStagger>

      <div className="space-y-8">
        <MotionFadeUp className="bg-slate-800/60 rounded-2xl p-6 sm:p-8 border border-slate-700/50">
          <h2 className="text-xl font-semibold text-white mb-4">
            About This Project
          </h2>
          <p className="text-slate-300 leading-relaxed">{project.description}</p>
        </MotionFadeUp>

        <MotionFadeUp
          className="bg-slate-800/60 rounded-2xl p-6 sm:p-8 border border-slate-700/50"
          delay={0.05}
        >
          <h2 className="text-xl font-semibold text-white mb-4">Tech Stack</h2>
          <MotionStagger className="flex flex-wrap gap-2" fast>
            {project.techStack.map((tech) => (
              <MotionItem key={tech}>
                <span className="text-sm px-3 py-1.5 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/20">
                  {tech}
                </span>
              </MotionItem>
            ))}
          </MotionStagger>
        </MotionFadeUp>

        <MotionFadeUp
          className="bg-slate-800/60 rounded-2xl p-6 sm:p-8 border border-slate-700/50"
          delay={0.1}
        >
          <h2 className="text-xl font-semibold text-white mb-4">Challenges</h2>
          <ul className="space-y-3">
            {project.challenges.map((item, i) => (
              <motion.li
                key={item}
                className="flex items-start gap-2 text-slate-300 text-sm sm:text-base leading-relaxed"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.06 }}
              >
                <span className="text-indigo-400 mt-1 shrink-0">▹</span>
                {item}
              </motion.li>
            ))}
          </ul>
        </MotionFadeUp>

        <MotionFadeUp
          className="bg-slate-800/60 rounded-2xl p-6 sm:p-8 border border-slate-700/50"
          delay={0.15}
        >
          <h2 className="text-xl font-semibold text-white mb-4">
            Future Improvements
          </h2>
          <ul className="space-y-3">
            {project.improvements.map((item, i) => (
              <motion.li
                key={item}
                className="flex items-start gap-2 text-slate-300 text-sm sm:text-base leading-relaxed"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.06 }}
              >
                <span className="text-indigo-400 mt-1 shrink-0">▹</span>
                {item}
              </motion.li>
            ))}
          </ul>
        </MotionFadeUp>
      </div>
    </div>
  );
}
