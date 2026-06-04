import { mockAppointments, mockRequests } from '../utils/agendaMockData';
import type { Appointment, ScheduleRequest } from '../utils/agendaMockData';

// Frontend Service simulating backend calls
class AgendaService {
  async getAppointments(_start: Date, _end: Date): Promise<Appointment[]> {
    return new Promise((resolve) => setTimeout(() => resolve([...mockAppointments]), 300));
  }

  async getPendingRequests(): Promise<ScheduleRequest[]> {
    return new Promise((resolve) => setTimeout(() => resolve([...mockRequests]), 300));
  }

  async updateStatus(_id: string, _status: Appointment['status']): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, 300));
  }

  async reschedule(_id: string, _newStart: Date, _newEnd: Date): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, 300));
  }

  async sendReminder(_id: string): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, 300));
  }
}

export const agendaService = new AgendaService();