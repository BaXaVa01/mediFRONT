import React, { useState } from 'react';
import type { Doctor } from '../../types/doctor';
import { Briefcase, UserPlus, HeartPulse, Video, Info } from 'lucide-react';
import { MoreInfoModal } from './MoreInfoModal';
import { Button } from '../ui/Button';

export const DoctorExperienceCard: React.FC<{ doctor: Doctor }> = ({ doctor }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-[#E6CBB8]/30 p-6">
      <h2 className="text-xl font-bold text-[#1C365C] mb-4">Experiencia y Acerca de</h2>
      <p className="text-[#4A628A] text-sm mb-6 leading-relaxed">{doctor.bio}</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-[#5A9BD4]/10 rounded-lg">
            <Briefcase className="w-5 h-5 text-[#5A9BD4] shrink-0" />
          </div>
          <div>
            <p className="text-sm font-bold text-[#1C365C]">Experiencia</p>
            <p className="text-sm text-[#4A628A]">{doctor.experience}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="p-2 bg-[#5A9BD4]/10 rounded-lg">
            <HeartPulse className="w-5 h-5 text-[#5A9BD4] shrink-0" />
          </div>
          <div>
            <p className="text-sm font-bold text-[#1C365C]">Enfermedades tratadas</p>
            <p className="text-sm text-[#4A628A]">
              {doctor.diseasesTreated.slice(0, 3).join(', ')}
              {doctor.diseasesTreated.length > 3 ? '...' : ''}
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="p-2 bg-[#5A9BD4]/10 rounded-lg">
            <UserPlus className="w-5 h-5 text-[#5A9BD4] shrink-0" />
          </div>
          <div>
            <p className="text-sm font-bold text-[#1C365C]">Tipos de pacientes</p>
            <p className="text-sm text-[#4A628A]">{doctor.patientTypes.join(', ')}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="p-2 bg-[#5A9BD4]/10 rounded-lg">
            <Video className="w-5 h-5 text-[#5A9BD4] shrink-0" />
          </div>
          <div>
            <p className="text-sm font-bold text-[#1C365C]">Tipos de consulta</p>
            <p className="text-sm text-[#4A628A]">{doctor.consultationTypes.join(', ')}</p>
          </div>
        </div>
      </div>

      <Button 
        variant="outline" 
        size="sm" 
        onClick={() => setIsModalOpen(true)} 
        className="w-full flex justify-center gap-2 border-dashed border-[#E6CBB8] text-[#1C365C] hover:bg-[#FDF9F3]"
      >
        <Info className="w-4 h-4" /> Mostrar más información
      </Button>

      <MoreInfoModal doctor={doctor} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};
