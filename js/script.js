const express = require('express');
const router = express.Router();

// Home page route
router.get('/', function (req, res) {
    // Add logic to determine if the user is authenticated
    let isAuthenticated = false; // Replace with actual authentication check

    // Render the 'home' template with the current year and authentication status
    res.render('home', {
        isAuthenticated: isAuthenticated,
        currentYear: new Date().getFullYear()
    });
});

module.exports = router;
