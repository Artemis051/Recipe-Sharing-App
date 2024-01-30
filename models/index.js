const { Sequelize } = require('sequelize');
const sequelize = require ("../config/connection")
const RecipeModel = require('./recipe');
//const DashboardModel = require('./dashboard');
const UserModel = require('./user');

const Recipe = RecipeModel(sequelize);
//const Dashboard = DashboardModel(sequelize);
const User = UserModel(sequelize);

module.exports = {
    Recipe,
   // Dashboard,
    User,
    sequelize
};

