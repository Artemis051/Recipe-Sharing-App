
const { DataTypes } = require('sequelize');
// Export a function that defines the Recipe model. 
// This function receives a Sequelize instance ('sequelize') and uses it to define the model.
module.exports = (sequelize) => {
  // 'sequelize.define' method is used to define a new model representing the 'Recipe' table in the database.
  // The first argument is the name of the model, and the second is an object that defines the schema.
  const Recipe = sequelize.define('Recipe', {
        // Define an 'id' column with automatic increment and set as the primary key.
    id: {
      type: DataTypes.INTEGER,
      allowNull: false, // This column cannot be null, ensuring every recipe has a unique identifier.
      primaryKey: true, // Marks the column as the primary key.
      autoIncrement: true, // Automatically increments the value with each new entry.
    },
        // Define a 'title' column which will store the name of the recipe.
    title: {
      type: DataTypes.STRING,
      allowNull: false, // The title is required for each recipe.
    },
        // Define an 'ingredients' column to store the list of ingredients as text.
    ingredients: {
      type: DataTypes.TEXT,
      allowNull: false, // Ingredients are required for a recipe to be useful.
    },
    // Define an 'instructions' column to store the cooking instructions.
    instructions: {
      type: DataTypes.TEXT,
      allowNull: false, // Cooking instructions are also required.
    },
  });
  // Return the Recipe model, now defined and ready to be used in other parts of the application.
  return Recipe;
};



// const express = require('express');
// const axios = require('axios');
// const router = express.Router();

// router.get('/search', async (req, res) => {
//     try {
//         const query = req.query.q; 
//         const apiKey = process.env.SPOONACULAR_API_KEY;
//         const url = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${apiKey}`;
        
//         const response = await axios.get(url);
//         res.json(response.data); 
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('An error occurred while fetching recipes');
//     }
// });

// module.exports = router;