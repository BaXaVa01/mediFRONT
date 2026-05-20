import React from 'react';
import { useAgendaStore } from '../../../store/agendaStore';
import { Button } from '../../ui/Button';

export const AppointmentDetailPanel: React.FC = () => {
  const selectedAppointment = useAgendaStore((state) => state.selectedAppointment);

  if (!selectedAppointment) {
    return (
      <div className="h-full flex items-center justify-center text-slate-400 p-8 text-center text-sm font-medium">
        Selecciona una cita para ver los detalles
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col p-6 overflow-y-auto w-full">
      <h2 className="text-xl font-black text-[#1C365C] mb-1">{selectedAppointment.patientName}</h2>
      <p className="text-sm text-slate-500 mb-6 font-medium">{selectedAppointment.type} • {selectedAppointment.status}</p>
      
      <div className="bg-slate-50 p-4 rounded-xl mb-6 border border-slate-100">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Horario</p>
        <p className="font-bold text-[#1C365C]">{selectedAppointment.time}</p>
      </div>

      <div className="mt-auto space-y-3 pt-6 border-t border-slate-100">
        <Button variant="primary" className="w-full font-bold shadow-sm">Comenzar Consulta</Button>
        <Button variant="outline" className="w-full text-[#1C365C] border-slate-200 hover:bg-slate-50 font-bold">Reagendar</Button>
        <Button variant="outline" className="w-full text-rose-600 border-rose-200 hover:bg-rose-50 font-bold hover:border-rose-300">Cancelar Cita</Button>
      </div>
    </div>
  );
};
