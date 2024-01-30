const express = require('express');//import express and create router
const router = express.Router();
const controller = require('../controllers/recipeController');
// define routes for recipes

router.get('/', controller.getRecipes);

router.post('/', controller.postRecipe);

router.get('/:id', controller.getRecipe);
router.get('/api/:id', controller.getAPIRecipe);
router.put('/:id', controller.putRecipe);

router.delete('/:id', controller.delRecipe );


module.exports = router;



