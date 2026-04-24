export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  skills?: string[];
};

export const experiences: Experience[] = [
  {
    company: "OCP Group",
    role: "Stagiaire Développement Logiciel",
    period: "Août 2025 (1 mois)",
    location: "Safi, Maroc",
    description:
      "Participation à la conception et au développement d’une application logicielle. Contribution au codage, aux tests et à l’implémentation en collaboration avec l’équipe IT.",
    skills: ["Programmation", "Développement logiciel", "Travail en équipe"]
  },

  {
    company: "Cabinet ABDA Conseil et Management",
    role: "Stagiaire Administration et Management",
    period: "Juillet 2025 (1 mois)",
    location: "Safi, Maroc",
    description:
      "Support aux activités administratives et organisationnelles. Participation à la gestion des documents et au suivi des opérations internes.",
    skills: ["Organisation", "Gestion administrative"]
  },

  {
    company: "Lycée Mehdi Ben Barka",
    role: "Stagiaire Administratif",
    period: "Oct 2024 - Juil 2025",
    location: "Marrakech, Maroc",
    description:
      "Assistance à l’équipe administrative dans la gestion des dossiers étudiants, la saisie des données et l’organisation des archives.",
    skills: ["Gestion des données", "Organisation", "Bureautique"]
  },

  {
    company: "Lycée Mhamid 9",
    role: "Stagiaire Administratif",
    period: "Oct 2023 - Juil 2024",
    location: "Marrakech-Safi, Maroc",
    description:
      "Participation à la gestion administrative, organisation des dossiers et saisie des informations.",
    skills: ["Administration", "Gestion documentaire"]
  }
];