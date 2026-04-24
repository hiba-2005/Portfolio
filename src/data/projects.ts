export type Project = {
  title: string;
  period?: string;
  tags: string[];
  summary: string;
  details?: string; // 🔥 description plus longue
  link?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "Portfolio React Pro",
    period: "2026",
    tags: ["React", "TypeScript", "Tailwind", "Vite"],
    summary:
      "Portfolio personnel moderne avec navigation multi-pages.",
    details:
      "Développement d’un portfolio professionnel avec React et TypeScript. Intégration de Tailwind CSS pour un design moderne, gestion du routing avec React Router, et structuration des données pour une meilleure maintenabilité.",
    repo: "https://github.com/hiba-2005/Portfolio.git",
  },

  {
    title: "Rihla Maroc (Agence de voyage)",
    period: "2025",
    tags: ["Node.js", "Express", "EJS", "MongoDB"],
    summary:
      "Application web de gestion d’une agence de voyage.",
    details:
      "Conception d’une plateforme permettant de gérer les destinations, les réservations et les clients. Utilisation de Node.js et Express pour le backend et EJS pour le rendu dynamique.",
  },

  {
    title: "Application de pointage ",
    period: "2025",
    tags: ["React", "QR Code", "UI/UX"],
    summary:
      "Système de pointage  pour les employés.",
    details:
      "Développement d’une interface permettant l’enregistrement des heures d’entrée et de sortie . Ajout d’une visualisation des horaires et amélioration de l’expérience utilisateur.",
  },

  {
    title: "Plateforme de recommandation",
    period: "2026",
    tags: ["React", "JavaScript", "UX"],
    summary:
      "Système de recommandation de cours personnalisé.",
    details:
      "Création d’une interface intelligente permettant de recommander des cours en fonction des préférences de l’utilisateur. Travail sur la logique de filtrage et l’optimisation de l’interface.",
  }
];