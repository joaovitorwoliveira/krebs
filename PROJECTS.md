# PROJECTS.md — Como adicionar um novo projeto

## Visão geral do fluxo

```
1. Upload das imagens no UploadThing (nomenclatura correta)
2. Rodar npm run fetch-images
3. Adicionar metadados em project-metadata.ts
4. Adicionar textos nos 3 arquivos de idioma (pt.ts, en.ts, es.ts)
5. (Opcional) Atualizar hero carousel ou projetos em destaque na home
```

---

## Passo 1 — Upload das imagens no UploadThing

Acesse o dashboard do UploadThing e faça o upload das imagens do novo projeto.

**Nomenclatura obrigatória dos arquivos:**

```
{slug}-{numero}.jpg
```

Exemplos para um projeto com slug `jardim-abc`:
```
jardim-abc-01.jpg
jardim-abc-02.jpg
jardim-abc-03.jpg
...
jardim-abc-12.jpg
```

**Regras importantes:**
- O **slug** deve ser em minúsculas, sem acentos, palavras separadas por hífen. Exemplos: `jardim-abc`, `edificio-novo`, `colegio-xyz`.
- O **número** define a ordem de exibição na galeria. Use dois dígitos (`01`, `02`…) para ordenação correta.
- O formato aceito também é `{slug}-foto-{numero}.jpg` (variação legada).
- Arquivos que **não** seguem o padrão `{slug}-{numero}` são ignorados automaticamente pelo script.

> A imagem de capa não precisa de nome especial — você define qual é a capa pelo número no Passo 3.

---

## Passo 2 — Atualizar o cache de imagens

Com o token do UploadThing configurado no `.env`, rode:

```bash
npm run fetch-images
```

O script vai buscar todos os arquivos, agrupar por slug e atualizar `src/common/data/image-cache.json`. Verifique no output do terminal que o novo slug aparece com a quantidade correta de imagens:

```
jardim-abc: 12 images   ✓
```

Commite o `image-cache.json` atualizado.

---

## Passo 3 — Adicionar metadados do projeto

Abra `src/features/Projects/project-metadata.ts` e adicione uma entrada no array `projectMetadata`:

```typescript
{
  slug: "jardim-abc",
  coverPhotoIndex: 5,      // número (1-based) do arquivo que será a capa
  tags: ["residencial", "garopaba", "piscina"],
  conclusionDate: "2025",
},
```

**Campos:**

| Campo | Descrição |
|---|---|
| `slug` | Igual ao prefixo dos arquivos no UploadThing. Vira também a URL: `/projetos/jardim-abc` |
| `coverPhotoIndex` | Número do arquivo de capa. Se a capa é `jardim-abc-05.jpg`, use `5` |
| `tags` | Array de strings em minúsculas sem acento. Devem existir em `t.projects.filters.tags` nos idiomas |
| `conclusionDate` | Ano de conclusão como string: `"2025"` |

**Tags disponíveis** (já traduzidas nos 3 idiomas):
`residencial`, `jardim`, `praia`, `piscina`, `internacional`, `institucional`, `publico`, `varanda`, `colégio`, `urbanismo`, `portoalegre`, `garopaba`, `gravatai`, `natureza`, `xangrila`, `pelotas`, `shopping`, `riodejaneiro`, `tropical`, `novasantarita`, `condominio`, `resort`, `surf`, `parque`, `universidade`, `edificio`, `uruguai`, `labarra`, `bairro`

Se precisar de uma tag nova, adicione também em `t.projects.filters.tags` nos 3 arquivos de idioma (`pt.ts`, `en.ts`, `es.ts`).

---

## Passo 4 — Adicionar textos nos arquivos de idioma

O projeto precisa de entrada em **3 arquivos**: `src/languages/pt.ts`, `src/languages/en.ts`, `src/languages/es.ts`.

Em cada arquivo, adicione dentro de `projects.items`:

```typescript
"jardim-abc": {
  title: "Jardim ABC",
  description: `Descrição do projeto...`,
  date: "2025",
  place: "Porto Alegre, RS",
  architecture: "Nome do Escritório",   // opcional
  photo: "Nome do Fotógrafo",           // opcional
  interior: "Nome do Escritório",       // opcional, para projetos de interiores
  services: "Consultoria, Projeto...",  // opcional, lista de serviços prestados
},
```

Campos **obrigatórios**: `title`, `description`, `date`, `place`.
Campos **opcionais**: `architecture`, `photo`, `interior`, `services` — só aparecem na página do projeto se preenchidos.

> Repita para os 3 idiomas. Em `en.ts` e `es.ts` traduza `title`, `description` e `place`. Os campos como `architecture` e `photo` geralmente ficam iguais ao PT.

---

## Passo 5 (opcional) — Incluir o projeto no hero carousel

O carousel da home exibe 6 projetos. Para incluir o novo projeto, edite `src/features/Home/HeroSection/HeroCarousel/util.ts`:

```typescript
const heroConfig: HeroConfig[] = [
  // ... projetos existentes
  {
    projectSlug: "jardim-abc",
    imageIndex: 5,   // número da imagem que aparece no carousel
    projectName: { pt: "Jardim ABC", en: "ABC Garden", es: "Jardim ABC" },
  },
];
```

Se o array ficar com mais de 6 entradas, remova uma das existentes.

---

## Passo 6 (opcional) — Incluir o projeto nos destaques da home

A seção de projetos da home exibe 3 cards. Para trocar um dos projetos, edite `src/features/Home/ProjectsHome/index.tsx`:

```typescript
const featuredProjects = ["jardim-abc", "jardim-adg", "unisinos"];
//                         ^ novo projeto   ^ manteve os outros dois
```

---

## Resultado final

Após os passos acima:

- A página `/projetos/jardim-abc` é gerada automaticamente (rota estática).
- O projeto aparece na listagem `/projetos` e pode ser filtrado pelas tags definidas.
- As imagens são servidas diretamente do CDN do UploadThing.
- O sitemap é atualizado automaticamente no próximo build.

---

## Resumo em uma linha por arquivo

| Arquivo | O que fazer |
|---|---|
| UploadThing dashboard | Upload das imagens com nome `{slug}-{N}.jpg` |
| `scripts/fetch-images.ts` | Nenhuma alteração — apenas rodar `npm run fetch-images` |
| `src/common/data/image-cache.json` | Gerado automaticamente — commitar após atualizar |
| `src/features/Projects/project-metadata.ts` | Adicionar objeto com slug, coverPhotoIndex, tags, conclusionDate |
| `src/languages/pt.ts` | Adicionar entrada em `projects.items` |
| `src/languages/en.ts` | Adicionar entrada em `projects.items` (traduzida) |
| `src/languages/es.ts` | Adicionar entrada em `projects.items` (traduzida) |
| `src/features/Home/HeroSection/HeroCarousel/util.ts` | (Opcional) Adicionar ao `heroConfig` |
| `src/features/Home/ProjectsHome/index.tsx` | (Opcional) Atualizar `featuredProjects` |
