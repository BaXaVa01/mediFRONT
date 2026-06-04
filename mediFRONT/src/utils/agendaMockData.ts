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

// Current date for the app is 2026-06-04
const today = new Date(2026, 5, 4); // June is index 5
today.setHours(0, 0, 0, 0);

const oneWeekBefore = new Date(today);
oneWeekBefore.setDate(today.getDate() - 7);

const oneWeekAfter = new Date(today);
oneWeekAfter.setDate(today.getDate() + 7);

export const mockAppointments: Appointment[] = [
  // TODAY: 2026-06-04
  {
    id: 'apt_today_1',
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
    id: 'apt_today_2',
    patientId: 'MF-4412',
    patientName: 'Sadie Adler',
    patientAvatar: 'https://i.pravatar.cc/150?u=sadie',
    service: 'Follow-up',
    startTime: new Date(today.getTime() + 10.5 * 60 * 60 * 1000), // 10:30
    endTime: new Date(today.getTime() + 11.5 * 60 * 60 * 1000), // 11:30
    modality: 'In-Person',
    price: 80,
    location: 'MediFind Center - Suite 4B',
    status: 'pending',
  },
  {
    id: 'apt_today_3',
    patientId: 'MF-9911',
    patientName: 'John Marston',
    service: 'Checkup',
    startTime: new Date(today.getTime() + 14 * 60 * 60 * 1000), // 14:00
    endTime: new Date(today.getTime() + 15.5 * 60 * 60 * 1000), // 15:30
    modality: 'Online',
    price: 100,
    location: 'Google Meet',
    status: 'confirmed',
  },

  // ONE WEEK BEFORE: 2026-05-28
  {
    id: 'apt_prev_1',
    patientId: 'MF-1122',
    patientName: 'Charles Smith',
    service: 'Therapy',
    startTime: new Date(oneWeekBefore.getTime() + 11 * 60 * 60 * 1000), // 11:00
    endTime: new Date(oneWeekBefore.getTime() + 12 * 60 * 60 * 1000), // 12:00
    modality: 'In-Person',
    price: 90,
    location: 'MediFind Center - Suite 4B',
    status: 'completed',
  },

  // ONE WEEK AFTER: 2026-06-11
  {
    id: 'apt_next_1',
    patientId: 'MF-3344',
    patientName: 'Bill Williamson',
    service: 'Surgery Prep',
    startTime: new Date(oneWeekAfter.getTime() + 8 * 60 * 60 * 1000), // 08:00
    endTime: new Date(oneWeekAfter.getTime() + 10 * 60 * 60 * 1000), // 10:00
    modality: 'In-Person',
    price: 200,
    location: 'MediFind Center - OR 1',
    status: 'confirmed',
  },
  {
    id: 'apt_next_2',
    patientId: 'MF-5566',
    patientName: 'Javier Escuella',
    service: 'Quick Review',
    startTime: new Date(oneWeekAfter.getTime() + 15 * 60 * 60 * 1000), // 15:00
    endTime: new Date(oneWeekAfter.getTime() + 15.5 * 60 * 60 * 1000), // 15:30
    modality: 'Online',
    price: 50,
    location: 'Zoom',
    status: 'confirmed',
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
