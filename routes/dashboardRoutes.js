//import Express and create express router
const express = require('express'); 
const router = express.Router();
const dashController = require('../controllers/dashboardController');
const authMiddleware = require('../middleware/authMiddleware'); // Import authMiddleware
const authController = require('../controllers/authController');
// const authController = require('./controllers/authController.js');
const Dashboard = require('../models/dashboard');//import models/Dashboard

// routes for dashboard, this will fetch data and render the dashboard
router.get('/', (req, res) => { 
  res.render('dashboard'); 
});

router.get('/dashboard', authMiddleware, dashController.display )

//router.get('/auth', authController.login )

module.exports = router;

