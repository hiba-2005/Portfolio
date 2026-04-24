import SectionTitle from "@/components/SectionTitle";
import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section className="max-w-3xl">
      <SectionTitle
        title="Contact"
        subtitle="Tu peux me contacter pour un stage, un projet ou une collaboration."
      />

      <div className="rounded-2xl border p-6">
        <p className="text-sm text-slate-600 dark:text-slate-300">
          Email :{" "}
          <a
            href={`mailto:${profile.email}`}
            className="text-blue-600 underline underline-offset-4 dark:text-blue-400"
          >
            {profile.email}
          </a>
        </p>

        <div className="mt-4 flex flex-wrap gap-4">
          {profile.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border px-4 py-2 hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-900"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}