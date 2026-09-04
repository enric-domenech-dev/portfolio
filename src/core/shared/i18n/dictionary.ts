import type { Locale } from './locale';

export interface Dictionary {
  site: { title: string; description: string };
  nav: {
    inicio: string;
    experiencia: string;
    proyectos: string;
    educacion: string;
    skills: string;
    contacto: string;
    cv: string;
  };
  drawer: {
    menu: string;
    navLabel: string;
    openLabel: string;
    closeLabel: string;
    themeDark: string;
    themeLight: string;
    themeSwitchLabel: string;
    languageLabel: string;
  };
  hero: {
    eyebrow: string;
    exploreExperience: string;
    viewFullCv: string;
    linkedin: string;
    github: string;
  };
  quickAccess: {
    proyectos: { title: string; description: string };
    skills: { title: string; description: string };
    cv: { title: string; description: string };
    educacion: { title: string; description: string };
  };
  experience: { title: string; eyebrow: string };
  education: { title: string; eyebrow: string; superior: string; universitari: string };
  skillsSection: { title: string };
  skillCategories: {
    mobile: { title: string; cvTitle: string };
    backend: { title: string; cvTitle: string };
    frontend: { title: string; cvTitle: string };
    databases: { title: string; cvTitle: string };
    gamedev: { title: string; cvTitle: string };
    tools: { title: string; cvTitle: string };
    other: { title: string; cvTitle: string };
  };
  projects: { title: string; eyebrow: string; placeholderNote: string; repo: string; demo: string };
  contact: { title: string; eyebrow: string; intro: string };
  cv: {
    pageTitle: string;
    eyebrow: string;
    downloadPdf: string;
    print: string;
    educationTitle: string;
    experienceTitle: string;
    skillsTitle: string;
    languagesTitle: string;
  };
}

export const DICTIONARY: Record<Locale, Dictionary> = {
  es: {
    site: {
      title: 'Portfolio - Enric Domènech',
      description: 'Portfolio profesional de Enric Domènech - Full-Stack & Mobile Developer',
    },
    nav: {
      inicio: 'Inicio',
      experiencia: 'Experiencia',
      proyectos: 'Proyectos',
      educacion: 'Educación',
      skills: 'Skills',
      contacto: 'Contacto',
      cv: 'CV',
    },
    drawer: {
      menu: 'Menú',
      navLabel: 'Navegación principal',
      openLabel: 'Abrir menú de navegación',
      closeLabel: 'Cerrar menú de navegación',
      themeDark: 'Oscuro',
      themeLight: 'Claro',
      themeSwitchLabel: 'Cambiar a tema',
      languageLabel: 'Idioma',
    },
    hero: {
      eyebrow: 'Portfolio Profesional',
      exploreExperience: 'Explorar experiencia',
      viewFullCv: 'Ver CV completo',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
    quickAccess: {
      proyectos: { title: 'Proyectos', description: 'Proyectos personales y trabajo destacado.' },
      skills: { title: 'Skills', description: 'Tecnologías y competencias técnicas.' },
      cv: { title: 'CV completo', description: 'Documento descargable e imprimible.' },
      educacion: { title: 'Educación', description: 'Formación académica y titulaciones.' },
    },
    experience: { title: 'Experiencia Profesional', eyebrow: 'Carrera' },
    education: {
      title: 'Formación Académica',
      eyebrow: 'Educación',
      superior: 'Grados Superiores',
      universitari: 'Formación Universitaria',
    },
    skillsSection: { title: 'Competencias' },
    skillCategories: {
      mobile: { title: 'Mobile', cvTitle: 'Desarrollo Mobile' },
      backend: { title: 'Backend', cvTitle: 'Backend' },
      frontend: { title: 'Frontend', cvTitle: 'Frontend' },
      databases: { title: 'Databases', cvTitle: 'Bases de Datos' },
      gamedev: { title: 'Game Development', cvTitle: 'Game Development' },
      tools: { title: 'Dev Tools', cvTitle: 'Dev Tools' },
      other: { title: 'Otras', cvTitle: 'Otras' },
    },
    projects: {
      title: 'Proyectos',
      eyebrow: 'Trabajo personal',
      placeholderNote: 'Contenido de ejemplo — pendiente de completar con proyectos reales.',
      repo: 'Repositorio',
      demo: 'Demo',
    },
    contact: {
      title: 'Contacto',
      eyebrow: 'Hablemos',
      intro: '¿Tienes una propuesta o quieres saber más? Estos son los canales más directos para contactar.',
    },
    cv: {
      pageTitle: 'CV - Enric Domènech',
      eyebrow: 'Curriculum Vitae',
      downloadPdf: 'Descargar PDF',
      print: 'Imprimir',
      educationTitle: 'Formación Académica',
      experienceTitle: 'Experiencia Profesional',
      skillsTitle: 'Competencias',
      languagesTitle: 'Idiomas',
    },
  },
  ca: {
    site: {
      title: 'Portfolio - Enric Domènech',
      description: 'Portfolio professional d\'Enric Domènech - Full-Stack & Mobile Developer',
    },
    nav: {
      inicio: 'Inici',
      experiencia: 'Experiència',
      proyectos: 'Projectes',
      educacion: 'Educació',
      skills: 'Skills',
      contacto: 'Contacte',
      cv: 'CV',
    },
    drawer: {
      menu: 'Menú',
      navLabel: 'Navegació principal',
      openLabel: 'Obrir menú de navegació',
      closeLabel: 'Tancar menú de navegació',
      themeDark: 'Fosc',
      themeLight: 'Clar',
      themeSwitchLabel: 'Canviar a tema',
      languageLabel: 'Idioma',
    },
    hero: {
      eyebrow: 'Portfolio Professional',
      exploreExperience: 'Explorar experiència',
      viewFullCv: 'Veure CV complet',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
    quickAccess: {
      proyectos: { title: 'Projectes', description: 'Projectes personals i feina destacada.' },
      skills: { title: 'Skills', description: 'Tecnologies i competències tècniques.' },
      cv: { title: 'CV complet', description: 'Document descarregable i imprimible.' },
      educacion: { title: 'Educació', description: 'Formació acadèmica i titulacions.' },
    },
    experience: { title: 'Experiència Professional', eyebrow: 'Carrera' },
    education: {
      title: 'Formació Acadèmica',
      eyebrow: 'Educació',
      superior: 'Graus Superiors',
      universitari: 'Formació Universitària',
    },
    skillsSection: { title: 'Competències' },
    skillCategories: {
      mobile: { title: 'Mobile', cvTitle: 'Desenvolupament Mobile' },
      backend: { title: 'Backend', cvTitle: 'Backend' },
      frontend: { title: 'Frontend', cvTitle: 'Frontend' },
      databases: { title: 'Databases', cvTitle: 'Bases de Dades' },
      gamedev: { title: 'Game Development', cvTitle: 'Game Development' },
      tools: { title: 'Dev Tools', cvTitle: 'Dev Tools' },
      other: { title: 'Altres', cvTitle: 'Altres' },
    },
    projects: {
      title: 'Projectes',
      eyebrow: 'Feina personal',
      placeholderNote: 'Contingut d\'exemple — pendent de completar amb projectes reals.',
      repo: 'Repositori',
      demo: 'Demo',
    },
    contact: {
      title: 'Contacte',
      eyebrow: 'Parlem-ne',
      intro: 'Tens una proposta o vols saber-ne més? Aquests són els canals més directes per contactar.',
    },
    cv: {
      pageTitle: 'CV - Enric Domènech',
      eyebrow: 'Curriculum Vitae',
      downloadPdf: 'Descarregar PDF',
      print: 'Imprimir',
      educationTitle: 'Formació Acadèmica',
      experienceTitle: 'Experiència Professional',
      skillsTitle: 'Competències',
      languagesTitle: 'Idiomes',
    },
  },
  en: {
    site: {
      title: 'Portfolio - Enric Domènech',
      description: 'Professional portfolio of Enric Domènech - Full-Stack & Mobile Developer',
    },
    nav: {
      inicio: 'Home',
      experiencia: 'Experience',
      proyectos: 'Projects',
      educacion: 'Education',
      skills: 'Skills',
      contacto: 'Contact',
      cv: 'CV',
    },
    drawer: {
      menu: 'Menu',
      navLabel: 'Main navigation',
      openLabel: 'Open navigation menu',
      closeLabel: 'Close navigation menu',
      themeDark: 'Dark',
      themeLight: 'Light',
      themeSwitchLabel: 'Switch to',
      languageLabel: 'Language',
    },
    hero: {
      eyebrow: 'Professional Portfolio',
      exploreExperience: 'Explore experience',
      viewFullCv: 'View full CV',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
    quickAccess: {
      proyectos: { title: 'Projects', description: 'Personal projects and featured work.' },
      skills: { title: 'Skills', description: 'Technologies and technical skills.' },
      cv: { title: 'Full CV', description: 'Downloadable, printable document.' },
      educacion: { title: 'Education', description: 'Academic background and degrees.' },
    },
    experience: { title: 'Professional Experience', eyebrow: 'Career' },
    education: {
      title: 'Academic Background',
      eyebrow: 'Education',
      superior: 'Higher-Level Diplomas',
      universitari: 'University Studies',
    },
    skillsSection: { title: 'Skills' },
    skillCategories: {
      mobile: { title: 'Mobile', cvTitle: 'Mobile Development' },
      backend: { title: 'Backend', cvTitle: 'Backend' },
      frontend: { title: 'Frontend', cvTitle: 'Frontend' },
      databases: { title: 'Databases', cvTitle: 'Databases' },
      gamedev: { title: 'Game Development', cvTitle: 'Game Development' },
      tools: { title: 'Dev Tools', cvTitle: 'Dev Tools' },
      other: { title: 'Other', cvTitle: 'Other' },
    },
    projects: {
      title: 'Projects',
      eyebrow: 'Personal work',
      placeholderNote: 'Example content — pending real project entries.',
      repo: 'Repository',
      demo: 'Demo',
    },
    contact: {
      title: 'Contact',
      eyebrow: "Let's talk",
      intro: 'Have a proposal or want to know more? These are the most direct ways to reach me.',
    },
    cv: {
      pageTitle: 'CV - Enric Domènech',
      eyebrow: 'Curriculum Vitae',
      downloadPdf: 'Download PDF',
      print: 'Print',
      educationTitle: 'Academic Background',
      experienceTitle: 'Professional Experience',
      skillsTitle: 'Skills',
      languagesTitle: 'Languages',
    },
  },
};

export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARY[locale];
}
