import { motion } from 'framer-motion'
import { Languages } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

export default function LanguageToggle() {
  const { language, toggleLanguage, t } = useLanguage()

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={t.language.switchTo}
      title={t.language.switchTo}
      className="flex h-9 items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 text-xs font-semibold text-slate-600 transition-colors hover:border-violet-300 hover:text-violet-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-violet-400 dark:hover:text-violet-300"
    >
      <Languages size={16} aria-hidden="true" />
      <motion.span
        key={language}
        initial={{ y: -6, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="uppercase"
      >
        {language}
      </motion.span>
    </button>
  )
}
