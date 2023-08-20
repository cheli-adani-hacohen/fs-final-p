const { DataTypes } = require("sequelize");
const db = require("../database/db");
const User = require("./User");
const { useId } = require("react");

const Password = db.define("Password", {
  userId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: User,
      key: "id",
    },
  },
  username: {
    type: DataTypes.STRING(20),
  },
  password: {
    type: DataTypes.STRING(16),
  },
});

async function authenticateUser(myUsername, myPassword) {
  try {
    const userIdArray = await Password.findOne({
      where: {
        username: myUsername,
        password: myPassword,
      },
      attributes: ["userId"]
    });

    const userId = userIdArray ? userIdArray.userId : false; // או כל ערך אחר שתרצה לשים במקרה שאין תוצאה
    
    console.log("\npassword: \x1b[1m"+userId+"\x1b[0m\n");

    return userId;
  } catch (error) {
    console.error("Error fetching password:", error);
    throw new Error("An error occurred while fetching password");
  }
}

module.exports = 
{
  Password,
  authenticateUser
};