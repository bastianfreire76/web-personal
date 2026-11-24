import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import Section from './Section'
import { useLanguage } from '../i18n/LanguageContext'

export default function Projects() {
  const { t } = useLanguage()

  return (
    <Section
      id="proyectos"
      index={3}
      eyebrow={t.nav.projects}
      title={t.projects.title}
      subtitle={t.projects.subtitle}
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.title.es} project={project} index={index} />
        ))}
      </div>
    </Section>
  )
}
