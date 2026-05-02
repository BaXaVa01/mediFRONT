import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { ShieldCheck, User, Phone } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  const [role, setRole] = useState<'patient' | 'doctor'>('patient');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    phone: '',
    agreeToTerms: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreeToTerms) {
      alert('Debes aceptar los términos y condiciones');
      return;
    }
    // Mock registration logic: just login and redirect
    login({ email: formData.email });
    navigate('/');
  };

  return (
    <div className="flex min-h-[calc(100vh-64px)] items-center justify-center p-4 bg-[#FDF9F3]">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl border border-[#E6CBB8]/20">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#1C365C]">Join MediFind</h1>
          <p className="mt-2 text-[#4A628A] text-sm">Begin your journey toward personalized healthcare today.</p>
        </div>

        {/* Role Selection */}
        <div className="flex p-1 bg-[#FDF9F3] rounded-xl mb-8 border border-[#E6CBB8]/30">
          <button
            onClick={() => setRole('patient')}
            className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${
              role === 'patient' 
                ? 'bg-white text-[#5A9BD4] shadow-sm' 
                : 'text-[#4A628A] hover:text-[#5A9BD4]'
            }`}
          >
            I am a Patient
          </button>
          <button
            onClick={() => setRole('doctor')}
            className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${
              role === 'doctor' 
                ? 'bg-white text-[#5A9BD4] shadow-sm' 
                : 'text-[#4A628A] hover:text-[#5A9BD4]'
            }`}
          >
            I am a Doctor/Clinic
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="FULL NAME"
            placeholder={role === 'doctor' ? 'Dr. Jane Smith' : 'John Doe'}
            required
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          />
          
          <Input
            label="EMAIL ADDRESS"
            type="email"
            placeholder="name@example.com"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />

          <div className="grid grid-cols-2 gap-4">
            <Input
              label="PASSWORD"
              type="password"
              placeholder="••••••••"
              required
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
            <Input
              label="PHONE NUMBER"
              type="tel"
              placeholder="+1 (555) 000-0000"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>

          <div className="flex items-start gap-3 py-2">
            <input
              type="checkbox"
              id="terms"
              className="mt-1 h-4 w-4 rounded border-gray-300 text-[#5A9BD4] focus:ring-[#5A9BD4]"
              checked={formData.agreeToTerms}
              onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
            />
            <label htmlFor="terms" className="text-xs text-[#4A628A] leading-tight">
              I agree to the <a href="#" className="text-[#5A9BD4] font-semibold">Terms of Service</a> and <a href="#" className="text-[#5A9BD4] font-semibold">Privacy Policy</a>.
            </label>
          </div>

          <Button type="submit" className="w-full h-12 text-lg mt-4 shadow-lg" variant="primary">
            Create Account
          </Button>
        </form>

        <div className="mt-8 text-center text-sm text-[#4A628A]">
          Already have an account?{' '}
          <Link to="/login" className="font-bold text-[#1C365C] hover:underline">
            Login
          </Link>
        </div>
      </div>

      {/* Trust Badges bottom */}
      <div className="absolute bottom-8 left-0 right-0 hidden md:flex justify-center gap-12 opacity-40">
        <div className="flex items-center gap-2 text-xs font-bold text-[#1C365C]">
          <ShieldCheck className="h-4 w-4" /> SECURE DATA
        </div>
        <div className="flex items-center gap-2 text-xs font-bold text-[#1C365C]">
          <User className="h-4 w-4" /> VERIFIED DOCTORS
        </div>
        <div className="flex items-center gap-2 text-xs font-bold text-[#1C365C]">
          <Phone className="h-4 w-4" /> 24/7 SUPPORT
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
