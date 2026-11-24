export type Language = 'es' | 'en'

export const LANGUAGES: Language[] = ['es', 'en']

/** Texto con una versión por idioma. */
export type Localized = Record<Language, string>

export const translations = {
  es: {
    skipToContent: 'Saltar al contenido principal',
    nav: {
      label: 'Navegación principal',
      about: 'Sobre mí',
      tech: 'Tecnologías',
      projects: 'Proyectos',
      contact: 'Contacto',
      openMenu: 'Abrir menú',
      closeMenu: 'Cerrar menú',
    },
    theme: {
      toLight: 'Cambiar a modo claro',
      toDark: 'Cambiar a modo oscuro',
    },
    language: {
      switchTo: 'Switch to English',
    },
    hero: {
      greeting: '👋 Hola, soy',
      role: 'Ingeniero Civil Informático · Automatización & DevOps',
      tagline:
        'Automatizo procesos y construyo herramientas prácticas, desde scripts y pipelines de CI/CD hasta aplicaciones completas, con foco en resolver problemas reales.',
      scrollToAbout: 'Ir a la sección Sobre mí',
    },
    about: {
      title: 'Sobre mí',
      subtitle: 'Quién soy y en qué me enfoco.',
      description:
        'Ingeniero Civil Informático (Universidad de Valparaíso) enfocado en automatización y DevOps. Trabajo con Python, PowerShell, Docker y GitHub Actions. Actualmente aprendiendo AWS.',
      facts: {
        education: 'Formación',
        educationValue: 'Ingeniería Civil Informática · Universidad de Valparaíso',
        focus: 'Enfoque',
        focusValue: 'Automatización y DevOps',
        learning: 'Aprendiendo',
        learningValue: 'AWS',
      },
      focusTitle: 'Áreas de trabajo',
      areas: {
        automation: {
          title: 'Automatización',
          text: 'Scripts en Python y PowerShell para eliminar tareas repetitivas.',
        },
        cicd: {
          title: 'CI/CD',
          text: 'Pipelines con GitHub Actions para compilar, probar y publicar.',
        },
        containers: {
          title: 'Contenedores',
          text: 'Entornos reproducibles y laboratorios con Docker.',
        },
        cloud: {
          title: 'Cloud',
          text: 'Aprendiendo AWS para llevar todo esto a la nube.',
        },
      },
    },
    tech: {
      title: 'Tecnologías',
      subtitle: 'Las herramientas con las que trabajo día a día.',
      learning: 'Aprendiendo',
      categories: {
        language: 'Lenguaje',
        frontend: 'Frontend',
        backend: 'Backend',
        automation: 'Automatización',
        devops: 'DevOps',
        cloud: 'Cloud',
        data: 'Datos',
        desktop: 'Escritorio',
      },
    },
    projects: {
      title: 'Proyectos',
      subtitle: 'Algunas cosas que he construido, de principio a fin.',
      featured: 'Proyecto destacado',
      stackOf: (title: string) => `Stack tecnológico de ${title}`,
      code: 'Código',
      demo: 'Demo',
      download: 'Descargar',
      categories: {
        'ai-assisted': 'Asistido por IA',
        hybrid: 'Híbrido',
        'hand-coded': 'Hecho a mano',
      },
      categoryHint: {
        'ai-assisted': 'Desarrollado con apoyo de herramientas de IA',
        hybrid: 'Combina código escrito a mano con apoyo de IA',
        'hand-coded': 'Escrito completamente a mano, sin asistencia de IA',
      },
    },
    contact: {
      title: '¿Hablamos?',
      description:
        'Estoy abierto a nuevas oportunidades, colaboraciones y proyectos interesantes. Escríbeme directamente o encuéntrame en mis redes.',
      githubLabel: 'Perfil de GitHub',
      linkedinLabel: 'Perfil de LinkedIn',
    },
    footer: {
      madeWith: 'Hecho con React, TypeScript y Tailwind CSS.',
      tagline: 'Diseñado y construido de principio a fin.',
    },
    meta: {
      title: 'Bastián · Ingeniero Civil Informático',
      description:
        'Portafolio de Bastián, Ingeniero Civil Informático enfocado en automatización y DevOps. Proyectos, stack tecnológico y contacto.',
    },
  },
  en: {
    skipToContent: 'Skip to main content',
    nav: {
      label: 'Main navigation',
      about: 'About',
      tech: 'Tech stack',
      projects: 'Projects',
      contact: 'Contact',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
    },
    theme: {
      toLight: 'Switch to light mode',
      toDark: 'Switch to dark mode',
    },
    language: {
      switchTo: 'Cambiar a español',
    },
    hero: {
      greeting: '👋 Hi, I’m',
      role: 'Computer Engineer · Automation & DevOps',
      tagline:
        'I automate processes and build practical tools, from scripts and CI/CD pipelines to full applications, focused on solving real problems.',
      scrollToAbout: 'Go to the About section',
    },
    about: {
      title: 'About me',
      subtitle: 'Who I am and what I focus on.',
      description:
        'Computer Engineer (Universidad de Valparaíso) focused on automation and DevOps. I work with Python, PowerShell, Docker and GitHub Actions. Currently learning AWS.',
      facts: {
        education: 'Education',
        educationValue: 'Computer Engineering · Universidad de Valparaíso',
        focus: 'Focus',
        focusValue: 'Automation and DevOps',
        learning: 'Learning',
        learningValue: 'AWS',
      },
      focusTitle: 'What I work on',
      areas: {
        automation: {
          title: 'Automation',
          text: 'Python and PowerShell scripts that remove repetitive work.',
        },
        cicd: {
          title: 'CI/CD',
          text: 'GitHub Actions pipelines to build, test and release.',
        },
        containers: {
          title: 'Containers',
          text: 'Reproducible environments and labs with Docker.',
        },
        cloud: {
          title: 'Cloud',
          text: 'Learning AWS to take all of this to the cloud.',
        },
      },
    },
    tech: {
      title: 'Tech stack',
      subtitle: 'The tools I work with every day.',
      learning: 'Learning',
      categories: {
        language: 'Language',
        frontend: 'Frontend',
        backend: 'Backend',
        automation: 'Automation',
        devops: 'DevOps',
        cloud: 'Cloud',
        data: 'Data',
        desktop: 'Desktop',
      },
    },
    projects: {
      title: 'Projects',
      subtitle: 'Some things I’ve built, from start to finish.',
      featured: 'Featured project',
      stackOf: (title: string) => `Tech stack of ${title}`,
      code: 'Code',
      demo: 'Demo',
      download: 'Download',
      categories: {
        'ai-assisted': 'AI-Assisted',
        hybrid: 'Hybrid',
        'hand-coded': 'Hand-coded',
      },
      categoryHint: {
        'ai-assisted': 'Built with the help of AI tools',
        hybrid: 'Mixes hand-written code with AI assistance',
        'hand-coded': 'Written entirely by hand, without AI assistance',
      },
    },
    contact: {
      title: 'Let’s talk',
      description:
        'I’m open to new opportunities, collaborations and interesting projects. Write to me directly or find me on my socials.',
      githubLabel: 'GitHub profile',
      linkedinLabel: 'LinkedIn profile',
    },
    footer: {
      madeWith: 'Built with React, TypeScript and Tailwind CSS.',
      tagline: 'Designed and built from start to finish.',
    },
    meta: {
      title: 'Bastián · Computer Engineer',
      description:
        'Portfolio of Bastián, Computer Engineer focused on automation and DevOps. Projects, tech stack and contact.',
    },
  },
} satisfies Record<Language, unknown>

export type Translations = (typeof translations)['es']
