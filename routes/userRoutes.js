const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// User route for registering
router.post('/register', userController.register);
router.get('/regetser', (req,res)=>{
    res.render("register");
})
// User route for profile
router.get('/profile', userController.getUserData);

module.exports = router;
