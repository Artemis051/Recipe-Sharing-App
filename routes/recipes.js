const express = require('express');
const router = express.Router();

// Define routes for recipes
router.get('/', (req, res) => {
  res.send('Get all recipes');
});

router.get('/:id', (req, res) => {
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

router.delete('/:id', (req, res) => {
  const recipeId = req.params.id;
  res.send(`Delete recipe with ID ${recipeId}`);
});

module.exports = router;
