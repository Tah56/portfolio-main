"use client";

import { MotionFadeUp, MotionSectionHeader } from "@/components/motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <MotionSectionHeader title="About Me" />

        <MotionFadeUp className="bg-slate-800/60 rounded-2xl p-6 sm:p-10 border border-slate-700/50 shadow-xl">
          <div className="prose prose-invert max-w-none">
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
              My programming journey started when I first opened a code editor
              and made a simple webpage come to life. That moment hooked me. I
              dove into HTML, CSS, and JavaScript, then discovered React and
              modern frontend tooling. As a junior frontend developer, I am
              focused on building clean, accessible, and responsive interfaces
              while continuously leveling up my skills every day.
            </p>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
              I enjoy turning designs into pixel-perfect, interactive
              experiences. Working with component-based architecture, Tailwind
              CSS, and Next.js feels natural to me. I like solving small UI
              challenges, improving performance, and making sure the user
              experience feels smooth on every device. I am always eager to
              learn from senior developers and contribute meaningfully to a
              team.
            </p>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
              Outside of coding, I love playing football, exploring new places,
              listening to music, and occasionally sketching or experimenting
              with UI design ideas in Figma. These hobbies help me stay creative
              and balanced.
            </p>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              I believe great frontend work comes from curiosity, attention to
              detail, and a willingness to keep learning. If you are looking for
              a motivated junior frontend developer who is ready to grow and
              contribute, I would love to connect.
            </p>
          </div>
        </MotionFadeUp>
      </div>
    </section>
  );
}
