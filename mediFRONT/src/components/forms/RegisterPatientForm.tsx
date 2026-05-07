import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

export const RegisterPatientForm: React.FC = () => {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  const [formData, setFormData] = useState({ fullName: '', email: '', password: '', phone: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login({ email: formData.email, password: formData.password });
    navigate('/buscar');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input label="Nombre completo" required value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} />
      <Input label="Correo electrónico" type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
      <Input label="Contraseña" type="password" required value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
      <Input label="Teléfono (Opcional)" type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
      <Button type="submit" className="w-full mt-6" variant="primary">Crear cuenta de paciente</Button>
    </form>
  );
};
