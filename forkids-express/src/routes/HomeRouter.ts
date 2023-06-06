import { Router } from 'express';
import HomeController from '../controllers/HomeController';

const router: Router = Router();

router.get('/', HomeController.getHome);

export default router;