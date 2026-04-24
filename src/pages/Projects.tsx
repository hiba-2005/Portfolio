import { Helmet } from "react-helmet-async";
import SectionTitle from "@/components/SectionTitle";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <>
      <Helmet>
        <title>Projets — Portfolio</title>
        <meta name="description" content="Liste de mes projets réalisés." />
      </Helmet>

      <section>
        <SectionTitle
          title="Projets"
          subtitle="Une sélection de travaux académiques et personnels."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="rounded-2xl border p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <p className="text-sm text-slate-500">{p.period}</p>
              <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                {p.summary}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs dark:bg-slate-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex gap-4 text-sm">
                {p.link ? (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 underline underline-offset-4 dark:text-blue-400"
                  >
                    Démo
                  </a>
                ) : null}
                {p.repo ? (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 underline underline-offset-4 dark:text-blue-400"
                  >
                    Code
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}