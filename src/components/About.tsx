import { motion } from 'framer-motion'
import {
  BookOpen,
  Cloud,
  Container,
  GitBranch,
  GraduationCap,
  Target,
  Workflow,
  type LucideIcon,
} from 'lucide-react'
import Section from './Section'
import { useLanguage } from '../i18n/LanguageContext'

type AreaKey = 'automation' | 'cicd' | 'containers' | 'cloud'

const AREAS: { key: AreaKey; icon: LucideIcon; accent: string }[] = [
  { key: 'automation', icon: Workflow, accent: 'from-violet-500 to-fuchsia-500' },
  { key: 'cicd', icon: GitBranch, accent: 'from-fuchsia-500 to-pink-500' },
  { key: 'containers', icon: Container, accent: 'from-cyan-500 to-blue-500' },
  { key: 'cloud', icon: Cloud, accent: 'from-amber-400 to-orange-500' },
]

export default function About() {
  const { t } = useLanguage()
  const { facts } = t.about

  const factList = [
    { icon: GraduationCap, label: facts.education, value: facts.educationValue },
    { icon: Target, label: facts.focus, value: facts.focusValue },
    { icon: BookOpen, label: facts.learning, value: facts.learningValue },
  ]

  return (
    <Section id="sobre-mi" index={1} eyebrow={t.nav.about} title={t.about.title} subtitle={t.about.subtitle}>
      <div className="grid gap-6 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8 lg:col-span-3 dark:border-slate-800 dark:bg-slate-950/60"
        >
          <div
            aria-hidden="true"
            className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-violet-400/20 blur-3xl dark:bg-violet-600/20"
          />
          <p className="relative text-lg leading-relaxed text-slate-700 sm:text-xl dark:text-slate-200">
            {t.about.description}
          </p>

          <dl className="relative mt-8 grid gap-4 sm:grid-cols-3">
            {factList.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-700/60 dark:bg-slate-800/60"
              >
                <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-violet-600 dark:text-violet-300">
                  <Icon size={15} aria-hidden="true" />
                  {label}
                </dt>
                <dd className="mt-2 text-sm font-medium text-slate-800 dark:text-slate-100">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <div className="lg:col-span-2">
          <h3 className="sr-only">{t.about.focusTitle}</h3>
          <ul className="grid h-full grid-cols-1 gap-4 sm:grid-cols-2">
            {AREAS.map(({ key, icon: Icon, accent }, i) => (
              <motion.li
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors hover:border-violet-300 dark:border-slate-800 dark:bg-slate-950/60 dark:hover:border-violet-500/50"
              >
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${accent} text-white shadow-md`}
                >
                  <Icon size={20} aria-hidden="true" />
                </span>
                <p className="mt-4 font-semibold text-slate-900 dark:text-white">
                  {t.about.areas[key].title}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {t.about.areas[key].text}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
