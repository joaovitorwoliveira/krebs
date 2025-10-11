# KREBS+ - Diretrizes do Projeto

## 📋 Visão Geral

Este projeto é um site institucional da KREBS+ Arquitetura Paisagística, desenvolvido com Next.js 15, TypeScript, Tailwind CSS e Framer Motion. O foco está em performance, acessibilidade, internacionalização e experiência visual sofisticada.

## 🏗️ Arquitetura do Projeto

```
src/
├── app/                    # App Router do Next.js 15
│   ├── globals.css         # Estilos globais
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página inicial
│   ├── sitemap.ts          # Geração de sitemap
│   ├── quem-somos/         # Página quem somos (antigo escritório)
│   ├── servicos/           # Página de serviços
│   └── projetos/           # Páginas de projetos
│       └── [slug]/         # Projeto individual (dynamic routing)
├── common/                 # Componentes e recursos compartilhados
│   └── components/         # Componentes reutilizáveis globais
│       ├── BackgroundWrapper.tsx
│       ├── BackToTop.tsx
│       ├── Button.tsx
│       ├── CopyrightTooltip.tsx
│       ├── Footer.tsx
│       ├── LanguageSelector.tsx
│       ├── Loading.tsx
│       ├── Progress.tsx
│       └── Header/         # Componentes do cabeçalho
├── features/               # Funcionalidades organizadas por domínio
│   ├── ContactDrawer/      # Drawer de contato
│   ├── Filter/             # Sistema de filtros
│   ├── Home/               # Componentes específicos da home
│   ├── Office/             # Componentes do escritório
│   └── Projects/           # Componentes de projetos
├── context/                # Contextos React
│   ├── LanguageProvider.tsx # Gerenciamento de idiomas
│   └── MotionProvider.tsx   # Configuração do Framer Motion
├── hooks/                  # Hooks customizados
├── languages/              # Sistema de internacionalização
│   ├── index.ts            # Configuração principal
│   ├── pt.ts               # Português
│   ├── en.ts               # Inglês
│   └── es.ts               # Espanhol
└── lib/                    # Utilitários e configurações
    ├── motion.tsx          # Configuração do Framer Motion
    └── utils.ts            # Funções utilitárias
```

## 📖 Boas Práticas Obrigatórias

### 🌐 Internacionalização

- **TODOS** os textos devem estar nos arquivos de tradução (`src/languages/`)
- Use sempre `const { t } = useLanguage()` para acessar traduções
- Nunca coloque texto hardcoded em componentes
- Organize traduções por seção/página para facilitar manutenção

```typescript
// ✅ CORRETO
const { t } = useLanguage();
<h1>{t.home.heroTitle}</h1>

// ❌ INCORRETO
<h1>Krebs+ Arquitetura Paisagística</h1>
```

### 🎨 Animações

- Use Framer Motion importado de `@/lib/motion` (não diretamente do pacote)
- Animações devem ser sutis e elegantes
- Priorize performance com `initial`, `animate` e `transition` bem definidos
- Use delays escalonados para criar hierarquia visual

```typescript
// ✅ Padrão de animação
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
>
```

### 🧩 Componentização

**Organização por Escopo de Uso:**

#### 📁 `common/components/`

Componentes **reutilizáveis** que são usados em **múltiplas páginas/features**:

- Header, Footer, Button, Loading
- BackToTop, LanguageSelector, Progress
- Wrappers e layouts compartilhados
- Componentes de UI genéricos

#### 📁 `features/`

Componentes **específicos** de uma **funcionalidade única**:

- ContactDrawer (apenas no drawer de contato)
- Filter (apenas na página de projetos)
- Home/ (apenas na página inicial)
- Office/ (apenas na página do escritório)
- Projects/ (apenas nas páginas de projetos)

**Regra de Ouro:** Se o componente é usado em 2+ lugares diferentes, va para `common/`. Se é específico de uma feature, va para `features/`.

**Estrutura Padrão:**

```
common/components/
└── SharedComponent/
    ├── index.tsx          # Componente principal exportado
    ├── SubComponent.tsx   # Subcomponentes (se necessário)
    └── types.ts           # Interfaces (se necessário)

features/
└── FeatureName/
    ├── index.tsx          # Componente principal da feature
    ├── ComponentA.tsx     # Componentes específicos
    ├── ComponentB.tsx     # Componentes específicos
    ├── types.ts           # Interfaces da feature
    └── components/        # Subcomponentes (se muitos)
        ├── SubComponent.tsx
        └── index.ts       # Re-exports
```

**Exemplos Práticos:**

```typescript
// ✅ common/components/Button/ - usado em várias páginas
// ✅ common/components/Header/ - presente em todas as páginas
// ✅ features/ContactDrawer/ - funcionalidade específica
// ✅ features/Home/HeroCarousel/ - específico da home
// ✅ features/Projects/components/ProjectCard/ - específico de projetos
```

- Componentes devem ter responsabilidade única e clara
- Sempre crie um arquivo `index.tsx` para exportação principal
- Use `types.ts` para interfaces quando necessário

### 🎯 TypeScript

- Use interfaces bem definidas para props
- Proibido o uso de tipagem any
- Exporte tipos de arquivos dedicados (`types.ts`)

### 🎨 Styling

- Use Tailwind CSS como sistema principal
- Classes devem ser organizadas: layout → spacing → styling → states
- Use `cn()` utility para concatenação condicional de classes

```typescript
// ✅ Ordem das classes Tailwind
className={cn("flex flex-col gap-4 p-6 bg-white rounded-lg hover:shadow-lg" , "md:p-8")}
```

### 📱 Responsividade

- Mobile-first approach obrigatório
- Breakpoints padrão: `sm:` (640px), `md:` (768px), `lg:` (1024px), `xl:` (1280px)
- Teste em diferentes dispositivos e orientações

### ⚡ Performance

- Lazy loading para componentes pesados
- Use `"use client"` apenas quando necessário
- Implemente loading states para melhor UX
- Otimize bundle com imports dinâmicos quando apropriado

## 🛠️ Convenções de Código

### 📁 Nomenclatura

- **Componentes**: PascalCase (`HeroCarousel`, `ProjectDetails`)
- **Arquivos**: camelCase para utilities, PascalCase para componentes
- **Pastas**: kebab-case para rotas, PascalCase para componentes
- **Variáveis**: camelCase
- **Constantes**: SCREAMING_SNAKE_CASE

## 🎨 Design System

### 🎨 Cores

- Paleta definida no arquivo /app/globas.css
- Use classes semânticas quando possível

### 📊 Gerenciamento de Estado

- Context API para estado global (idioma, tema)
- useState para estado local
- Minimize prop drilling com contextos bem definidos

### 📡 Dados

- Dados estáticos em arquivos TypeScript (`projects.ts`, `team.ts`)
- Interfaces bem definidas para estruturas de dados
- Validação de tipos em runtime quando necessário

## 🧪 Qualidade e Testes

## 🛣️ Estrutura de Rotas

### Rotas Principais

- `/` - Página inicial (Home)
- `/quem-somos` - Página institucional (antigo /escritorio)
- `/projetos` - Lista de projetos
- `/projetos/[slug]` - Projeto individual
- `/servicos` - Página de serviços (em desenvolvimento)

### Mudanças de Rotas

**Atualizações realizadas:**

- `/escritorio` → `/quem-somos` (conteúdo migrado)
- `/equipe` → removido (conteúdo integrado em quem-somos)
- `/servicos` → nova rota criada (página em desenvolvimento)

**Navegação atualizada:**

- Header: Quem somos | Projetos | Serviços
- Footer: Home | Projetos | Quem somos | Serviços

## 🚀 Comandos Essenciais

```bash
npm run dev          # Desenvolvimento com Turbopack
npm run build        # Build de produção
npm run start        # Servidor de produção
npm run lint         # Verificação de código
npm run prettier     # Formatação de código
```

## 📋 Checklist para Novas Features

- [ ] Textos adicionados aos arquivos de tradução
- [ ] Componentes seguem padrão de nomenclatura
- [ ] Animações implementadas com Framer Motion
- [ ] Responsividade testada em múltiplos dispositivos
- [ ] TypeScript sem erros ou implementação de "any"
- [ ] Performance verificada
- [ ] Acessibilidade considerada
- [ ] Código formatado e sem warnings

## 🎯 Exemplo de Componente Padrão

```typescript
"use client";

import React from "react";
import { motion } from "@/lib/motion";
import { useLanguage } from "@/context/LanguageProvider";
import { cn } from "@/lib/utils";

interface ComponentProps {
  className?: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

export default function Component({
  className,
  variant = "primary",
  children
}: ComponentProps) {
  const { t } = useLanguage();

  return (
    <motion.div
      className={cn(
        "flex flex-col gap-4 p-6",
        variant === "primary" && "bg-white",
        variant === "secondary" && "bg-gray-50",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}
```

---

**Lembre-se**: Este projeto prioriza qualidade, performance e experiência do usuário. Sempre questione se uma mudança melhora esses aspectos antes de implementar.
