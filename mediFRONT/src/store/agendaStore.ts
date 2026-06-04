import { create } from 'zustand';
import type { Appointment, ScheduleRequest } from '../utils/agendaMockData';
import { agendaService } from '../services/agendaService';

interface AgendaState {
  currentDate: Date;
  viewMode: 'daily' | 'weekly';
  activeFilters: string[];
  appointments: Appointment[];
  pendingRequests: ScheduleRequest[];
  selectedAppointment: Appointment | null;
  isPendingDrawerOpen: boolean;
  isRescheduleModalOpen: boolean;
  
  // Actions
  setCurrentDate: (date: Date) => void;
  setViewMode: (mode: 'daily' | 'weekly') => void;
  toggleFilter: (filter: string) => void;
  setSelectedAppointment: (apt: Appointment | null) => void;
  setPendingDrawerOpen: (open: boolean) => void;
  setRescheduleModalOpen: (open: boolean) => void;
  
  // Data actions
  fetchData: () => Promise<void>;
  updateStatus: (id: string, status: Appointment['status']) => Promise<void>;
  reschedule: (id: string, start: Date, end: Date) => Promise<void>;
  acceptRequest: (id: string) => Promise<void>;
  rejectRequest: (id: string) => Promise<void>;
  proposeTime: (id: string, newDate: Date) => Promise<void>;
}

export const useAgendaStore = create<AgendaState>((set, get) => ({
  currentDate: new Date(),
  viewMode: 'weekly',
  activeFilters: ['confirmed', 'pending', 'In-Person', 'Online'], // default all active
  appointments: [],
  pendingRequests: [],
  selectedAppointment: null,
  isPendingDrawerOpen: false,
  isRescheduleModalOpen: false,

  setCurrentDate: (date) => set({ currentDate: date }),
  setViewMode: (mode) => set({ viewMode: mode }),
  toggleFilter: (filter) => {
    const filters = get().activeFilters;
    set({ activeFilters: filters.includes(filter) ? filters.filter(f => f !== filter) : [...filters, filter] });
  },
  setSelectedAppointment: (apt) => set({ selectedAppointment: apt }),
  setPendingDrawerOpen: (open) => set({ isPendingDrawerOpen: open }),
  setRescheduleModalOpen: (open) => set({ isRescheduleModalOpen: open }),

  fetchData: async () => {
    const [apts, reqs] = await Promise.all([
      agendaService.getAppointments(new Date(), new Date()), 
      agendaService.getPendingRequests()
    ]);
    set({ appointments: apts, pendingRequests: reqs });
  },

  updateStatus: async (id, status) => {
    await agendaService.updateStatus(id, status);
    set((state) => ({
      appointments: state.appointments.map(a => a.id === id ? { ...a, status } : a),
      selectedAppointment: state.selectedAppointment?.id === id ? { ...state.selectedAppointment, status } : state.selectedAppointment
    }));
  },

  reschedule: async (id, start, end) => {
    await agendaService.reschedule(id, start, end);
    set((state) => ({
      appointments: state.appointments.map(a => a.id === id ? { ...a, startTime: start, endTime: end } : a),
      selectedAppointment: state.selectedAppointment?.id === id ? { ...state.selectedAppointment, startTime: start, endTime: end } : state.selectedAppointment
    }));
  },

  acceptRequest: async (id) => {
    await new Promise(res => setTimeout(res, 400));
    set((state) => ({
      pendingRequests: state.pendingRequests.filter(req => req.id !== id)
    }));
  },

  rejectRequest: async (id) => {
    await new Promise(res => setTimeout(res, 400));
    set((state) => ({
      pendingRequests: state.pendingRequests.filter(req => req.id !== id)
    }));
  },

  proposeTime: async (id, _newDate) => {
    await new Promise(res => setTimeout(res, 400));
    set((state) => ({
      pendingRequests: state.pendingRequests.filter(req => req.id !== id)
    }));
  }
}));