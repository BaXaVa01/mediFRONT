export interface UpdateScheduleDTO {
  monday: any;
  tuesday: any;
  wednesday: any;
  thursday: any;
  friday: any;
  saturday: any;
  sunday: any;
}

export interface CreateBlockDTO {
  date: Date;
  allDay: boolean;
  startTime?: string;
  endTime?: string;
  reason: string;
}

export interface CreateServiceDTO {
  name: string;
  description: string;
  price: number;
  duration: number;
  modality: 'In-Person' | 'Online' | 'Both';
  visible: boolean;
  confirmationMode: 'Automatic' | 'Manual';
}

export interface UpdateRemindersDTO {
  patient: any;
  doctor: any;
}

export interface UpdateRulesDTO {
  minTimeBeforeBooking: number;
  maxDaysInAdvance: number;
  cancellationLimit: '12h' | '24h';
  allowReschedule: boolean;
  rescheduleLimit: '12h' | '24h';
  autoConfirm: boolean;
  allowOnline: boolean;
  allowPatientCancel: boolean;
}