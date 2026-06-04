import { SettingsRepository } from './settings.repository';
import { SettingsEntity } from './settings.entity';
import { UpdateScheduleDTO, CreateBlockDTO, CreateServiceDTO, UpdateRemindersDTO, UpdateRulesDTO } from './settings.dto';

export class SettingsService {
  constructor(private readonly repository: SettingsRepository) {}

  private async getOrCreateSettings(doctorId: string): Promise<SettingsEntity> {
    let settings = await this.repository.findByDoctorId(doctorId);
    if (!settings) {
      settings = new SettingsEntity({
        doctorId,
        schedule: {},
        blocks: [],
        services: [],
        reminders: {},
        rules: {}
      });
      await this.repository.save(settings);
    }
    return settings;
  }

  async getSchedule(doctorId: string) {
    const settings = await this.getOrCreateSettings(doctorId);
    return settings.schedule;
  }

  async updateSchedule(doctorId: string, dto: UpdateScheduleDTO) {
    const settings = await this.getOrCreateSettings(doctorId);
    settings.schedule = dto;
    return this.repository.save(settings);
  }

  async getBlocks(doctorId: string) {
    const settings = await this.getOrCreateSettings(doctorId);
    return settings.blocks;
  }

  async createBlock(doctorId: string, dto: CreateBlockDTO) {
    const settings = await this.getOrCreateSettings(doctorId);
    const newBlock = { id: `blk_${Date.now()}`, ...dto };
    settings.blocks.push(newBlock);
    await this.repository.save(settings);
    return newBlock;
  }

  async deleteBlock(doctorId: string, blockId: string) {
    const settings = await this.getOrCreateSettings(doctorId);
    settings.blocks = settings.blocks.filter((b: any) => b.id !== blockId);
    return this.repository.save(settings);
  }

  async getServices(doctorId: string) {
    const settings = await this.getOrCreateSettings(doctorId);
    return settings.services;
  }

  async createService(doctorId: string, dto: CreateServiceDTO) {
    const settings = await this.getOrCreateSettings(doctorId);
    const newService = { id: `srv_${Date.now()}`, ...dto };
    settings.services.push(newService);
    await this.repository.save(settings);
    return newService;
  }

  async deleteService(doctorId: string, serviceId: string) {
    const settings = await this.getOrCreateSettings(doctorId);
    settings.services = settings.services.filter((s: any) => s.id !== serviceId);
    return this.repository.save(settings);
  }

  async updateReminders(doctorId: string, dto: UpdateRemindersDTO) {
    const settings = await this.getOrCreateSettings(doctorId);
    settings.reminders = dto;
    return this.repository.save(settings);
  }

  async updateRules(doctorId: string, dto: UpdateRulesDTO) {
    const settings = await this.getOrCreateSettings(doctorId);
    settings.rules = dto;
    return this.repository.save(settings);
  }
}