export type ApptStatus = 'pending' | 'confirmed' | 'cancelled' | 'completed';
export type ApptModality = 'In-Person' | 'Online' | 'Home Visit';

export interface Appointment {
  id: string;
  patientId: string;
  patientName: string;
  patientAvatar?: string;
  service: string;
  startTime: Date;
  endTime: Date;
  modality: ApptModality;
  price: number;
  location: string;
  status: ApptStatus;
  notes?: string;
}

export interface ScheduleRequest {
  id: string;
  patientName: string;
  service: string;
  requestedDate: Date;
  modality: ApptModality;
}

const today = new Date();
today.setHours(0, 0, 0, 0);

export const mockAppointments: Appointment[] = [
  {
    id: 'apt_1',
    patientId: 'MF-8829',
    patientName: 'Arthur Morgan',
    patientAvatar: 'https://i.pravatar.cc/150?u=arthur',
    service: 'Consultation',
    startTime: new Date(today.getTime() + 9 * 60 * 60 * 1000), // 09:00
    endTime: new Date(today.getTime() + 9 * 60 * 60 * 1000 + 45 * 60 * 1000), // 09:45
    modality: 'In-Person',
    price: 120,
    location: 'MediFind Center - Suite 4B',
    status: 'confirmed',
  },
  {
    id: 'apt_2',
    patientId: 'MF-4412',
    patientName: 'Sadie Adler',
    patientAvatar: 'https://i.pravatar.cc/150?u=sadie',
    service: 'Follow-up',
    startTime: new Date(today.getTime() + 10.25 * 60 * 60 * 1000), // 10:15
    endTime: new Date(today.getTime() + 11.5 * 60 * 60 * 1000), // 11:30
    modality: 'In-Person',
    price: 80,
    location: 'MediFind Center - Suite 4B',
    status: 'pending',
  },
  {
    id: 'apt_3',
    patientId: 'MF-9911',
    patientName: 'John Marston',
    service: 'Checkup',
    startTime: new Date(today.getTime() + 14 * 60 * 60 * 1000), // 14:00
    endTime: new Date(today.getTime() + 15 * 60 * 60 * 1000), // 15:00
    modality: 'Online',
    price: 100,
    location: 'Google Meet',
    status: 'completed',
  },
  {
    id: 'apt_4',
    patientId: 'MF-3321',
    patientName: 'Dutch van der Linde',
    service: 'Emergency',
    startTime: new Date(today.getTime() + 24 * 60 * 60 * 1000 + 8 * 60 * 60 * 1000), // Tomorrow 08:00
    endTime: new Date(today.getTime() + 24 * 60 * 60 * 1000 + 9 * 60 * 60 * 1000), // Tomorrow 09:00
    modality: 'In-Person',
    price: 150,
    location: 'MediFind Center - Suite 4B',
    status: 'cancelled',
  }
];

export const mockRequests: ScheduleRequest[] = [
  {
    id: 'req_1',
    patientName: 'Hosea Matthews',
    service: 'Initial Consult',
    requestedDate: new Date(today.getTime() + 48 * 60 * 60 * 1000 + 10 * 60 * 60 * 1000),
    modality: 'Online'
  },
  {
    id: 'req_2',
    patientName: 'Lenny Summers',
    service: 'Follow-up',
    requestedDate: new Date(today.getTime() + 72 * 60 * 60 * 1000 + 15 * 60 * 60 * 1000),
    modality: 'In-Person'
  }
];