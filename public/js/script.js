//JavaScript for the front end goes here

const express = require('express');
const axios = require('axios');
const app = express();
const api_key = 'My_API_Key';
// Middleware to parse request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Route for search/fetch
app.post('/search', async (req, res) => {
    const { query } = req.body;
    const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${MY_API_Key}`);
    const recipes = response.data.results;
    res.render('results', { recipes });
});
// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});