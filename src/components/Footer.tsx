import { socials } from '../data/socials'
import { useLanguage } from '../i18n/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-slate-200 px-4 py-8 sm:px-6 dark:border-slate-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 text-center text-sm text-slate-500 sm:flex-row sm:text-left dark:text-slate-400">
        <p>
          © {new Date().getFullYear()} {socials.name}. {t.footer.madeWith}
        </p>
        <p>{t.footer.tagline}</p>
      </div>
    </footer>
  )
}
