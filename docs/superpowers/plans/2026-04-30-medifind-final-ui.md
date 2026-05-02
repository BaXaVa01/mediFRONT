# MediFind UI Prototype Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement the full MediFind prototype frontend with the exact architecture, navigation flow, and visual style defined in @nightPrompt.txt and @docs/mockups/.

**Architecture:** React 19 + Vite + TypeScript + Tailwind v4 + Zustand. Clean separation of UI, business logic (hooks/services), and state.

**Tech Stack:** React, Tailwind CSS 4, React Router 7, Zustand, Leaflet, Lucide React.

---

### Task 1: Finalize Architecture & Shared Components

**Files:**
- Create: `mediFRONT/src/components/layout/MainLayout.tsx`
- Create: `mediFRONT/src/components/layout/Footer.tsx`
- Create: `mediFRONT/src/components/ui/Badge.tsx`
- Create: `mediFRONT/src/components/ui/Card.tsx`
- Modify: `mediFRONT/src/App.tsx`

- [ ] **Step 1: Implement MainLayout with Navbar and Footer**
- [ ] **Step 2: Implement reusable Footer**
- [ ] **Step 3: Implement UI components: Badge and Card**
- [ ] **Step 4: Update App.tsx to use MainLayout wrapper**

### Task 2: Implement Core Services and Hooks

**Files:**
- Create: `mediFRONT/src/services/api/authApi.ts`
- Create: `mediFRONT/src/services/api/doctorsApi.ts`
- Create: `mediFRONT/src/services/api/clinicsApi.ts`
- Create: `mediFRONT/src/hooks/useAuth.ts`
- Create: `mediFRONT/src/hooks/useSelectedProfile.ts`

- [ ] **Step 1: Implement API services with mock delays/data**
- [ ] **Step 2: Implement useAuth hook (bridge to authStore)**
- [ ] **Step 3: Implement useSelectedProfile hook (bridge to selectedProfileStore)**

### Task 3: Refactor Home & Search Pages

**Files:**
- Modify: `mediFRONT/src/pages/HomePage.tsx`
- Modify: `mediFRONT/src/pages/SearchPage.tsx`
- Create: `mediFRONT/src/components/map/MapMarkerCard.tsx`

- [ ] **Step 1: Refine HomePage visuals (spacing, colors, mockup alignment)**
- [ ] **Step 2: Implement MapMarkerCard for Leaflet popups**
- [ ] **Step 3: Refine SearchPage split-layout and interaction**

### Task 4: Finalize Login & Profile Flows

**Files:**
- Create: `mediFRONT/src/components/forms/LoginForm.tsx`
- Modify: `mediFRONT/src/pages/LoginPage.tsx`
- Modify: `mediFRONT/src/pages/ProfilePage.tsx`
- Create: `mediFRONT/src/utils/routes.ts`

- [ ] **Step 1: Extract LoginForm from LoginPage**
- [ ] **Step 2: Implement centralized routes constants in routes.ts**
- [ ] **Step 3: Add "Clinic Profile" support to ProfilePage (Mockup alignment)**
- [ ] **Step 4: Ensure redirection logic after login works for clinic selection**

### Task 5: Formatting & Project Polishing

**Files:**
- Create: `mediFRONT/src/utils/formatters.ts`
- Modify: `mediFRONT/README.md`

- [ ] **Step 1: Add price/date formatters**
- [ ] **Step 2: Final visual audit against mockup JPGs**
- [ ] **Step 3: Final build and lint verification**
