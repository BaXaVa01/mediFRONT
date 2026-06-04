import { AppointmentService } from './appointment.service';
// Note: using pseudo-types for Express Request/Response for mock illustration

export class AppointmentController {
  constructor(private readonly service: AppointmentService) {}

  getAppointments = async (req: any, res: any) => {
    try {
      const appointments = await this.service.getAppointments(req.query);
      res.status(200).json(appointments);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };

  getAppointmentDetails = async (req: any, res: any) => {
    try {
      const appt = await this.service.getAppointmentById(req.params.id);
      res.status(200).json(appt);
    } catch (error: any) {
      res.status(404).json({ error: error.message });
    }
  };

  updateStatus = async (req: any, res: any) => {
    try {
      const updated = await this.service.updateStatus(req.params.id, req.body);
      res.status(200).json(updated);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };

  reschedule = async (req: any, res: any) => {
    try {
      const updated = await this.service.reschedule(req.params.id, req.body);
      res.status(200).json(updated);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };

  sendReminder = async (req: any, res: any) => {
    try {
      const result = await this.service.sendReminder(req.params.id);
      res.status(200).json(result);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };

  getPendingRequests = async (req: any, res: any) => {
    try {
      const requests = await this.service.getPendingRequests(req.query.doctorId);
      res.status(200).json(requests);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };
}