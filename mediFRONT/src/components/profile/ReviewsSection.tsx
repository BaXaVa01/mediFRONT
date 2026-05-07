import React from 'react';
import type { Doctor } from '../../types/doctor';
import { Star, MessageSquare } from 'lucide-react';

export const ReviewsSection: React.FC<{ doctor: Doctor }> = ({ doctor }) => {
  if (!doctor.reviews || doctor.reviews.length === 0) return null;
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-[#E6CBB8]/30 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-[#1C365C] flex items-center gap-2">
          Opiniones de pacientes 
          <span className="bg-[#E6CBB8]/30 px-2 py-0.5 rounded text-sm text-[#5A9BD4] font-black">{doctor.reviewCount}</span>
        </h2>
        <div className="flex items-center gap-1.5 text-amber-500">
           <Star className="w-5 h-5 fill-current" />
           <span className="font-black text-lg text-[#1C365C]">{doctor.rating}</span>
        </div>
      </div>

      <div className="space-y-4">
        {doctor.reviews.map((rev, i) => (
          <div key={i} className="p-6 border border-slate-100 rounded-2xl bg-slate-50/30 hover:border-[#E6CBB8]/50 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#5A9BD4]/20 flex items-center justify-center text-[#5A9BD4] font-bold">
                  {rev.patientName.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-[#1C365C]">{rev.patientName}</p>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">{rev.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, starIdx) => (
                  <Star 
                    key={starIdx} 
                    className={`w-3.5 h-3.5 ${starIdx < Math.floor(rev.rating) ? 'text-amber-400 fill-current' : 'text-slate-200'}`} 
                  />
                ))}
              </div>
            </div>
            <div className="flex gap-3">
              <MessageSquare className="w-4 h-4 text-[#E6CBB8] shrink-0 mt-1" />
              <p className="text-sm text-[#4A628A] leading-relaxed italic">"{rev.comment}"</p>
            </div>
          </div>
        ))}
      </div>
      
      <button className="w-full mt-6 py-3 text-[#5A9BD4] font-bold text-sm hover:underline">
        Ver todas las reseñas
      </button>
    </div>
  );
};
