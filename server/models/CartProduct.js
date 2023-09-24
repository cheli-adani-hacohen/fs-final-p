const { DataTypes } = require('sequelize');
const db = require('../database/db');
const Cart = require('./Cart');
const Product = require('./Product');

const CartProduct = db.define('cartproducts', {
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

async function getMatchingCartProducts(cartId) {
  try {
    const cartProducts = await CartProduct.findAll({
      where: {
        cartId: cartId
      },
      attributes: ['productId', 'quantity'] 
    });
    return cartProducts;
  } catch (error) {
    console.error('Error getting matching cart products:', error);
    return [];
  }
}


module.exports = {CartProduct, getMatchingCartProducts};
