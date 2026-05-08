import React from 'react';
import { Sidebar } from '../components/professional/Sidebar';
import { AppointmentList } from '../components/professional/AppointmentList';
import { CalendarView } from '../components/professional/CalendarView';
import { mockDoctors } from '../utils/mockData';
import { Bell, Search } from 'lucide-react';

const ProfessionalPage: React.FC = () => {
  const doctor = mockDoctors[0]; // Simulating logged in doctor

  return (
    <div className="flex min-h-screen bg-[#FDF9F3]">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <header className="h-20 bg-white border-b border-[#E6CBB8]/30 px-8 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-4 flex-1 max-w-xl">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Buscar pacientes, citas..." 
                className="w-full bg-slate-50 border-none rounded-xl py-2.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-[#5A9BD4]/20 transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button className="relative p-2 text-slate-400 hover:text-[#5A9BD4] transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-white" />
            </button>
            <div className="flex items-center gap-3 pl-6 border-l border-slate-100">
              <div className="text-right">
                <p className="text-sm font-bold text-[#1C365C]">{doctor.name}</p>
                <p className="text-[10px] text-[#5A9BD4] font-bold uppercase tracking-widest">{doctor.specialty}</p>
              </div>
              <img src={doctor.photo} alt={doctor.name} className="w-10 h-10 rounded-xl object-cover ring-2 ring-[#5A9BD4]/20" />
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-8 space-y-8">
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-3xl font-black text-[#1C365C] tracking-tight">Panel de Control</h1>
              <p className="text-[#4A628A] font-medium mt-1">Bienvenido de nuevo, {doctor.name.split(' ')[1]}. Tienes {doctor.appointments.length} citas hoy.</p>
            </div>
            <div className="flex gap-3">
               <div className="bg-white px-4 py-2 rounded-xl shadow-sm border border-[#E6CBB8]/30 text-center">
                  <p className="text-[10px] font-black text-[#5A9BD4] uppercase">Pacientes Totales</p>
                  <p className="text-xl font-black text-[#1C365C]">1,248</p>
               </div>
               <div className="bg-white px-4 py-2 rounded-xl shadow-sm border border-[#E6CBB8]/30 text-center">
                  <p className="text-[10px] font-black text-[#5A9BD4] uppercase">Ingresos Mes</p>
                  <p className="text-xl font-black text-[#1C365C]">$8,420</p>
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 h-[700px]">
              <CalendarView />
            </div>
            <div className="space-y-8">
              <AppointmentList appointments={doctor.appointments} />
              
              <div className="bg-[#1C365C] rounded-2xl p-6 text-white relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -mr-8 -mt-8 group-hover:scale-110 transition-transform duration-500" />
                 <h3 className="font-bold mb-2">Soporte MediFind</h3>
                 <p className="text-xs text-slate-300 mb-4 leading-relaxed">¿Necesitas ayuda con la gestión de tu agenda o telemedicina?</p>
                 <button className="bg-[#5A9BD4] text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-[#4a8bc4] transition-colors">
                   Contactar Soporte
                 </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProfessionalPage;
