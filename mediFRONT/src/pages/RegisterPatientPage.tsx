import React from 'react';
import { Link } from 'react-router-dom';
import { RegisterPatientForm } from '../components/forms/RegisterPatientForm';
import { ArrowLeft } from 'lucide-react';

const RegisterPatientPage: React.FC = () => {
  return (
    <div className="flex min-h-[calc(100vh-64px)] items-center justify-center p-4 bg-[#FDF9F3]">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl border border-[#E6CBB8]/20">
        <Link to="/registro" className="flex items-center text-sm text-[#4A628A] hover:text-[#5A9BD4] mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" /> Volver a selección de cuenta
        </Link>
        <h1 className="text-3xl font-bold text-[#1C365C] mb-2">Registro de Paciente</h1>
        <p className="text-[#4A628A] mb-8">Ingresa tus datos para crear tu cuenta</p>
        <RegisterPatientForm />
      </div>
    </div>
  );
};

export default RegisterPatientPage;
