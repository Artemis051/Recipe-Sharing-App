const bcrypt = require('bcrypt'); //bycrypt is for hashing passwords, make it more secure
const { User } = require('../models'); 

const authController = { //here we're defining the loging function
  login: async (req, res) => {
    const { username, password } = req.body;

    try {
      const user = await User.findOne({ where: { username } });// this searches for the user in the db to see if they exit

      if (user && bcrypt.compareSync(password, user.password)) {//if user is found in db..
    
        req.session.userId = user.id; // then store the user info for the session
        res.redirect('/dashboard'); // and redirect them to the main page with the recipes
      } else { //if the user is not found in the db..
        res.render('login', { error: 'Invalid username or password' }); //then render this message
      }
    } catch (error) { //and log the error in the console
      console.error(error);
      res.status(500).send('Error'); 
    }
  },

  signup: async (req, res) => {
    const { username, email, password } = req.body;

    try {
      // Check if the username is already taken
      const existingUser = await User.findOne({ where: { username } });
      if (existingUser) {
        return res.render('signup', { error: 'Username already in use' });
      }

      // Hash the password before storing it in the database
      const hashedPassword = bcrypt.hashSync(password, 10);

      // this code is for creating a new user
      const newUser = await User.create({ username, email, password: hashedPassword }); //once users give us this info for their account,

      // then redirect them to the login page
      res.redirect('/login');
    } catch (error) {
      console.error(error);
      res.status(500).send('Error');
    }
  },

  logout: (req, res) => { // when the user presses 'logout' the session is destroyed
    req.session.destroy((err) => {
      res.redirect('/login');
    });
  },
};

module.exports = authController;

