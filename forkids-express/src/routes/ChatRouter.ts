import { Router } from 'express';
import ChatController from '../controllers/ChatController';

const router: Router = Router();

router.get('/detailPlace/:placeId', ChatController.getPlaceById);
router.get('/detailParking/:parkingId', ChatController.getParkingById);
//router.get('/:cafeId', ChatController.getCafeById);

export default router;