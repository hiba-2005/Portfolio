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
    school: "cole Normale Supérieure (ENS)",
    degree: "Licence",
    field: "Informatique",
    location: "Maroc",
    start: "2023-09",
    end: "2026-07",
    courses: ["Développement Web (React, Node.js)",
  "Bases de données (SQL)",
  "Algorithmique et structures de données",
  "Programmation orientée objet (Java, C++)",
  "Programmation en Python",
  "Développement mobile (Android)"],
    highlights: ["Obtention du DEUG en 2025","Projets web", "Travaux pratiques", "Applications interactives"],
  },
];