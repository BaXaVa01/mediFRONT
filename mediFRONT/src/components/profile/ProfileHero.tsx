import React from 'react';
import { Star, MapPin, ShieldCheck, MessageCircle, CalendarDays } from 'lucide-react';
import type { Doctor } from '../../types/doctor';
import { Button } from '../ui/Button';

export const ProfileHero: React.FC<{ doctor: Doctor }> = ({ doctor }) => {
  return (
    <div className="bg-white rounded-3xl shadow-sm border border-[#E6CBB8]/30 p-6 sm:p-8 flex flex-col sm:flex-row gap-8 items-start relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#5A9BD4]/5 rounded-bl-[100px] -z-10" />
      
      <img 
        src={doctor.photo} 
        alt={doctor.name}
        className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl object-cover ring-4 ring-white shadow-lg shrink-0"
      />
      
      <div className="flex-1 w-full z-10">
        <div className="flex flex-wrap items-center gap-3 mb-1">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#1C365C]">{doctor.name}</h1>
          <div className="flex items-center gap-1 bg-[#A3C9A8]/20 px-2 py-0.5 rounded-full">
            <ShieldCheck className="h-4 w-4 text-[#A3C9A8]" />
            <span className="text-xs font-bold text-[#1C365C]">Verificado</span>
          </div>
        </div>
        
        <p className="text-lg text-[#5A9BD4] font-medium mb-1">{doctor.specialty}</p>
        <p className="text-xs text-slate-400 mb-4 font-mono">Cédula Profesional: {doctor.licenseNumber}</p>
        
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-[#4A628A] text-sm mb-6">
          <div className="flex items-center gap-1.5">
            <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
            <span className="font-bold text-[#1C365C]">{doctor.rating}</span>
            <span>({doctor.reviewCount} reseñas)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4 text-[#5A9BD4]" />
            <span>{doctor.location.address}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button className="flex items-center gap-2 px-6 h-11" variant="primary">
            <CalendarDays className="w-4 h-4" />
            Agendar Cita
          </Button>
          <Button variant="outline" className="flex items-center gap-2 border-[#E6CBB8] text-[#1C365C] bg-white h-11">
            <MessageCircle className="w-4 h-4 text-[#5A9BD4]" />
            Enviar Mensaje
          </Button>
        </div>
      </div>
    </div>
  );
};
