import { socials } from '../data/socials'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 px-4 py-8 sm:px-6 dark:border-slate-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 text-center text-sm text-slate-500 sm:flex-row sm:text-left dark:text-slate-400">
        <p>
          © {new Date().getFullYear()} {socials.name}. Hecho con React, TypeScript y Tailwind CSS.
        </p>
        <p>Diseñado y construido de principio a fin.</p>
      </div>
    </footer>
  )
}
