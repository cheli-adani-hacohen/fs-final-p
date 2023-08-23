const { DataTypes } = require('sequelize');
const db = require('../database/db');
const Cart = require('./Cart');
const Product = require('./Product');

const CartProduct = db.define('CartProduct', {
  cartId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  quantity: {
    type: DataTypes.INTEGER,
    defaultValue: 1
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

module.exports = CartProduct;
