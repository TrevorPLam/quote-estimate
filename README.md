# Quote Estimate Template

A Next.js + TypeScript + Tailwind template for a quote-first, local service website. This repository follows the estimate-first archetype with a multi-step request flow and structured SEO primitives.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Lint the project:
   ```bash
   npm run lint
   ```

## Notes
- Content and integrations are controlled through `src/config/site.ts`.
- Photo uploads are stubbed in `/api/upload` until storage is configured.
- Analytics defaults to `provider: "none"`; update the config to enable GA4 or Plausible.
