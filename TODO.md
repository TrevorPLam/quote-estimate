# TODO - Quote/Estimate Website Template

## Stage A: Repo Scaffold + Config + Layout + Libs + SEO + Tooling

- [x] Initialize Next.js project with App Router
- [x] Configure TypeScript
- [x] Configure Tailwind CSS
- [x] Create `.devcontainer/devcontainer.json`
- [x] Create `src/config/site.ts` with all interfaces and config object
- [x] Create `src/app/layout.tsx`
- [x] Create `src/app/globals.css`
- [x] Create `src/lib/tracking.ts`
- [x] Create `src/lib/analytics.ts`
- [x] Create `src/lib/schema.ts`
- [x] Create `src/lib/seo.ts`
- [x] Create `src/lib/rateLimit.ts`
- [x] Create `src/lib/utils.ts`
- [x] Create `src/app/robots.ts`
- [x] Create `src/app/sitemap.ts`
- [x] Configure `tailwind.config.ts`
- [x] Configure `postcss.config.js`
- [x] Configure `tsconfig.json`
- [x] Configure ESLint

## Stage B: Components + Pages/Routes

### Components

- [x] `src/components/Header.tsx`
- [x] `src/components/Footer.tsx`
- [x] `src/components/StickyCTA.tsx`
- [x] `src/components/JsonLd.tsx`
- [x] `src/components/NAP.tsx`
- [x] `src/components/ContactMethods.tsx`
- [x] `src/components/LeadForm.tsx` (simple fallback form)
- [x] `src/components/EstimateWizard.tsx` (multi-step estimate form)
- [x] `src/components/ProgressBar.tsx`
- [x] `src/components/FileUpload.tsx`
- [x] `src/components/ProofStack.tsx`
- [x] `src/components/Testimonials.tsx`
- [x] `src/components/FAQ.tsx`
- [x] `src/components/ServiceCards.tsx`
- [x] `src/components/ProjectCards.tsx`

### Section Components

- [x] `src/components/sections/HeroSection.tsx`
- [x] `src/components/sections/ProofSection.tsx`
- [x] `src/components/sections/ServicesSection.tsx`
- [x] `src/components/sections/ProjectsPreviewSection.tsx`
- [x] `src/components/sections/ProcessPreviewSection.tsx`
- [x] `src/components/sections/FAQSection.tsx`
- [x] `src/components/sections/CTASection.tsx`

### Pages

- [x] `src/app/page.tsx` (Home)
- [x] `src/app/services/page.tsx` (Services hub)
- [x] `src/app/services/[slug]/page.tsx` (Service detail)
- [x] `src/app/estimate/page.tsx` (Multi-step form)
- [x] `src/app/projects/page.tsx` (Projects hub)
- [x] `src/app/projects/[slug]/page.tsx` (Case study detail)
- [x] `src/app/process/page.tsx` (How it works)
- [x] `src/app/service-areas/page.tsx` (Service areas hub)
- [x] `src/app/service-areas/[city]/page.tsx` (City page)
- [x] `src/app/reviews/page.tsx`
- [x] `src/app/about/page.tsx`
- [x] `src/app/contact/page.tsx`
- [x] `src/app/policies/page.tsx`
- [x] `src/app/privacy/page.tsx`
- [x] `src/app/terms/page.tsx`
- [x] `src/app/not-found.tsx`

### API Routes

- [x] `src/app/api/lead/route.ts`
- [x] `src/app/api/upload/route.ts` (template stub)

### Public Assets

- [x] `public/projects/` (placeholder images)

## Stage C: QA + Documentation

- [ ] Verify `npm run dev` works *(blocked by npm registry 403 preventing dependency install)*
- [ ] Verify `npm run build` works *(blocked by npm registry 403 preventing dependency install)*
- [ ] Verify `npm run lint` passes *(blocked by npm registry 403 preventing dependency install)*
- [ ] Verify no runtime errors *(pending once installs succeed)*
- [ ] Verify no lorem ipsum (use "TODO:INPUT" for unknowns)
- [x] Create `README.md` with build/lint/dev instructions

---

## Key Requirements Checklist

### UX Requirements

- [x] Mobile-first design
- [x] Sticky primary CTA ("Get Estimate") on every page
- [x] Secondary CTA on mobile sticky bar ("Call" tel: link)
- [x] Sticky CTA does not cover content (global bottom padding)
- [x] Estimate flow reachable in 1 click from any page

### Design Requirements

- [x] Consistent container + section spacing (py-12/py-16)
- [x] Typography hierarchy (hero 3xl–5xl, readable body)
- [x] Buttons with primary + secondary variants, hover + focus-visible states
- [x] Cards with consistent radius + subtle border/shadow

### Home Page Section Order

1. [x] HeroSection (headline, subheadline, 3 bullets, Get Estimate CTA, Call link, proof row)
2. [x] ProofSection (testimonials + badges/credentials placeholders)
3. [x] ServicesSection (service cards linking to service detail pages)
4. [x] ProjectsPreviewSection (3–6 case studies)
5. [x] ProcessPreviewSection (3–5 steps)
6. [x] FAQSection (3–6 FAQs)
7. [x] CTASection (final estimate CTA)

### Estimate Wizard Requirements

- [x] Multi-step form (3–5 steps)
- [x] Progress indicator
- [x] Validation per step
- [x] Cannot submit until required fields complete
- [x] Clear confirmation screen with "What happens next"
- [x] Photo upload UI (if enabled)

### Lead Routing + Spam Protection

- [x] Honeypot field + rejection logic
- [x] In-memory rate limiting per IP (TODO:PROD for Redis/Upstash)
- [x] Input sanitization (trim, max length)
- [x] Turnstile verification (if enabled)
- [x] Webhook forwarding (if configured) or console.log fallback

### Analytics Events

- [x] `cta_estimate_click`
- [x] `phone_click`
- [x] `estimate_step_complete`
- [x] `estimate_submit`
- [x] `estimate_success`
- [x] `estimate_error`
- [x] `lead_form_submit`

### SEO Requirements

- [x] Canonical URLs via Metadata API
- [x] robots.ts with Sitemap reference
- [x] sitemap.ts with all routes (static + dynamic)
- [x] Service-area pages with 2+ unique paragraphs per city

### JSON-LD Schema

- [x] LocalBusiness on Home/Contact
- [x] Service schema on service pages
- [x] BreadcrumbList on internal pages
- [x] FAQPage where FAQs render

---

## TODO:INPUT Items (Require Client Input)

- `baseUrl` in site config
- `leadRouting.webhookUrl` in site config
- Business-specific copy and content
- Service area city paragraphs (2+ unique per city)
- Project case study `resultsText`
- Estimate confirmation expected response time
- Resolve registry access to complete `npm install` (current env 403 on @types/node)
