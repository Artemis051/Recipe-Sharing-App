const express = require('express');
const router = express.Router();

const Dashboard = require('../models/dashboard');

// routes for dashboard, this will fetch data and render the dashboard
router.get('/', (req, res) => { 
  res.render('dashboard'); 
});

module.exports = router;
