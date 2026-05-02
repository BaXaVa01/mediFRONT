# MediFind Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create the initial React UI project structure and implement core screens (Home, Search, Login, Profile) with mock data and full navigation flow.

**Architecture:** React + Vite + TypeScript + Tailwind CSS (v4) + Zustand. Separated UI components, services, and state management.

**Tech Stack:** React 19, Tailwind CSS 4, React Router 7, Zustand, Lucide React, Leaflet.

---

### Task 1: Component Library Scaffolding

**Files:**
- Create: `mediFRONT/src/components/ui/Button.tsx`
- Create: `mediFRONT/src/components/ui/Input.tsx`
- Create: `mediFRONT/src/components/layout/Navbar.tsx`

- [ ] **Step 1: Create Button component**
- [ ] **Step 2: Create Input component**
- [ ] **Step 3: Create Navbar with navigation links**

### Task 2: Home Page Implementation

**Files:**
- Create: `mediFRONT/src/pages/HomePage.tsx`

- [ ] **Step 1: Implement Hero section with search inputs**
- [ ] **Step 2: Implement Benefits and Marketing sections per mockups**
- [ ] **Step 3: Connect search button to redirect to /search**

### Task 3: Search Map Page Implementation

**Files:**
- Create: `mediFRONT/src/pages/SearchMapPage.tsx`
- Create: `mediFRONT/src/components/map/SearchMap.tsx`
- Create: `mediFRONT/src/components/cards/DoctorCard.tsx`

- [ ] **Step 1: Implement layout with List (left) and Map (right)**
- [ ] **Step 2: Render mock doctors in cards**
- [ ] **Step 3: Implement Leaflet map with markers**
- [ ] **Step 4: Handle "View Profile" click (save to store and redirect to login/profile)**

### Task 4: Login and Profile Pages

**Files:**
- Create: `mediFRONT/src/pages/LoginPage.tsx`
- Create: `mediFRONT/src/pages/ProfilePage.tsx`

- [ ] **Step 1: Implement Mock Login form**
- [ ] **Step 2: Implement Profile page with dynamic data from selected doctor/clinic**
- [ ] **Step 3: Finalize routing logic (Login redirect to Profile or Search)**

### Task 5: Final Polish and README

**Files:**
- Modify: `mediFRONT/README.md`
- Modify: `mediFRONT/src/App.tsx` (Root Routing)

- [ ] **Step 1: Set up React Router in App.tsx**
- [ ] **Step 2: Add Docker and Local Dev instructions to README**
- [ ] **Step 3: Final verification run**
