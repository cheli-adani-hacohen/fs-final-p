const { DataTypes } = require('sequelize');
const db = require('../database/db');

const User = db.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name_firstname: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  name_lastname: {
    type: DataTypes.STRING(25)
  },
  email: {
    type: DataTypes.STRING(320),
    allowNull: false
  },
  phone: {
    type: DataTypes.STRING(15),
    allowNull: false
  },
  address_city: {
    type: DataTypes.STRING(30)
  },
  address_street: {
    type: DataTypes.STRING(30)
  },
  address_number: {
    type: DataTypes.SMALLINT
  },
  address_zipcode: {
    type: DataTypes.STRING(10)
  },
  profile_picture: {
    type: DataTypes.STRING(300)
  }
});

module.exports = User;
