import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { socials } from '../data/socials'
import { useLanguage } from '../i18n/LanguageContext'

export default function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contacto" className="relative overflow-hidden px-4 py-24 sm:px-6">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-violet-50 via-white to-cyan-50 dark:from-violet-950/30 dark:via-slate-950 dark:to-cyan-950/20"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
          {t.contact.title}
        </h2>
        <p className="mt-4 text-base text-slate-600 sm:text-lg dark:text-slate-300">
          {t.contact.description}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${socials.email}`}
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-cyan-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition-transform hover:-translate-y-0.5"
          >
            <Mail size={18} aria-hidden="true" />
            {socials.email}
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
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
    </section>
  )
}
