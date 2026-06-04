export interface UpdateIdentityDTO {
  professionalName?: string;
  headline?: string;
  biography?: string;
  yearsOfExperience?: number;
  languagesSpoken?: string[];
  mainSpecialty?: string;
  additionalSpecialties?: string[];
}

export interface UpdateContactDTO {
  publicPhone?: string;
  publicEmail?: string;
  city?: string;
  addressSummary?: string;
  onlineConsultation?: boolean;
  profileVisible?: boolean;
}

export interface CreateEducationDTO {
  title: string;
  institution: string;
  startYear: number;
  endYear: number | null;
  description?: string;
}

export interface CreateExperienceDTO {
  role: string;
  institution: string;
  startYear: number;
  endYear: number | null;
  description?: string;
}