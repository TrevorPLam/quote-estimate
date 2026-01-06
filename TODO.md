# TODO - Quote/Estimate Website Template

## Stage A: Repo Scaffold + Config + Layout + Libs + SEO + Tooling

- [ ] Initialize Next.js project with App Router
- [ ] Configure TypeScript
- [ ] Configure Tailwind CSS
- [ ] Create `.devcontainer/devcontainer.json`
- [ ] Create `src/config/site.ts` with all interfaces and config object
- [ ] Create `src/app/layout.tsx`
- [ ] Create `src/app/globals.css`
- [ ] Create `src/lib/tracking.ts`
- [ ] Create `src/lib/analytics.ts`
- [ ] Create `src/lib/schema.ts`
- [ ] Create `src/lib/seo.ts`
- [ ] Create `src/lib/rateLimit.ts`
- [ ] Create `src/lib/utils.ts`
- [ ] Create `src/app/robots.ts`
- [ ] Create `src/app/sitemap.ts`
- [ ] Configure `tailwind.config.ts`
- [ ] Configure `postcss.config.js`
- [ ] Configure `tsconfig.json`
- [ ] Configure ESLint

## Stage B: Components + Pages/Routes

### Components

- [ ] `src/components/Header.tsx`
- [ ] `src/components/Footer.tsx`
- [ ] `src/components/StickyCTA.tsx`
- [ ] `src/components/JsonLd.tsx`
- [ ] `src/components/NAP.tsx`
- [ ] `src/components/ContactMethods.tsx`
- [ ] `src/components/LeadForm.tsx` (simple fallback form)
- [ ] `src/components/EstimateWizard.tsx` (multi-step estimate form)
- [ ] `src/components/ProgressBar.tsx`
- [ ] `src/components/FileUpload.tsx`
- [ ] `src/components/ProofStack.tsx`
- [ ] `src/components/Testimonials.tsx`
- [ ] `src/components/FAQ.tsx`
- [ ] `src/components/ServiceCards.tsx`
- [ ] `src/components/ProjectCards.tsx`

### Section Components

- [ ] `src/components/sections/HeroSection.tsx`
- [ ] `src/components/sections/ProofSection.tsx`
- [ ] `src/components/sections/ServicesSection.tsx`
- [ ] `src/components/sections/ProjectsPreviewSection.tsx`
- [ ] `src/components/sections/ProcessPreviewSection.tsx`
- [ ] `src/components/sections/FAQSection.tsx`
- [ ] `src/components/sections/CTASection.tsx`

### Pages

- [ ] `src/app/page.tsx` (Home)
- [ ] `src/app/services/page.tsx` (Services hub)
- [ ] `src/app/services/[slug]/page.tsx` (Service detail)
- [ ] `src/app/estimate/page.tsx` (Multi-step form)
- [ ] `src/app/projects/page.tsx` (Projects hub)
- [ ] `src/app/projects/[slug]/page.tsx` (Case study detail)
- [ ] `src/app/process/page.tsx` (How it works)
- [ ] `src/app/service-areas/page.tsx` (Service areas hub)
- [ ] `src/app/service-areas/[city]/page.tsx` (City page)
- [ ] `src/app/reviews/page.tsx`
- [ ] `src/app/about/page.tsx`
- [ ] `src/app/contact/page.tsx`
- [ ] `src/app/policies/page.tsx`
- [ ] `src/app/privacy/page.tsx`
- [ ] `src/app/terms/page.tsx`
- [ ] `src/app/not-found.tsx`

### API Routes

- [ ] `src/app/api/lead/route.ts`
- [ ] `src/app/api/upload/route.ts` (template stub)

### Public Assets

- [ ] `public/projects/` (placeholder images)

## Stage C: QA + Documentation

- [ ] Verify `npm run dev` works
- [ ] Verify `npm run build` works
- [ ] Verify `npm run lint` passes
- [ ] Verify no runtime errors
- [ ] Verify no lorem ipsum (use "TODO:INPUT" for unknowns)
- [ ] Create `README.md` with build/lint/dev instructions

---

## Key Requirements Checklist

### UX Requirements

- [ ] Mobile-first design
- [ ] Sticky primary CTA ("Get Estimate") on every page
- [ ] Secondary CTA on mobile sticky bar ("Call" tel: link)
- [ ] Sticky CTA does not cover content (global bottom padding)
- [ ] Estimate flow reachable in 1 click from any page

### Design Requirements

- [ ] Consistent container + section spacing (py-12/py-16)
- [ ] Typography hierarchy (hero 3xl–5xl, readable body)
- [ ] Buttons with primary + secondary variants, hover + focus-visible states
- [ ] Cards with consistent radius + subtle border/shadow

### Home Page Section Order

1. [ ] HeroSection (headline, subheadline, 3 bullets, Get Estimate CTA, Call link, proof row)
2. [ ] ProofSection (testimonials + badges/credentials placeholders)
3. [ ] ServicesSection (service cards linking to service detail pages)
4. [ ] ProjectsPreviewSection (3–6 case studies)
5. [ ] ProcessPreviewSection (3–5 steps)
6. [ ] FAQSection (3–6 FAQs)
7. [ ] CTASection (final estimate CTA)

### Estimate Wizard Requirements

- [ ] Multi-step form (3–5 steps)
- [ ] Progress indicator
- [ ] Validation per step
- [ ] Cannot submit until required fields complete
- [ ] Clear confirmation screen with "What happens next"
- [ ] Photo upload UI (if enabled)

### Lead Routing + Spam Protection

- [ ] Honeypot field + rejection logic
- [ ] In-memory rate limiting per IP (TODO:PROD for Redis/Upstash)
- [ ] Input sanitization (trim, max length)
- [ ] Turnstile verification (if enabled)
- [ ] Webhook forwarding (if configured) or console.log fallback

### Analytics Events

- [ ] `cta_estimate_click`
- [ ] `phone_click`
- [ ] `estimate_step_complete`
- [ ] `estimate_submit`
- [ ] `estimate_success`
- [ ] `estimate_error`
- [ ] `lead_form_submit`

### SEO Requirements

- [ ] Canonical URLs via Metadata API
- [ ] robots.ts with Sitemap reference
- [ ] sitemap.ts with all routes (static + dynamic)
- [ ] Service-area pages with 2+ unique paragraphs per city

### JSON-LD Schema

- [ ] LocalBusiness on Home/Contact
- [ ] Service schema on service pages
- [ ] BreadcrumbList on internal pages
- [ ] FAQPage where FAQs render

---

## TODO:INPUT Items (Require Client Input)

- `baseUrl` in site config
- `leadRouting.webhookUrl` in site config
- Business-specific copy and content
- Service area city paragraphs (2+ unique per city)
- Project case study `resultsText`
- Estimate confirmation expected response time
