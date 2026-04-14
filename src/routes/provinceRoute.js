import express from 'express';
import { getProvinces, getProvinceById } from '../controllers/provinceController.js';

const router = express.Router();

router.get('/', getProvinces);
router.get('/:id', getProvinceById);

export default router;