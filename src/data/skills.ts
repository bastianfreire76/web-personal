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
} from 'react-icons/si'
import { BarChart3 } from 'lucide-react'

type Icon = ComponentType<{ size?: number; color?: string }>

export interface Skill {
  name: string
  icons: { icon: Icon; color: string }[]
}

export const skills: Skill[] = [
  {
    name: 'JavaScript / TypeScript',
    icons: [
      { icon: SiJavascript, color: '#f7df1e' },
      { icon: SiTypescript, color: '#3178c6' },
    ],
  },
  { name: 'React', icons: [{ icon: SiReact, color: '#61dafb' }] },
  { name: 'Node.js', icons: [{ icon: SiNodedotjs, color: '#5fa04e' }] },
  { name: 'Python', icons: [{ icon: SiPython, color: '#3776ab' }] },
  { name: 'Docker', icons: [{ icon: SiDocker, color: '#2496ed' }] },
  { name: 'PHP', icons: [{ icon: SiPhp, color: '#777bb4' }] },
  { name: 'MySQL', icons: [{ icon: SiMysql, color: '#4479a1' }] },
  { name: 'Power BI', icons: [{ icon: BarChart3, color: '#f2c811' }] },
  { name: 'Electron', icons: [{ icon: SiElectron, color: '#47848f' }] },
]
