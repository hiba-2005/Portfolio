import SectionTitle from "@/components/SectionTitle";
import { education } from "@/data/education";
import { motion } from "framer-motion";

function fmt(s?: string) {
  if (!s) return "Présent";
  const [y, m] = s.split("-");
  return `${m}/${y}`;
}

export default function EducationPage() {
  return (
    <section className="max-w-5xl mx-auto">
      <SectionTitle
        title="Formations"
        subtitle="Mon parcours académique et les compétences acquises."
      />

      <div className="relative mt-10 border-l-2 border-slate-200 dark:border-slate-700">
        {education.map((e, index) => (
          <motion.div
            key={e.school + e.start}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="relative ml-6 mb-10"
          >
            {/* DOT */}
            <span className="absolute -left-[11px] top-2 h-5 w-5 rounded-full bg-blue-600 ring-4 ring-white dark:ring-slate-950" />

            {/* CARD */}
            <div className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-lg dark:border-slate-800 dark:bg-slate-950">
              
              {/* HEADER */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <h3 className="text-lg font-bold">
                  {e.degree}
                  {e.field && <span className="text-blue-600"> — {e.field}</span>}
                </h3>

                <span className="mt-2 md:mt-0 text-sm font-medium text-slate-500">
                  {fmt(e.start)} — {fmt(e.end)}
                </span>
              </div>

              {/* SCHOOL */}
              <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-300">
                {e.school}
                {e.location && (
                  <span className="text-slate-400"> • {e.location}</span>
                )}
              </p>

              {/* COURSES */}
              {e.courses?.length && (
                <div className="mt-4">
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Cours principaux :
                  </p>

                  <div className="mt-2 flex flex-wrap gap-2">
                    {e.courses.slice(0, 6).map((course) => (
                      <span
                        key={course}
                        className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-950 dark:text-blue-300"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* HIGHLIGHTS */}
              {e.highlights?.length && (
                <ul className="mt-4 space-y-1 text-sm text-slate-700 dark:text-slate-300">
                  {e.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-blue-600"></span>
                      {h}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}