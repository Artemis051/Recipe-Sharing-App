const express = require('express');
const router = express.Router();
const { Recipe } = require('../models');

// Defining routes for recipe functions
router.get('/recipes', async (req, res) => {
  try {
    const recipes = await Recipe.findAll();
    res.render('recipes', { recipes });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error');
  }
});

router.post('/recipes', async (req, res) => {
  try {
    // this is for a form where users can fill out with title, ingredients, and instructions
    const { title, ingredients, instructions } = req.body;

    // this is for creating a new recipe in the db
    const newRecipe = await Recipe.create({
      title,
      ingredients,
      instructions,
    });

    res.redirect('/dashboard'); // this redirects users to the dashboard after creating new recipe
  } catch (error) {
    console.error(error);
    res.status(500).send('Error');
  }
});

module.exports = router;

// const express = require('express');
// const router = express.Router();
// const {Recipe} = require('../models') //not sure if this is right
// const models = require('../models');

// // Define routes for recipe functions
// router.get('/recipes', async (req, res) => {
//   console.log("models", models);
//   const data = await models.Recipe.findAll();
//   // get and display recipe
//   res.send(data);
// });

// router.post('/recipes',async (req, res) => { //create new recipe
//   const data ={
//     title:req.body.title
//   };
//   const resp=await models.Recipe.create(data);

//   res.send({status:1, message:"Recipe created", response:resp});
// });

// module.exports = router;