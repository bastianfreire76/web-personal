# Portafolio personal

Sitio de portafolio de una sola página construido con Vite, React, TypeScript, Tailwind CSS
y Framer Motion.

## Desarrollo

```bash
npm install
npm run dev
```

## Editar contenido

- **Proyectos**: `src/data/projects.ts`. Cada proyecto sigue esta forma:

  ```ts
  {
    title: 'Nombre del proyecto',
    description: 'Descripción breve.',
    stack: ['Tecnología 1', 'Tecnología 2'],
    links: {
      github: 'https://github.com/usuario/repo', // opcional
      demo: 'https://demo.com',                    // opcional
      release: 'https://.../releases/latest',       // opcional
    },
    featured: true, // opcional
  }
  ```

- **Tecnologías del "Sobre mí"**: `src/data/skills.ts`.
- **Nombre, rol, tagline y redes**: `src/data/socials.ts`.

## Despliegue

### Vercel

Importa el repositorio en [vercel.com](https://vercel.com/new); Vercel detecta Vite
automáticamente (build: `npm run build`, output: `dist`). No requiere configuración adicional.

### GitHub Pages

1. En `vite.config.ts`, descomenta y ajusta `base: '/nombre-del-repo/'` con el nombre real del
   repositorio (déjalo en `/` si publicas en `usuario.github.io`).
2. En GitHub: **Settings → Pages → Source → GitHub Actions**.
3. Haz push a `main`: el workflow en `.github/workflows/deploy.yml` compila y publica el sitio
   automáticamente.

## Stack

Vite · React · TypeScript · Tailwind CSS v4 · Framer Motion · lucide-react · react-icons
