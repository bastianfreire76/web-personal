import { skills, type Skill } from '../data/skills'
import { useLanguage } from '../i18n/LanguageContext'

/** Copias de la fila dentro de la pista; la animación avanza la mitad, así el bucle no tiene cortes. */
const COPIES = 4

function TechCard({ skill }: { skill: Skill }) {
  const { t } = useLanguage()
  const mainColor = skill.icons[0].color

  return (
    <div
      className="relative mr-4 flex h-40 w-44 shrink-0 flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg sm:w-48 dark:border-slate-800 dark:bg-slate-900"
      style={{
        backgroundImage: `radial-gradient(circle at 50% 0%, ${mainColor}26, transparent 70%)`,
      }}
    >
      {skill.learning && (
        <span className="absolute right-2 top-2 rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-700 dark:bg-amber-500/15 dark:text-amber-300">
          {t.tech.learning}
        </span>
      )}
      <div className="flex items-center gap-2">
        {skill.icons.map(({ icon: Icon, color }, i) => (
          <Icon key={i} size={44} color={color} aria-hidden="true" />
        ))}
      </div>
      <div>
        <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">{skill.name}</p>
        <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
          {t.tech.categories[skill.category]}
        </p>
      </div>
    </div>
  )
}

function MarqueeRow({ items, reverse = false }: { items: Skill[]; reverse?: boolean }) {
  return (
    <div className="marquee group/marquee py-3">
      <div className={`marquee-track ${reverse ? 'marquee-reverse' : ''}`}>
        {Array.from({ length: COPIES }, (_, copy) => (
          // Solo la primera copia es legible para lectores de pantalla.
          <div key={copy} className="flex" aria-hidden={copy > 0 ? 'true' : undefined}>
            {items.map((skill) => (
              <TechCard key={skill.name} skill={skill} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function TechCarousel() {
  const half = Math.ceil(skills.length / 2)

  return (
    <div className="-mx-4 sm:mx-0">
      <MarqueeRow items={skills.slice(0, half)} />
      <MarqueeRow items={skills.slice(half)} reverse />
    </div>
  )
}
