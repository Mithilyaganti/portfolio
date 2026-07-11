# Mithil's Vault — Portfolio

Personal site combining:

- **Jyoti Pokhrel–style** theme (zinc palette, JetBrains Mono, sticky top nav, dark mode)
- **Mrinal's Vault–style** home + left content sidebar + markdown notes

Built with **[Astro](https://astro.build)** + **Tailwind CSS v4**. Static output works on **GitHub Pages** and **Cloudflare Pages** for free.

## GitHub Pages & blogs (important)

| Need | Works on free GitHub Pages? |
|------|-----------------------------|
| Markdown blogs from files in the repo | **Yes** (this site) |
| Edit posts in VS Code / any editor | **Yes** — commit `.md` files |
| Live “upload blog” UI with a database | **No** — needs a backend or a git-based CMS |
| Browser CMS writing to GitHub (Decap CMS) | **Yes** (optional later; still free) |

You do **not** need a VPS for blogs if you write Markdown in the repo and deploy the static build.

## Local development

```bash
npm install
npm run dev
```

Open the URL Astro prints (usually `http://localhost:4321/portfolio/`).

```bash
npm run build    # output in dist/
npm run preview  # preview production build
```

## Deploy to GitHub Pages

1. Push this repo to `https://github.com/Mithilyaganti/portfolio`.
2. **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Push to `main` (or run the **Deploy to GitHub Pages** workflow manually).
4. Site URL: `https://mithilyaganti.github.io/portfolio/`

### Base path

`astro.config.mjs` sets `base: '/portfolio'` for a project site. If you move this to `username.github.io` or a custom domain at the root, change:

```js
base: '/',
```

## Writing / “uploading” blogs

1. Add a file: `src/content/blog/my-post-slug.md`
2. Frontmatter:

```yaml
---
title: My post title
description: Short summary for lists and SEO.
date: 2026-07-11
category: Engineering   # shows in the sidebar tree
tags: [rag, kafka]
draft: false            # true = hidden from the site
---
```

3. Write the body in Markdown (headings, code fences, lists, links all work).
4. Commit and push — the deploy workflow rebuilds the site.

**No in-browser upload UI** is required. Your editor + git *is* the upload path. That is the standard free static-blog workflow.

### Suggested categories

Use whatever you like in `category:`; the sidebar groups by that field. Examples: `Engineering`, `Machine Learning`, `Notes`, `Math`.

## Site structure

| Route | Purpose |
|-------|---------|
| `/` | Vault home (Mrinal-style intro + recent notes + sidebar) |
| `/about` | About me (Jyoti-style sections) |
| `/experience` | Work experience |
| `/projects` | Selected projects |
| `/blog` | All notes |
| `/blog/<slug>/` | Single post |
| `/resume` | PDF preview + download |
| `/contact` | Contact links |

Content for About / Experience / Projects lives in **`src/data/site.ts`** — edit there without hunting through templates.

Resume PDF: **`public/resume.pdf`** (replace the file to update).

## Theme notes

- Top bar: sticky, monospaced, section links + dark mode (Jyoti)
- Vault pages: left **Content** sidebar of posts by category (Mrinal)
- Colors: zinc + soft accent, light/dark
- Optional custom cursor on fine-pointer desktops

## Optional: Cloudflare Pages

Connect the same repo, build command `npm run build`, output directory `dist`. If the site is served at the domain root, set `base: '/'` in `astro.config.mjs`.

## License

Personal portfolio — content © Mithil Yaganti.
