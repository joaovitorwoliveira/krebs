# AGENTS.md — Guia de contexto para agentes

## O que é este projeto

Site institucional + portfólio da **Krebs+ Arquitetura Paisagística**. Mostra projetos, serviços, equipe, contato. Built em **Next.js 16 (App Router)** com TypeScript, Tailwind CSS v4, Framer Motion.

URL produção: `https://krebsmais.com.br`

---

## Stack

| Camada              | Tecnologia                                                                        |
| ------------------- | --------------------------------------------------------------------------------- |
| Framework           | Next.js 16 (App Router, Turbopack no dev)                                         |
| Linguagem           | TypeScript                                                                        |
| Estilo              | Tailwind CSS v4 + tw-animate-css                                                  |
| Animações           | Framer Motion / Motion                                                            |
| Internacionalização | Context manual (PT / EN / ES)                                                     |
| Imagens             | UploadThing (CDN: `8vncue4ikz.ufs.sh`) + Contentful (CDN: `images.ctfassets.net`) |
| CMS (Blog)          | Contentful (Delivery API + Rich Text)                                             |
| E-mail              | Resend                                                                            |
| Scroll suave        | Lenis                                                                             |
| Carrossel           | Swiper                                                                            |
| Toast               | Sonner                                                                            |

---

## Estrutura de diretórios relevante

```
src/
├── app/                        # Rotas Next.js (App Router)
│   ├── page.tsx                # Home
│   ├── projetos/
│   │   ├── page.tsx            # Listagem de projetos
│   │   └── [slug]/page.tsx     # Página individual do projeto
│   ├── blog/
│   │   ├── page.tsx            # Listagem de posts (force-static)
│   │   └── [slug]/
│   │       ├── page.tsx        # Página do post + JSON-LD (BlogPosting + Breadcrumb)
│   │       └── not-found.tsx
│   ├── quem-somos/page.tsx
│   ├── servicos/page.tsx
│   ├── api/send/route.ts       # API de envio de e-mail via Resend
│   └── sitemap.ts              # Inclui rotas estáticas + posts do blog
│
├── common/
│   ├── components/             # Componentes globais (Header, Footer, Button…)
│   ├── constants/
│   │   └── db-images.ts        # Apenas 3 constantes: IMAGE_DB_URL, BLUR_PLACEHOLDER, VIDEO_KREBS
│   └── data/
│       └── image-cache.json    # Cache gerado automaticamente de todas as imagens do UploadThing
│
├── features/                   # Código organizado por domínio
│   ├── Projects/               # Domínio central de projetos
│   │   ├── get-projects.ts     # Monta o array `projects` a partir do cache + metadados
│   │   ├── project-metadata.ts # Metadados dos projetos (slug, tags, datas, coverPhotoIndex)
│   │   ├── types.ts            # Interface Project { slug, coverPhoto, images, tags, conclusionDate }
│   │   └── components/         # ProjectPage, ImageGallery, ImageModal…
│   ├── Home/
│   │   ├── HeroSection/
│   │   │   └── HeroCarousel/
│   │   │       └── util.ts     # Define as 6 imagens do hero carousel
│   │   └── ProjectsHome/       # 3 projetos em destaque na home (hardcoded no componente)
│   ├── Blog/                   # Domínio do blog (consome Contentful)
│   │   ├── components/         # BlogPage, BlogGrid, BlogPostPage, BlogBreadcrumb, RichTextRenderer
│   │   ├── utils/
│   │   │   ├── transform-entry.ts # Converte BlogPostEntry (Contentful) → BlogPost
│   │   │   ├── slugify.ts         # Gera slug a partir do título
│   │   │   └── format-date.ts
│   │   ├── types.ts            # Interface BlogPost { id, slug, title, resume, metaDescription, content, coverImage, publishedAt }
│   │   └── index.ts            # Reexporta BlogPage, BlogPostPage, type BlogPost
│   ├── Filter/                 # Filtros da página de projetos
│   ├── Services/
│   ├── WhoWeAre/
│   └── ContactDrawer/
│
├── lib/
│   └── contentful.ts           # Client Contentful + tipos (BlogPostFields, BlogPostSkeleton, ContentfulAsset) + getAllBlogPostEntries()
│
├── utils/
│   └── seo/schemas.ts          # generateBlogPostingSchema, generateBreadcrumbSchema (JSON-LD)
│
├── languages/
│   ├── pt.ts                   # Todas as strings em Português
│   ├── en.ts                   # Todas as strings em Inglês
│   └── es.ts                   # Todas as strings em Espanhol
│
├── context/
│   ├── LanguageProvider.tsx    # Provê `t` (traduções) e `currentLanguage`
│   └── ContactDrawerProvider.tsx
│
└── scripts/ (na raiz)
    └── fetch-images.ts         # Script que busca imagens no UploadThing e gera image-cache.json
```

---

## Sistema de imagens

Imagens dos projetos ficam no UploadThing. Fluxo:

```
UploadThing (CDN) → scripts/fetch-images.ts → image-cache.json → get-projects.ts → componentes
```

1. **`scripts/fetch-images.ts`** — roda antes de cada build (`prebuild`). Chama `UTApi.listFiles()`, agrupa arquivos por slug via padrão `{slug}-{numero}.ext` ou `{slug}-foto-{numero}.ext`, grava `src/common/data/image-cache.json`.
2. **`image-cache.json`** — formato: `{ "jardim-flv": [{ number: 1, url: "https://..." }, ...] }`. Commitado no repo como fallback.
3. **`get-projects.ts`** — importa cache + `project-metadata.ts`, resolve URLs, exporta array `projects: Project[]`.
4. **`project-metadata.ts`** — única fonte de verdade para metadados não visuais: `slug`, `coverPhotoIndex` (1-based do arquivo capa), `tags`, `conclusionDate`.

Rodar script manual: `npm run fetch-images`

---

## Sistema de internacionalização (i18n)

Sem lib externa. Context React simples:

- `src/languages/pt.ts`, `en.ts`, `es.ts` — objetos com todas strings.
- `src/context/LanguageProvider.tsx` — provê `{ t, currentLanguage, setLanguage }`.
- Nos componentes: `const { t } = useLanguage()` e uso `t.home.heroTitle`.

**Textos dos projetos** em `t.projects.items[slug]` com campos: `title`, `description`, `date`, `place`, opcional `architecture`, `photo`, `interior`, `services`.

**Tags** definidas em `project-metadata.ts` (chaves minúsculas sem acento); label traduzido em `t.projects.filters.tags[tag]`. Nova tag → adicionar nos 3 arquivos de idioma.

---

## Projetos em destaque

Dois lugares mostram projetos selecionados manual:

| Lugar                               | Arquivo                                                                   | Como mudar                |
| ----------------------------------- | ------------------------------------------------------------------------- | ------------------------- |
| Hero carousel (6 slides)            | `src/features/Home/HeroSection/HeroCarousel/util.ts` — array `heroConfig` | Editar `heroConfig`       |
| Seção de projetos na home (3 cards) | `src/features/Home/ProjectsHome/index.tsx` — array `featuredProjects`     | Editar `featuredProjects` |

---

## Página de projeto individual

Rota `/projetos/[slug]` gerada estática via `generateStaticParams()` que itera sobre `projects`. Página lê projeto pelo slug, passa para `<ProjectPage slug={slug} />`, que usa `t.projects.items[slug]` para textos e `project.images` para galeria.

---

## Sistema do Blog (Contentful)

Conteúdo do blog gerenciado em **Contentful** (content type `blogPost`), renderizado estático. Fluxo:

```
Contentful (Delivery API) → src/lib/contentful.ts → transform-entry.ts → BlogPage / BlogPostPage
```

### Content type `blogPost` (campos)

| Campo              | Tipo           | Obs                                                                      |
| ------------------ | -------------- | ------------------------------------------------------------------------ |
| `name`             | Short text     | Nome interno                                                             |
| `title`            | Short text     | Título visível + fonte do slug                                           |
| `resume`           | Short text     | Resumo no card + fallback de meta description                            |
| `meta_description` | Short text     | SEO (`<meta name="description">` e Open Graph)                           |
| `caption`          | Short text     | Legenda opcional                                                         |
| `content`          | Rich Text      | Renderizado por `RichTextRenderer`                                       |
| `coverImage`       | Asset (imagem) | Servido pelo CDN `images.ctfassets.net` (registrado em `next.config.ts`) |

### Pontos importantes

- **Slug**: gerado runtime a partir de `title` via `slugify()` (não vem do Contentful). Mudar título muda URL.
- **Render estático**: ambas rotas usam `export const dynamic = "force-static"`; `/blog/[slug]` faz `generateStaticParams()` a partir de todos entries — exige rebuild para novos posts.
- **Sitemap**: `src/app/sitemap.ts` busca posts via `getAllBlogPostEntries()`, adiciona URL por post.
- **SEO**: `/blog/[slug]` injeta JSON-LD `BlogPosting` + `BreadcrumbList` (helpers em `src/utils/seo/schemas.ts`).
- **i18n**: chaves em `t.blog.*` (`pageTitle`, `pageSubtitle`, `readMore`, `backToList`, `notFound`, `empty`). Conteúdo dos posts **não** traduzido — vem direto do Contentful (PT).
- **Header**: link "BLOG" em `t.header.blog`.

### Comportamento sem credenciais

`getClient()` em `src/lib/contentful.ts` lança erro se `CONTENTFUL_SPACE_ID` ou `CONTENTFUL_ACCESS_TOKEN` ausentes. Build quebra sem essas envs.

---

## Variáveis de ambiente necessárias

| Variável                  | Uso                                                             |
| ------------------------- | --------------------------------------------------------------- |
| `UPLOADTHING_TOKEN`       | Script `fetch-images.ts` (não necessária em runtime)            |
| `RESEND_API_KEY`          | API route de envio de e-mail                                    |
| `CONTENTFUL_SPACE_ID`     | Client Contentful (build do blog)                               |
| `CONTENTFUL_ACCESS_TOKEN` | Delivery API token do Contentful                                |
| `NEXT_PUBLIC_SITE_URL`    | Base URL para canonical/OG (default `https://krebsmais.com.br`) |

---

## Comandos úteis

```bash
npm run dev          # Dev com Turbopack
npm run fetch-images # Atualiza image-cache.json a partir do UploadThing
npm run build        # Roda fetch-images antes e depois faz o build Next.js
npm run prettier     # Formata todos os arquivos
```
