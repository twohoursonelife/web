# frontend - https://twohoursonelife.com

A minimal, highly accessible, and SEO-optimized static marketing site scaffold for **Two Hours One Life** built on **Nuxt 4**.

## Tech Stack

- `mise`, `just` and `bun`
- Nuxt 4 (Vue)
  - Nitro
  - Nuxt UI
  - Nuxt SEO
- Fly.io and Cloudflare

---

## Directory Structure (Nuxt 4 layout)

```text
frontend/
├── .mise.toml           
├── Dockerfile           
├── fly.toml             
├── nuxt.config.ts       # Nuxt configuration (SEO, Modules, Nitro prerender)
└── app/                 # Nuxt 4 Application Source
    ├── app.vue          # Root component wrapped with <UApp>
    ├── layouts/
    │   └── default.vue  # Main accessible layout shell with dark mode & skip links
    └── pages/           # Pre-rendered static pages
        ├── index.vue    # Landing/Hero page
        ├── about.vue    # philosophy, history, rules
        └── contact.vue  # Accessible contact form with validation
```

---

## Local Development Setup

### Prerequisites

Ensure you have [mise-en-place (mise)](https://mise.jdx.dev).

Install dependencies with mise:
```base
mise install
```

### Setup

Initialize the environment and install dependencies:
```bash
just bootstrap
```

### Dev and Build Recipes

All common tasks are mapped as simple `just` recipes:

```bash
# Start hot-reloading development server
just dev

# Build and pre-render for production (SSG)
just build

# Preview production build locally
just preview

# Clean build folders and dependencies
just clean
```

---

## Production Build & Static Generation

### Build & Pre-render Locally
To build the application and pre-render all static routes with Nitro:
```bash
bun run build
```
This triggers Nitro's static crawler. Static pages, payloads, sitemaps, and assets will be outputted to `.output/public/`.

---

## Deployment to Fly.io TBD

This project is configured for lightweight, containerized static hosting on Fly.io using the standalone Nitro server. 

Deploying is as simple as running:
```bash
fly deploy
```

The multi-stage `Dockerfile` is optimized to:
1. Build and pre-render the application under a `builder` Alpine container.
2. Discard all development dependencies.
3. Serve the site using the minimal Nitro production bundle on a secure, non-root `bun` runtime user.
