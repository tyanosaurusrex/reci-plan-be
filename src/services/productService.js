import pool from '../db.js';

export async function getAllProducts() {
  const result = await pool.query('SELECT * FROM master_products ORDER BY id ASC');
  return result.rows;
}

export async function getProductById(id) {
  const result = await pool.query('SELECT * FROM master_products WHERE id = $1', [id]);
  return result.rows[0];
}

export async function createProduct(name, type, cost) {
  const result = await pool.query(
    'INSERT INTO master_products (name, type, cost, created_at) VALUES ($1, $2, $3, NOW()) RETURNING *',
    [name, type, cost]
  );
  return result.rows[0];
}

export async function updateProduct(id, name, type, cost) {
  const result = await pool.query(
    'UPDATE master_products SET name = $1, type = $2, cost = $3, updated_at = NOW() WHERE id = $4 RETURNING *',
    [name, type, cost, id]
  );
  return result.rows[0];
}

export async function deleteProduct(id) {
  const result = await pool.query(
    'UPDATE master_products SET is_active = FALSE WHERE id = $1 RETURNING *',
    [id]
  );
  return result.rows[0];
}

export async function createProductTrx(client, name, type, cost) {
  const result = await client.query(
    'INSERT INTO master_products (name, type, cost, created_at) VALUES ($1, $2, $3, NOW()) RETURNING *',
    [name, type, cost]
  );
  return result.rows[0];
}