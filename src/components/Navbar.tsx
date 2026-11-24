import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import LanguageToggle from './LanguageToggle'
import { socials } from '../data/socials'
import { useLanguage } from '../i18n/LanguageContext'

interface NavbarProps {
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { t } = useLanguage()

  const [active, setActive] = useState<string>('')

  const navLinks = [
    { href: '#sobre-mi', label: t.nav.about },
    { href: '#tecnologias', label: t.nav.tech },
    { href: '#proyectos', label: t.nav.projects },
    { href: '#contacto', label: t.nav.contact },
  ]

  // Resalta en el menú la sección que se está viendo.
  useEffect(() => {
    const sections = ['sobre-mi', 'tecnologias', 'proyectos', 'contacto']
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled
          ? 'border-slate-200 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80'
          : 'border-transparent bg-transparent'
      }`}
    >
      <nav
        aria-label={t.nav.label}
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6"
      >
        <a
          href="#inicio"
          className="font-[family-name:var(--font-display)] text-lg font-bold tracking-tight text-slate-900 dark:text-white"
        >
          {socials.name}
          <span className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">.dev</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={active === link.href ? 'true' : undefined}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === link.href
                  ? 'bg-violet-100 text-violet-700 dark:bg-violet-500/15 dark:text-violet-300'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="ml-2 flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageToggle />
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-700 dark:border-slate-700 dark:text-slate-200"
          >
            {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-slate-200 bg-white md:hidden dark:border-slate-800 dark:bg-slate-950"
          >
            <div className="flex flex-col gap-1 px-4 py-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={active === link.href ? 'true' : undefined}
                  className={`rounded-lg px-3 py-2 text-sm font-medium ${
                    active === link.href
                      ? 'bg-violet-100 text-violet-700 dark:bg-violet-500/15 dark:text-violet-300'
                      : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
