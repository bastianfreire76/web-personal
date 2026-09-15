import type { Project } from '../types/project'

/**
 * Lista de proyectos del portafolio.
 *
 * Para agregar uno nuevo, copia este bloque y complétalo:
 *
 * {
 *   title: 'Nombre del proyecto',
 *   description: 'Descripción breve de qué hace y qué problema resuelve.',
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
    title: 'VDocker — Editor visual de topologías Docker',
    description:
      'Aplicación de escritorio para construir, gestionar y desplegar laboratorios de contenedores Docker mediante una interfaz visual Drag & Drop. Incluye catálogo de servicios preconfigurados, despliegue con 1 clic, terminal embebida, plantillas reutilizables (.vdlab) y validación de conflictos de puertos.',
    stack: ['React', 'Vite', 'Electron', 'Node.js', 'Dockerode', 'Jest', 'GitHub Actions'],
    links: {
      github: 'https://github.com/bastian176x/VDocker',
      release: 'https://github.com/bastian176x/VDocker/releases/latest',
    },
    featured: true,
  },
]
