import React from 'react';
import type { Doctor } from '../../types/doctor';
import { Stethoscope, Clock, Check } from 'lucide-react';
import { Button } from '../ui/Button';

export const ServicesPricingCard: React.FC<{ doctor: Doctor }> = ({ doctor }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-[#E6CBB8]/30 p-6">
      <h2 className="text-xl font-bold text-[#1C365C] mb-6 flex items-center gap-2">
        <Stethoscope className="w-5 h-5 text-[#5A9BD4]" />
        Servicios y Precios
      </h2>
      
      <div className="space-y-4">
        {doctor.servicesDetails.map((service, idx) => (
          <div key={idx} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 bg-slate-50/50 rounded-2xl gap-4 border border-slate-100 hover:border-[#5A9BD4]/30 transition-colors group">
            <div className="flex items-start gap-3">
              <div className="mt-1 p-1 bg-white rounded-full shadow-sm">
                <Check className="w-3 h-3 text-[#A3C9A8]" />
              </div>
              <div>
                <h3 className="font-bold text-[#1C365C] group-hover:text-[#5A9BD4] transition-colors">{service.name}</h3>
                {service.duration && (
                  <div className="flex items-center gap-1 text-xs text-[#4A628A] mt-1 font-medium">
                    <Clock className="w-3 h-3" /> {service.duration}
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
              <div className="flex flex-col items-end">
                <span className="text-xs text-[#4A628A] font-medium">Desde</span>
                <span className="text-xl font-bold text-[#1C365C]">${service.price}</span>
              </div>
              <Button size="sm" variant="outline" className="border-[#5A9BD4] text-[#5A9BD4] hover:bg-[#5A9BD4] hover:text-white shrink-0 font-bold px-5">
                Agendar
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
