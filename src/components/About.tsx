import { motion } from 'framer-motion'
import { skills } from '../data/skills'

export default function About() {
  return (
    <section id="sobre-mi" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl text-center"
      >
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
          Sobre mí
        </h2>
        <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
          Soy Ingeniero Civil Informático apasionado por construir software que resuelve
          problemas concretos, desde interfaces cuidadas hasta la infraestructura que las
          sostiene. Disfruto trabajar de punta a punta: diseñar la arquitectura, escribir el
          backend, dar forma a la experiencia de usuario y automatizar todo lo que se pueda en
          el camino.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.35, delay: index * 0.04 }}
            whileHover={{ y: -4 }}
            className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm transition-colors hover:border-violet-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-violet-500/50"
          >
            <div className="flex items-center gap-1.5">
              {skill.icons.map(({ icon: Icon, color }, i) => (
                <Icon key={i} size={28} color={color} aria-hidden="true" />
              ))}
            </div>
            <span className="text-xs font-medium text-slate-600 sm:text-sm dark:text-slate-300">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
