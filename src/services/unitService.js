import pool from '../db.js';

export async function getAllUnits() {
  const result = await pool.query('SELECT * FROM master_units ORDER BY id ASC');
  return result.rows;
}

export async function getUnitById(id) {
  const result = await pool.query('SELECT * FROM master_units WHERE id = $1', [id]);
  return result.rows[0];
}

export async function createUnit(name, abbreviation, type, description) {
  const result = await pool.query(
    'INSERT INTO master_units (name, abbreviation, type, description, created_at) VALUES ($1, $2, $3, $4, NOW()) RETURNING *',
    [name, abbreviation, type, description]
  );
  return result.rows[0];
}

export async function updateUnit(id, name, abbreviation, type, description) {
  const result = await pool.query(
    'UPDATE master_units SET name = $1, abbreviation = $2, type = $3, description = $4, updated_at = NOW() WHERE id = $5 RETURNING *',
    [name, abbreviation, type, description, id]
  );
  return result.rows[0];
}

export async function deleteUnit(id) {
  const result = await pool.query(
    'UPDATE master_units SET is_active = FALSE WHERE id = $1 RETURNING *',
    [id]
  );
  return result.rows[0];
}
