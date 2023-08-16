const { DataTypes } = require('sequelize');
const db = require('../database/db');
const User = require('./User');

const Password = db.define('Password', {
  userId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: User,
      key: 'id'
    }
  },
  username: {
    type: DataTypes.STRING(20)
  },
  password: {
    type: DataTypes.STRING(16)
  }
});

module.exports = Password;
