import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Projects
          </h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full" />
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Projects I have built while learning full-stack web development
          </p>
        </div>

        <div
          className={`grid gap-6 lg:gap-8 ${
            projects.length === 1
              ? "grid-cols-1 max-w-lg mx-auto"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {projects.map((project) => (
            <article
              key={project.id}
              className="group bg-slate-800/70 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-indigo-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 flex flex-col"
            >
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="relative h-52 sm:h-56 overflow-hidden block"
              >
                <Image
                  src={project.image}
                  alt={`${project.name} website preview`}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
              </a>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.name}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                  {project.shortDescription}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 rounded-full bg-slate-700/80 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="text-xs px-2.5 py-1 rounded-full bg-slate-700/80 text-slate-400">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm rounded-lg transition-colors"
                    >
                      <FaExternalLinkAlt size={12} />
                      Visit Website
                    </a>
                  )}
                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium text-sm transition-colors group/btn"
                  >
                    View Details
                    <FaArrowRight
                      size={12}
                      className="transition-transform group-hover/btn:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
