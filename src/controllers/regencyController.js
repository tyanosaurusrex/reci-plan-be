import * as regencyService from '../services/regencyService.js';

export async function getRegencies(req, res) {
  try {
    const regencies = await regencyService.getAllRegencies();
    res.json(regencies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getRegencyById(req, res) {
  try {
    const regency = await regencyService.getRegencyById(req.params.id);
    if (!regency) return res.status(404).json({ error: 'Regency not found' });
    res.json(regency);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getRegencyByProvinceId(req, res) {
  try {
    const regency = await regencyService.getRegencyByProvinceId(req.params.province_id);
    if (!regency) return res.status(404).json({ error: 'Regency not found' });
    res.json(regency);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}