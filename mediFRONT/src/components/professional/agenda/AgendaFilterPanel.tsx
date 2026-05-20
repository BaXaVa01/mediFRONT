import React from 'react';
import { useAgendaStore } from '../../../store/agendaStore';

export const AgendaFilterPanel: React.FC = () => {
  const { activeFilter, setActiveFilter, viewMode, setViewMode } = useAgendaStore();
  const filters = ['Hoy', 'Pendientes', 'Confirmadas', 'Canceladas', 'Online', 'Presencial', 'Primera vez', 'Seguimiento', 'Sin confirmar'];

  return (
    <div className="w-64 bg-white rounded-2xl shadow-sm border border-[#E6CBB8]/30 p-4 space-y-6">
      <div>
        <h3 className="font-bold text-[#1C365C] mb-3">Vista</h3>
        <div className="flex bg-slate-50 p-1 rounded-lg">
          <button className={`flex-1 py-1.5 text-xs font-bold rounded-md ${viewMode === 'daily' ? 'bg-white shadow-sm text-[#5A9BD4]' : 'text-slate-500'}`} onClick={() => setViewMode('daily')}>Diaria</button>
          <button className={`flex-1 py-1.5 text-xs font-bold rounded-md ${viewMode === 'weekly' ? 'bg-white shadow-sm text-[#5A9BD4]' : 'text-slate-500'}`} onClick={() => setViewMode('weekly')}>Semanal</button>
        </div>
      </div>
      <div>
        <h3 className="font-bold text-[#1C365C] mb-3">Filtros</h3>
        <ul className="space-y-1">
          {filters.map(f => (
            <li key={f}>
              <button onClick={() => setActiveFilter(f)} className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${activeFilter === f ? 'bg-[#5A9BD4]/10 text-[#5A9BD4] font-bold' : 'text-slate-600 hover:bg-slate-50'}`}>
                {f}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
