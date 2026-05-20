import { useState } from 'react';

export default function ConfigPage() {
  const [activeTab, setActiveTab] = useState('solicitudes');
  const tabs = [
    { id: 'solicitudes', label: 'Solicitudes Pendientes' },
    { id: 'horarios', label: 'Horarios de Atención' },
    { id: 'bloqueos', label: 'Bloqueos de Fechas' },
    { id: 'servicios', label: 'Servicios y Precios' },
    { id: 'recordatorios', label: 'Recordatorios' },
    { id: 'reglas', label: 'Reglas de Citas' }
  ];

  return (
    <div className="p-8 h-[calc(100vh-5rem)] flex gap-8">
      <div className="w-64 space-y-2">
        <h2 className="text-2xl font-black text-[#1C365C] mb-6 tracking-tight">Configuración</h2>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`w-full text-left px-4 py-3 rounded-xl font-bold transition-all text-sm ${activeTab === tab.id ? 'bg-[#5A9BD4] text-white shadow-md' : 'text-slate-500 hover:bg-white hover:text-[#1C365C]'}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="flex-1 bg-white rounded-2xl shadow-sm border border-[#E6CBB8]/30 p-8 overflow-y-auto">
        <h3 className="text-xl font-black text-[#1C365C] mb-6 border-b border-slate-100 pb-4">{tabs.find(t => t.id === activeTab)?.label}</h3>
        <p className="text-slate-500 font-medium">Contenido para {activeTab}...</p>
      </div>
    </div>
  );
}
