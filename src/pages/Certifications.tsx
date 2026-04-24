import { useMemo, useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import CertificationCard from "@/components/CertificationCard";
import { certifications } from "@/data/certifications";

export default function CertificationsPage() {
  const [q, setQ] = useState("");

  const list = useMemo(() => {
    return certifications
      .filter((c) =>
        [c.title, c.issuer, ...(c.skills ?? []), ...(c.tags ?? [])]
          .join(" ")
          .toLowerCase()
          .includes(q.toLowerCase())
      )
      .sort((a, b) => b.issueDate.localeCompare(a.issueDate));
  }, [q]);

  return (
    <section>
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <SectionTitle
          title="Certifications"
          subtitle="Mes certificats et compétences validées."
        />

        <input
          type="text"
          placeholder="Filtrer : Python, SQL, Java..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="w-full rounded-xl border px-4 py-2 md:w-80"
          aria-label="Filtrer les certifications"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {list.map((c) => (
          <CertificationCard key={c.title + c.issueDate} c={c} />
        ))}
      </div>
    </section>
  );
}
