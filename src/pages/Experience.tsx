import SectionTitle from "@/components/SectionTitle";
import { experiences } from "@/data/experience";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section>
      <SectionTitle
        title="Expériences"
        subtitle="Mes stages, expériences professionnelles et compétences pratiques."
      />

      <div className="grid gap-8 lg:grid-cols-2">
        {experiences.map((item, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="
              overflow-hidden rounded-[30px]
              border border-white/10
              bg-white/10
              backdrop-blur-xl
              shadow-2xl
            "
          >
            {/* IMAGE */}
            {item.image && (
              <div className="h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.company}
                  className="h-full w-full object-cover transition duration-500 hover:scale-110"
                />
              </div>
            )}

            {/* CONTENT */}
            <div className="p-7">
              <p className="text-sm font-medium text-blue-300">
                {item.period}
              </p>

              <h3 className="mt-2 text-2xl font-bold text-white">
                {item.role}
              </h3>

              <p className="mt-1 text-lg text-blue-200">
                {item.company}
              </p>

              <p className="mt-1 text-sm text-slate-400">
                {item.location}
              </p>

              <p className="mt-5 leading-7 text-slate-300">
                {item.description}
              </p>

              {/* SKILLS */}
              <div className="mt-6 flex flex-wrap gap-3">
                {item.skills?.map((skill) => (
                  <span
                    key={skill}
                    className="
                      rounded-full
                      border border-blue-400/20
                      bg-blue-500/10
                      px-4 py-2
                      text-xs font-semibold
                      text-blue-200
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}