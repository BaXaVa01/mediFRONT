import { SettingsController } from './settings.controller';
import { SettingsService } from './settings.service';
import { SettingsRepository } from './settings.repository';

const repo = new SettingsRepository();
const service = new SettingsService(repo);
const controller = new SettingsController(service);

// Mock middleware to simulate logged in doctor
const authMiddleware = (req: any, res: any, next: any) => {
  req.user = { id: 'doc_123' };
  next();
};

export const settingsRoutes = (router: any) => {
  router.use('/doctor/settings', authMiddleware);
  
  router.get('/doctor/settings/schedule', controller.getSchedule);
  router.put('/doctor/settings/schedule', controller.updateSchedule);
  
  router.get('/doctor/settings/blocks', controller.getBlocks);
  router.post('/doctor/settings/blocks', controller.createBlock);
  router.delete('/doctor/settings/blocks/:id', controller.deleteBlock);
  
  router.get('/doctor/settings/services', controller.getServices);
  router.post('/doctor/settings/services', controller.createService);
  router.delete('/doctor/settings/services/:id', controller.deleteService);
  
  router.put('/doctor/settings/reminders', controller.updateReminders);
  
  router.put('/doctor/settings/rules', controller.updateRules);
  
  return router;
};