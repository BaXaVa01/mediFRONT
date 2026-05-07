import React from 'react';
import type { Doctor } from '../../types/doctor';

export const GalleryGrid: React.FC<{ doctor: Doctor }> = ({ doctor }) => {
  if (!doctor.gallery || doctor.gallery.length === 0) return null;
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-[#E6CBB8]/30 p-6">
      <h2 className="text-xl font-bold text-[#1C365C] mb-6">Fotos e Instalaciones</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {doctor.gallery.map((img, i) => (
          <div key={i} className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-slate-100 border border-slate-100">
            <img 
              src={img} 
              alt={`Instalación ${i+1}`} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
};
