const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const PORT = process.env.PORT || 4000;  // Change the port to 4000 or any other port you prefer
const apiKey = process.env.SPOONACULAR_API_KEY;

// Set up Handlebars
const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: '.handlebars',
  layoutsDir: __dirname + '/views/layouts/',
  partialsDir: __dirname + '/views/partials/'
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Serve static files from the public directory
app.use(express.static('public'));

// Import routes
const routes = require('./controllers/recipeController');
app.use(routes);

app.listen(PORT, function() {
  console.log('Server listening on: http://localhost:' + PORT);
});

// Spoonacular API Routing
const recipeRoutes = require('./recipes.js');  
app.use('/api/recipes', recipeRoutes);



