import React from 'react';
import { Calendar, Users, Settings, LogOut, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Sidebar: React.FC = () => {
  const location = useLocation();
  
  const menuItems = [
    { icon: Calendar, label: 'Agenda', path: '/pro/agenda' },
    { icon: Settings, label: 'Configuración', path: '/pro/config' },
    { icon: Users, label: 'Perfil Público', path: '/pro/profile' },
  ];

  return (
    <div className="w-64 bg-[#1C365C] min-h-screen flex flex-col text-white">
      <div className="p-8">
        <h1 className="text-2xl font-black tracking-tighter flex items-center gap-2">
          MediFind <span className="bg-[#5A9BD4] text-[10px] px-2 py-0.5 rounded uppercase tracking-widest">Pro</span>
        </h1>
      </div>

      <nav className="flex-1 px-4 space-y-2">
        {menuItems.map((item) => {
          const isActive = location.pathname.includes(item.path);
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center justify-between p-3 rounded-xl transition-all group ${
                isActive 
                  ? 'bg-[#5A9BD4] text-white' 
                  : 'hover:bg-white/5 text-slate-400 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-3">
                <item.icon className={`w-5 h-5 ${isActive ? 'text-white' : 'group-hover:text-[#5A9BD4]'}`} />
                <span className="font-bold text-sm">{item.label}</span>
              </div>
              {isActive && <ChevronRight className="w-4 h-4" />}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-white/10">
        <button className="flex items-center gap-3 p-3 w-full text-slate-400 hover:text-red-400 transition-colors">
          <LogOut className="w-5 h-5" />
          <span className="font-bold text-sm">Cerrar Sesión</span>
        </button>
      </div>
    </div>
  );
};
