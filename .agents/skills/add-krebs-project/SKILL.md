---
name: add-krebs-project
description: Add a new project to the Krebs portfolio website. Use this skill whenever the user wants to add, insert, or register a new project, including uploading images, filling in project data, or updating project listings. Triggers on phrases like "adicionar projeto", "novo projeto", "inserir projeto", "add project", "new project", or any combination of project name + images + description that implies registration in the portfolio.
---

# Add New Project — Krebs Portfolio

This skill covers the full workflow to register a new project in the Krebs landscape architecture portfolio website (Next.js + TypeScript).

## Architecture overview

Images are stored on UploadThing and fetched at build-time into a local JSON cache. There are no hardcoded image URL constants — the system resolves everything from the filename.

Files that need to be touched (in order):

| File | Purpose |
|------|---------|
| UploadThing dashboard | Upload project images with the correct naming convention |
| _(terminal)_ | Run `npm run fetch-images` to update the cache |
| `src/features/Projects/project-metadata.ts` | Slug, cover photo index, tags, conclusion year |
| `src/languages/pt.ts` | Portuguese text (title, description, credits) |
| `src/languages/en.ts` | English text |
| `src/languages/es.ts` | Spanish text |

Text content lives **only** in the translation files. `project-metadata.ts` holds no inline text.

---

## Step 1 — Collect inputs from the user

Before writing any file, gather:

| Input | Required | Notes |
|-------|----------|-------|
| Project name (display title) | Yes | May differ per language |
| Slug | Yes | kebab-case URL identifier, e.g. `jardim-abc` |
| Number of images | Yes | Determines how many files need to be uploaded |
| Cover photo index | Yes | 1-based number of the file that is the cover |
| Tags | Yes | Must match existing tag keys (see list below) |
| Conclusion year | Yes | String e.g. `"2026"` |
| Location | Yes | e.g. `"Canoas, RS"` |
| Architecture credit | No | Omit if none |
| Photography credit | No | Omit if none |
| Interior design credit | No | Omit if none |
| Services | No | List of services rendered |
| Description (PT) | Yes | Full paragraph(s) in Portuguese |
| Description (EN) | No | If not provided, translate from PT |
| Description (ES) | No | If not provided, translate from PT |

### Available tags (must use exact key)

```
residencial, jardim, praia, piscina, internacional, institucional,
publico, varanda, colégio, urbanismo, portoalegre, garopaba,
gravatai, natureza, xangrila, pelotas, shopping, riodejaneiro, tropical,
novasantarita, condominio, resort, surf, parque, universidade, edificio,
uruguai, labarra, bairro
```

If the project needs a tag that does not exist, add it to the `filters.tags` object in all three language files before using it.

---

## Step 2 — Upload images on UploadThing

Instruct the user to upload images in the UploadThing dashboard following this naming convention:

```
{slug}-{number}.jpg
```

Examples for slug `jardim-abc`:
```
jardim-abc-01.jpg
jardim-abc-02.jpg
...
jardim-abc-12.jpg
```

Rules:
- Slug must be lowercase, no accents, words separated by hyphens — same slug used in the URL.
- Number defines gallery order. Use zero-padded two digits (`01`, `02`…).
- Files not matching `{slug}-{N}` are silently ignored by the fetch script.

---

## Step 3 — Update the image cache

After the images are uploaded, run:

```bash
npm run fetch-images
```

Verify in the terminal output that the new slug appears with the correct image count:

```
jardim-abc: 12 images   ✓
```

Commit `src/common/data/image-cache.json` after this step.

---

## Step 4 — Add entry to `project-metadata.ts`

Append to the `projectMetadata` array in `src/features/Projects/project-metadata.ts`:

```ts
{
  slug: "jardim-abc",
  coverPhotoIndex: 5,         // 1-based number of the cover image file
  tags: ["residencial", "garopaba", "piscina"],
  conclusionDate: "2025",
},
```

`coverPhotoIndex` must match the filename number of the desired cover image (e.g. `5` for `jardim-abc-05.jpg`).

---

## Step 5 — Add translation entries

Append under `projects.items` in **all three language files** (`pt.ts`, `en.ts`, `es.ts`), after the last existing project entry and before the closing `},` of `items`.

### Field reference

| Field | Required | Translated? | Shown in UI? |
|-------|----------|-------------|--------------|
| `title` | Yes | Yes | Yes |
| `description` | Yes | Yes | Yes |
| `date` | Yes | No (identical in all 3) | Yes |
| `place` | Yes | No (identical in all 3) | Yes |
| `architecture` | No | No | Yes (if present) |
| `interior` | No | No | Yes (if present) |
| `photo` | No | No | Yes (if present) |
| `services` | No | Yes | Yes (if present) |

### pt.ts

```ts
"jardim-abc": {
  title: "Jardim ABC",
  description: `
    <full Portuguese description here>
  `,
  date: "2025",
  place: "Porto Alegre, RS",
  architecture: "Nome do Escritório",   // omit if not applicable
  photo: "Lucas Daneris",               // omit if not applicable
  services: "Consultoria, Projeto Paisagístico",  // omit if not applicable
},
```

### en.ts / es.ts

Same structure. Translate `title` and `description`. Fields `date`, `place`, `architecture`, `photo` are identical to pt.ts.

---

## Step 6 (optional) — Add to hero carousel

The home page carousel shows 6 projects. To include the new project, edit `src/features/Home/HeroSection/HeroCarousel/util.ts` — add to the `heroConfig` array and remove one existing entry if needed:

```ts
{
  projectSlug: "jardim-abc",
  imageIndex: 5,   // number of the image to show in the carousel
  projectName: { pt: "Jardim ABC", en: "ABC Garden", es: "Jardim ABC" },
},
```

---

## Step 7 (optional) — Add to featured projects on home

The home page shows 3 featured project cards. To change them, edit `src/features/Home/ProjectsHome/index.tsx`:

```ts
const featuredProjects = ["jardim-abc", "jardim-adg", "unisinos"];
```

---

## Quick checklist

- [ ] Images uploaded to UploadThing with correct naming (`{slug}-{N}.jpg`)
- [ ] `npm run fetch-images` ran and slug appears in output with correct count
- [ ] `src/common/data/image-cache.json` committed
- [ ] Entry appended in `project-metadata.ts` (slug, coverPhotoIndex, tags, conclusionDate)
- [ ] Translation entry added in `pt.ts`
- [ ] Translation entry added in `en.ts`
- [ ] Translation entry added in `es.ts`
- [ ] All tags used are in the approved tag list (or new ones added to all 3 language files)
- [ ] Run `npm run build` or `npm run dev` to confirm no TypeScript errors
