import * as provinceService from '../services/provinceService.js';

export async function getProvinces(req, res) {
  try {
    const provinces = await provinceService.getAllProvinces();
    res.json(provinces);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getProvinceById(req, res) {
  try {
    const province = await provinceService.getProvinceById(req.params.id);
    if (!province) return res.status(404).json({ error: 'Province not found' });
    res.json(province);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
