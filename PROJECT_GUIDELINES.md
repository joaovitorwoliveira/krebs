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
│   ├── equipe/             # Página da equipe
│   ├── escritorio/         # Página do escritório
│   └── projetos/           # Páginas de projetos
│       └── [slug]/         # Projeto individual (dynamic routing)
├── components/             # Componentes reutilizáveis
│   ├── ui/                 # Componentes de interface base
│   ├── Home/               # Componentes específicos da home
│   ├── Project/            # Componentes de projeto
│   ├── Office/             # Componentes do escritório
│   ├── Header/             # Componentes do cabeçalho
│   ├── Footer/             # Componentes do rodapé
│   └── [Feature]/          # Componentes por funcionalidade
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
- Separe componentes por funcionalidade em pastas próprias
- Crie um arquivo `index.tsx` para exportação principal
- Use `types.ts` para interfaces quando necessário
- Componentes devem ter responsabilidade única e clara

```
components/
└── Feature/
    ├── index.tsx          # Componente principal
    ├── ComponentA.tsx     # Subcomponente
    ├── ComponentB.tsx     # Subcomponente
    └── types.ts           # Interfaces
```

### 🎯 TypeScript
- Use interfaces bem definidas para props
- Evite `any` - prefira `unknown` quando necessário
- Exporte tipos de arquivos dedicados (`types.ts`)
- Use generics quando apropriado

### 🎨 Styling
- Use Tailwind CSS como sistema principal
- Classes devem ser organizadas: layout → spacing → styling → states
- Use `cn()` utility para concatenação condicional de classes
- Responsive-first design (mobile → desktop)

```typescript
// ✅ Ordem das classes Tailwind
className="flex flex-col gap-4 p-6 bg-white rounded-lg hover:shadow-lg md:p-8"
```

### 🖼️ Imagens e Assets
- Imagens em `public/images/` organizadas por contexto
- Use `next/image` sempre com `alt`, `fill` ou dimensões específicas
- Otimize imagens para web (WebP quando possível)
- Use `priority` para imagens above-the-fold

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

### 📝 Comentários
- Use comentários em português para explicar lógica complexa
- JSDoc para funções exportadas
- Seções importantes marcadas com `// Seção`

### 🔧 Imports
- Organize imports: externos → internos → relativos
- Use path mapping (`@/` para `src/`)
- Agrupe imports relacionados

```typescript
// ✅ Ordem de imports
import React from "react";
import { motion } from "framer-motion";

import { useLanguage } from "@/context/LanguageProvider";
import { cn } from "@/lib/utils";

import Button from "../ui/button";
import { ProjectType } from "./types";
```

## 🎨 Design System

### 🎨 Cores
- Paleta definida no arquivo /app/globas.css
- Use classes semânticas quando possível
- Modo escuro considerado (se implementado)

### 📝 Tipografia
- Hierarquia clara com classes Tailwind
- Contraste adequado para acessibilidade
- Responsive typography

### 🔘 Componentes UI
- Componentes base em `src/components/ui/`
- Use shadcn/ui como base quando apropriado
- Mantenha consistência visual

## 🔄 Estado e Dados

### 📊 Gerenciamento de Estado
- Context API para estado global (idioma, tema)
- useState para estado local
- Minimize prop drilling com contextos bem definidos

### 📡 Dados
- Dados estáticos em arquivos TypeScript (`projects.ts`, `team.ts`)
- Interfaces bem definidas para estruturas de dados
- Validação de tipos em runtime quando necessário

## 🧪 Qualidade e Testes

### 🔍 Linting e Formatação
- ESLint configurado com rules específicas
- Prettier para formatação automática
- Pre-commit hooks recomendados

### 🏗️ Build e Deploy
- Build otimizado para produção
- Verificação de tipos antes do build
- Otimização de imagens automática

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