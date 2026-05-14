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
      "Développement d’un portfolio professionnel avec React, TypeScript et Tailwind CSS. Mise en place d’une navigation multi-pages, d’un design responsive et d’un déploiement sur Vercel.",
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
      "Développement d’une plateforme permettant de gérer les destinations, les réservations et les clients. Utilisation de PHP pour le backend avec une interface réalisée en HTML, CSS et JavaScript.",
  },

  {
    title: "Application de pointage",
    period: "2025",
    tags: ["PHP", "JavaScript", "HTML", "CSS", "Bootstrap"],
    summary:
      "Application web de pointage pour la gestion des présences.",
    details:
      "Création d’une application permettant l’enregistrement des heures d’entrée et de sortie des employés avec une interface moderne utilisant Bootstrap et un backend PHP.",
  },

  {
    title: "Plateforme de recommandation",
    period: "2026",
    tags: ["Machine Learning", "Flask", "Python", "UX"],
    summary:
      "Plateforme intelligente de recommandation de cours.",
    details:
      "Développement d’une plateforme basée sur Flask et Machine Learning permettant de recommander des cours personnalisés selon les préférences des utilisateurs.",
  },

  {
    title: "Smart City – Analyse du trafic urbain",
    period: "2026",
    tags: ["Big Data", "Python", "IoT", "Kafka", "Spark"],
    summary:
      "Projet Big Data pour analyser le trafic urbain en temps réel.",
    details:
      "Conception d’une plateforme intelligente de surveillance du trafic urbain basée sur l’analyse de données simulées issues de capteurs IoT afin de détecter les embouteillages et anomalies en temps réel.",
    repo:
      "https://github.com/hiba-2005/Projet-Plateforme-intelligente-de-surveillance-du-trafic-urbain-en-temps-r-el.git",
  },

  {
    title: "Détection automatique d’armes avec YOLO",
    period: "2026",
    tags: ["Python", "YOLO", "Computer Vision", "Deep Learning"],
    summary:
      "Projet de détection automatique d’armes dans des images de surveillance.",
    details:
      "Développement d’un système basé sur YOLO pour détecter automatiquement les armes dans des images et flux vidéo de surveillance afin d’améliorer la sécurité.",
    repo:
      "https://github.com/hiba-2005/Projet-Detection-automatique-d-arme-dans-des-images-de-surveillance-par-yolo-.git",
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

  {
    title: "MediHome – Gestion des visites médicales à domicile",
    period: "2026",
    tags: ["React", "PHP", "MySQL", "Android", "API REST"],
    summary:
      "Plateforme complète de gestion des visites médicales à domicile.",
    details:
      "Développement d’une application web et mobile permettant la gestion des patients, du personnel médical, des rendez-vous et des rapports médicaux avec API REST et base de données MySQL.",
    repo: "https://github.com/hiba-2005/Projet-MediHome",
  },
];