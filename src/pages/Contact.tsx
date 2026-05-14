import SectionTitle from "@/components/SectionTitle";
import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section className="mx-auto max-w-4xl">
      <SectionTitle
        title="Contact"
        subtitle="Disponible pour stage, alternance ou collaboration."
      />

      <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white shadow-xl">
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-8 text-white">
          <p className="text-sm font-medium uppercase tracking-widest opacity-90">
            Contact professionnel
          </p>

          <h2 className="mt-3 text-3xl font-bold">Travaillons ensemble</h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-blue-50">
            Disponible pour des opportunités de stage ou d’alternance en
            développement web, ainsi que pour des projets académiques ou
            collaboratifs.
          </p>
        </div>

        <div className="grid gap-5 bg-white p-8 text-slate-900 md:grid-cols-2">
          <div className="rounded-2xl bg-slate-100 p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Email
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="mt-2 block break-all text-lg font-bold text-blue-600 hover:underline"
            >
              {profile.email}
            </a>
          </div>

          <div className="rounded-2xl bg-slate-100 p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Localisation
            </p>

            <p className="mt-2 text-lg font-bold text-slate-900">
              Maroc, Marrakech
            </p>
          </div>

          <div className="rounded-2xl bg-slate-100 p-5 md:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Réseaux sociaux
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              {profile.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-slate-300 bg-white px-5 py-2 text-sm font-semibold text-slate-900 transition hover:-translate-y-1 hover:bg-blue-600 hover:text-white"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}