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
    allowNull: false,
    field: "name.firstname"
  },
  name_lastname: {
    type: DataTypes.STRING(25),
    field:"name.lastname"
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
    type: DataTypes.STRING(30),
    field:"address.city"
  },
  address_street: {
    type: DataTypes.STRING(30),
    field:"address.street"
  },
  address_number: {
    type: DataTypes.SMALLINT,
    field:"address.number"
  },
  address_zipcode: {
    type: DataTypes.STRING(10),
    field:"address.zipcode"
  },
  profile_picture: {
    type: DataTypes.STRING(300)
  }
});

async function findUserById(userId) {
  try {
    const user = await User.findOne({
      attributes: ['id', 'name_firstname', 'name_lastname', 'email', 'phone', 'address_city', 'address_street', 'address_number', 'address_zipcode', 'profile_picture'],
      where: {
        id: userId
      },
      raw: true
    });

    return user;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw new Error("An error occurred while fetching user");
  }
}

module.exports = {
  User,
  findUserById
};

