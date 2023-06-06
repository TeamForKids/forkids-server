import { Router } from 'express';
import CalendarController from '../controllers/CalendarController';

const router: Router = Router();

router.get('/event/date', CalendarController.getEventByDate);

export default router;