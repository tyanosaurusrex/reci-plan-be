import express from 'express';
import { getDistricts, getDistrictById, getDistricyByRegencyId } from '../controllers/districtController.js';

const router = express.Router();

router.get('/', getDistricts);
router.get('/:id', getDistrictById);
router.get('/regency/:regency_id', getDistricyByRegencyId);

export default router;
