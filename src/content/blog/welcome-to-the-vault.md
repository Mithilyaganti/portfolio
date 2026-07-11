---
title: Welcome to the vault
description: How this site works, how to add notes, and what lives here.
date: 2026-07-10
category: Notes
tags: [meta, vault]
---

This vault is my public notebook — a mix of **project write-ups**, ML notes, and whatever I am currently breaking (on purpose).

## How to publish a post

1. Create a markdown file under `src/content/blog/`.
2. Add frontmatter (`title`, `description`, `date`, optional `category` / `tags`).
3. Write the body in normal Markdown.
4. Commit and push — GitHub Actions rebuilds the site.

Example frontmatter:

```yaml
---
title: My post title
description: One-line summary for the list view.
date: 2026-07-11
category: Engineering
tags: [rag, fastapi]
draft: false
---
```

## Why static Markdown?

GitHub Pages and Cloudflare Pages serve **static files**. There is no server process to host a live “blog editor” with uploads unless you add a paid backend.

Writing in your editor + git is the reliable free workflow:

- Full control of diffs and history
- Works offline
- No database
- Deploys for free

If you later want a browser UI that still uses git, look at **Decap CMS** (formerly Netlify CMS) with a GitHub backend — still free, still static.

## What's next

I will keep adding notes on RAG systems, streaming backends, and the projects I ship. Use the **sidebar** to jump between notes, and the **top bar** for About / Experience / Projects / Resume.
