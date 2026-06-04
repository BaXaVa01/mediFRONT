export class SettingsEntity {
  doctorId: string;
  schedule: Record<string, any>;
  blocks: any[];
  services: any[];
  reminders: any;
  rules: any;
  updatedAt: Date;

  constructor(data: Partial<SettingsEntity>) {
    Object.assign(this, data);
    this.updatedAt = new Date();
  }
}