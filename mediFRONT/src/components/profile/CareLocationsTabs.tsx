import React, { useState } from 'react';
import type { Doctor } from '../../types/doctor';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { Button } from '../ui/Button';

export const CareLocationsTabs: React.FC<{ doctor: Doctor }> = ({ doctor }) => {
  const [activeTab, setActiveTab] = useState(0);

  if (!doctor.careLocations || doctor.careLocations.length === 0) return null;

  const loc = doctor.careLocations[activeTab];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-[#E6CBB8]/30 p-6">
      <h2 className="text-xl font-bold text-[#1C365C] mb-6">Lugares de Atención</h2>
      
      <div className="flex overflow-x-auto gap-2 mb-6 pb-2 scrollbar-hide">
        {doctor.careLocations.map((l, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className={`whitespace-nowrap px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 border-2 ${
              activeTab === i 
                ? 'bg-[#1C365C] text-white border-[#1C365C] shadow-md transform scale-105' 
                : 'bg-slate-50 text-slate-500 border-transparent hover:bg-slate-100 hover:text-slate-700'
            }`}
          >
            {l.name}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-8 bg-[#FDF9F3]/50 p-6 rounded-2xl border border-[#E6CBB8]/20">
        <div className="space-y-5 text-sm text-[#4A628A]">
          <div className="flex gap-3 items-start">
            <div className="p-2 bg-[#5A9BD4]/10 rounded-lg">
              <MapPin className="w-4 h-4 text-[#5A9BD4] shrink-0" />
            </div>
            <div className="flex flex-col">
               <span className="font-bold text-[#1C365C] text-xs uppercase tracking-wider mb-1">Dirección</span>
               <p className="font-medium">{loc.address}</p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <div className="p-2 bg-[#5A9BD4]/10 rounded-lg">
              <Clock className="w-4 h-4 text-[#5A9BD4] shrink-0" />
            </div>
            <div className="flex flex-col">
               <span className="font-bold text-[#1C365C] text-xs uppercase tracking-wider mb-1">Horarios</span>
               <p className="font-medium">{loc.availability}</p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <div className="p-2 bg-[#5A9BD4]/10 rounded-lg">
              <Phone className="w-4 h-4 text-[#5A9BD4] shrink-0" />
            </div>
            <div className="flex flex-col">
               <span className="font-bold text-[#1C365C] text-xs uppercase tracking-wider mb-1">Teléfono</span>
               <p className="font-medium">{loc.phone}</p>
            </div>
          </div>
          <Button variant="outline" size="sm" className="w-full mt-4 gap-2 text-[#5A9BD4] border-[#5A9BD4] font-bold h-11 hover:bg-[#5A9BD4] hover:text-white transition-all">
            <Navigation className="w-4 h-4" /> Ver indicaciones
          </Button>
        </div>
        <div className="bg-slate-200 rounded-2xl flex flex-col items-center justify-center min-h-[200px] text-slate-400 relative overflow-hidden group shadow-inner border border-slate-300/50">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-300/30 to-transparent pointer-events-none" />
          <MapPin className="w-10 h-10 opacity-30 mb-2 group-hover:scale-110 transition-transform duration-300" />
          <span className="text-[10px] uppercase font-black tracking-[0.2em] opacity-40">Vista previa del mapa</span>
        </div>
      </div>
    </div>
  );
};
