import { create } from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
  user: any | null;
  login: (credentials: any) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  login: (credentials) => {
    set({ isAuthenticated: true, user: { name: 'Test User', email: credentials.email } });
  },
  logout: () => set({ isAuthenticated: false, user: null }),
}));
