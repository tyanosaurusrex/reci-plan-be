import express from 'express';
import { getRegencies, getRegencyById, getRegencyByProvinceId } from '../controllers/regencyController.js';

const router = express.Router();

router.get('/', getRegencies);
router.get('/:id', getRegencyById);
router.get('/province/:province_id', getRegencyByProvinceId);

export default router;
