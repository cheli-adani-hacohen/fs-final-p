const { DataTypes } = require("sequelize");
const db = require("../database/db");
const User = require("./User");

const Cart = db.define(
  "Cart",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: db.literal("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"),
    },
  },
  {
    timestamps: false,
    engine: "InnoDB",
    charset: "utf8mb4",
    collate: "utf8mb4_0900_ai_ci",
  }
);


//פונקציה שמקבלת userId ומחזירה רשימה של עגלות מתאימות:
async function getMatchingCarts(userId) {
  try {
    const carts = await Cart.findAll({
      where: {
        userId: userId
      }
    });
    return carts;
  } catch (error) {
    console.error('Error getting matching carts:', error);
    return [];
  }
}


//פונקציה שמקבלת userId ומחזירה עגלה אשר מתאימה למזהה ובנוסף ערך השדה status הוא false:
async function getInactiveCart(userId) {
  try {
    const cart = await Cart.findOne({
      where: {
        userId: userId,
        completed: false
      }
    });
    // console.log(cart);
    return cart;
  } catch (error) {
    console.error('Error getting inactive cart:', error);
    return null;
  }
}


module.exports = { Cart, getMatchingCarts, getInactiveCart };
