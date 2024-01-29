const express = require('express');
const router = express.Router();
const { Recipe } = require('../models');

const recipeController = {
  getRecipes: async (req, res) => {
    try {
      const recipes = await Recipe.findAll();
      res.send(recipes);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error');
    }
  },
  getRecipe: async (req, res) => {
    try {
      const id = req.params.id;
      const recipe = await Recipe.findByPk(id);
      res.send(recipe);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error');
    }
  },
  delRecipe: async (req, res) => {
    try {
      const recipeId = req.params.id;
      await Recipe.destroy({
        where: {
          id: recipeId,
        },
      });
      const recipes = await Recipe.findAll();
      res.send({ status: 1, message: 'Recipe Deleted', recipes:recipes });
    } catch (error) {
      console.error(error);
      res.status(500).send({ status: -1, message: 'Error deleting recipe' });
    }
  },
  
  postRecipe: async (req, res) => {
    try {
      // this is for a form where users can fill out with title, ingredients, and instructions
      const { title, ingredients, instructions } = req.body;
      // want to try and find a recipe that has a title equal to "title" and if one is found, do this:
        // res.status(500).send({ status: -1, message: "Recipe already exists", recipes: recipes  });
      // this is for creating a new recipe in the db
      const newRecipe = await Recipe.create({
        title,
        ingredients,
        instructions,
      });
      const recipes = await Recipe.findAll({ raw: true });
      res.send({ status: 1, message: "Recipe Added", recipes: recipes });
    } catch (error) {
      console.error(error);
      res.status(500).send({ status: -1, message: "Error adding", recipes: null });
    }
  },
  

  
  
  // delRecipe: async (req, res) => {
  //   const recipeId = req.params.id;
  //   // here is where we do a javascript access to the Recipe database 
  //   // Recipe.findByIdAndRemove( recipeId );
  //   await Recipe.destroy({
  //     where: {
  //       id: recipeId,
  //     },
  //   });
    
  //   const recipes = await Recipe.findAll({ raw: true });
  //   res.send({ status: 1, message: "Recipe Deleted", recipes: recipes });
  // },
  putRecipe: async (req, res) => {
    try {
      const id = req.params.id;
      // this is for a form where users can fill out with title, ingredients, and instructions
      const { title, ingredients, instructions } = req.body;
      await Recipe.update({ title: title, ingredients: ingredients, instructions: instructions }, {
        where: {
          id: id,
        },
      });
      // this is for creating a new recipe in the db

      const recipes = await Recipe.findAll({ raw: true });
      res.send({ status: 1, message: "Recipe Updated", recipes: recipes });
    } catch (error) {
      console.error(error);
      res.status(500).send({ status: -1, message: "Error saving", recipes: null });
    }
  }, 
  getAPIRecipe: async (req, res) => {
    try {
        const id = req.params.id;
        const apiKey =  process.env.My_API_Key;
        const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`;
        console.log(url);
        const resp = await fetch (url);
        const text = await resp.text();
        console.log("TEXT:", text);
        const json = JSON.parse(text);
        console.log(json);
        res.render("recipe-api", {recipe:json})
    } catch (error) {
      console.error(error);
      res.status(500).send('Error');
    }
  }
}

/*
putRecipe: async (req, res) => {
  try {
    const id = req.params.id;
    const { title, ingredients, instructions } = req.body;
    await Recipe.update({ title, ingredients, instructions }, {
      where: {
        id,
      },
    });
    const recipes = await Recipe.findAll({ raw: true });
    res.send({ status: 1, message: 'Recipe Updated', recipes });
  } catch (error) {
    console.error(error);
    res.status(500).send({ status: -1, message: 'Error saving', recipes: null });
  }
},
*/
// Defining routes for recipe functions


module.exports = recipeController;

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