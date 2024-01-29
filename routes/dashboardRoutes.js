//import Express and create express router
const express = require('express');
const router = express.Router();
const dashController = require('../controllers/dashboardController');
const authMiddleware = require('../middleware/authMiddleware'); // Import authMiddleware
const authController = require('../controllers/authController');
// const authController = require('./controllers/authController.js');
const Dashboard = require('../models/dashboard');//import models/Dashboard
const models = require('../models')
// routes for dashboard, this will fetch data and render the dashboard so users can see recipes
router.get('/test', async (req, res) => {
  const recipes = await models.Recipe.findAll();
  res.render('dashboard', { recipes: recipes });
});
router.get('/search', authMiddleware, (req, res) => {
  res.render('search');
});

// Route to handle the search query and fetch recipes
router.post('/search', authMiddleware, async (req, res) => {
  try {
    const { query } = req.body;
    const recipes = await models.Recipe.findAll({
      where: {
        // Define your search criteria based on your Recipe model
        // Example: title: { [Op.like]: `%${query}%` }
      },
    });
    res.render('dashboard', { recipes });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error');
  }
});

router.get('/', authMiddleware, dashController.display)

//router.get('/auth', authController.login )

module.exports = router;
