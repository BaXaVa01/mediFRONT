import { AgendaFilterPanel } from '../../components/professional/agenda/AgendaFilterPanel';
import { DailyCalendar } from '../../components/professional/agenda/DailyCalendar';
import { AppointmentDetailPanel } from '../../components/professional/agenda/AppointmentDetailPanel';

export default function AgendaPage() {
  return (
    <div className="p-8 h-[calc(100vh-5rem)] flex gap-6 overflow-hidden">
      <AgendaFilterPanel />
      <div className="flex-1 bg-white rounded-2xl shadow-sm border border-[#E6CBB8]/30 overflow-hidden">
        <DailyCalendar />
      </div>
      <div className="w-80 bg-white rounded-2xl shadow-sm border border-[#E6CBB8]/30">
        <AppointmentDetailPanel />
      </div>
    </div>
  );
}
