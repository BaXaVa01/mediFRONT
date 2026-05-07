import React from 'react';
import type { Doctor } from '../../types/doctor';
import { Calendar, Clock, ChevronRight } from 'lucide-react';
import { Button } from '../ui/Button';

export const DoctorAvailabilityPanel: React.FC<{ doctor: Doctor }> = ({ doctor }) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg border border-[#E6CBB8]/50 p-6 sticky top-24">
      <h3 className="font-bold text-[#1C365C] mb-6 flex items-center gap-2">
        <div className="p-2 bg-[#5A9BD4]/10 rounded-lg">
          <Calendar className="h-5 w-5 text-[#5A9BD4]" />
        </div>
        Horarios de Atención
      </h3>

      <div className="space-y-3 mb-8">
        {doctor.schedule.map((s, i) => (
          <div key={i} className="flex justify-between items-start text-sm border-b border-slate-50 pb-3 last:border-0 last:pb-0">
            <span className="font-bold text-[#4A628A]">{s.day}</span>
            <div className="flex flex-col items-end gap-1">
               {s.hours.split(',').map((h, idx) => (
                 <span key={idx} className="text-right text-[#1C365C] font-medium bg-slate-50 px-2 py-0.5 rounded text-[11px]">
                   {h.trim()}
                 </span>
               ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#5A9BD4]/5 p-5 rounded-2xl border border-[#5A9BD4]/10 text-center">
        <div className="flex items-center justify-center gap-2 text-[#5A9BD4] mb-2">
          <Clock className="w-4 h-4" />
          <p className="text-xs font-black uppercase tracking-widest">Próxima Cita</p>
        </div>
        <p className="font-bold text-[#1C365C] text-lg mb-4">Mañana, 09:00 AM</p>
        <Button variant="primary" className="w-full h-12 shadow-md hover:shadow-lg transition-all group">
          Agendar Cita 
          <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>

      <p className="text-[10px] text-[#4A628A] text-center mt-4 font-medium italic">
        * Sujeto a cambios según disponibilidad real.
      </p>
    </div>
  );
};
