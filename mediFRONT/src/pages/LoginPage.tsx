import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { LogIn } from 'lucide-react';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();
  const location = useLocation();

  const from = (location.state as any)?.from?.pathname || '/';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In mock, any email/password works
    login({ email, password });
    navigate(from, { replace: true });
  };

  return (
    <div className="flex min-h-[calc(100vh-64px)] items-center justify-center p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl border border-[#E6CBB8]/30">
        <div className="mb-8 flex flex-col items-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#5A9BD4]/10">
            <LogIn className="h-8 w-8 text-[#5A9BD4]" />
          </div>
          <h1 className="text-3xl font-bold text-[#1C365C]">Bienvenido</h1>
          <p className="mt-2 text-[#4A628A]">Ingresa tus credenciales para continuar</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            label="Correo electrónico"
            type="email"
            placeholder="ejemplo@medifind.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Contraseña"
            type="password"
            placeholder="••••••••"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" className="w-full h-12 text-lg" variant="primary">
            Iniciar Sesión
          </Button>
        </form>

        <p className="mt-8 text-center text-sm text-[#4A628A]">
          ¿No tienes cuenta?{' '}
          <button 
            onClick={() => navigate('/registro')}
            className="font-semibold text-[#5A9BD4] hover:underline"
          >
            Regístrate aquí
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
