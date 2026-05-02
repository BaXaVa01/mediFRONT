# MediFind - Architecture & Overview

## App Purpose
MediFind connect patients with doctors and clinics (inspired by Doctoralia/TopDoctors).

### Patients
- Search doctors by specialty/location.
- Book and manage appointments (online/presential).
- View doctor ratings and prices.
- Manage medical history.
- Ask public questions to specialists.
- Telehealth chat/video support.

### Doctors & Clinics
- **Doctors:** Can be independent or associated with clinics. Manage profile, schedule, pricing, patient records, and progress evidence.
- **Clinics:** Centralized profile. Manage associated doctors, unified schedule, and services.
- Gain visibility and online booking capability.

## Infrastructure & Stack

**Frontend App:**
- **Core:** React 19 + TypeScript + Vite.
- **Routing:** React Router DOM v7.
- **State:** Zustand.
- **Styling/UI:** Tailwind CSS 4, Framer Motion, Lucide React, clsx, tailwind-merge.
- **Maps:** Leaflet + Leaflet Routing Machine.

**Security & Backend Logic (Requirements):**
- Strict RBAC (Patient, Doctor, Clinic, Admin).
- OWASP basics (SQLi/XSS protection).
- Hashed passwords.
- No secrets exposed in frontend.
