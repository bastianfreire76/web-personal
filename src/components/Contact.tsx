import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Section from './Section'
import { socials } from '../data/socials'
import { useLanguage } from '../i18n/LanguageContext'

export default function Contact() {
  const { t } = useLanguage()

  return (
    <Section id="contacto" index={4} eyebrow={t.nav.contact} title={t.contact.title} variant="gradient">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-slate-200 bg-white/80 p-8 text-center shadow-xl shadow-violet-500/5 backdrop-blur sm:p-12 dark:border-slate-800 dark:bg-slate-900/80"
      >
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500"
        />
        <p className="text-base text-slate-600 sm:text-lg dark:text-slate-300">
          {t.contact.description}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${socials.email}`}
            className="flex max-w-full items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-cyan-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition-transform hover:-translate-y-0.5"
          >
            <Mail size={18} aria-hidden="true" className="shrink-0" />
            <span className="truncate">{socials.email}</span>
          </a>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <a
            href={socials.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={t.contact.githubLabel}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-600 transition-colors hover:border-violet-300 hover:text-violet-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-violet-400 dark:hover:text-violet-300"
          >
            <FaGithub size={20} aria-hidden="true" />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={t.contact.linkedinLabel}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-600 transition-colors hover:border-cyan-300 hover:text-cyan-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-cyan-400 dark:hover:text-cyan-300"
          >
            <FaLinkedin size={20} aria-hidden="true" />
          </a>
        </div>
      </motion.div>
    </Section>
  )
}
