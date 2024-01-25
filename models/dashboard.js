// models/dashboard.js

const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Dashboard = sequelize.define('Dashboard', {
  // Define the columns of dashboard table
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },

});



module.exports = Dashboard;
