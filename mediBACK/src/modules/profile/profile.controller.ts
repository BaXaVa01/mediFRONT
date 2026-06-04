import { ProfileService } from './profile.service';

export class ProfileController {
  constructor(private readonly service: ProfileService) {}

  getProfile = async (req: any, res: any) => {
    try {
      const profile = await this.service.getProfile(req.user.id);
      res.status(200).json(profile);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };

  updateIdentity = async (req: any, res: any) => {
    try {
      const profile = await this.service.updateIdentity(req.user.id, req.body);
      res.status(200).json(profile);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };

  updateContact = async (req: any, res: any) => {
    try {
      const profile = await this.service.updateContact(req.user.id, req.body);
      res.status(200).json(profile);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };

  addEducation = async (req: any, res: any) => {
    try {
      const edu = await this.service.addEducation(req.user.id, req.body);
      res.status(201).json(edu);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };

  deleteEducation = async (req: any, res: any) => {
    try {
      await this.service.deleteEducation(req.user.id, req.params.id);
      res.status(204).send();
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };

  addExperience = async (req: any, res: any) => {
    try {
      const exp = await this.service.addExperience(req.user.id, req.body);
      res.status(201).json(exp);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };

  deleteExperience = async (req: any, res: any) => {
    try {
      await this.service.deleteExperience(req.user.id, req.params.id);
      res.status(204).send();
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };
}