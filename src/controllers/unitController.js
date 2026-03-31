import * as unitService from '../services/unitService.js';

export async function getUnits(req, res) {
  try {
    const units = await unitService.getAllUnits();
    res.json(units);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getUnitById(req, res) {
  try {
    const unit = await unitService.getUnitById(req.params.id);
    if (!unit) return res.status(404).json({ error: 'Unit not found' });
    res.json(unit);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function createUnit(req, res) {
  try {
    const { name, abbreviation, type, description } = req.body;
    const newUnit = await unitService.createUnit(name, abbreviation, type, description);
    res.status(201).json(newUnit);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

export async function updateUnit(req, res) {
  try {
    const { name, abbreviation, type, description } = req.body;
    const updated = await unitService.updateUnit(req.params.id, name, abbreviation, type, description);
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function deleteUnit(req, res) {
  try {
    await unitService.deleteUnit(req.params.id);
    res.json({ message: 'Unit deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
