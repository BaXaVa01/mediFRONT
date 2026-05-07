import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Star, MapPin, DollarSign, Navigation, Video, Home, Stethoscope } from 'lucide-react';
import type { Doctor } from '../../types/doctor';
import type { Clinic } from '../../types/clinic';
import { useSelectedProfileStore } from '../../store/selectedProfileStore';
import { useAuthStore } from '../../store/authStore';
import { Button } from '../ui/Button';
import { AvailabilityPreview } from './AvailabilityPreview';

interface SearchResultCardProps {
  data: Doctor | Clinic;
  type: 'doctor' | 'clinic';
}

export const SearchResultCard: React.FC<SearchResultCardProps> = ({ data, type }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setSelected, setRoutingTarget } = useSelectedProfileStore();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  const isDoctor = type === 'doctor';
  const doctor = isDoctor ? (data as Doctor) : null;
  const clinic = !isDoctor ? (data as Clinic) : null;

  const photoUrl = doctor?.photo || clinic?.logo;
  const name = doctor?.name || clinic?.name;
  const subtitle = doctor?.specialty || 'Clínica';
  const price = doctor?.price;

  const handleAction = () => {
    setSelected(data.id, type);
    if (isAuthenticated) {
      navigate('/perfil');
    } else {
      navigate('/login', { state: { from: location } });
    }
  };

  const handleShowRoute = () => {
    setRoutingTarget(data.id);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-[#E6CBB8]/30 p-4 flex flex-col sm:flex-row gap-4 hover:shadow-md transition-shadow">
      <img
        src={photoUrl}
        alt={name}
        className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl object-cover flex-shrink-0 border border-slate-100"
      />
      <div className="flex-1 flex flex-col">
        <div className="flex justify-between items-start gap-2">
          <div>
            <h3 className="font-bold text-lg text-[#1C365C]">{name}</h3>
            <p className="text-[#5A9BD4] font-medium text-sm">{subtitle}</p>
          </div>
          <div className="flex items-center gap-1 bg-[#E6CBB8]/20 px-2 py-1 rounded text-[#1C365C] font-semibold text-sm">
            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            {data.rating} <span className="text-xs text-[#4A628A] font-normal">({data.reviewCount})</span>
          </div>
        </div>
        
        <div className="mt-3 flex flex-col gap-1.5 text-sm text-[#4A628A]">
          <div className="flex items-start gap-1.5">
            <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
            <span className="line-clamp-2">{data.location.address}</span>
          </div>
          
          <div className="flex flex-wrap gap-x-4 gap-y-1.5">
            {price !== undefined && (
              <div className="flex items-center gap-1.5 text-[#1C365C] font-medium">
                <DollarSign className="w-4 h-4 text-slate-400" />
                <span>${price} consulta</span>
              </div>
            )}
            
            <div className="flex items-center gap-2">
              {data.consultationTypes?.map((cType) => (
                <span key={cType} className="flex items-center gap-1 text-xs px-2 py-0.5 bg-slate-100 rounded text-slate-600">
                  {cType === 'Presencial' && <Stethoscope className="w-3 h-3" />}
                  {cType === 'En línea' && <Video className="w-3 h-3" />}
                  {cType === 'A domicilio' && <Home className="w-3 h-3" />}
                  {cType}
                </span>
              ))}
            </div>
          </div>
        </div>

        <AvailabilityPreview slots={data.availabilityPreview || []} />

        <div className="mt-4 flex flex-wrap sm:flex-nowrap gap-2 items-center">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleShowRoute}
            className="flex-1 sm:flex-none flex items-center justify-center gap-1 border-[#5A9BD4] text-[#5A9BD4] hover:bg-[#5A9BD4]/10 h-10"
          >
            <Navigation className="h-4 w-4" />
            Ruta
          </Button>
          <Button 
            onClick={handleAction} 
            className="flex-1 sm:flex-none h-10"
            variant="primary"
          >
            Ver Perfil
          </Button>
        </div>
      </div>
    </div>
  );
};
