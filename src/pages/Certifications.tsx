import { useMemo, useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import CertificationCard from "@/components/CertificationCard";
import { certifications } from "@/data/certifications";

// ❗ Décommente seulement si Helmet est installé
// import { Helmet } from "react-helmet-async";

export default function CertificationsPage() {
  const [q, setQ] = useState("");

  const list = useMemo(() => {
    return certifications
      .filter((c) =>
        [
          c.title,
          c.issuer,
          ...(c.skills ?? []),
        ]
          .join(" ")
          .toLowerCase()
          .includes(q.toLowerCase())
      )
      .sort((a, b) => b.issueDate.localeCompare(a.issueDate));
  }, [q]);

  return (
    <>
      {/* ❗ Active seulement si Helmet installé */}
      {/*
      <Helmet>
        <title>Certifications — Portfolio</title>
        <meta
          name="description"
          content="Certifications, badges et validations."
        />
      </Helmet>
      */}

      <section>
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionTitle
            title="Certifications"
            subtitle="Badges, compétences validées et liens de vérification."
          />

          <input
            type="text"
            placeholder="Filtrer (Python, SQL, Java...)"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="w-full rounded-xl border px-4 py-2 md:w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Filtrer les certifications"
          />
        </div>

        {list.length === 0 ? (
          <p className="text-sm text-gray-500">
            Aucune certification trouvée.
          </p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {list.map((c, index) => (
              <CertificationCard
                key={c.title + c.issueDate + index}
                c={c}
              />
            ))}
          </div>
        )}
      </section>
    </>
  );
}