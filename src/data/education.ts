export type Education = {
  school: string;
  degree: string;
  field?: string;
  location?: string;
  start: string;
  end?: string;
  highlights?: string[];
  courses?: string[];
};

export const education: Education[] = [
  {
    school: "École Normale Supérieure (ENS)",
    degree: "Licence",
    field: "Informatique",
    location: "Maroc",
    start: "2025-09",
    end: "2026-07",
    courses: [
      "Développement Web",
      "React",
      "Node.js",
      "Bases de données",
      "Java",
      "Python",
      "Développement mobile",
    ],
    highlights: [
      "Année actuelle : Licence en Informatique",
      "Projets web et applications interactives",
      "Travaux pratiques en développement logiciel",
    ],
  },
  {
    school: "École Normale Supérieure (ENS)",
    degree: "DEUG",
    field: "Informatique",
    location: "Maroc",
    start: "2023-09",
    end: "2025-07",
    courses: [
      "Algorithmique",
      "Programmation orientée objet",
      "Bases de données",
      "Développement Web",
    ],
    highlights: ["Obtention du DEUG en 2024/2025"],
  },
  {
    school: "Lycée",
    degree: "Baccalauréat",
    field: "Sciences Physiques",
    location: "Maroc",
    start: "2022-09",
    end: "2023-07",
    courses: ["Physique", "Chimie", "Mathématiques"],
    highlights: ["Obtention du baccalauréat en 2022/2023"],
  },
];