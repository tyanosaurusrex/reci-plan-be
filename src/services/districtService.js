import pool from '../db.js';

export async function getAllDistricts() {
  const result = await pool.query('SELECT * FROM master_districts ORDER BY id ASC');
  return result.rows;
}

export async function getDistrictById(id) {
  const result = await pool.query('SELECT * FROM master_districts WHERE id = $1', [id]);
  return result.rows[0];
}

export async function getDistrictByRegencyId(regency_id) {
  const result = await pool.query('SELECT * FROM master_districts WHERE regency_id = $1', [regency_id]);
  return result.rows;
}