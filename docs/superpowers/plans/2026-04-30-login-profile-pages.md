# Login and Profile Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement Login flow and Profile page with protected access.

**Architecture:** Use Zustand stores (`useAuthStore`, `useSelectedProfileStore`) for state. Protect `/perfil` route by checking `isAuthenticated` and `selectedId`. Redirect to `/login` with `from` location state to return after auth.

**Tech Stack:** React, TypeScript, Tailwind CSS, Lucide React (icons), Zustand, React Router.

---

### Task 1: Create LoginPage

**Files:**
- Create: `src/pages/LoginPage.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Implement LoginPage component**

```tsx
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { LogIn } from 'lucide-react';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();
  const location = useLocation();

  const from = (location.state as any)?.from?.pathname || '/';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In mock, any email/password works
    login({ email, password });
    navigate(from, { replace: true });
  };

  return (
    <div className="flex min-h-[calc(100vh-64px)] items-center justify-center p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl border border-[#E6CBB8]/30">
        <div className="mb-8 flex flex-col items-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#5A9BD4]/10">
            <LogIn className="h-8 w-8 text-[#5A9BD4]" />
          </div>
          <h1 className="text-3xl font-bold text-[#1C365C]">Bienvenido</h1>
          <p className="mt-2 text-[#4A628A]">Ingresa tus credenciales para continuar</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            label="Correo electrónico"
            type="email"
            placeholder="ejemplo@medifind.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Contraseña"
            type="password"
            placeholder="••••••••"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" className="w-full h-12 text-lg" variant="primary">
            Iniciar Sesión
          </Button>
        </form>

        <p className="mt-8 text-center text-sm text-[#4A628A]">
          ¿No tienes cuenta?{' '}
          <a href="#" className="font-semibold text-[#5A9BD4] hover:underline">
            Regístrate aquí
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
```

- [ ] **Step 2: Add Login route to App.tsx**

```tsx
// ... imports
import LoginPage from './pages/LoginPage';

// ... in Routes
<Route path="/login" element={<LoginPage />} />
```

- [ ] **Step 3: Commit**

```bash
git add src/pages/LoginPage.tsx src/App.tsx
git commit -m "feat: add login page and route"
```

### Task 2: Create ProfilePage and Protected Route Logic

**Files:**
- Create: `src/pages/ProfilePage.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Implement ProfilePage component**

```tsx
import React, { useEffect } from 'react';
import { useNavigate, Navigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { useSelectedProfileStore } from '../store/selectedProfileStore';
import { mockDoctors, mockClinics } from '../utils/mockData';
import { Button } from '../components/ui/Button';
import { 
  Star, MapPin, Calendar, Award, 
  ChevronRight, ArrowLeft, ShieldCheck, 
  Briefcase, GraduationCap, Stethoscope 
} from 'lucide-react';

const ProfilePage: React.FC = () => {
  const { isAuthenticated } = useAuthStore();
  const { selectedId, selectedType } = useSelectedProfileStore();
  const navigate = useNavigate();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!selectedId) {
    return <Navigate to="/buscar" replace />;
  }

  const profile = selectedType === 'doctor' 
    ? mockDoctors.find(d => d.id === selectedId)
    : mockClinics.find(c => c.id === selectedId);

  if (!profile) {
    return (
      <div className="flex h-screen flex-col items-center justify-center">
        <p>Perfil no encontrado</p>
        <Button onClick={() => navigate('/buscar')}>Volver a buscar</Button>
      </div>
    );
  }

  const isDoctor = selectedType === 'doctor';
  const doctor = isDoctor ? (profile as any) : null;

  return (
    <div className="min-h-screen pb-20">
      {/* Header / Banner */}
      <div className="h-48 bg-[#5A9BD4]/20 relative">
        <button 
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 text-[#1C365C]" />
        </button>
      </div>

      <div className="max-w-4xl mx-auto px-4 -mt-20">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-[#E6CBB8]/20">
          {/* Main Info */}
          <div className="p-8 sm:flex gap-8">
            <div className="flex-shrink-0 mb-6 sm:mb-0">
              <img 
                src={isDoctor ? doctor.photo : (profile as any).logo} 
                alt={profile.name}
                className="w-32 h-32 rounded-2xl object-cover ring-4 ring-white shadow-lg"
              />
            </div>
            <div className="flex-grow">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold text-[#1C365C]">{profile.name}</h1>
                <div className="flex items-center gap-1 bg-[#A3C9A8]/20 px-2 py-0.5 rounded-full">
                  <ShieldCheck className="h-4 w-4 text-[#A3C9A8]" />
                  <span className="text-xs font-bold text-[#1C365C]">Verificado</span>
                </div>
              </div>
              <p className="text-xl text-[#5A9BD4] font-medium mb-4">
                {isDoctor ? doctor.specialty : 'Clínica / Hospital'}
              </p>
              
              <div className="flex flex-wrap gap-6 text-[#4A628A]">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  <span className="font-bold text-[#1C365C]">{profile.rating}</span>
                  <span>(120+ reseñas)</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-[#5A9BD4]" />
                  <span>{profile.location.address}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-[#E6CBB8]/20 p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Column: Details */}
            <div className="md:col-span-2 space-y-8">
              <section>
                <h2 className="text-xl font-bold text-[#1C365C] mb-4">Acerca de</h2>
                <p className="text-[#4A628A] leading-relaxed">
                  {profile.bio}
                </p>
              </section>

              {isDoctor && (
                <>
                  <section>
                    <h2 className="text-xl font-bold text-[#1C365C] mb-4 flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-[#5A9BD4]" />
                      Títulos y Formación
                    </h2>
                    <ul className="space-y-3">
                      {doctor.titles.map((title: string, i: number) => (
                        <li key={i} className="flex gap-3 text-[#4A628A]">
                          <ChevronRight className="h-5 w-5 text-[#A3C9A8] shrink-0" />
                          {title}
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-xl font-bold text-[#1C365C] mb-4 flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-[#5A9BD4]" />
                      Experiencia
                    </h2>
                    <div className="bg-[#FDF9F3] p-4 rounded-xl border border-[#E6CBB8]/30">
                      <p className="font-medium text-[#1C365C]">{doctor.experience}</p>
                      <p className="text-sm text-[#4A628A]">Práctica clínica activa</p>
                    </div>
                  </section>
                </>
              )}

              <section>
                <h2 className="text-xl font-bold text-[#1C365C] mb-4 flex items-center gap-2">
                  <Stethoscope className="h-5 w-5 text-[#5A9BD4]" />
                  Servicios y Procedimientos
                </h2>
                <div className="flex flex-wrap gap-2">
                  {profile.services.map((service: string, i: number) => (
                    <span key={i} className="bg-white border border-[#E6CBB8] px-4 py-2 rounded-lg text-sm text-[#4A628A]">
                      {service}
                    </span>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Column: Actions/Sidebar */}
            <div className="space-y-6">
              <div className="bg-[#1C365C] text-white p-6 rounded-2xl shadow-lg">
                <p className="text-sm text-white/70 mb-1">Costo de consulta</p>
                <p className="text-3xl font-bold mb-6">${isDoctor ? doctor.price : 'Varía'} MXN</p>
                
                <Button variant="secondary" className="w-full h-12 text-lg mb-4">
                  Reservar Cita
                </Button>
                <p className="text-xs text-center text-white/60">
                  Reserva hoy y paga en el consultorio
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-[#E6CBB8] shadow-sm">
                <h3 className="font-bold text-[#1C365C] mb-4 flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-[#5A9BD4]" />
                  Disponibilidad
                </h3>
                {isDoctor ? (
                  <div className="grid grid-cols-1 gap-2">
                    {doctor.availability.map((day: string, i: number) => (
                      <div key={i} className="flex justify-between items-center text-sm py-2 border-b border-gray-50 last:border-0">
                        <span className="text-[#4A628A]">{day}</span>
                        <span className="font-medium text-[#1C365C]">09:00 - 18:00</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-[#4A628A]">Abierto 24 horas</p>
                )}
              </div>

              {isDoctor && (
                <div className="bg-white p-6 rounded-2xl border border-[#E6CBB8] shadow-sm">
                  <h3 className="font-bold text-[#1C365C] mb-4 flex items-center gap-2">
                    <Award className="h-5 w-5 text-[#A3C9A8]" />
                    Aseguradoras
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {doctor.insurance.map((ins: string, i: number) => (
                      <span key={i} className="text-xs font-bold text-[#5A9BD4] bg-[#5A9BD4]/5 px-2 py-1 rounded">
                        {ins}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
```

- [ ] **Step 2: Add Profile route to App.tsx**

```tsx
// ... imports
import ProfilePage from './pages/ProfilePage';

// ... in Routes
<Route path="/perfil" element={<ProfilePage />} />
```

- [ ] **Step 3: Commit**

```bash
git add src/pages/ProfilePage.tsx src/App.tsx
git commit -m "feat: implement profile page and protected access"
```

---

### Task 3: Final Polishing and Verification

**Files:**
- Modify: `src/components/layout/Navbar.tsx`

- [ ] **Step 1: Update Navbar to show user status**

```tsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, User, LogOut, Menu } from 'lucide-react';
import { Button } from '../ui/Button';
import { useAuthStore } from '../../store/authStore';

export const Navbar: React.FC = () => {
  const { isAuthenticated, logout, user } = useAuthStore();
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#E6CBB8]/30 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-black tracking-tight text-[#1C365C]">
            MEDI<span className="text-[#5A9BD4]">FIND</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/buscar" className="text-sm font-medium text-[#4A628A] hover:text-[#5A9BD4] transition-colors">
            Buscar Doctores
          </Link>
          <Link to="#" className="text-sm font-medium text-[#4A628A] hover:text-[#5A9BD4] transition-colors">
            Especialidades
          </Link>
          <Link to="#" className="text-sm font-medium text-[#4A628A] hover:text-[#5A9BD4] transition-colors">
            Cómo funciona
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Search className="h-5 w-5 text-[#4A628A]" />
          </Button>

          {isAuthenticated ? (
            <div className="flex items-center gap-4">
              <span className="hidden sm:inline text-sm font-medium text-[#1C365C]">
                Hola, {user?.name.split(' ')[0]}
              </span>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => {
                  logout();
                  navigate('/');
                }}
                className="text-[#4A628A]"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Salir
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/login">Iniciar Sesión</Link>
              </Button>
              <Button variant="primary" size="sm">
                Regístrate
              </Button>
            </div>
          )}
          
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5 text-[#4A628A]" />
          </Button>
        </div>
      </div>
    </nav>
  );
};
```

- [ ] **Step 2: Build verification**

Run: `npm run build` in worktree.
Expected: PASS.

- [ ] **Step 3: Commit**

```bash
git add src/components/layout/Navbar.tsx
git commit -m "feat: update navbar with auth state"
```
