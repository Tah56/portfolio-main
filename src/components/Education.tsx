import { FaGraduationCap, FaUniversity } from "react-icons/fa";

const education = [
  {
    degree: "Diploma in Computer Science & Technology (CST)",
    institution: "Barguna Polytechnic Institute",
    period: "2nd Year · Ongoing",
    details:
      "Currently studying Computer Science & Technology as a 2nd-year diploma student. Building a strong foundation in programming, web development, databases, and computer fundamentals while practicing modern frontend skills.",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "National Ideal School",
    period: "2025",
    details:
      "Completed SSC in 2025. Developed an early interest in computers and technology, which led to pursuing a diploma in Computer Science & Technology.",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Education
          </h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-700 -translate-x-1/2" />

          <div className="space-y-10">
            {education.map((edu, index) => (
              <div
                key={edu.degree}
                className={`relative flex flex-col md:flex-row items-center gap-6 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-indigo-500 border-4 border-slate-900 z-10" />

                <div className="w-full md:w-[calc(50%-2rem)]">
                  <div className="bg-slate-800/70 rounded-2xl p-6 border border-slate-700/50 hover:border-indigo-500/30 transition-colors">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-400">
                        <FaGraduationCap size={20} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {edu.degree}
                        </h3>
                        <p className="text-indigo-400 flex items-center gap-1.5 text-sm mt-1">
                          <FaUniversity size={12} />
                          {edu.institution}
                        </p>
                      </div>
                    </div>
                    <p className="text-slate-400 text-sm mb-3 font-medium">
                      {edu.period}
                    </p>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {edu.details}
                    </p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-[calc(50%-2rem)]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
