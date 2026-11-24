import type { Localized } from '../i18n/translations'

export interface ProjectLinks {
  github?: string
  demo?: string
  release?: string
}

/**
 * Cómo se construyó el proyecto:
 * - 'ai-assisted': desarrollado principalmente con apoyo de herramientas de IA
 * - 'hybrid': mezcla de código escrito a mano y apoyo de IA
 * - 'hand-coded': escrito completamente a mano
 */
export type ProjectCategory = 'ai-assisted' | 'hybrid' | 'hand-coded'

export interface Project {
  title: Localized
  description: Localized
  category: ProjectCategory
  stack: string[]
  links: ProjectLinks
  featured?: boolean
}
