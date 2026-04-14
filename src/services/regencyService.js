import pool from '../db.js';

export async function getAllRegencies() {
  const result = await pool.query('SELECT * FROM master_regencies ORDER BY id ASC');
  return result.rows;
}

export async function getRegencyById(id) {
  const result = await pool.query('SELECT * FROM master_regencies WHERE id = $1', [id]);
  return result.rows[0];
}

export async function getRegencyByProvinceId(province_id) {
  const result = await pool.query('SELECT * FROM master_regencies WHERE province_id = $1', [province_id]);
  return result.rows;
}