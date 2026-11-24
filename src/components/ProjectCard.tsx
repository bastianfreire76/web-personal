import { motion } from 'framer-motion'
import { Bot, Download, ExternalLink, GitMerge, Hand, Sparkles, type LucideIcon } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import type { Project, ProjectCategory } from '../types/project'
import { useLanguage } from '../i18n/LanguageContext'

interface ProjectCardProps {
  project: Project
  index: number
}

const CATEGORY_STYLES: Record<ProjectCategory, { icon: LucideIcon; className: string }> = {
  'ai-assisted': {
    icon: Bot,
    className:
      'border-cyan-200 bg-cyan-50 text-cyan-700 dark:border-cyan-500/30 dark:bg-cyan-500/10 dark:text-cyan-300',
  },
  hybrid: {
    icon: GitMerge,
    className:
      'border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-300',
  },
  'hand-coded': {
    icon: Hand,
    className:
      'border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300',
  },
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const { stack, links, featured, category } = project
  const { language, t } = useLanguage()
  const title = project.title[language]
  const description = project.description[language]
  const { icon: CategoryIcon, className: categoryClass } = CATEGORY_STYLES[category]

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-white p-6 shadow-sm transition-shadow hover:shadow-xl hover:shadow-violet-500/10 dark:bg-slate-900 ${
        featured
          ? 'border-violet-300 dark:border-violet-500/40'
          : 'border-slate-200 dark:border-slate-800'
      }`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 opacity-0 transition-opacity group-hover:opacity-100"
      />

      <div className="mb-3 flex flex-wrap items-center gap-2">
        {featured && (
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-3 py-1 text-xs font-semibold text-white">
            <Sparkles size={13} aria-hidden="true" />
            {t.projects.featured}
          </span>
        )}
        <span
          title={t.projects.categoryHint[category]}
          className={`inline-flex w-fit items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${categoryClass}`}
        >
          <CategoryIcon size={13} aria-hidden="true" />
          {t.projects.categories[category]}
        </span>
      </div>

      <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-slate-900 dark:text-white">
        {title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        {description}
      </p>

      <ul className="mt-5 flex flex-wrap gap-2" aria-label={t.projects.stackOf(title)}>
        {stack.map((tech) => (
          <li
            key={tech}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
          >
            {tech}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-3 border-t border-slate-100 pt-5 dark:border-slate-800">
        {links.github && (
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 transition-colors hover:text-violet-600 dark:text-slate-200 dark:hover:text-violet-400"
          >
            <FaGithub size={16} aria-hidden="true" />
            {t.projects.code}
          </a>
        )}
        {links.demo && (
          <a
            href={links.demo}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 transition-colors hover:text-cyan-600 dark:text-slate-200 dark:hover:text-cyan-400"
          >
            <ExternalLink size={16} aria-hidden="true" />
            {t.projects.demo}
          </a>
        )}
        {links.release && (
          <a
            href={links.release}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 transition-colors hover:text-fuchsia-600 dark:text-slate-200 dark:hover:text-fuchsia-400"
          >
            <Download size={16} aria-hidden="true" />
            {t.projects.download}
          </a>
        )}
      </div>
    </motion.article>
  )
}
