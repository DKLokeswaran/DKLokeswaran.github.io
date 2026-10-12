# Lokeswaran DK

Personal site for Lokeswaran DK, a software and full stack engineer. It is published at [https://dklokeswaran.github.io](https://dklokeswaran.github.io).

The site is a static [Astro](https://astro.build) project written in TypeScript. Project cards come from a typed content collection, so a new project is a Markdown file plus frontmatter.

## Prerequisites

- Node.js 22.12 or newer
- npm

## Local development

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

The server prints a local URL, usually [http://localhost:4321](http://localhost:4321).

Build the static site and preview that build:

```bash
npm run build
npm run preview
```

`npm run build` writes the site to `dist/`.

## Add a project

Projects live in `src/content/projects/` as one Markdown file each. `src/content.config.ts` defines the collection and checks every published file with Zod.

Published files are any `*.md` in that folder whose name does not start with `_`. `flexi-pomodoro.md` is the only published project. `_example.md` is a commented template and is not part of the collection.

1. Copy `src/content/projects/_example.md` to a new file in the same folder. Drop the leading underscore. A short slug works well, for example `my-project.md`.
2. Remove the HTML comment so the frontmatter and body are real Markdown.
3. Fill in the fields:
   - `title` — project name
   - `summary` — one or two sentences shown at the top of the card
   - `url` — public repository or site URL
   - `featured` — `true` or `false`. Featured projects are listed first.
   - `order` — whole number. Lower numbers appear first among projects with the same featured flag.
   - `stack` — list of technologies
   - `status` — optional one-line status. Omit the field when there is nothing to add.
4. Write the card body under the frontmatter. The page renders that Markdown under the summary.
5. Save. The dev server reloads. Run `npm run build` to confirm the schema accepts the file.

## Deploy

Pushes to `main`, and manual runs from the Actions tab, use [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). The workflow installs dependencies, builds the site, and deploys `dist/` to GitHub Pages. Pull requests build the site and do not deploy.

This repository is the user site `DKLokeswaran.github.io`, so GitHub Pages serves it at the domain root. `astro.config.mjs` sets `site` to `https://dklokeswaran.github.io` and does not set `base`.

In the repository settings on GitHub, open **Pages** and set **Source** to **GitHub Actions** once. Later pushes to `main` publish through the workflow.
