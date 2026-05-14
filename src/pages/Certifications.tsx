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
      <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <SectionTitle
          title="Certifications"
          subtitle="Mes certificats, badges et compétences validées."
        />

        <input
          type="text"
          placeholder="Filtrer : React, Java, Python..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-white placeholder:text-slate-400 outline-none backdrop-blur-xl focus:border-blue-400 md:w-96"
        />
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {list.map((c) => (
          <CertificationCard key={c.title + c.issueDate} c={c} />
        ))}
      </div>
    </section>
  );
}