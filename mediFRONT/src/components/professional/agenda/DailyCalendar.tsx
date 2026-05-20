import React from 'react';
import { mockDoctors } from '../../../utils/mockData';
import { useAgendaStore } from '../../../store/agendaStore';

export const DailyCalendar: React.FC = () => {
  const appointments = mockDoctors[0].appointments;
  const setSelectedAppointment = useAgendaStore((state) => state.setSelectedAppointment);
  const selectedAppointment = useAgendaStore((state) => state.selectedAppointment);

  return (
    <div className="h-full flex flex-col overflow-hidden">
      <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-white rounded-t-2xl">
        <h2 className="text-lg font-bold text-[#1C365C]">Hoy</h2>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50/50">
        {appointments.map(apt => (
          <div 
            key={apt.id} 
            onClick={() => setSelectedAppointment(apt)} 
            className={`bg-white p-4 rounded-xl border transition-all cursor-pointer hover:shadow-md ${
              selectedAppointment?.id === apt.id 
                ? 'border-[#5A9BD4] shadow-md ring-1 ring-[#5A9BD4]/20' 
                : 'border-slate-200 hover:border-[#5A9BD4]'
            }`}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold text-[#1C365C]">{apt.time}</span>
              <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded ${
                apt.status === 'Confirmada' 
                  ? 'bg-green-100 text-green-600' 
                  : 'bg-[#5A9BD4]/10 text-[#5A9BD4]'
              }`}>
                {apt.status}
              </span>
            </div>
            <p className="font-bold text-[#1C365C]">{apt.patientName}</p>
            <p className="text-xs text-slate-500">{apt.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
