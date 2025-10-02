# Xtreme Cleaning DFW Website

## Overview
This repository contains the marketing site for **Xtreme Cleaning**, a luxury residential, rental, and commercial cleaning company serving the Dallas–Fort Worth Metroplex. The site is built with [Astro 5](https://astro.build) and styled with [Tailwind CSS 3](https://tailwindcss.com) via the official Astro integration. It ships as a fully static bundle that can be hosted on any CDN or static host, and includes an optional [Caddy](https://caddyserver.com) configuration for secure local or production delivery.

## Highlights
- Modern DFW-focused landing page covering hero messaging, services, locations, testimonials, FAQs, and a lead capture form.
- Dedicated landing pages for each service (`/services/*`) and key Metroplex locations (`/locations/*`) generated from shared data modules for consistent SEO copy.
- Standalone `/process`, `/reviews`, and `/contact` pages linked from the global header so every navigation item resolves site-wide.
- LocalBusiness JSON-LD schema, Open Graph, and Twitter metadata baked in for rich search and social sharing.
- Accessible foundations: skip navigation, semantic markup, focus-visible styles, and responsive layouts.
- FormSubmit-powered inquiry forms that are easy to swap for a custom backend when ready.

## Tech Stack
- Astro 5 (static site generation)
- Tailwind CSS 3 with `@astrojs/tailwind`
- Node.js 18+ and npm
- Optional: Caddy web server for serving the built `dist/` folder

## Project Structure
```
src/
  data/                Shared service & location copy
  layouts/Layout.astro Global page shell, navigation, metadata
  pages/
    index.astro        Home / marketing landing page
    services/          Service listing & detail pages
    locations/         Metroplex location listing & detail pages
    process.astro      4-step engagement overview
    reviews.astro      Social proof + review submission form
    contact.astro      Primary lead form & contact info
```
Tailwind styles live in `src/styles/tailwind.css`, and configuration is in `tailwind.config.js`.

## Getting Started
```bash
npm install
npm run dev
```
The dev server runs at `http://localhost:4321/` with hot reload.

## Production Build
```bash
npm run build
```
Static assets are emitted to `dist/`. Deploy that folder to your hosting provider (S3, Netlify, Vercel, Cloudflare Pages, etc.).

### Preview with Caddy (optional)
```bash
npm run build
caddy run --config Caddyfile
```
Adjust the site address and TLS settings inside `Caddyfile` for your environment.

## Customization Checklist
- Update phone/email and CTA copy in `src/layouts/Layout.astro`, `src/pages/index.astro`, and `src/pages/contact.astro`.
- Refresh structured data and Open Graph images (`Layout.astro`, `index.astro`).
- Edit service/location content in `src/data/services.js` and `src/data/locations.js` – pages pull directly from those modules.
- Swap the FormSubmit endpoints with your CRM or serverless functions when ready for production.

## Testing
- `npm run build` – ensures the Astro compiler and Tailwind pipeline succeed before deploying.

## Deployment Notes
- Commit source files (not the contents of `dist/`).
- Use your CI/CD of choice to run `npm ci && npm run build` and publish the generated static assets.
- When using Caddy in production, configure persistent TLS storage, logging, and process supervision.
