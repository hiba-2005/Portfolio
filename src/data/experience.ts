export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  skills?: string[];
  image?: string;
};

export const experiences: Experience[] = [
  {
    company: "Collège Borj Zaitoune",
    role: "Stage en Administration Scolaire",
    period: "2026 - Présent",
    location: "Marrakech, Maroc",
    description:
      "Participation aux activités administratives et pédagogiques du collège. Gestion des documents scolaires, organisation des dossiers administratifs et assistance aux opérations internes.",
    skills: [
      "Administration",
      "Organisation",
      "Gestion documentaire",
      "Communication"
    ],
    image: "/experience/borj-zaitoune.jpg"
  },

  {
    company: "OCP Group",
    role: "Stagiaire Développement Logiciel",
    period: "Août 2025",
    location: "Safi, Maroc",
    description:
      "Participation au développement d’une application logicielle interne. Contribution au codage, aux tests et à l’implémentation en collaboration avec l’équipe IT.",
    skills: [
      "Programmation",
      "Développement logiciel",
      "Travail en équipe"
    ],
    image: "/experience/ocp.jpg"
  },

  {
    company: "Cabinet ABDA Conseil et Management",
    role: "Stagiaire Administration et Management",
    period: "Juillet 2025",
    location: "Safi, Maroc",
    description:
      "Support aux activités administratives et organisationnelles. Participation à la gestion des documents et au suivi des opérations internes.",
    skills: [
      "Organisation",
      "Gestion administrative",
      "Management"
    ],
    image: "/experience/abda.jpg"
  },

  {
    company: "Lycée Mehdi Ben Barka",
    role: "Stagiaire Administratif",
    period: "2024 - 2025",
    location: "Marrakech, Maroc",
    description:
      "Assistance à l’équipe administrative dans la gestion des dossiers étudiants, la saisie des données et l’organisation des archives.",
    skills: [
      "Gestion des données",
      "Organisation",
      "Bureautique"
    ],
    image: "/experience/mehdi-ben-barka.jpg"
  },

  {
    company: "Lycée Mhamid 9",
    role: "Stagiaire Administratif",
    period: "2023 - 2024",
    location: "Marrakech, Maroc",
    description:
      "Participation à la gestion administrative, organisation des dossiers et saisie des informations.",
    skills: [
      "Administration",
      "Gestion documentaire"
    ],
    image: "/experience/mhamid9.jpg"
  }
];