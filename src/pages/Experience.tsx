import SectionTitle from "@/components/SectionTitle";
import { experiences } from "@/data/experience";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section>
      <SectionTitle
        title="Expérience"
        subtitle="Mes stages, responsabilités et compétences pratiques."
      />

      <div className="relative border-l border-slate-200 dark:border-slate-800 space-y-10 pl-6">
        {experiences.map((item, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="relative rounded-3xl border bg-white p-6 shadow-sm transition hover:shadow-xl dark:bg-slate-950 dark:border-slate-800"
          >
            {/* Dot */}
            <span className="absolute -left-[34px] top-6 h-4 w-4 rounded-full bg-blue-600 border-4 border-white dark:border-slate-950"></span>

            {/* Header */}
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-bold">{item.role}</h3>

              <p className="text-sm font-medium text-blue-600">
                {item.company}
              </p>

              <p className="text-xs text-slate-500">
                {item.period} • {item.location}
              </p>
            </div>

            {/* Description */}
            <p className="mt-4 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              {item.description}
            </p>

            {/* Skills */}
            {item.skills && (
              <div className="mt-4 flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-950 dark:text-blue-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  );
}