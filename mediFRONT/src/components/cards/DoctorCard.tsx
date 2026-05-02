import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, MapPin, DollarSign, Navigation } from 'lucide-react';
import type { Doctor } from '../../types/doctor';
import { useSelectedProfileStore } from '../../store/selectedProfileStore';
import { Button } from '../ui/Button';

interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
  const navigate = useNavigate();
  const { setSelected, setRoutingTarget } = useSelectedProfileStore();

  const handleViewProfile = () => {
    setSelected(doctor.id, 'doctor');
    navigate('/perfil');
  };

  const handleShowRoute = () => {
    setRoutingTarget(doctor.id);
  };


  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-4 flex gap-4 hover:shadow-md transition-shadow">
      <img
        src={doctor.photo}
        alt={doctor.name}
        className="w-24 h-24 rounded-lg object-cover flex-shrink-0"
      />
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-lg text-slate-800">{doctor.name}</h3>
            <p className="text-primary font-medium text-sm">{doctor.specialty}</p>
          </div>
          <div className="flex items-center gap-1 bg-amber-50 px-2 py-0.5 rounded text-amber-600 font-semibold text-sm">
            <Star className="w-3.5 h-3.5 fill-current" />
            {doctor.rating}
          </div>
        </div>
        
        <div className="mt-2 flex flex-col gap-1 text-sm text-slate-500">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-slate-400" />
            <span className="truncate">{doctor.location.address}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <DollarSign className="w-4 h-4 text-slate-400" />
            <span>${doctor.price} por consulta</span>
          </div>
        </div>

        <div className="mt-4 flex gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleShowRoute}
            className="flex items-center gap-1 border-[#5A9BD4] text-[#5A9BD4] hover:bg-[#5A9BD4]/10"
          >
            <Navigation className="h-3.5 w-3.5" />
            Ruta
          </Button>
          <Button onClick={handleViewProfile} className="w-full sm:w-auto">
            Ver Perfil
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
