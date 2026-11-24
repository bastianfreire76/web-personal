import { Moon, Sun } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'

interface ThemeToggleProps {
  theme: 'light' | 'dark'
  onToggle: () => void
}

export default function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const isDark = theme === 'dark'
  const { t } = useLanguage()

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? t.theme.toLight : t.theme.toDark}
      aria-pressed={isDark}
      className="relative flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-colors hover:border-violet-300 hover:text-violet-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-violet-400 dark:hover:text-violet-300"
    >
      <motion.span
        key={theme}
        initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.25 }}
        className="flex items-center justify-center"
      >
        {isDark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
      </motion.span>
    </button>
  )
}
