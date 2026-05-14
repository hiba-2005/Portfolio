import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <section className="space-y-16">
      <div className="grid min-h-[70vh] items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-7"
        >
          <span className="inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-200">
            Étudiante ENS • Développement Web • Marrakech
          </span>

          <h1 className="max-w-4xl text-5xl font-black leading-tight text-white md:text-7xl">
            Je suis{" "}
            <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
              {profile.name}
            </span>
          </h1>

          <p className="text-2xl font-semibold text-blue-100">
            {profile.role}
          </p>

          <p className="max-w-2xl text-lg leading-8 text-slate-200">
            {profile.about}
          </p>

          <div className="flex flex-wrap gap-3 text-sm text-slate-300">
            <span>📍 {profile.location}</span>
            <span>✉️ {profile.email}</span>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-2xl bg-blue-500 px-6 py-3 font-bold text-white shadow-lg shadow-blue-500/30 transition hover:-translate-y-1 hover:bg-blue-400"
            >
              Voir mes projets <ArrowRight size={18} />
            </Link>

            <Link
              to="/contact"
              className="rounded-2xl border border-white/20 px-6 py-3 font-bold text-white transition hover:-translate-y-1 hover:bg-white hover:text-slate-950"
            >
              Me contacter
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15 }}
          className="relative rounded-[36px] border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl"
        >
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-500/30 blur-3xl" />

          <div className="relative rounded-[28px] bg-white p-7 text-slate-900 shadow-xl">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Profil
            </p>

            <h2 className="mt-4 text-3xl font-black">Hiba Ouirouane</h2>

            <p className="mt-4 leading-7 text-slate-600">
              Développement web, interfaces modernes, applications interactives
              et apprentissage continu.
            </p>

            <div className="mt-7 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-2xl bg-blue-50 p-4">
                <p className="text-2xl font-black text-blue-600">6+</p>
                <p className="text-xs text-slate-500">Projets</p>
              </div>

              <div className="rounded-2xl bg-blue-50 p-4">
                <p className="text-2xl font-black text-blue-600">10+</p>
                <p className="text-xs text-slate-500">Certifs</p>
              </div>

              <div className="rounded-2xl bg-blue-50 p-4">
                <p className="text-2xl font-black text-blue-600">2025</p>
                <p className="text-xs text-slate-500">DEUG</p>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              {profile.skills.slice(0, 10).map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-blue-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {[
          [
            "Développement Web",
            "Création d’interfaces modernes avec React, TypeScript et Tailwind CSS.",
          ],
          [
            "Programmation",
            "Travail avec plusieurs langages comme Java, Python, C++ et JavaScript.",
          ],
          [
            "Objectif",
            "Développer des projets concrets, utiles et adaptés aux besoins des utilisateurs.",
          ],
        ].map(([title, text]) => (
          <motion.article
            key={title}
            whileHover={{ y: -8 }}
            className="rounded-[28px] bg-white p-7 shadow-xl transition hover:shadow-2xl"
          >
            <h3 className="text-xl font-bold text-slate-900">{title}</h3>
            <p className="mt-4 leading-7 text-slate-600">{text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}