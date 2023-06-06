import { Router } from 'express';
import CalendarController from '../controllers/CalendarController';

const router: Router = Router();

router.get('/event/date', CalendarController.getEventByDate);
router.get('/event/today', CalendarController.getEventToday);

export default router;