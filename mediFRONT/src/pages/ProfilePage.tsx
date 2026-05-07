import React from 'react';
import { useNavigate, Navigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { useSelectedProfileStore } from '../store/selectedProfileStore';
import { mockDoctors, mockClinics } from '../utils/mockData';
import { Button } from '../components/ui/Button';
import { ArrowLeft } from 'lucide-react';
import type { Doctor } from '../types/doctor';
import type { Clinic } from '../types/clinic';

// Import new components
import { ProfileHero } from '../components/profile/ProfileHero';
import { DoctorExperienceCard } from '../components/profile/DoctorExperienceCard';
import { ServicesPricingCard } from '../components/profile/ServicesPricingCard';
import { CareLocationsTabs } from '../components/profile/CareLocationsTabs';
import { GalleryGrid } from '../components/profile/GalleryGrid';
import { ReviewsSection } from '../components/profile/ReviewsSection';
import { DoctorAvailabilityPanel } from '../components/profile/DoctorAvailabilityPanel';

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
  const doctor = isDoctor ? (profile as Doctor) : null;
  const clinic = !isDoctor ? (profile as Clinic) : null;

  return (
    <div className="min-h-screen pb-20 bg-[#FDF9F3]">
      {/* Header Banner */}
      <div className="h-56 bg-gradient-to-r from-[#5A9BD4]/20 to-[#E6CBB8]/20 relative">
        <button 
          onClick={() => navigate(-1)}
          className="absolute top-6 left-6 p-3 rounded-full bg-white shadow-lg hover:bg-slate-50 transition-all z-20 group"
        >
          <ArrowLeft className="h-5 w-5 text-[#1C365C] group-hover:-translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-4 -mt-24">
        {isDoctor && doctor ? (
          <div className="space-y-8">
            <ProfileHero doctor={doctor} />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <DoctorExperienceCard doctor={doctor} />
                <ServicesPricingCard doctor={doctor} />
                <CareLocationsTabs doctor={doctor} />
                <GalleryGrid doctor={doctor} />
                <ReviewsSection doctor={doctor} />
              </div>
              <div className="space-y-8">
                <DoctorAvailabilityPanel doctor={doctor} />
              </div>
            </div>
          </div>
        ) : (
          /* Clinic Fallback UI */
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-[#E6CBB8]/20 p-12">
             <div className="flex flex-col sm:flex-row gap-8 items-center mb-8 text-center sm:text-left">
                <img src={clinic?.logo} alt={clinic?.name} className="w-32 h-32 rounded-2xl object-cover border-4 border-white shadow-lg" />
                <div>
                   <h1 className="text-3xl font-bold text-[#1C365C] mb-2">{clinic?.name}</h1>
                   <p className="text-[#4A628A] text-lg max-w-lg">{clinic?.bio}</p>
                </div>
             </div>
             <div className="bg-slate-50 rounded-2xl p-6 text-center border border-dashed border-[#E6CBB8]">
               <p className="text-sm text-slate-500 font-medium">Perfil de clínica básico (No actualizado con nuevas secciones).</p>
             </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
