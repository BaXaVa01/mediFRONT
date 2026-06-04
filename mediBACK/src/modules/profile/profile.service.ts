import { ProfileRepository } from './profile.repository';
import { DoctorProfileEntity } from './profile.entity';
import { UpdateIdentityDTO, UpdateContactDTO, CreateEducationDTO, CreateExperienceDTO } from './profile.dto';

export class ProfileService {
  constructor(private readonly repository: ProfileRepository) {}

  private async getOrCreateProfile(doctorId: string): Promise<DoctorProfileEntity> {
    let profile = await this.repository.findByDoctorId(doctorId);
    if (!profile) {
      profile = new DoctorProfileEntity({
        id: doctorId,
        userId: 'usr_mock',
        professionalName: 'Dr. Mock',
        headline: '',
        biography: '',
        photoUrl: '',
        coverUrl: '',
        licenseNumber: 'MOCK-123',
        yearsOfExperience: 0,
        verified: false,
        languagesSpoken: [],
        mainSpecialty: '',
        additionalSpecialties: [],
        publicPhone: '',
        publicEmail: '',
        city: '',
        addressSummary: '',
        onlineConsultation: false,
        profileVisible: false,
      });
      await this.repository.save(profile);
    }
    return profile;
  }

  async getProfile(doctorId: string) {
    return this.getOrCreateProfile(doctorId);
  }

  async updateIdentity(doctorId: string, dto: UpdateIdentityDTO) {
    const profile = await this.getOrCreateProfile(doctorId);
    Object.assign(profile, dto);
    return this.repository.save(profile);
  }

  async updateContact(doctorId: string, dto: UpdateContactDTO) {
    const profile = await this.getOrCreateProfile(doctorId);
    Object.assign(profile, dto);
    return this.repository.save(profile);
  }

  async addEducation(doctorId: string, dto: CreateEducationDTO) {
    const profile = await this.getOrCreateProfile(doctorId);
    const newEdu = { id: `edu_${Date.now()}`, doctorId, ...dto };
    profile.education.push(newEdu);
    await this.repository.save(profile);
    return newEdu;
  }

  async deleteEducation(doctorId: string, eduId: string) {
    const profile = await this.getOrCreateProfile(doctorId);
    profile.education = profile.education.filter(e => e.id !== eduId);
    return this.repository.save(profile);
  }

  async addExperience(doctorId: string, dto: CreateExperienceDTO) {
    const profile = await this.getOrCreateProfile(doctorId);
    const newExp = { id: `exp_${Date.now()}`, doctorId, ...dto };
    profile.experience.push(newExp);
    await this.repository.save(profile);
    return newExp;
  }

  async deleteExperience(doctorId: string, expId: string) {
    const profile = await this.getOrCreateProfile(doctorId);
    profile.experience = profile.experience.filter(e => e.id !== expId);
    return this.repository.save(profile);
  }
}