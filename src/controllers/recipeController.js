import * as productService from '../services/productService.js';
import * as recipeService from '../services/recipeService.js';
import * as recipeDetailService from '../services/recipeDetailService.js';
import { withTransaction } from '../utils/transaction.js';
import { PRODUCT_TYPE } from '../constants/constants.js';

export async function getRecipes(req, res) {
  try {
    const recipes = await recipeService.getAllRecipes();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getRecipeById(req, res) {
  try {
    const recipe = await recipeService.getRecipeById(req.params.id);
    recipe.details = await recipeDetailService.getDetailsByRecipeId(req.params.id);
    res.json(recipe);
  } catch (err) {
    res.status(500).json({error: err.message})
  }
}

export async function insertRecipe(req, res) {
  const { name, details } = req.body;
  try {
    const recipe = await withTransaction(async (client) => {
      const addProduct = await productService.createProductTrx(client, name, PRODUCT_TYPE.FINISHED_GOOD);
      const product_id = addProduct.id;

      const addRecipe = await recipeService.insertRecipe(client, { product_id: product_id });
      const recipe_id = addRecipe.id;

      let insertDetails = [];
      for (const element of details) {           
        const addDetail = await recipeDetailService.insertRecipeDetail(client, {
          recipe_id: recipe_id, 
          product_id: element.product_id, 
          quantity: element.quantity, 
          unit_id: element.unit_id
        })
        insertDetails.push(addDetail);
      };
      addRecipe.details = insertDetails;

      return addRecipe;
    })

    res.status(201).json(recipe);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create recipe' });
  }
}

