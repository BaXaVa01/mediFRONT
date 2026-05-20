import { AgendaFilterPanel } from '../../components/professional/agenda/AgendaFilterPanel';

export default function AgendaPage() {
  return (
    <div className="p-8 h-[calc(100vh-5rem)] flex gap-6 overflow-hidden">
      <AgendaFilterPanel />
      <div className="flex-1 bg-white rounded-2xl shadow-sm border border-[#E6CBB8]/30 flex items-center justify-center">
        Centro (Calendario)
      </div>
      <div className="w-80 bg-white rounded-2xl shadow-sm border border-[#E6CBB8]/30 flex items-center justify-center">
        Detalle de Cita
      </div>
    </div>
  );
}
