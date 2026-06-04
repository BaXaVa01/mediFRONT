import { AppointmentRepository } from './appointment.repository';
import { AppointmentEntity, AppointmentStatus } from './appointment.entity';
import { AppointmentQueryDTO, RescheduleAppointmentDTO, UpdateAppointmentStatusDTO } from './appointment.dto';

export class AppointmentService {
  constructor(private readonly repository: AppointmentRepository) {}

  async getAppointments(query: AppointmentQueryDTO) {
    if (!query.doctorId || !query.from || !query.to) {
      throw new Error('Missing required query parameters');
    }
    return this.repository.findByDateRange(
      query.doctorId,
      new Date(query.from),
      new Date(query.to)
    );
  }

  async getAppointmentById(id: string) {
    const appt = await this.repository.findById(id);
    if (!appt) throw new Error('Appointment not found');
    return appt;
  }

  async updateStatus(id: string, dto: UpdateAppointmentStatusDTO) {
    const appt = await this.getAppointmentById(id);
    appt.status = dto.status;
    appt.updatedAt = new Date();
    return this.repository.save(appt);
  }

  async reschedule(id: string, dto: RescheduleAppointmentDTO) {
    const appt = await this.getAppointmentById(id);
    appt.startTime = new Date(dto.startTime);
    appt.endTime = new Date(dto.endTime);
    appt.updatedAt = new Date();
    return this.repository.save(appt);
  }

  async sendReminder(id: string) {
    const appt = await this.getAppointmentById(id);
    // Mock sending SMS/Email
    console.log(`Reminder sent to ${appt.patientName} for appointment at ${appt.startTime}`);
    return { success: true, message: 'Reminder sent' };
  }

  async getPendingRequests(doctorId: string) {
    return this.repository.findPendingRequests(doctorId);
  }
}