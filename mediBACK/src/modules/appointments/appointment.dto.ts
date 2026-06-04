import { AppointmentStatus, AppointmentModality } from './appointment.entity';

export interface CreateAppointmentDTO {
  doctorId: string;
  clinicId?: string;
  patientId: string;
  patientName: string;
  serviceId: string;
  serviceName: string;
  startTime: Date;
  endTime: Date;
  modality: AppointmentModality;
  location: string;
  price: number;
}

export interface UpdateAppointmentStatusDTO {
  status: AppointmentStatus;
}

export interface RescheduleAppointmentDTO {
  startTime: Date;
  endTime: Date;
}

export interface AppointmentQueryDTO {
  doctorId?: string;
  clinicId?: string;
  from?: string; // ISO Date
  to?: string;   // ISO Date
}