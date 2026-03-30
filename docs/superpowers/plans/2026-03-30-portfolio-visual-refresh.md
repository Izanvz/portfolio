# Portfolio Visual Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refresh the portfolio with a graphite + emerald smoke visual system, GSAP-driven motion, stronger MeetingAgent positioning, and clearer availability messaging.

**Architecture:** Keep the existing Next.js single-page structure and update the shared theme tokens first so all sections inherit the new direction. Add GSAP for the hero timeline and shared reveal behavior while preserving the current component breakdown.

**Tech Stack:** Next.js 16, React 19, Tailwind CSS v4, GSAP, existing Framer Motion where not yet replaced

---

### Task 1: Theme Refresh

**Files:**
- Modify: `app/globals.css`
- Verify: `npm run lint`

- [ ] Replace amber-led theme tokens with graphite, slate, and emerald smoke tokens.
- [ ] Update global background, selection, scrollbar, and focus states to match the new palette.
- [ ] Run `npm run lint` and confirm no styling-related regressions from class usage.

### Task 2: GSAP Reveal Foundation

**Files:**
- Modify: `components/FadeIn.tsx`
- Modify: `components/Section.tsx`
- Verify: `npm run lint`

- [ ] Replace the current Framer Motion in-view reveal helper with a GSAP + ScrollTrigger implementation.
- [ ] Keep reduced-motion support and preserve the existing component API so sections keep working.
- [ ] Run `npm run lint` to verify the shared animation layer is clean.

### Task 3: Hero Motion + New Availability Copy

**Files:**
- Modify: `components/Hero.tsx`
- Verify: `npm run lint`

- [ ] Rebuild the hero animation using a GSAP timeline and scoped refs.
- [ ] Add a subtle interactive spotlight aligned with the graphite + emerald smoke direction.
- [ ] Update availability copy to `España remoto · Valencia/Safor híbrido o presencial`.
- [ ] Run `npm run lint`.

### Task 4: Stronger Project Framing

**Files:**
- Modify: `components/Projects.tsx`
- Verify: `npm run lint`

- [ ] Rewrite MeetingAgent card copy to emphasize local-first AI, LangGraph orchestration, semantic search, and integrations.
- [ ] Update card accents and hover states so the featured project feels more premium in the new palette.
- [ ] Keep other projects visually aligned with the new system.
- [ ] Run `npm run lint`.

### Task 5: Consistent Messaging

**Files:**
- Modify: `components/Contact.tsx`
- Modify: `components/ImpactMetrics.tsx`
- Modify: `components/Experience.tsx`
- Modify: `components/Stack.tsx`
- Modify: `app/layout.tsx`
- Verify: `npm run lint`

- [ ] Normalize availability messaging across contact, hero-adjacent stats, and metadata.
- [ ] Swap remaining warm accents to the emerald smoke system.
- [ ] Tighten recruiter-facing wording where needed without changing the site structure.
- [ ] Run `npm run lint`.

### Task 6: Final Verification

**Files:**
- Verify: entire app

- [ ] Run `npm run lint`.
- [ ] Run `npm run build`.
- [ ] Review outputs and only then claim completion.
