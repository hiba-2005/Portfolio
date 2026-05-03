export type Project = {
  title: string;
  period?: string;
  tags: string[];
  summary: string;
  details?: string;
  link?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "Portfolio React Pro",
    period: "2026",
    tags: ["React", "TypeScript", "Tailwind", "Vite"],
    summary:
      "Portfolio moderne pour présenter mon profil, mes projets et mes compétences.",
    details:
      "Développement d’un portfolio professionnel avec React et TypeScript, navigation multi-pages, design responsive et déploiement sur Vercel.",
    repo: "https://github.com/hiba-2005/Portfolio",
    link: "https://portfolio-tpid.vercel.app",
  },

  {
    title: "Rihla Maroc – Agence de voyage",
    period: "2025",
    tags: ["PHP", "JavaScript", "HTML", "CSS"],
    summary:
      "Application web de gestion d’une agence de voyage.",
    details:
      "Développement d’une plateforme permettant de gérer les destinations, les réservations et les clients. Le projet utilise PHP pour le backend, avec HTML, CSS et JavaScript pour l’interface utilisateur.",
  },

  {
    title: "Application de pointage",
    period: "2025",
    tags: ["PHP", "JavaScript", "HTML", "CSS", "Bootstrap"],
    summary:
      "Application web de pointage pour la gestion des présences.",
    details:
      "Création d’une application permettant d’enregistrer les heures d’entrée et de sortie. L’interface est réalisée avec HTML, CSS, JavaScript et Bootstrap, avec un backend PHP.",
  },

  {
    title: "Plateforme de recommandation",
    period: "2026",
    tags: ["Machine Learning", "Flask", "Python", "UX"],
    summary:
      "Plateforme intelligente de recommandation de cours.",
    details:
      "Développement d’une plateforme basée sur Flask et Machine Learning permettant de recommander des cours personnalisés selon les préférences et les besoins de l’utilisateur.",
  },

  {
    title: "Smart City – Analyse du trafic urbain",
    period: "2026",
    tags: ["Big Data", "Python", "IoT", "Data Analysis"],
    summary:
      "Projet Big Data pour analyser le trafic urbain et détecter les zones de congestion.",
    details:
      "Analyse de données simulées issues de capteurs IoT afin de détecter les embouteillages, identifier les anomalies et visualiser l’état du trafic par zone en temps réel.",
  },

  {
    title: "Gestion de salle de sport",
    period: "2025",
    tags: ["Java", "Swing", "POO", "Gestion"],
    summary:
      "Application Java pour la gestion d’une salle de sport.",
    details:
      "Développement d’une application desktop en Java permettant de gérer les adhérents, les abonnements et les activités d’une salle de sport.",
    repo: "https://github.com/hiba-2005/Projet-Java-Salle-de-Sport",
  },
];