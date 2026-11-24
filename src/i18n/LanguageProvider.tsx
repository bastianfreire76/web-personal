import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { LanguageContext } from './LanguageContext'
import { translations, type Language } from './translations'

const STORAGE_KEY = 'portfolio-language'

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'es'

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === 'es' || stored === 'en') return stored
  } catch {
    // localStorage puede no estar disponible (modo privado, etc.)
  }

  // Sin preferencia guardada: español por defecto, inglés si el navegador está en inglés.
  return window.navigator.language?.toLowerCase().startsWith('en') ? 'en' : 'es'
}

export default function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage)
  const t = translations[language]

  useEffect(() => {
    document.documentElement.lang = language
    document.title = t.meta.title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', t.meta.description)
    try {
      window.localStorage.setItem(STORAGE_KEY, language)
    } catch {
      // ignorar
    }
  }, [language, t])

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === 'es' ? 'en' : 'es'))
  }, [])

  const value = useMemo(
    () => ({ language, t, setLanguage, toggleLanguage }),
    [language, t, toggleLanguage],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
