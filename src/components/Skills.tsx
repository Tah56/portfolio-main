"use client";

import {
  motion,
  MotionItem,
  MotionSectionHeader,
  MotionStagger,
} from "@/components/motion";
import { FaCode, FaPaintBrush, FaTools } from "react-icons/fa";

const skillCategories = [
  {
    title: "Frontend",
    icon: FaCode,
    skills: [
      { name: "HTML5 & CSS3", level: 90 },
      { name: "JavaScript (ES6+)", level: 85 },
      { name: "React", level: 80 },
      { name: "Next.js", level: 75 },
      { name: "Tailwind CSS", level: 88 },
      { name: "TypeScript", level: 70 },
    ],
  },
  {
    title: "UI & Styling",
    icon: FaPaintBrush,
    skills: [
      { name: "Responsive Design", level: 90 },
      { name: "Flexbox & Grid", level: 88 },
      { name: "CSS Animations", level: 75 },
      { name: "Figma (basics)", level: 68 },
      { name: "Accessibility (a11y)", level: 72 },
    ],
  },
  {
    title: "Tools & Workflow",
    icon: FaTools,
    skills: [
      { name: "Git & GitHub", level: 82 },
      { name: "VS Code", level: 90 },
      { name: "npm / package managers", level: 80 },
      { name: "Chrome DevTools", level: 78 },
      { name: "REST APIs (consuming)", level: 75 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <MotionSectionHeader
          title="Skills"
          subtitle="The technologies, design practices, and tools I use to build polished web experiences"
        />

        <MotionStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category) => (
            <MotionItem key={category.title}>
              <motion.div
                className="relative overflow-hidden bg-linear-to-br from-slate-800/90 to-slate-900/80 rounded-2xl p-6 border border-slate-700/60 h-full shadow-lg shadow-slate-950/20"
                whileHover={{
                  y: -6,
                  borderColor: "rgba(99, 102, 241, 0.4)",
                  boxShadow: "0 20px 40px -18px rgba(99, 102, 241, 0.28)",
                  transition: { duration: 0.25 },
                }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-xl bg-indigo-500/15 border border-indigo-400/15 flex items-center justify-center text-indigo-300">
                    <category.icon aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {category.title}
                    </h3>
                    <p className="text-xs text-slate-500">
                      {category.skills.length} skills
                    </p>
                  </div>
                </div>
                <div className="space-y-5">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="text-slate-200 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-slate-400">{skill.level}%</span>
                      </div>
                      <div
                        className="h-2 bg-slate-700/80 rounded-full overflow-hidden"
                        role="progressbar"
                        aria-label={`${skill.name} proficiency`}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-valuenow={skill.level}
                      >
                        <motion.div
                          className="h-full bg-linear-to-r from-indigo-500 via-violet-400 to-cyan-400 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true, amount: 0.4 }}
                          transition={{
                            duration: 1,
                            ease: [0.22, 1, 0.36, 1],
                            delay: 0.15,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </MotionItem>
          ))}
        </MotionStagger>
      </div>
    </section>
  );
}
