import { Router } from 'express';
import HomeRouter from './HomeRouter';
import RegionRouter from './RegionRouter'

const router = Router();

router.use('/home', HomeRouter);

router.use('/region', RegionRouter)

export default router;