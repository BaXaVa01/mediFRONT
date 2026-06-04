export type AppointmentStatus = 'pending' | 'confirmed' | 'cancelled' | 'completed';
export type AppointmentModality = 'In-Person' | 'Online' | 'Home Visit';

export class AppointmentEntity {
  id: string;
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
  status: AppointmentStatus;
  internalNotes?: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(data: Partial<AppointmentEntity>) {
    Object.assign(this, data);
    this.createdAt = this.createdAt || new Date();
    this.updatedAt = new Date();
  }
}

export class ScheduleRequestEntity {
  id: string;
  patientId: string;
  patientName: string;
  doctorId: string;
  serviceName: string;
  requestedDate: Date;
  modality: AppointmentModality;
  status: 'pending' | 'accepted' | 'rejected';
  createdAt: Date;

  constructor(data: Partial<ScheduleRequestEntity>) {
    Object.assign(this, data);
    this.status = this.status || 'pending';
    this.createdAt = this.createdAt || new Date();
  }
}