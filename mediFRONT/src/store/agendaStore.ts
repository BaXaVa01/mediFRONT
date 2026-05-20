import { create } from 'zustand';
import type { Appointment } from '../types/doctor';

interface AgendaState {
  currentDate: Date;
  selectedAppointment: Appointment | null;
  activeFilter: string;
  viewMode: 'daily' | 'weekly';
  setCurrentDate: (date: Date) => void;
  setSelectedAppointment: (apt: Appointment | null) => void;
  setActiveFilter: (filter: string) => void;
  setViewMode: (mode: 'daily' | 'weekly') => void;
}

export const useAgendaStore = create<AgendaState>((set) => ({
  currentDate: new Date(),
  selectedAppointment: null,
  activeFilter: 'Hoy',
  viewMode: 'daily',
  setCurrentDate: (date) => set({ currentDate: date }),
  setSelectedAppointment: (apt) => set({ selectedAppointment: apt }),
  setActiveFilter: (filter) => set({ activeFilter: filter }),
  setViewMode: (mode) => set({ viewMode: mode }),
}));
