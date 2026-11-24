import type { Project } from '../types/project'

/**
 * Lista de proyectos del portafolio.
 *
 * Para agregar uno nuevo, copia este bloque y complétalo:
 *
 * {
 *   title: { es: 'Nombre del proyecto', en: 'Project name' },
 *   description: {
 *     es: 'Descripción breve de qué hace y qué problema resuelve.',
 *     en: 'Short description of what it does and what problem it solves.',
 *   },
 *   category: 'hand-coded', // 'ai-assisted' | 'hybrid' | 'hand-coded'
 *   stack: ['Tecnología 1', 'Tecnología 2'],
 *   links: {
 *     github: 'https://github.com/usuario/repo',   // opcional
 *     demo: 'https://demo-en-vivo.com',             // opcional
 *     release: 'https://.../releases/latest',        // opcional
 *   },
 *   featured: true, // opcional, destaca la card en el grid
 * },
 */
export const projects: Project[] = [
  {
    title: {
      es: 'VDocker — Editor visual de topologías Docker',
      en: 'VDocker — Visual Docker topology editor',
    },
    description: {
      es: 'Aplicación de escritorio para construir, gestionar y desplegar laboratorios de contenedores Docker mediante una interfaz visual Drag & Drop. Incluye catálogo de servicios preconfigurados, despliegue con 1 clic, terminal embebida, plantillas reutilizables (.vdlab) y validación de conflictos de puertos.',
      en: 'Desktop app to build, manage and deploy Docker container labs through a visual drag-and-drop interface. Includes a catalog of preconfigured services, 1-click deployment, an embedded terminal, reusable templates (.vdlab) and port-conflict validation.',
    },
    category: 'ai-assisted',
    stack: ['React', 'Vite', 'Electron', 'Node.js', 'Dockerode', 'Jest', 'GitHub Actions'],
    links: {
      github: 'https://github.com/bastian176x/VDocker',
      release: 'https://github.com/bastian176x/VDocker/releases/latest',
    },
    featured: true,
  },
]
