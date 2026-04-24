import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>{profile.name} — Portfolio</title>
        <meta
          name="description"
          content="Portfolio moderne avec React, TypeScript et projets web."
        />
      </Helmet>

      {/* SECTION PRINCIPALE */}
      <section className="mx-auto max-w-3xl py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Petit titre */}
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            Portfolio professionnel
          </p>

          {/* Nom */}
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            {profile.name}
          </h1>

          {/* Rôle */}
          <p className="mt-3 text-xl text-slate-700 dark:text-slate-200">
            {profile.role}
          </p>

          {/* Description */}
          <p className="mt-5 text-slate-600 dark:text-slate-300">
            {profile.about}
          </p>

          {/* Boutons */}
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="rounded-xl bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
            >
              Voir mes projets
            </Link>

            <Link
              to="/contact"
              className="rounded-xl border px-5 py-2 transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-900"
            >
              Me contacter
            </Link>
          </div>

          {/* Skills */}
          <div className="mt-8 flex flex-wrap gap-2">
            {profile.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-slate-100 px-3 py-1 text-sm dark:bg-slate-800"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
}