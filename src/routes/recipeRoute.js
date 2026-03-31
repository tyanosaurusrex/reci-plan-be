import express from 'express';
import { getRecipes, insertRecipe, getRecipeById } from '../controllers/recipeController.js';

const router = express.Router();

router.get('/', getRecipes);
router.get('/:id', getRecipeById);
router.post('/', insertRecipe);
// router.put('/:id', updateProduct);
// router.delete('/:id', deleteProduct);

export default router;
