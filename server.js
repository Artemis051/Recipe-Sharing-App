const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Set up Handlebars
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Serve static files from the public directory
app.use(express.static('public'));

// Import routes
const routes = require('./controllers/recipeController');
app.use(routes);

app.listen(PORT, function() {
  console.log('Server listening on: http://localhost:' + PORT);
});
