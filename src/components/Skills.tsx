"use client";

const skillCategories = [
  {
    title: "Frontend",
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
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Skills
          </h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full" />
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Frontend technologies and tools I work with as a junior developer
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-slate-800/70 rounded-2xl p-6 border border-slate-700/50 hover:border-indigo-500/40 transition-colors"
            >
              <h3 className="text-xl font-semibold text-indigo-400 mb-6">
                {category.title}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-slate-200 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-slate-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full skill-bar"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
