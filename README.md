# [Nextjs Boilerplate]
 
A pnpm/Turborepo monorepo boilerplate for Next.js apps, with shadcn/ui
components on Base UI primitives and Biome-based linting/formatting via
Ultracite. Built to be reused as a starting template for future projects.

## Using This Repo as a Template
 
Scaffold a new project from this boilerplate — clones the full monorepo
structure (root config included), not just a single app:
 
```bash
pnpm dlx create-turbo@latest -e https://github.com/antithemes/nextjs-boilerplate my-new-app
cd my-new-app
lefthook install
```
 
## Tech Stack
 
| Layer | Tool |
|---|---|
| Framework | [Next.js](https://nextjs.org) |
| Monorepo tooling | [pnpm workspaces](https://pnpm.io/workspaces) + [Turborepo](https://turborepo.com) |
| UI components | [shadcn/ui](https://ui.shadcn.com) on [Base UI](https://base-ui.com) primitives |
| Styling | [Tailwind CSS](https://tailwindcss.com) |
| Linting/Formatting | [Biome](https://biomejs.dev) via [Ultracite](https://ultracite.ai) |
| Git hooks | [Lefthook](https://github.com/evilmartians/lefthook) |
| Language | TypeScript |
 
## Project Structure
 
```
.
├── apps/
│   └── web/                # Next.js app
│       ├── app/
│       ├── components/ui/  # shadcn components (app-local until shared)
│       ├── public/
│       ├── components.json
│       └── package.json
├── packages/                # Shared packages (added once 2+ apps need them)
│   └── ui/                  # e.g. @repo/ui — not created yet
├── biome.jsonc               # Root-level lint/format config (covers whole repo)
├── lefthook.yml               # Git hook config
├── pnpm-workspace.yaml         # Declares apps/* and packages/* as workspaces
├── turbo.json                   # Task pipeline (dev/build/lint) and caching rules
└── package.json                  # Root — shared devDependencies, packageManager pin
```
 
## Prerequisites
 
- Node.js 20+
- pnpm (version pinned in the root `package.json`'s `packageManager` field —
  run `corepack enable` so the right version installs automatically)
## Getting Started
 
```bash
pnpm install
pnpm dev
```
 
`pnpm dev` runs `turbo dev`, which starts every app in `apps/*` in parallel.
To run just one:
 
```bash
pnpm --filter web dev
```
 
The `web` app will be available at `http://localhost:3000`.
 
## Available Scripts
 
Run from the repo root:
 
| Command | What it does |
|---|---|
| `pnpm dev` | Starts all apps in dev mode (via Turborepo) |
| `pnpm build` | Builds all apps |
| `pnpm lint` | Runs Biome/Ultracite checks across the repo |
| `pnpm --filter <app> <script>` | Scopes any script to a single app |
 
## Environment Variables
 
Each app manages its own env vars — Next.js only reads `.env*` files from
the app's own directory, not the repo root.
 
```bash
apps/web/.env.local     # your local values, gitignored
apps/web/.env.example    # committed template — copy this to .env.local
```
 
If an env var affects build output, declare it in `turbo.json` under the
relevant task's `"env"` array so Turborepo's cache correctly invalidates
when it changes.
 
## Adding shadcn/ui Components
 
From inside the app that needs them:
 
```bash
cd apps/web
pnpm dlx shadcn@latest add button card dialog
```
 
Components install into `apps/web/components/ui/`. If a component ends up
needed by more than one app, extract it into a shared `packages/ui` package
(see below) rather than duplicating it per app.
 
## Adding a Shared Package
 
Once two or more apps need the same components/utilities:
 
```bash
mkdir -p packages/ui
```
 
Add a `package.json` there (e.g. `"name": "@repo/ui"`), move the shared
code in, then reference it from each app:
 
```json
"dependencies": { "@repo/ui": "workspace:*" }
```
 
## Linting & Formatting
 
Biome (via Ultracite) handles both linting and formatting — there's no
separate Prettier/ESLint config. Format-on-save is configured for VS Code
via `.vscode/settings.json`; install the **Biome** extension
(`biomejs.biome`) to enable it in your editor.
 
```bash
pnpm dlx ultracite fix     # fix everything, repo-wide
pnpm dlx ultracite doctor  # diagnose editor/config issues
```
 
## Git Hooks
 
Lefthook runs lint/format checks on `pre-commit`, scoped per-app so a
commit touching only one app doesn't check the others. Hooks install
automatically via the root `prepare` script on `pnpm install`. To
re-register manually:
 
```bash
pnpm exec lefthook install
```
 
## Deployment (Vercel)
 
Each app is deployed as its **own Vercel Project**, pointed at this same
repo with a different **Root Directory**:
 
| App | Root Directory |
|---|---|
| `web` | `apps/web` |
 
To avoid rebuilding every app on every commit, set an **Ignored Build
Step** per Project (Settings → Git):
 
```bash
npx turbo query affected --base=$VERCEL_GIT_PREVIOUS_SHA --packages web --exit-code
```
 
(swap `web` for the relevant app name in each Project's setting)