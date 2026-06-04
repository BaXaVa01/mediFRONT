// Pseudo Express Router implementation
import { AppointmentController } from './appointment.controller';
import { AppointmentService } from './appointment.service';
import { AppointmentRepository } from './appointment.repository';

const repo = new AppointmentRepository();
const service = new AppointmentService(repo);
const controller = new AppointmentController(service);

export const appointmentRoutes = (router: any) => {
  router.get('/appointments', controller.getAppointments);
  router.get('/appointments/:id', controller.getAppointmentDetails);
  router.patch('/appointments/:id/status', controller.updateStatus);
  router.patch('/appointments/:id/reschedule', controller.reschedule);
  router.post('/appointments/:id/reminder', controller.sendReminder);
  router.get('/schedule-requests/pending', controller.getPendingRequests);
  return router;
};