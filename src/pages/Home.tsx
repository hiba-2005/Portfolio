import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <section className="space-y-16 py-10">
      <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-950 dark:text-blue-300">
            Étudiante ENS • Développement Web • Stage
          </span>

          <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight md:text-6xl">
            Bonjour, je suis{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Hiba Ouirouane
            </span>
          </h1>

          <p className="mt-4 text-xl font-medium text-slate-700 dark:text-slate-200">
            Étudiante en informatique à l’École Normale Supérieure
          </p>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Passionnée par le développement Front-End, je conçois des interfaces modernes, performantes et centrées sur l’utilisateur. Titulaire d’un DEUG en 2025, je développe activement mes compétences à travers des projets pratiques en React, TypeScript et Node.js, tout en travaillant avec différents langages de programmation tels que Java, Python et C++, ainsi qu’avec les bases de données.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-500">
            <span className="inline-flex items-center gap-2">
              <MapPin size={16} /> Maroc,Marrakech
            </span>
            <span className="inline-flex items-center gap-2">
              <Mail size={16} /> {profile.email}
            </span>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-5 py-3 font-semibold text-white shadow-sm transition hover:-translate-y-1 hover:bg-blue-700"
            >
              Voir mes projets <ArrowRight size={18} />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-2xl border px-5 py-3 font-semibold transition hover:-translate-y-1 hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-900"
            >
              Me contacter
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="rounded-3xl border bg-gradient-to-br from-blue-50 to-cyan-50 p-6 shadow-xl dark:border-slate-800 dark:from-slate-900 dark:to-slate-950"
        >
          <div className="rounded-2xl bg-white p-6 shadow-sm dark:bg-slate-900">
            <p className="text-sm font-semibold text-slate-500">Profil</p>
            <h2 className="mt-2 text-2xl font-bold">Hiba Ouirouane</h2>

            <p className="mt-2 text-slate-600 dark:text-slate-300">
              Étudiante en informatique, intéressée par le développement web
              moderne, les applications interactives et l’expérience utilisateur.
            </p>

            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-2xl bg-slate-100 p-4 dark:bg-slate-800">
                <p className="text-2xl font-black">4+</p>
                <p className="text-xs text-slate-500">Projets</p>
              </div>
              <div className="rounded-2xl bg-slate-100 p-4 dark:bg-slate-800">
                <p className="text-2xl font-black">5</p>
                <p className="text-xs text-slate-500">Certifs</p>
              </div>
              <div className="rounded-2xl bg-slate-100 p-4 dark:bg-slate-800">
                <p className="text-2xl font-black">2025</p>
                <p className="text-xs text-slate-500">DEUG</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {["React", "TypeScript", "Node.js", "SQL", "Java", "C++", "Python", "Mobile"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-700 dark:bg-blue-950 dark:text-blue-300"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>

      <section className="grid gap-5 md:grid-cols-3">
        {[
          ["Formation ENS", "Étudiante à l’École Normale Supérieure avec un DEUG obtenu en 2025."],
          ["Expériences de stage", "Stages en développement logiciel chez OCP Group et en administration."],
          ["Certifications", "Certifications en Python, NLP, SQL, Java et C++."],
        ].map(([title, text]) => (
          <motion.article
            key={title}
            whileHover={{ y: -6 }}
            className="rounded-3xl border p-6 shadow-sm dark:border-slate-800"
          >
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
              {text}
            </p>
          </motion.article>
        ))}
      </section>
    </section>
  );
}