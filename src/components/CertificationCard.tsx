import type { Certification } from "@/data/certifications";

function formatDate(s: string) {
  const [y, m] = s.split("-");
  return m ? `${m}/${y}` : y;
}

export default function CertificationCard({ c }: { c: Certification }) {
  return (
    <article className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/10 shadow-2xl backdrop-blur-xl transition hover:-translate-y-2 hover:bg-white/15">
      {c.image && (
        <div className="m-5 overflow-hidden rounded-2xl bg-white p-3">
          <img
            src={c.image}
            alt={c.imageAlt ?? c.title}
            className="h-52 w-full rounded-xl object-contain transition duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      )}

      <div className="p-6 pt-2">
        <p className="text-sm font-semibold text-blue-300">
          {c.issuer} • {formatDate(c.issueDate)}
        </p>

        <h3 className="mt-3 text-xl font-bold leading-snug text-white">
          {c.title}
        </h3>

        {c.skills?.length ? (
          <p className="mt-4 text-sm text-slate-300">
            <span className="font-semibold text-white">Compétences :</span>{" "}
            {c.skills.join(", ")}
          </p>
        ) : null}

        {c.tags?.length ? (
          <div className="mt-5 flex flex-wrap gap-2">
            {c.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-200"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}