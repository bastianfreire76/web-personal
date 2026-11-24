import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

type Variant = 'plain' | 'muted' | 'gradient'

interface SectionProps {
  id: string
  /** Número de la sección, se muestra como "01", "02"... */
  index: number
  eyebrow: string
  title: string
  subtitle?: string
  variant?: Variant
  children: ReactNode
}

const VARIANT_CLASSES: Record<Variant, string> = {
  plain: 'bg-white dark:bg-slate-900',
  muted: 'bg-slate-100/70 dark:bg-slate-950',
  gradient:
    'bg-gradient-to-br from-violet-50 via-white to-cyan-50 dark:from-violet-950/30 dark:via-slate-950 dark:to-cyan-950/20',
}

/**
 * Bloque de sección con fondo propio, línea divisoria superior y encabezado numerado,
 * para que cada parte de la página se distinga claramente de la siguiente.
 */
export default function Section({
  id,
  index,
  eyebrow,
  title,
  subtitle,
  variant = 'plain',
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`relative scroll-mt-16 overflow-hidden px-4 py-20 sm:px-6 sm:py-28 ${VARIANT_CLASSES[variant]}`}
    >
      {/* Línea divisoria con gradiente entre secciones */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/60 to-transparent dark:via-violet-500/40"
      />
      {variant === 'muted' && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(100,116,139,0.18)_1px,transparent_0)] [background-size:24px_24px] [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]"
        />
      )}

      <div className="relative mx-auto max-w-6xl">
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-2xl text-center sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-violet-700 backdrop-blur dark:border-violet-500/30 dark:bg-slate-900/60 dark:text-violet-300">
            <span className="font-mono text-fuchsia-500">{String(index).padStart(2, '0')}</span>
            <span aria-hidden="true" className="h-3 w-px bg-violet-300 dark:bg-violet-500/40" />
            {eyebrow}
          </span>
          <h2
            id={`${id}-title`}
            className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white"
          >
            {title}
          </h2>
          <div
            aria-hidden="true"
            className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500"
          />
          {subtitle && (
            <p className="mt-4 text-base text-slate-600 sm:text-lg dark:text-slate-300">
              {subtitle}
            </p>
          )}
        </motion.header>

        {children}
      </div>
    </section>
  )
}
