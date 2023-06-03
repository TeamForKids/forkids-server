import { Router } from 'express';
import HomeController from '../controllers/HomeController';
//import { body } from 'express-validator';

const router: Router = Router();

router.get('/', HomeController.getHome);

export default router;