const { DataTypes } = require('sequelize');
const db = require('../database/db');
const User = require('./User');

const Cart = db.define('Cart', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id'
    },
    allowNull: false
  },
  date: {
    type: DataTypes.DATE
  },
  status: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
});

module.exports = Cart;
