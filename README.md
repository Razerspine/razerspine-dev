# Razerspine Dev

Official documentation website for the Razerspine frontend tooling ecosystem.

This project provides a production-ready documentation platform built with a custom webpack-based build system, modular architecture, and a lightweight runtime engine. It showcases how to build modern frontend applications using SPA and MPA approaches without relying on heavy frameworks.

---

## 🚀 Overview

Razerspine Docs demonstrates the full ecosystem:

- **Project scaffolding CLI**
- **Webpack-based build system**
- **Lightweight runtime engine**
- **UI component layer**
- **SPA and MPA architecture examples**

The site is built as a **Multi Page Application (MPA)** and optimized for static hosting platforms like Vercel.

---

## 🧱 Tech Stack

- **Webpack** (via `@razerspine/build`)
 **TypeScript**
- **Pug (HTML templates)**
- **SCSS**
- **Custom Runtime (`@razerspine/runtime`)**

---

## 📁 Project Structure

```text
src/
  assets/        # Images, icons, i18n
  scripts/       # Global scripts (navigation, animations)
  styles/        # Global styles and components
  views/
    layout/      # Layout templates
    mixins/      # Pug mixins
    pages/       # Application pages (MPA)
```

Build output:

```text
dist/
  *.html         # Generated pages
  css/           # Compiled styles
  js/            # Bundled scripts
  img/           # Images
  fonts/         # Fonts
  404.html       # Custom error page
```

---

## ⚙️ Development

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

---

## 🏗️ Build

Create a production build:

```bash
npm run build
```

The output will be generated in the `dist/` directory.

---

## 🌐 Deployment (Vercel)

This project is optimized for deployment on Vercel.

### Required `vercel.json`

```json
{
  "cleanUrls": true,
  "trailingSlash": false,
  "routes": [
    { "handle": "filesystem" },
    { "src": "/(.*)", "status": 404, "dest": "/404.html" }
  ]
}
```

### Behavior

- Serves static HTML pages directly
- Uses `404.html` for unknown routes
- No SPA fallback (MPA architecture)

---

## 🧠 Architecture

The documentation site follows a **modular architecture**:

- Pages are independent (MPA)
- Shared layout via Pug templates
- Styles are component-based (SCSS)
- Scripts are modular and reusable

---

## ✨ Features

- Clean URL support (`/docs` instead of `/docs.html`)
- Static-first architecture
- SEO-friendly pages
- Lightweight runtime usage
- Scroll-based animations
- Code highlighting and examples

---

## 📄 Pages

- `/` — Home
- `/getting-started`
- `/cli`
- `/templates`
- `/runtime`
- `/build`
- `/examples`
- `/docs`

---

## ⚠️ Notes

- This project does **not** use a client-side router
- Each page is statically generated
- State is not shared between pages (MPA model)

---

## 🔗 Related Packages

- `@razerspine/create-app` — CLI
- `@razerspine/build` — build system
- `@razerspine/runtime` — runtime engine
- `@razerspine/ui` — UI components

---

## 📦 License

ISC
