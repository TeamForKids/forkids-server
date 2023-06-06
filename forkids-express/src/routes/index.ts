import { Router } from 'express';
import HomeRouter from './HomeRouter';
import RegionRouter from './RegionRouter';
import CalendarRouter from './CalendarRouter';
import ChatRouter from './ChatRouter';

const router = Router();

router.use('/home', HomeRouter);

router.use('/region', RegionRouter);

router.use('/calendar', CalendarRouter);

router.use('/chat', ChatRouter);

export default router;