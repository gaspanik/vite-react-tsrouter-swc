# GEMINI.md - Project Context & Instructions

This file serves as the primary context for AI agents and developers working on this project.

## 1. Project Overview

This is a modern Single Page Application (SPA) built with **React 19**, **TypeScript**, and **Vite 7**. It utilizes **TanStack Router** for type-safe, file-based routing and **Tailwind CSS v4** for styling. The project enforces strict code quality using **Biome** and requires **pnpm** for package management.

## 2. Tech Stack

| Technology | Version | Purpose |
| :--- | :--- | :--- |
| **React** | 19.2+ | UI Library (using `react-jsx` transform) |
| **TypeScript** | 5.9+ | Static Typing |
| **Vite** | 7.x | Build Tool (using `@vitejs/plugin-react-swc`) |
| **TanStack Router** | 1.144+ | Type-safe Routing |
| **Tailwind CSS** | 4.x | Utility-first CSS (via `@tailwindcss/vite`) |
| **Biome** | 2.3+ | Linter & Formatter |
| **pnpm** | 10.x | Package Manager (Strictly enforced) |

## 3. Key Commands

**Development**
- `pnpm dev`: Start the development server (http://localhost:5173).
- `pnpm preview`: Preview the production build locally.

**Build & Quality**
- `pnpm build`: Type-check (`tsc`) and build for production.
- `pnpm check`: Run Biome to lint and format code.
- `pnpm lint`: Run Biome linter (fix with `--write`).
- `pnpm format`: Run Biome formatter (fix with `--write`).

## 4. Project Structure

```
ts-swc/
├── src/
│   ├── assets/            # Static assets
│   ├── components/        # Reusable UI components
│   │   └── ButtonCn.tsx   # Example component using 'cn' utility
│   ├── lib/               # Utility functions
│   │   └── utils.ts       # Contains 'cn' (clsx + tailwind-merge)
│   ├── routes/            # TanStack Router file-based routes
│   │   ├── __root.tsx     # Root layout
│   │   └── index.tsx      # Homepage
│   ├── index.css          # Global styles & Tailwind import
│   ├── main.tsx           # Entry point
│   └── routeTree.gen.ts   # AUTO-GENERATED - DO NOT EDIT
├── biome.json             # Linter/Formatter config
├── pnpm-lock.yaml         # Lockfile (do not delete)
├── tsconfig.app.json      # App-specific TS config
└── vite.config.ts         # Vite configuration
```

## 5. Coding Conventions & Best Practices

### React
- **Imports**: Do NOT import `React`. Use named imports for hooks (e.g., `import { useState } from 'react'`).
- **Components**: Use function declarations. Explicitly type props with interfaces.
- **Fragments**: Use `<>...</>` syntax.

### Styling (Tailwind CSS v4)
- **Configuration**: NO `tailwind.config.js`. Configuration is CSS-first (variables in `src/index.css` via `@theme`).
- **Utility**: Always use the `cn(...)` utility from `@/lib/utils` for class merging.
  ```tsx
  import { cn } from '@/lib/utils'
  // Usage: className={cn("base-classes", conditional && "extra", className)}
  ```
- **Icons**: Use `lucide-react` for icons.

### Routing (TanStack Router)
- **File-Based**: Routes are defined by files in `src/routes/`.
- **Generation**: The file `src/routeTree.gen.ts` is auto-generated. **NEVER edit it manually.**
- **Creation**: Use `createFileRoute` for defining route components.
  ```tsx
  import { createFileRoute } from '@tanstack/react-router'
  export const Route = createFileRoute('/')({ component: HomeComponent })
  ```

### Code Quality (Biome)
- **Strict Mode**: The project uses strict linting rules.
- **Formatting**: 2 spaces indentation, double quotes for JSX, no semicolons (unless needed), trailing commas.
- **Workflow**: Run `pnpm check` before committing changes.

### TypeScript
- **Path Alias**: Use `@/` to import from `src/`.
- **Strictness**: `noImplicitAny` and `strict` are enabled.

## 6. Critical Rules

1.  **Package Manager**: MUST use **pnpm**. Do not use `npm` or `yarn`.
2.  **Auto-Generated Files**: Do not modify `src/routeTree.gen.ts`.
3.  **Tailwind v4**: Do not create a `tailwind.config.js`. Use `src/index.css` for theme customization.
