import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';
import { ProfileRepository } from './profile.repository';

const repo = new ProfileRepository();
const service = new ProfileService(repo);
const controller = new ProfileController(service);

const authMiddleware = (req: any, res: any, next: any) => {
  req.user = { id: 'doc_123' };
  next();
};

export const profileRoutes = (router: any) => {
  router.use('/doctors/me', authMiddleware);
  
  router.get('/doctors/me/profile', controller.getProfile);
  router.patch('/doctors/me/profile', controller.updateIdentity); // Simplification for mock
  router.patch('/doctors/me/contact', controller.updateContact); // Added for separation

  router.post('/doctors/me/education', controller.addEducation);
  router.delete('/doctors/me/education/:id', controller.deleteEducation);

  router.post('/doctors/me/experience', controller.addExperience);
  router.delete('/doctors/me/experience/:id', controller.deleteExperience);

  return router;
};