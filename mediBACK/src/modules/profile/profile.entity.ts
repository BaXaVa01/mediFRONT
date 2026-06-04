export class DoctorProfileEntity {
  id: string;
  userId: string;
  professionalName: string;
  headline: string;
  biography: string;
  photoUrl: string;
  coverUrl: string;
  licenseNumber: string;
  yearsOfExperience: number;
  verified: boolean;
  languagesSpoken: string[];
  mainSpecialty: string;
  additionalSpecialties: string[];
  
  publicPhone: string;
  publicEmail: string;
  city: string;
  addressSummary: string;
  onlineConsultation: boolean;
  profileVisible: boolean;
  
  education: any[];
  experience: any[];

  constructor(data: Partial<DoctorProfileEntity>) {
    Object.assign(this, data);
    this.education = this.education || [];
    this.experience = this.experience || [];
  }
}