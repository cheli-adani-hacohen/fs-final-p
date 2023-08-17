const { DataTypes } = require('sequelize');
const db = require('../database/db');
const Cart = require('./Cart');
const Product = require('./Product');

const CartProduct = db.define('CartProduct', {
  cartId: {
    type: DataTypes.INTEGER,
    references: {
      model: Cart,
      key: 'id'
    },
    primaryKey: true
  },
  productId: {
    type: DataTypes.INTEGER,
    references: {
      model: Product,
      key: 'id'
    },
    primaryKey: true
  },
  quantity: {
    type: DataTypes.INTEGER,
    defaultValue: 1
  }
});

module.exports = CartProduct;
