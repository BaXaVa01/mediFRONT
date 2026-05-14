# Graph Report - .  (2026-05-08)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 152 nodes · 258 edges · 35 communities (13 shown, 22 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `df7cb165`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Doctor Profile Components|Doctor Profile Components]]
- [[_COMMUNITY_Registration & Auth|Registration & Auth]]
- [[_COMMUNITY_Search & Data Models|Search & Data Models]]
- [[_COMMUNITY_Map & Location State|Map & Location State]]
- [[_COMMUNITY_Semantic Page Concepts|Semantic Page Concepts]]
- [[_COMMUNITY_App Structure & Layout|App Structure & Layout]]
- [[_COMMUNITY_Professional Dashboard|Professional Dashboard]]
- [[_COMMUNITY_Core Data Types|Core Data Types]]
- [[_COMMUNITY_Auth Actions|Auth Actions]]
- [[_COMMUNITY_Location Actions|Location Actions]]
- [[_COMMUNITY_Profile State|Profile State]]
- [[_COMMUNITY_Project Documentation|Project Documentation]]
- [[_COMMUNITY_Map Routing|Map Routing]]
- [[_COMMUNITY_Profile UI State|Profile UI State]]
- [[_COMMUNITY_Profile Tabs|Profile Tabs]]
- [[_COMMUNITY_Semantic Tailwind|Semantic Tailwind]]
- [[_COMMUNITY_Semantic Vite|Semantic Vite]]
- [[_COMMUNITY_Semantic ESLint|Semantic ESLint]]
- [[_COMMUNITY_Semantic Clinic Reg|Semantic Clinic Reg]]
- [[_COMMUNITY_Semantic Patient Reg|Semantic Patient Reg]]
- [[_COMMUNITY_Semantic Doctor Reg|Semantic Doctor Reg]]
- [[_COMMUNITY_Design Patterns|Design Patterns]]
- [[_COMMUNITY_Package Config|Package Config]]
- [[_COMMUNITY_Homepage Assets|Homepage Assets]]
- [[_COMMUNITY_Hero Assets|Hero Assets]]
- [[_COMMUNITY_Doctor Assets|Doctor Assets]]
- [[_COMMUNITY_Background Assets|Background Assets]]
- [[_COMMUNITY_Vite Assets|Vite Assets]]
- [[_COMMUNITY_React Assets|React Assets]]
- [[_COMMUNITY_Favicon Assets|Favicon Assets]]
- [[_COMMUNITY_Icon Assets|Icon Assets]]

## God Nodes (most connected - your core abstractions)
1. `Button` - 16 edges
2. `Doctor` - 13 edges
3. `useAuthStore` - 13 edges
4. `useSelectedProfileStore` - 7 edges
5. `Root App Component` - 7 edges
6. `Doctor` - 7 edges
7. `Input` - 6 edges
8. `useLocationStore` - 5 edges
9. `mockDoctors` - 4 edges
10. `SearchResultCard()` - 4 edges

## Surprising Connections (you probably didn't know these)
- `LoginPage()` --calls--> `useAuthStore`  [EXTRACTED]
  src/pages/LoginPage.tsx → src/store/authStore.ts
- `ProfilePage()` --calls--> `useAuthStore`  [EXTRACTED]
  src/pages/ProfilePage.tsx → src/store/authStore.ts
- `HomePage()` --calls--> `useLocationStore`  [EXTRACTED]
  src/pages/HomePage.tsx → src/store/locationStore.ts
- `SearchResultCard()` --calls--> `useAuthStore`  [EXTRACTED]
  src/components/cards/SearchResultCard.tsx → src/store/authStore.ts
- `Application Entry Point` --calls--> `Root App Component`  [EXTRACTED]
  src/main.tsx → src/App.tsx

## Hyperedges (group relationships)
- **App Routing & Navigation** — app_component, home_page, search_page, login_page, register_page, profile_page, professional_page [EXTRACTED 0.90]
- **User Onboarding Flow** — register_page, register_patient_page, register_doctor_page, register_clinic_page [INFERRED 0.95]
- **Registration Flow** — registerclinicform_handlesubmit, registerpatientform_handlesubmit, registerdoctorform_handlesubmit, authstore_login [INFERRED 0.90]

## Communities (35 total, 22 thin omitted)

### Community 0 - "Doctor Profile Components"
Cohesion: 0.19
Nodes (13): CareLocationsTabs(), DoctorAvailabilityPanel(), DoctorExperienceCard(), GalleryGrid(), MoreInfoModal(), MoreInfoModalProps, ProfileHero(), ReviewsSection() (+5 more)

### Community 1 - "Registration & Auth"
Cohesion: 0.17
Nodes (9): RegisterClinicForm(), RegisterDoctorForm(), RegisterPatientForm(), LoginPage(), AuthState, useAuthStore, Input, InputProps (+1 more)

### Community 2 - "Search & Data Models"
Cohesion: 0.17
Nodes (12): AvailabilityPreview(), AvailabilityPreviewProps, SearchResultCardProps, Clinic, AvailabilitySlot, CareLocation, Location, Review (+4 more)

### Community 3 - "Map & Location State"
Cohesion: 0.21
Nodes (10): SearchResultCard(), DefaultIcon, SearchMap(), SearchMapProps, HomePage(), ProfilePage(), LocationState, useLocationStore (+2 more)

### Community 4 - "Semantic Page Concepts"
Cohesion: 0.18
Nodes (13): Account Type Selection Card, Root App Component, Availability Slots Preview, Classname Utility, Home Page, Login Page, Application Entry Point, Mock Data Store (+5 more)

### Community 5 - "App Structure & Layout"
Cohesion: 0.24
Nodes (3): AccountTypeCard(), AccountTypeCardProps, Navbar()

### Community 6 - "Professional Dashboard"
Cohesion: 0.31
Nodes (4): AppointmentList(), CalendarView(), Sidebar(), Appointment

### Community 7 - "Core Data Types"
Cohesion: 0.25
Nodes (9): Clinic, Appointment, AvailabilitySlot, CareLocation, Doctor, Location, Review, ScheduleDay (+1 more)

### Community 8 - "Auth Actions"
Cohesion: 0.5
Nodes (4): authStore.login, RegisterClinicForm.handleSubmit, RegisterDoctorForm.handleSubmit, RegisterPatientForm.handleSubmit

## Knowledge Gaps
- **51 isolated node(s):** `AccountTypeCardProps`, `SearchResultCardProps`, `AvailabilityPreviewProps`, `buttonVariants`, `ButtonProps` (+46 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **22 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Button` connect `Doctor Profile Components` to `Registration & Auth`, `Search & Data Models`, `Map & Location State`, `App Structure & Layout`, `Professional Dashboard`?**
  _High betweenness centrality (0.029) - this node is a cross-community bridge._
- **Why does `useAuthStore` connect `Registration & Auth` to `Doctor Profile Components`, `Search & Data Models`, `Map & Location State`?**
  _High betweenness centrality (0.025) - this node is a cross-community bridge._
- **Why does `Doctor` connect `Doctor Profile Components` to `Search & Data Models`, `Map & Location State`?**
  _High betweenness centrality (0.010) - this node is a cross-community bridge._
- **What connects `AccountTypeCardProps`, `SearchResultCardProps`, `AvailabilityPreviewProps` to the rest of the system?**
  _51 weakly-connected nodes found - possible documentation gaps or missing edges._