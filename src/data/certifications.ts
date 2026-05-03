export type Certification = {
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialUrl?: string;
  skills?: string[];
  tags?: string[];
  image?: string;
  imageAlt?: string;
  status?: "active" | "expired" | "revoked";
};

export const certifications: Certification[] = [
  // ===================== DATACAMP =====================
  {
    title: "Introduction to Object-Oriented Programming in Python",
    issuer: "DataCamp",
    issueDate: "2025-11",
    skills: ["Python", "Programmation orientée objet"],
    image: "/certs/python-oop.webp",
    status: "active",
  },

  {
    title: "Natural Language Processing (NLP) in Python",
    issuer: "DataCamp",
    issueDate: "2025-11",
    skills: ["Machine Learning", "NLP", "Python"],
    image: "/certs/nlp-python.webp",
    status: "active",
  },

  {
    title: "Introduction to Relational Databases in SQL",
    issuer: "DataCamp",
    issueDate: "2025-11",
    skills: ["SQL", "Database Management"],
    image: "/certs/sql.webp",
    status: "active",
  },

  // ===================== MLIAEdu =====================
  {
    title: "Bases de données",
    issuer: "MLIAEdu",
    issueDate: "2025-12",
    skills: ["SQL", "Base de données", "Modélisation"],
    tags: ["Database"],
    image: "/certs/database.webp",
    imageAlt: "Certification Bases de données",
    status: "active",
  },

  {
    title: "Développement Front-End moderne avec React",
    issuer: "MLIAEdu",
    issueDate: "2026-04",
    skills: ["React", "JavaScript", "Frontend"],
    tags: ["Web", "React"],
    image: "/certs/react-cert.webp",
    imageAlt: "Certification React",
    status: "active",
  },

  {
    title: "Fondamentaux de la programmation en Kotlin",
    issuer: "MLIAEdu",
    issueDate: "2026-02",
    skills: ["Kotlin", "Mobile"],
    tags: ["Mobile"],
    image: "/certs/kotlin.webp",
    imageAlt: "Certification Kotlin",
    status: "active",
  },

  {
    title:
      "Ingénierie Logicielle Web avec PHP 7 : Architecture Multicouche et Accès aux Données Sécurisé",
    issuer: "MLIAEdu",
    issueDate: "2026-05",
    skills: ["PHP", "Architecture", "Sécurité", "Backend"],
    tags: ["Web", "Backend"],
    image: "/certs/php7.webp",
    imageAlt: "Certification PHP 7",
    status: "active",
  },

  {
    title: "Programmation orientée objet : Python",
    issuer: "MLIAEdu",
    issueDate: "2026-05",
    skills: ["Python", "POO"],
    tags: ["Python"],
    image: "/certs/python-poo.webp",
    imageAlt: "Certification Python POO",
    status: "active",
  },

  // ===================== AUTRES =====================
  {
    title: "Certification Java – Fundamentals & Advanced Concepts",
    issuer: "Certification Professionnelle",
    issueDate: "2025",
    skills: ["Java", "POO"],
    image: "/certs/java.webp",
    status: "active",
  },

  {
    title: "Object-Oriented Programming in C++",
    issuer: "Certification Professionnelle",
    issueDate: "2025",
    skills: ["C++", "POO"],
    image: "/certs/cpp.webp",
    status: "active",
  },
];