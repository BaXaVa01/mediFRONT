import { SettingsService } from './settings.service';

export class SettingsController {
  constructor(private readonly service: SettingsService) {}

  getSchedule = async (req: any, res: any) => {
    try {
      const result = await this.service.getSchedule(req.user.id);
      res.status(200).json(result);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };

  updateSchedule = async (req: any, res: any) => {
    try {
      const result = await this.service.updateSchedule(req.user.id, req.body);
      res.status(200).json(result.schedule);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };

  getBlocks = async (req: any, res: any) => {
    try {
      const result = await this.service.getBlocks(req.user.id);
      res.status(200).json(result);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };

  createBlock = async (req: any, res: any) => {
    try {
      const result = await this.service.createBlock(req.user.id, req.body);
      res.status(201).json(result);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };

  deleteBlock = async (req: any, res: any) => {
    try {
      await this.service.deleteBlock(req.user.id, req.params.id);
      res.status(204).send();
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };

  getServices = async (req: any, res: any) => {
    try {
      const result = await this.service.getServices(req.user.id);
      res.status(200).json(result);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };

  createService = async (req: any, res: any) => {
    try {
      const result = await this.service.createService(req.user.id, req.body);
      res.status(201).json(result);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };

  deleteService = async (req: any, res: any) => {
    try {
      await this.service.deleteService(req.user.id, req.params.id);
      res.status(204).send();
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };

  updateReminders = async (req: any, res: any) => {
    try {
      const result = await this.service.updateReminders(req.user.id, req.body);
      res.status(200).json(result.reminders);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };

  updateRules = async (req: any, res: any) => {
    try {
      const result = await this.service.updateRules(req.user.id, req.body);
      res.status(200).json(result.rules);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };
}