// //router index file
import { Router } from 'express';
import HomeRouter from './HomeRouter';

const router = Router();

router.use('/home', HomeRouter);

export default router;