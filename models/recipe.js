const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/search', async (req, res) => {
    try {
        const query = req.query.q; // Get the search query from the URL
        const apiKey = process.env.SPOONACULAR_API_KEY;
        const url = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${apiKey}`;
        
        const response = await axios.get(url);
        res.json(response.data); // Send the API response to the frontend
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while fetching recipes');
    }
});

module.exports = router;
