import SectionTitle from "@/components/SectionTitle";
import { education } from "@/data/education";

function fmt(s?: string) {
  if (!s) return "Présent";
  const [y, m] = s.split("-");
  return `${m}/${y}`;
}

export default function EducationPage() {
  return (
    <section>
      <SectionTitle
        title="Formations"
        subtitle="Mes études, matières principales et points forts."
      />

      <ol className="relative border-s border-slate-200 dark:border-slate-700">
        {education.map((e) => (
          <li key={e.school + e.start} className="ms-6 pb-8">
            <span className="absolute -start-[9px] mt-2 h-4 w-4 rounded-full bg-blue-600" />

            <h3 className="text-lg font-semibold">
              {e.degree}
              {e.field ? ` — ${e.field}` : ""} @ {e.school}
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              {fmt(e.start)} — {fmt(e.end)}
              {e.location ? ` • ${e.location}` : ""}
            </p>

            {e.courses?.length ? (
              <p className="mt-3 text-sm text-slate-700 dark:text-slate-300">
                <span className="font-medium">Cours :</span>{" "}
                {e.courses.slice(0, 5).join(", ")}
              </p>
            ) : null}

            {e.highlights?.length ? (
              <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 dark:text-slate-300">
                {e.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ol>
    </section>
  );
}