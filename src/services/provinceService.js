import pool from '../db.js';

export async function getAllProvinces() {
  const result = await pool.query('SELECT * FROM master_provinces ORDER BY id ASC');
  return result.rows;
}

export async function getProvinceById(id) {
  const result = await pool.query('SELECT * FROM master_provinces WHERE id = $1', [id]);
  return result.rows[0];
}