import { Router } from 'express';
import RegionController from '../controllers/RegionController';

const router: Router = Router();

router.get('/:guName', RegionController.getPlaceByGu);

export default router;