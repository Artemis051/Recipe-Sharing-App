const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Dashboard = sequelize.define('Dashboard', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Add other fields as needed
  });

  return Dashboard;
};

