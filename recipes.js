const express = require('express');
const router = express.Router();

// Define routes related to recipes
router.get('/', (req, res) => {
  // Handle GET request for recipes
  res.send('Get all recipes');
});

router.get('/:id', (req, res) => {
  // Handle GET request for a specific recipe by ID
  const recipeId = req.params.id;
  res.send(`Get recipe with ID ${recipeId}`);
});

router.post('/', (req, res) => {
  // Handle POST request to create a new recipe
  res.send('Create a new recipe');
});

router.put('/:id', (req, res) => {
  // Handle PUT request to update a recipe by ID
  const recipeId = req.params.id;
  res.send(`Update recipe with ID ${recipeId}`);
});

router.delete('/:id', (req, res) => {
  // Handle DELETE request to delete a recipe by ID
  const recipeId = req.params.id;
  res.send(`Delete recipe with ID ${recipeId}`);
});

module.exports = router;
