import SectionTitle from "@/components/SectionTitle";
import { projects } from "@/data/projects";
import { Code2, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section>
      <SectionTitle
        title="Mes Projets"
        subtitle="Quelques projets académiques et personnels réalisés durant mon parcours."
      />

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((p, index) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="
              group relative overflow-hidden rounded-[32px]
              border border-white/10
              bg-white/10
              backdrop-blur-xl
              p-7
              shadow-2xl
              transition-all
            "
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-indigo-500/5 to-purple-500/10 opacity-0 transition group-hover:opacity-100" />

            {/* YEAR */}
            <p className="relative text-sm font-medium text-blue-300">
              {p.period}
            </p>

            {/* TITLE */}
            <h3 className="relative mt-4 text-2xl font-bold leading-tight text-white">
              {p.title}
            </h3>

            {/* SUMMARY */}
            <p className="relative mt-4 text-sm leading-7 text-slate-300">
              {p.summary}
            </p>

            {/* DETAILS */}
            {p.details && (
              <p className="relative mt-4 text-sm leading-7 text-slate-400">
                {p.details}
              </p>
            )}

            {/* TAGS */}
            <div className="relative mt-6 flex flex-wrap gap-3">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className="
                    rounded-full
                    border border-blue-400/20
                    bg-blue-500/10
                    px-4 py-2
                    text-xs font-semibold
                    text-blue-200
                    backdrop-blur-lg
                  "
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="relative mt-8 flex flex-wrap gap-4">
              {p.repo && (
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex items-center gap-2
                    rounded-2xl
                    bg-white
                    px-5 py-3
                    text-sm font-semibold
                    text-slate-900
                    transition
                    hover:scale-105
                    hover:bg-blue-500
                    hover:text-white
                  "
                >
                  <Code2 size={18} />
                  Code
                </a>
              )}

              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex items-center gap-2
                    rounded-2xl
                    border border-blue-400/30
                    bg-blue-500/20
                    px-5 py-3
                    text-sm font-semibold
                    text-blue-100
                    backdrop-blur-lg
                    transition
                    hover:scale-105
                    hover:bg-blue-500
                    hover:text-white
                  "
                >
                  <ExternalLink size={18} />
                  Demo
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}