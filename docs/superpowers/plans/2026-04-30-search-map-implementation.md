# Search Map Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement the Search Map page with a list of doctor cards and an interactive map.

**Architecture:** Two-column responsive layout. Left column for scrollable doctor cards, right column for a fixed Leaflet map. Uses Zustand for state and React Router for navigation.

**Tech Stack:** React, Tailwind CSS, Leaflet, react-leaflet, Zustand, Lucide React.

---

### Task 1: Create DoctorCard Component

**Files:**
- Create: `src/components/cards/DoctorCard.tsx`

- [ ] **Step 1: Implement DoctorCard**
Show photo, name, specialty, rating, and price. Add "Ver Perfil" button that sets the selected profile in Zustand and redirects.

### Task 2: Create SearchMap Component

**Files:**
- Create: `src/components/map/SearchMap.tsx`

- [ ] **Step 1: Implement SearchMap**
Use `react-leaflet` to display a map with markers for each doctor.

### Task 3: Update SearchPage

**Files:**
- Modify: `src/pages/SearchPage.tsx`

- [ ] **Step 1: Implement SearchPage Layout**
Combine `DoctorCard` list and `SearchMap` in a split-screen layout.

### Task 4: Verification

- [ ] **Step 1: Build check**
Run `npm run build` or `tsc` to ensure no type errors.

- [ ] **Step 2: Commit changes**
