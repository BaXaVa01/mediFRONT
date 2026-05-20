// src/pages/professional/PublicProfilePage.tsx

export default function PublicProfilePage() {
  return (
    <div className="p-8 max-w-4xl mx-auto h-[calc(100vh-5rem)] overflow-y-auto pb-20">
      <div className="bg-white rounded-2xl shadow-sm border border-[#E6CBB8]/30 p-8">
        <h2 className="text-2xl font-black text-[#1C365C] mb-2 tracking-tight">Perfil Público</h2>
        <p className="text-sm font-medium text-slate-500 mb-8 pb-6 border-b border-slate-100">Esta información será visible para los pacientes en los resultados de búsqueda.</p>
        
        <div className="space-y-8">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 bg-slate-50 rounded-full border-2 border-dashed border-slate-300 flex items-center justify-center text-slate-400 font-bold text-xs cursor-pointer hover:bg-slate-100 transition-colors">
              Subir Foto
            </div>
            <div>
              <p className="font-bold text-[#1C365C]">Foto de Perfil</p>
              <p className="text-xs text-slate-500 font-medium mt-1">Recomendado: 500x500px, PNG o JPG.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6 pt-4">
            <div>
              <label className="block text-[10px] font-black text-[#5A9BD4] uppercase tracking-widest mb-2">Nombre Profesional</label>
              <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:border-[#5A9BD4] outline-none font-medium text-sm transition-colors" placeholder="Dr. Nombre Apellido" />
            </div>
            <div>
              <label className="block text-[10px] font-black text-[#5A9BD4] uppercase tracking-widest mb-2">Especialidad Principal</label>
              <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:border-[#5A9BD4] outline-none font-medium text-sm transition-colors" placeholder="Ej. Cardiología" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
