const express = require('express');//import express and create router
const router = express.Router();

// define routes for recipes


router.get('/', (req, res) => { //this route gets all recipes
  res.send('Get all recipes');
});

router.get('/:id', (req, res) => { //this route will get a recipe based on the ID
  const recipeId = req.params.id;
  res.send(`Get recipe with ID ${recipeId}`);
});

router.post('/', (req, res) => {
  res.send('Create a new recipe');
});

router.put('/:id', (req, res) => {
  const recipeId = req.params.id;
  res.send(`Update recipe with ID ${recipeId}`);
});

router.delete('/:id', controller.delRecipe );

module.exports = router;
