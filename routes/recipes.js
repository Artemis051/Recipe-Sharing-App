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

//router.post('/search-recipes', controller.searchRecipes); // this is for getting recipes from the API

module.exports = router;
// const express = require('express');//import express and create router
// const router = express.Router();
// const controller = require('../controllers/recipeController');
// // define routes for recipes

// router.get('/api', controller.getRecipes);

// router.post('/api', controller.postRecipe);

// router.get('/api/:id', controller.getRecipe);

// router.put('/api/:id', controller.putRecipe);

// router.delete('/api/:id', controller.delRecipe );

// router.post('/api/search-recipes', controller.searchRecipes); // this is for getting recipes from the API
// router.get('/search-recipes', controller.searchRecipesPage)
// module.exports = router;



