import { DoctorProfileEntity } from './profile.entity';

export class ProfileRepository {
  private profiles: Map<string, DoctorProfileEntity> = new Map();

  async findByDoctorId(doctorId: string): Promise<DoctorProfileEntity | null> {
    return this.profiles.get(doctorId) || null;
  }

  async save(profile: DoctorProfileEntity): Promise<DoctorProfileEntity> {
    this.profiles.set(profile.id, profile);
    return profile;
  }
}