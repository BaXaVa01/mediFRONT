import { SettingsEntity } from './settings.entity';

// In-memory mock repository
export class SettingsRepository {
  private settings: Map<string, SettingsEntity> = new Map();

  async findByDoctorId(doctorId: string): Promise<SettingsEntity | null> {
    return this.settings.get(doctorId) || null;
  }

  async save(settings: SettingsEntity): Promise<SettingsEntity> {
    this.settings.set(settings.doctorId, settings);
    return settings;
  }
}