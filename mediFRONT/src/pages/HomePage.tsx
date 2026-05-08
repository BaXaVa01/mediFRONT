import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Calendar, Shield, Zap } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { useLocationStore } from '../store/locationStore';
import homePageOnBackground from '../assets/homepage.png';
import doctor from '../assets/doctor.png';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const setUserCoords = useLocationStore((state) => state.setUserCoords);
  const [specialty, setSpecialty] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setUserCoords([pos.coords.latitude, pos.coords.longitude]);
        },
        (err) => console.error('Geolocation error:', err)
      );
    }
  }, [setUserCoords]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/buscar?specialty=${encodeURIComponent(specialty)}&loc=${encodeURIComponent(location)}`);
  };

  return (
    <div className="min-h-screen bg-[#FDF9F3] text-[#1C365C]">
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center bg-[#5A9BD4] overflow-hidden py-12">
        <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center gap-12">
          {/* Left Side: Content */}
          <div className="flex-1 text-left text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Encuentra tu médico ideal
            </h1>
            <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-2xl">
              La plataforma más confiable para agendar citas médicas con los mejores especialistas de tu zona.
            </p>

            <form 
              onSubmit={handleSearch}
              className="bg-white/10 backdrop-blur-md p-2 rounded-2xl shadow-lg border border-white/20 flex flex-col md:flex-row gap-2 w-full"
            >
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Especialidad"
                  className="pl-12 border-none bg-white/10 text-white placeholder:text-white/60 h-14 focus:bg-white/20"
                  value={specialty}
                  onChange={(e) => setSpecialty(e.target.value)}
                />
              </div>
              <div className="flex-1 relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Ubicación"
                  className="pl-12 border-none bg-white/10 text-white placeholder:text-white/60 h-14 focus:bg-white/20"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <Button 
                type="submit"
                className="h-14 px-8 bg-white text-[#5A9BD4] hover:bg-white/90 text-lg font-bold rounded-xl"
              >
                Buscar
              </Button>
            </form>
          </div>

          {/* Right Side: Illustration */}
          <div className="flex-1 hidden md:block">
            <img 
              src={homePageOnBackground} 
              alt="MediFind Illustration" 
              className="w-full h-auto object-contain max-h-[500px]"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">¿Por qué elegir MediFind?</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Calendar className="w-10 h-10 text-[#5A9BD4]" />,
                title: "Agenda fácil",
                description: "Reserva tu cita en menos de 2 minutos desde cualquier dispositivo."
              },
              {
                icon: <Shield className="w-10 h-10 text-[#5A9BD4]" />,
                title: "Médicos verificados",
                description: "Todos nuestros especialistas pasan por un riguroso proceso de validación."
              },
              {
                icon: <Zap className="w-10 h-10 text-[#5A9BD4]" />,
                title: "Atención inmediata",
                description: "Encuentra espacios disponibles incluso para el mismo día."
              }
            ].map((benefit, idx) => (
              <div key={idx} className="text-center p-8 rounded-2xl bg-[#FDF9F3] hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="opacity-80">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <img 
              src={doctor} 
              alt="Marketing" 
              className="rounded-3xl shadow-2xl w-full h-[400px] object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-6">Salud al alcance de un click</h2>
            <p className="text-lg mb-8 opacity-90 leading-relaxed">
              MediFind conecta a miles de pacientes con los mejores servicios de salud. 
              Nuestra misión es facilitar el acceso a una atención médica de calidad, 
              eliminando las barreras tradicionales de comunicación y espera.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="bg-[#5A9BD4]/10 p-1 rounded-full">
                  <Zap className="w-5 h-5 text-[#5A9BD4]" />
                </div>
                <span>Acceso a red nacional de clínicas</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-[#5A9BD4]/10 p-1 rounded-full">
                  <Zap className="w-5 h-5 text-[#5A9BD4]" />
                </div>
                <span>Gestión de historial de citas</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-[#5A9BD4]/10 p-1 rounded-full">
                  <Zap className="w-5 h-5 text-[#5A9BD4]" />
                </div>
                <span>Recordatorios automáticos vía WhatsApp</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
