import { createContext, useContext } from 'react'
import type { Language, Translations } from './translations'

export interface LanguageContextValue {
  language: Language
  t: Translations
  setLanguage: (language: Language) => void
  toggleLanguage: () => void
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside <LanguageProvider>')
  return ctx
}
