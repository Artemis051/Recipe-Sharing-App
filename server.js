const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session'); // Add this line for session middleware
const { sequelize } = require('./models');
const authMiddleware = require('./middleware/authMiddleware');
const PORT = process.env.PORT || 4000;
const apiKey = process.env.SPOONACULAR_API_KEY;
const app = express();
require('dotenv').config();


// Set up Handlebars
const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: '.handlebars',
  layoutsDir: __dirname + '/views/layouts/',
  partialsDir: __dirname + '/views/partials/'
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(session({
  secret: 'd13fc423adf058a0d3b351b5166a29c5', 
  resave: false,
  saveUninitialized: true,
}));

// Serve static files from the public directory
app.use(express.static('public'));

// Import routes
const routes = require('./controllers/recipeController');
app.use(routes);

// use authMiddleware to protect the dashboard route
const dashboardRoutes = require('./routes/dashboardRoutes'); // Replace with your actual dashboard routes
app.use('/dashboard', authMiddleware, dashboardRoutes);

// Spoonacular API Routing
const recipeRoutes = require('./routes/recipes.js');  
app.use('/api/recipes', recipeRoutes);



// Sync the database and start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
  });
});
