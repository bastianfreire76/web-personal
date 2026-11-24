import type { ComponentType } from 'react'
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiPython,
  SiDocker,
  SiPhp,
  SiMysql,
  SiElectron,
  SiGithubactions,
} from 'react-icons/si'
import { TbBrandPowershell } from 'react-icons/tb'
import { FaAws } from 'react-icons/fa'
import { BarChart3 } from 'lucide-react'

type Icon = ComponentType<{ size?: number; color?: string }>

export type SkillCategory =
  | 'language'
  | 'frontend'
  | 'backend'
  | 'automation'
  | 'devops'
  | 'cloud'
  | 'data'
  | 'desktop'

export interface Skill {
  name: string
  category: SkillCategory
  icons: { icon: Icon; color: string }[]
  /** Marca la tecnología como "en aprendizaje". */
  learning?: boolean
}

/**
 * Tecnologías que aparecen en el carrusel.
 * Se reparten en dos filas: la primera mitad arriba y la segunda abajo.
 */
export const skills: Skill[] = [
  { name: 'Python', category: 'automation', icons: [{ icon: SiPython, color: '#3776ab' }] },
  {
    name: 'PowerShell',
    category: 'automation',
    icons: [{ icon: TbBrandPowershell, color: '#5391fe' }],
  },
  { name: 'Docker', category: 'devops', icons: [{ icon: SiDocker, color: '#2496ed' }] },
  {
    name: 'GitHub Actions',
    category: 'devops',
    icons: [{ icon: SiGithubactions, color: '#2088ff' }],
  },
  { name: 'AWS', category: 'cloud', icons: [{ icon: FaAws, color: '#ff9900' }], learning: true },
  {
    name: 'JavaScript / TypeScript',
    category: 'language',
    icons: [
      { icon: SiJavascript, color: '#f7df1e' },
      { icon: SiTypescript, color: '#3178c6' },
    ],
  },
  { name: 'React', category: 'frontend', icons: [{ icon: SiReact, color: '#61dafb' }] },
  { name: 'Node.js', category: 'backend', icons: [{ icon: SiNodedotjs, color: '#5fa04e' }] },
  { name: 'Electron', category: 'desktop', icons: [{ icon: SiElectron, color: '#47848f' }] },
  { name: 'PHP', category: 'backend', icons: [{ icon: SiPhp, color: '#777bb4' }] },
  { name: 'MySQL', category: 'data', icons: [{ icon: SiMysql, color: '#4479a1' }] },
  { name: 'Power BI', category: 'data', icons: [{ icon: BarChart3, color: '#f2c811' }] },
]
