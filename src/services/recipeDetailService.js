import pool from '../db.js';

export async function insertRecipeDetail(client, { recipe_id, product_id, quantity, unit_id }) {
  const query = `
    INSERT INTO master_recipe_details (recipe_id, material_id, quantity, unit_id, created_at)
    VALUES ($1, $2, $3, $4, NOW())
    RETURNING *;
  `;
  const { rows } = await client.query(query, [recipe_id, product_id, quantity, unit_id]);
  return rows[0];
}

export async function getDetailsByRecipeId(recipe_id) {
  const result = await pool.query(`SELECT mrd.*, mp."name" 
    FROM master_recipe_details mrd 
    join master_products mp on mp.id = mrd.material_id 
    WHERE mrd.recipe_id = $1 `, [recipe_id]);
  return result.rows[0];
}
