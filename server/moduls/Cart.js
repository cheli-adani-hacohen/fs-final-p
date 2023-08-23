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
    allowNull: false
  },
  date: {
    type: DataTypes.DATE,
    allowNull: true
  },
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: db.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
  }
}, {
  timestamps: false,
  engine: 'InnoDB',
  charset: 'utf8mb4',
  collate: 'utf8mb4_0900_ai_ci',
});


module.exports = Cart;
