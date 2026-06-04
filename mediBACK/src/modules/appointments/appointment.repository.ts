import { AppointmentEntity, ScheduleRequestEntity } from './appointment.entity';

// In-memory mock repository
export class AppointmentRepository {
  private appointments: Map<string, AppointmentEntity> = new Map();
  private requests: Map<string, ScheduleRequestEntity> = new Map();

  async findByDateRange(doctorId: string, from: Date, to: Date): Promise<AppointmentEntity[]> {
    const results: AppointmentEntity[] = [];
    for (const appt of this.appointments.values()) {
      if (appt.doctorId === doctorId && appt.startTime >= from && appt.endTime <= to) {
        results.push(appt);
      }
    }
    return results;
  }

  async findById(id: string): Promise<AppointmentEntity | null> {
    return this.appointments.get(id) || null;
  }

  async save(appointment: AppointmentEntity): Promise<AppointmentEntity> {
    this.appointments.set(appointment.id, appointment);
    return appointment;
  }

  async findPendingRequests(doctorId: string): Promise<ScheduleRequestEntity[]> {
    const results: ScheduleRequestEntity[] = [];
    for (const req of this.requests.values()) {
      if (req.doctorId === doctorId && req.status === 'pending') {
        results.push(req);
      }
    }
    return results;
  }
}