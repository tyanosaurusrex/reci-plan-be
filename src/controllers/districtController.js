import * as districtService from '../services/districtService.js';

export async function getDistricts(req, res) {
  try {
    const districts = await districtService.getAllDistricts();
    res.json(districts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getDistrictById(req, res) {
  try {
    const district = await districtService.getDistrictById(req.params.id);
    if (!district) return res.status(404).json({ error: 'District not found' });
    res.json(district);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getDistricyByRegencyId(req, res) {
  try {
    const district = await districtService.getDistrictByRegencyId(req.params.regency_id);
    if (!district) return res.status(404).json({ error: 'District not found' });
    res.json(district);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}