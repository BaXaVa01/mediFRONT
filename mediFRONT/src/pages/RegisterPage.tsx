import React from 'react';
import { Link } from 'react-router-dom';
import { AccountTypeCard } from '../components/cards/AccountTypeCard';
import { User, Stethoscope, Building2 } from 'lucide-react';

const RegisterPage: React.FC = () => {
  return (
    <div className="flex min-h-[calc(100vh-64px)] items-center justify-center p-4 bg-[#FDF9F3]">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#1C365C] mb-4">Crear una cuenta</h1>
          <p className="text-[#4A628A] text-lg">Selecciona el tipo de cuenta que deseas crear</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AccountTypeCard
            title="Soy un Paciente"
            description="Encuentra especialistas, agenda citas y gestiona tu salud."
            icon={<User className="w-12 h-12" />}
            to="/registro/paciente"
          />
          <AccountTypeCard
            title="Soy Médico / Especialista"
            description="Únete a nuestra red, gestiona tus consultas y visibilidad."
            icon={<Stethoscope className="w-12 h-12" />}
            to="/registro/medico"
          />
          <AccountTypeCard
            title="Soy Gestor de Clínica"
            description="Administra tu clínica, especialidades y personal médico."
            icon={<Building2 className="w-12 h-12" />}
            to="/registro/clinica"
          />
        </div>

        <div className="mt-12 text-center text-[#4A628A]">
          ¿Ya tienes una cuenta?{' '}
          <Link to="/login" className="font-bold text-[#1C365C] hover:underline">
            Inicia sesión aquí
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
