import SectionTitle from "@/components/SectionTitle";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section>
      <SectionTitle
        title="Expérience"
        subtitle="Mes stages, responsabilités et compétences pratiques."
      />

      <div className="space-y-6">
        {experiences.map((item, index) => (
          <article
            key={index}
            className="rounded-2xl border p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <h3 className="text-lg font-semibold">
              {item.role}
            </h3>

            <p className="mt-1 text-sm font-medium text-blue-600">
              {item.company}
            </p>

            <p className="text-sm text-slate-500">
              {item.period} • {item.location}
            </p>

            <p className="mt-4 text-sm text-slate-700 dark:text-slate-300">
              {item.description}
            </p>

            {item.skills && (
              <div className="mt-4 flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs dark:bg-slate-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}