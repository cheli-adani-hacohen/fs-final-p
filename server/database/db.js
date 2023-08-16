// const mysql = require("mysql2");
// let db = mysql.createPool({
//     host: "localhost",
//     user: "root",
//     password: "Mysql1864",
//     port: 3306,
//     database: "mystore",
//   });
// module.exports = db;

const { Sequelize } = require('sequelize');

const db = new Sequelize({
  dialect: 'mysql',
  dialectModule: require('mysql2'),
  host: 'localhost',
  username: 'root',
  password: 'Mysql1864',
  database: 'mystore',
  port: 3306,
  pool: {
    max: 5, // Maximum number of connection in pool
    min: 0, // Minimum number of connection in pool
    acquire: 30000, // Maximum time, in milliseconds, that pool will try to get connection before throwing error
    idle: 10000, // Maximum time, in milliseconds, that a connection can be idle before being released
  },
});

module.exports = db;
