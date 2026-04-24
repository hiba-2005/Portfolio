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
  {
    title: "Introduction to Object-Oriented Programming in Python",
    issuer: "DataCamp",
    issueDate: "2025-11",
    skills: ["Python", "Programmation orientée objet"],
    image: "/certs/python-oop.webp",
    status: "active"
  },

  {
    title: "Natural Language Processing (NLP) in Python",
    issuer: "DataCamp",
    issueDate: "2025-11",
    skills: ["Machine Learning", "NLP", "Python"],
    image: "/certs/nlp-python.webp",
    status: "active"
  },

  {
    title: "Introduction to Relational Databases in SQL",
    issuer: "DataCamp",
    issueDate: "2025-11",
    skills: ["SQL", "Database Management"],
    image: "/certs/sql.webp",
    status: "active"
  },

  {
    title: "Certification Java – Fundamentals & Advanced Concepts",
    issuer: "Certification Professionnelle",
    issueDate: "2025",
    skills: ["Java", "POO"],
    image: "/certs/java.webp",
    status: "active"
  },

  {
    title: "Object-Oriented Programming in C++",
    issuer: "Certification Professionnelle",
    issueDate: "2025",
    skills: ["C++", "POO"],
    image: "/certs/cpp.webp",
    status: "active"
  }
];
