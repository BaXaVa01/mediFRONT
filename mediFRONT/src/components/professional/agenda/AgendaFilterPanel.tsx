import React from 'react';
import { useAgendaStore } from '../../../store/agendaStore';
import { ChevronLeft, ChevronRight, CheckCircle2, MapPin, ClipboardList } from 'lucide-react';

export const AgendaFilterPanel: React.FC = () => {
  const { activeFilters, toggleFilter, setPendingDrawerOpen, pendingRequests } = useAgendaStore();
  
  // Mini calendar dummy data
  const days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
  const dates = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="w-[280px] bg-[#FDF9F3] p-6 overflow-y-auto custom-scrollbar flex flex-col gap-8 shrink-0">
      
      {/* Mini Calendar */}
      <div className="bg-white rounded-3xl p-5 shadow-[0_4px_20px_rgba(28,54,92,0.03)] border border-[#1C365C]/5">
        <div className="flex items-center justify-between mb-4 px-1">
          <h3 className="font-bold text-[#1C365C] text-sm">May 2024</h3>
          <div className="flex gap-2 text-[#1C365C]/40">
            <ChevronLeft className="w-4 h-4 cursor-pointer hover:text-[#1C365C]" />
            <ChevronRight className="w-4 h-4 cursor-pointer hover:text-[#1C365C]" />
          </div>
        </div>
        <div className="grid grid-cols-7 text-center mb-2">
          {days.map(d => <span key={d} className="text-[9px] font-bold text-[#1C365C]/30">{d}</span>)}
        </div>
        <div className="grid grid-cols-7 gap-y-2 text-center text-xs font-medium text-[#1C365C]">
          <span className="text-[#1C365C]/20">28</span>
          <span className="text-[#1C365C]/20">29</span>
          <span className="text-[#1C365C]/20">30</span>
          {dates.map(d => (
            <div key={d} className="flex justify-center items-center">
              <span className={`w-6 h-6 flex items-center justify-center rounded-full cursor-pointer transition-colors ${d === 10 ? 'bg-[#1C365C] text-white shadow-md' : 'hover:bg-[#FDF9F3]'}`}>
                {d}
              </span>
            </div>
          ))}
        </div>
        <button className="w-full mt-4 py-2 bg-[#FDF9F3] text-[#5A9BD4] font-bold text-xs rounded-xl hover:bg-[#5A9BD4]/10 transition-colors">
          Today
        </button>
      </div>

      {/* Quick Filters */}
      <div>
        <h3 className="text-[10px] font-bold text-[#1C365C]/40 uppercase tracking-widest mb-3 px-1">Quick Filters</h3>
        <div className="space-y-2">
          <button 
            onClick={() => toggleFilter('confirmed')}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl transition-all ${activeFilters.includes('confirmed') ? 'bg-[#5A9BD4]/10 border border-[#5A9BD4]/20' : 'bg-white border border-[#1C365C]/5 hover:border-[#1C365C]/10 shadow-sm'}`}
          >
            <div className="flex items-center gap-3 text-[#1C365C] font-semibold text-sm">
              <CheckCircle2 className={`w-4 h-4 ${activeFilters.includes('confirmed') ? 'text-[#5A9BD4]' : 'text-[#1C365C]/30'}`} />
              Confirmed
            </div>
            <div className="w-2 h-2 rounded-full bg-[#5A9BD4]" />
          </button>
          
          <button 
            onClick={() => toggleFilter('In-Person')}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl transition-all ${activeFilters.includes('In-Person') ? 'bg-[#5A9BD4]/10 border border-[#5A9BD4]/20' : 'bg-white border border-[#1C365C]/5 hover:border-[#1C365C]/10 shadow-sm'}`}
          >
            <div className="flex items-center gap-3 text-[#1C365C] font-semibold text-sm">
              <CheckCircle2 className={`w-4 h-4 ${activeFilters.includes('In-Person') ? 'text-[#5A9BD4]' : 'text-[#1C365C]/30'}`} />
              In-person
            </div>
            <MapPin className="w-4 h-4 text-[#1C365C]/30" />
          </button>
        </div>
      </div>

      {/* Pending Requests Card */}
      <div 
        onClick={() => setPendingDrawerOpen(true)}
        className="bg-[#E6CBB8]/20 rounded-3xl p-5 border border-[#E6CBB8]/30 relative overflow-hidden group cursor-pointer hover:bg-[#E6CBB8]/30 transition-colors mt-auto mb-4"
      >
        <ClipboardList className="absolute -bottom-4 -right-4 w-24 h-24 text-[#E6CBB8]/40 -rotate-12 group-hover:scale-110 transition-transform duration-500" />
        <div className="relative z-10">
          <h4 className="text-[10px] font-bold text-[#1C365C]/50 uppercase tracking-widest mb-1">Pending Requests</h4>
          <p className="text-4xl font-black text-[#1C365C] mb-4">{pendingRequests.length}</p>
          <div className="flex items-center gap-1 text-xs font-bold text-[#1C365C]/70">
            Action required <span className="text-[#1C365C]">→</span>
          </div>
        </div>
      </div>

    </div>
  );
};
