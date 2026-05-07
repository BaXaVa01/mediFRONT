import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

export const RegisterDoctorForm: React.FC = () => {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  const [formData, setFormData] = useState({ fullName: '', professionalName: '', ubication: '', specialty: '', phone: '', email: '', password: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login({ email: formData.email, password: formData.password });
    navigate('/pro/calendar');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input label="Nombre completo" required value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} />
        <Input label="Nombre profesional" required value={formData.professionalName} onChange={(e) => setFormData({ ...formData, professionalName: e.target.value })} />
        <Input label="Especialidad" required value={formData.specialty} onChange={(e) => setFormData({ ...formData, specialty: e.target.value })} />
        <Input label="Ubicación de trabajo" required value={formData.ubication} onChange={(e) => setFormData({ ...formData, ubication: e.target.value })} />
        <Input label="Teléfono" type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
        <Input label="Correo electrónico" type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
      </div>
      <Input label="Contraseña" type="password" required value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
      <Button type="submit" className="w-full mt-6" variant="primary">Crear cuenta de especialista</Button>
    </form>
  );
};
