import { Router } from 'express';
import HomeRouter from './HomeRouter';
import RegionRouter from './RegionRouter';
import CalendarRouter from './CalendarRouter';

const router = Router();

router.use('/home', HomeRouter);

router.use('/region', RegionRouter);

router.use('/calendar', CalendarRouter);

export default router;