export interface ProjectLinks {
  github?: string
  demo?: string
  release?: string
}

export interface Project {
  title: string
  description: string
  stack: string[]
  links: ProjectLinks
  featured?: boolean
}
