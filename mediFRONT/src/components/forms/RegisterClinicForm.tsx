import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

export const RegisterClinicForm: React.FC = () => {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  const [formData, setFormData] = useState({ clinicName: '', doctorsCount: '', city: '', email: '', password: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login({ email: formData.email, password: formData.password });
    navigate('/pro/calendar');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input label="Nombre de la clínica" required value={formData.clinicName} onChange={(e) => setFormData({ ...formData, clinicName: e.target.value })} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input label="Número de médicos" type="number" required value={formData.doctorsCount} onChange={(e) => setFormData({ ...formData, doctorsCount: e.target.value })} />
        <Input label="Ciudad" required value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} />
      </div>
      <Input label="Correo electrónico" type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
      <Input label="Contraseña" type="password" required value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
      <Button type="submit" className="w-full mt-6" variant="primary">Crear cuenta de clínica</Button>
    </form>
  );
};
