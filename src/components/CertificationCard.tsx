import type { Certification } from "@/data/certifications";

function formatDate(s?: string) {
  if (!s) return "";
  const [y, m] = s.split("-");
  return m && y ? `${m}/${y}` : y;
}

export default function CertificationCard({ c }: { c: Certification }) {
  const isExpired = c.status === "expired";
  const skills = c.skills ?? [];
  const tags = c.tags ?? [];

  return (
    <article
      className={`rounded-2xl border bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:bg-slate-950 ${
        isExpired ? "opacity-80" : ""
      }`}
    >
      {c.image && (
        <div className="mb-5 overflow-hidden rounded-xl border bg-slate-50 dark:bg-slate-900">
          <img
            src={c.image}
            alt={c.imageAlt ?? c.title}
            loading="lazy"
            className="h-44 w-full object-contain p-3"
          />
        </div>
      )}

      <h3 className="text-lg font-semibold leading-snug">{c.title}</h3>

      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
        {c.issuer}
        {c.issueDate && ` • ${formatDate(c.issueDate)}`}
        {c.expiryDate && ` → ${formatDate(c.expiryDate)}`}
      </p>

      {skills.length > 0 && (
        <p className="mt-4 text-sm">
          <span className="font-medium">Compétences :</span>{" "}
          {skills.join(", ")}
        </p>
      )}

      {tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs dark:bg-slate-800"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="mt-4 flex items-center gap-3 text-sm">
        {c.credentialUrl && (
          <a
            href={c.credentialUrl}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-blue-600 underline underline-offset-4 dark:text-blue-400"
          >
            Voir le certificat
          </a>
        )}

        {isExpired && <span className="text-red-500">Expirée</span>}
        {c.status === "revoked" && (
          <span className="text-red-500">Révoquée</span>
        )}
      </div>
    </article>
  );
}
