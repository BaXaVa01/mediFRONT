import React from 'react';
import { motion } from 'framer-motion';
import type { Appointment } from '../../../utils/agendaMockData';
import { useAgendaStore } from '../../../store/agendaStore';

interface AppointmentBlockProps {
  apt: Appointment;
  dayIndex: number; // 0 for daily, 0-6 for weekly
}

export const AppointmentBlock: React.FC<AppointmentBlockProps> = ({ apt, dayIndex }) => {
  const { selectedAppointment, setSelectedAppointment, viewMode } = useAgendaStore();
  
  // Calculate position and height based on 60px per hour starting at 08:00
  const startHour = apt.startTime.getHours() + apt.startTime.getMinutes() / 60;
  const endHour = apt.endTime.getHours() + apt.endTime.getMinutes() / 60;
  
  const baseHour = 8; // Start of grid is 08:00
  const topPx = Math.max(0, (startHour - baseHour) * 60);
  const heightPx = Math.max(20, (endHour - startHour) * 60);

  // Layout calculation
  const totalCols = viewMode === 'weekly' ? 7 : 1;
  const colWidth = 100 / totalCols;
  const leftPct = dayIndex * colWidth;
  
  const isSelected = selectedAppointment?.id === apt.id;
  
  // Visual mapping
  const styleMap = {
    confirmed: { bg: 'bg-[#5A9BD4]/10', border: 'border-[#5A9BD4]', text: 'text-[#5A9BD4]' },
    pending: { bg: 'bg-[#E6CBB8]/20', border: 'border-[#E6CBB8]', text: 'text-[#E6CBB8]' },
    cancelled: { bg: 'bg-rose-50', border: 'border-rose-300', text: 'text-rose-500' },
    completed: { bg: 'bg-[#A3C9A8]/20', border: 'border-[#A3C9A8]', text: 'text-[#A3C9A8]' }
  };

  const style = styleMap[apt.status] || styleMap.pending;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02, zIndex: 10 }}
      onClick={() => setSelectedAppointment(apt)}
      style={{
        top: `${topPx}px`,
        height: `${heightPx}px`,
        left: `calc(${leftPct}% + 4px)`,
        width: `calc(${colWidth}% - 8px)`
      }}
      className={`absolute border-l-4 rounded-md p-2 overflow-hidden shadow-sm cursor-pointer transition-shadow ${style.bg} ${style.border} ${isSelected ? 'ring-2 ring-offset-1 ring-[#1C365C]/20 shadow-md z-10' : 'z-0'}`}
    >
      <span className={`text-[9px] font-bold leading-none block mb-1 ${style.text}`}>
        {apt.startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - {apt.endTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </span>
      <span className="text-[11px] font-bold text-[#1C365C] leading-none block truncate">
        {apt.patientName}
      </span>
      {heightPx >= 45 && (
        <span className="text-[9px] text-[#1C365C]/60 leading-none block truncate mt-1">
          {apt.service}
        </span>
      )}
    </motion.div>
  );
};