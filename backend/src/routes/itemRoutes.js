import { Router } from 'express';
import { listItems, compareItems } from '../controllers/itemController.js';

const router = Router();

router.get('/', listItems);
router.post('/compare', compareItems);

export default router;
