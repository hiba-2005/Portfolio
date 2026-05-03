import SectionTitle from "@/components/SectionTitle";
import { projects } from "@/data/projects";
import { Code2, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section>
      <SectionTitle
        title="Projets"
        subtitle="Une sélection de mes projets académiques et personnels."
      />

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <motion.article
            key={p.title}
            whileHover={{ y: -8 }}
            className="group rounded-3xl border bg-white p-6 shadow-sm transition hover:shadow-xl dark:border-slate-800 dark:bg-slate-950"
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <p className="text-sm text-slate-500">{p.period}</p>
            </div>

            {/* Title */}
            <h3 className="mt-3 text-lg font-bold leading-tight">
              {p.title}
            </h3>

            {/* Summary */}
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
              {p.summary}
            </p>

            {/* Details */}
            {p.details && (
              <p className="mt-3 text-xs leading-6 text-slate-500 dark:text-slate-400">
                {p.details}
              </p>
            )}

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-950 dark:text-blue-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-6 flex gap-3">
              {p.repo && (
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-medium transition hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-900"
                >
                  <Code2 size={16} />
                  Code
                </a>
              )}

              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
                >
                  <ExternalLink size={16} />
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