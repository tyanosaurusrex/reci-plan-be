import pool from '../db.js';

export async function insertRecipe(client, { product_id }) {
  const query = `
    INSERT INTO master_recipes (product_id)
    VALUES ($1)
    RETURNING *;
  `;
  const { rows } = await client.query(query, [product_id]);
  return rows[0];
}

export async function getAllRecipes() {
  const result = await pool.query(`SELECT mr.*, mp."name"
    FROM master_recipes mr 
    JOIN master_products mp on mp.id = mr.product_id `);
  return result.rows;
}

export async function getRecipeById(id) {
  const result = await pool.query(`select mr.*, mp."name" , mp."cost" 
    from master_recipes mr 
    join master_products mp on mp.id = mr.product_id 
    where mr.id = $1`, [id]);
  return result.rows[0];
}