import type { Locale } from './locale';

export interface Dictionary {
  site: { title: string; description: string };
  nav: {
    inicio: string;
    experiencia: string;
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
    exploreExperience: string;
    viewFullCv: string;
    linkedin: string;
    github: string;
  };
  quickAccess: {
    skills: { title: string; description: string };
    contacto: { title: string; description: string };
  };
  experience: { title: string; eyebrow: string };
  education: { title: string; superior: string; universitari: string };
  skillsSection: { title: string; tabs: { hard: string; soft: string } };
  skillCategories: {
    mobile: { title: string; cvTitle: string };
    backend: { title: string; cvTitle: string };
    frontend: { title: string; cvTitle: string };
    databases: { title: string; cvTitle: string };
    gamedev: { title: string; cvTitle: string };
    tools: { title: string; cvTitle: string };
    other: { title: string; cvTitle: string };
    soft: { title: string; cvTitle: string };
  };
  projects: { eyebrow: string; repo: string; demo: string };
  contact: {
    title: string;
    eyebrow: string;
    intro: string;
    cta: string;
    fields: { email: string; phone: string; location: string };
  };
  cv: {
    pageTitle: string;
    eyebrow: string;
    downloadPdf: string;
    print: string;
    educationTitle: string;
    experienceTitle: string;
    experienceNote: string;
    skillsTitle: string;
    languagesTitle: string;
  };
}

export const DICTIONARY: Record<Locale, Dictionary> = {
  es: {
    site: {
      title: 'Portfolio - Enric Domènech',
      description: 'Portfolio profesional de Enric Domènech - Software Engineer especializado en Android, iOS y Kotlin Multiplatform',
    },
    nav: {
      inicio: 'Inicio',
      experiencia: 'Experiencia',
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
      exploreExperience: 'Explorar experiencia',
      viewFullCv: 'CV',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
    quickAccess: {
      skills: { title: 'Skills', description: 'Tecnologías y competencias técnicas.' },
      contacto: { title: 'Contacto', description: '¿Hablamos? Estos son los canales más directos.' },
    },
    experience: { title: 'Experiencia Profesional', eyebrow: 'Carrera' },
    education: {
      title: 'Formación Académica',
      superior: 'Grado Superior',
      universitari: 'Grado Universitario',
    },
    skillsSection: { title: 'Competencias', tabs: { hard: 'Hard Skills', soft: 'Soft Skills' } },
    skillCategories: {
      mobile: { title: 'Mobile', cvTitle: 'Desarrollo Mobile' },
      backend: { title: 'Backend', cvTitle: 'Backend' },
      frontend: { title: 'Frontend', cvTitle: 'Frontend' },
      databases: { title: 'Databases', cvTitle: 'Bases de Datos' },
      gamedev: { title: 'Game Development', cvTitle: 'Game Development' },
      tools: { title: 'Dev Tools', cvTitle: 'Dev Tools' },
      other: { title: 'Ofimática', cvTitle: 'Ofimática' },
      soft: { title: 'Soft Skills', cvTitle: 'Soft Skills' },
    },
    projects: {
      eyebrow: 'Proyecto destacado',
      repo: 'Repositorio',
      demo: 'Demo',
    },
    contact: {
      title: 'Contacto',
      eyebrow: 'Hablemos',
      intro: '¿Tienes una propuesta o quieres saber más? Estos son los canales más directos para contactar.',
      cta: 'Enviar email',
      fields: { email: 'Email', phone: 'Teléfono', location: 'Ubicación' },
    },
    cv: {
      pageTitle: 'CV - Enric Domènech',
      eyebrow: 'Curriculum Vitae',
      downloadPdf: 'Descargar PDF',
      print: 'Imprimir',
      educationTitle: 'Formación Académica',
      experienceTitle: 'Experiencia Profesional',
      experienceNote: 'Descripción completa de cada rol y proyectos destacados en la página de Experiencia.',
      skillsTitle: 'Competencias',
      languagesTitle: 'Idiomas',
    },
  },
  ca: {
    site: {
      title: 'Portfolio - Enric Domènech',
      description: 'Portfolio professional d\'Enric Domènech - Software Engineer especialitzat en Android, iOS i Kotlin Multiplatform',
    },
    nav: {
      inicio: 'Inici',
      experiencia: 'Experiència',
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
      exploreExperience: 'Explorar experiència',
      viewFullCv: 'CV',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
    quickAccess: {
      skills: { title: 'Skills', description: 'Tecnologies i competències tècniques.' },
      contacto: { title: 'Contacte', description: 'Parlem? Aquests són els canals més directes.' },
    },
    experience: { title: 'Experiència Professional', eyebrow: 'Carrera' },
    education: {
      title: 'Formació Acadèmica',
      superior: 'Grau Superior',
      universitari: 'Grau Universitari',
    },
    skillsSection: { title: 'Competències', tabs: { hard: 'Hard Skills', soft: 'Soft Skills' } },
    skillCategories: {
      mobile: { title: 'Mobile', cvTitle: 'Desenvolupament Mobile' },
      backend: { title: 'Backend', cvTitle: 'Backend' },
      frontend: { title: 'Frontend', cvTitle: 'Frontend' },
      databases: { title: 'Databases', cvTitle: 'Bases de Dades' },
      gamedev: { title: 'Game Development', cvTitle: 'Game Development' },
      tools: { title: 'Dev Tools', cvTitle: 'Dev Tools' },
      other: { title: 'Ofimàtica', cvTitle: 'Ofimàtica' },
      soft: { title: 'Soft Skills', cvTitle: 'Soft Skills' },
    },
    projects: {
      eyebrow: 'Projecte destacat',
      repo: 'Repositori',
      demo: 'Demo',
    },
    contact: {
      title: 'Contacte',
      eyebrow: 'Parlem-ne',
      intro: 'Tens una proposta o vols saber-ne més? Aquests són els canals més directes per contactar.',
      cta: 'Enviar email',
      fields: { email: 'Email', phone: 'Telèfon', location: 'Ubicació' },
    },
    cv: {
      pageTitle: 'CV - Enric Domènech',
      eyebrow: 'Curriculum Vitae',
      downloadPdf: 'Descarregar PDF',
      print: 'Imprimir',
      educationTitle: 'Formació Acadèmica',
      experienceTitle: 'Experiència Professional',
      experienceNote: 'Descripció completa de cada rol i projectes destacats a la pàgina d\'Experiència.',
      skillsTitle: 'Competències',
      languagesTitle: 'Idiomes',
    },
  },
  en: {
    site: {
      title: 'Portfolio - Enric Domènech',
      description: 'Professional portfolio of Enric Domènech - Software Engineer specialized in Android, iOS and Kotlin Multiplatform',
    },
    nav: {
      inicio: 'Home',
      experiencia: 'Experience',
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
      exploreExperience: 'Explore experience',
      viewFullCv: 'CV',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
    quickAccess: {
      skills: { title: 'Skills', description: 'Technologies and technical skills.' },
      contacto: { title: 'Contact', description: "Let's talk. These are the most direct channels." },
    },
    experience: { title: 'Professional Experience', eyebrow: 'Career' },
    education: {
      title: 'Academic Background',
      superior: 'Higher-Level Diploma',
      universitari: 'University Degree',
    },
    skillsSection: { title: 'Skills', tabs: { hard: 'Hard Skills', soft: 'Soft Skills' } },
    skillCategories: {
      mobile: { title: 'Mobile', cvTitle: 'Mobile Development' },
      backend: { title: 'Backend', cvTitle: 'Backend' },
      frontend: { title: 'Frontend', cvTitle: 'Frontend' },
      databases: { title: 'Databases', cvTitle: 'Databases' },
      gamedev: { title: 'Game Development', cvTitle: 'Game Development' },
      tools: { title: 'Dev Tools', cvTitle: 'Dev Tools' },
      other: { title: 'Office & Productivity', cvTitle: 'Office & Productivity' },
      soft: { title: 'Soft Skills', cvTitle: 'Soft Skills' },
    },
    projects: {
      eyebrow: 'Featured project',
      repo: 'Repository',
      demo: 'Demo',
    },
    contact: {
      title: 'Contact',
      eyebrow: "Let's talk",
      intro: 'Have a proposal or want to know more? These are the most direct ways to reach me.',
      cta: 'Send email',
      fields: { email: 'Email', phone: 'Phone', location: 'Location' },
    },
    cv: {
      pageTitle: 'CV - Enric Domènech',
      eyebrow: 'Curriculum Vitae',
      downloadPdf: 'Download PDF',
      print: 'Print',
      educationTitle: 'Academic Background',
      experienceTitle: 'Professional Experience',
      experienceNote: 'Full description of each role and featured projects on the Experience page.',
      skillsTitle: 'Skills',
      languagesTitle: 'Languages',
    },
  },
};

export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARY[locale];
}
