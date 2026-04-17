# AGENTS.md — Guia de contexto para agentes

## O que é este projeto

Site institucional e portfólio da **Krebs+ Arquitetura Paisagística**. Apresenta projetos realizados, serviços, equipe e contato. Construído em **Next.js 16 (App Router)** com TypeScript, Tailwind CSS v4 e Framer Motion.

URL de produção: `https://krebsmais.com.br`

---

## Stack

| Camada              | Tecnologia                                |
| ------------------- | ----------------------------------------- |
| Framework           | Next.js 16 (App Router, Turbopack no dev) |
| Linguagem           | TypeScript                                |
| Estilo              | Tailwind CSS v4 + tw-animate-css          |
| Animações           | Framer Motion / Motion                    |
| Internacionalização | Context manual (PT / EN / ES)             |
| Imagens             | UploadThing (CDN: `8vncue4ikz.ufs.sh`)    |
| E-mail              | Resend                                    |
| Scroll suave        | Lenis                                     |
| Carrossel           | Swiper                                    |
| Toast               | Sonner                                    |

---

## Estrutura de diretórios relevante

```
src/
├── app/                        # Rotas Next.js (App Router)
│   ├── page.tsx                # Home
│   ├── projetos/
│   │   ├── page.tsx            # Listagem de projetos
│   │   └── [slug]/page.tsx     # Página individual do projeto
│   ├── quem-somos/page.tsx
│   ├── servicos/page.tsx
│   ├── api/send/route.ts       # API de envio de e-mail via Resend
│   └── sitemap.ts
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
│   ├── Filter/                 # Filtros da página de projetos
│   ├── Services/
│   ├── WhoWeAre/
│   └── ContactDrawer/
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

As imagens dos projetos ficam no UploadThing. O fluxo é:

```
UploadThing (CDN) → scripts/fetch-images.ts → image-cache.json → get-projects.ts → componentes
```

1. **`scripts/fetch-images.ts`** — roda antes de cada build (`prebuild`). Chama `UTApi.listFiles()`, agrupa arquivos por slug usando o padrão de nome `{slug}-{numero}.ext` ou `{slug}-foto-{numero}.ext`, e grava `src/common/data/image-cache.json`.
2. **`image-cache.json`** — formato: `{ "jardim-flv": [{ number: 1, url: "https://..." }, ...] }`. Commitado no repositório como fallback.
3. **`get-projects.ts`** — importa o cache e `project-metadata.ts`, resolve URLs e exporta o array `projects: Project[]`.
4. **`project-metadata.ts`** — a única fonte de verdade para os metadados não visuais: `slug`, `coverPhotoIndex` (número 1-based do arquivo de capa), `tags`, `conclusionDate`.

Para rodar o script manualmente: `npm run fetch-images`

---

## Sistema de internacionalização (i18n)

Não usa biblioteca externa. É um Context React simples:

- `src/languages/pt.ts`, `en.ts`, `es.ts` — objetos com todas as strings.
- `src/context/LanguageProvider.tsx` — provê `{ t, currentLanguage, setLanguage }`.
- Nos componentes: `const { t } = useLanguage()` e uso como `t.home.heroTitle`.

**Textos dos projetos** ficam em `t.projects.items[slug]` com campos: `title`, `description`, `date`, `place`, e opcionalmente `architecture`, `photo`, `interior`, `services`.

**Tags** são definidas em `project-metadata.ts` (chaves em minúsculas sem acento) e o label traduzido fica em `t.projects.filters.tags[tag]`. Se uma nova tag for usada, precisa ser adicionada nos 3 arquivos de idioma.

---

## Projetos em destaque

Dois lugares exibem projetos selecionados manualmente:

| Lugar                               | Arquivo                                                                   | Como mudar                |
| ----------------------------------- | ------------------------------------------------------------------------- | ------------------------- |
| Hero carousel (6 slides)            | `src/features/Home/HeroSection/HeroCarousel/util.ts` — array `heroConfig` | Editar `heroConfig`       |
| Seção de projetos na home (3 cards) | `src/features/Home/ProjectsHome/index.tsx` — array `featuredProjects`     | Editar `featuredProjects` |

---

## Página de projeto individual

A rota `/projetos/[slug]` é gerada estaticamente via `generateStaticParams()` que itera sobre `projects`. A página lê o projeto pelo slug e passa para `<ProjectPage slug={slug} />`, que por sua vez usa `t.projects.items[slug]` para os textos e `project.images` para a galeria.

---

## Variáveis de ambiente necessárias

| Variável            | Uso                                                    |
| ------------------- | ------------------------------------------------------ |
| `UPLOADTHING_TOKEN` | Script `fetch-images.ts` (não é necessária em runtime) |
| `RESEND_API_KEY`    | API route de envio de e-mail                           |

---

## Comandos úteis

```bash
npm run dev          # Dev com Turbopack
npm run fetch-images # Atualiza image-cache.json a partir do UploadThing
npm run build        # Roda fetch-images antes e depois faz o build Next.js
npm run prettier     # Formata todos os arquivos
```
