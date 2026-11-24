import Section from './Section'
import TechCarousel from './TechCarousel'
import { useLanguage } from '../i18n/LanguageContext'

export default function TechStack() {
  const { t } = useLanguage()

  return (
    <Section
      id="tecnologias"
      index={2}
      eyebrow={t.nav.tech}
      title={t.tech.title}
      subtitle={t.tech.subtitle}
      variant="muted"
    >
      <TechCarousel />
    </Section>
  )
}
