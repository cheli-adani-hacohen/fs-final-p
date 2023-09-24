const { DataTypes } = require("sequelize");
const db = require("../database/db");
const User = require("./User");
const { useId } = require("react");

const Password = db.define("Password", {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false, // NOT NULL
    primaryKey: true,
    references: {
      model: "users", // ציון שם הטבלה בצורה מחרוזתית
      key: "id",
    },
  },
  username: {
    type: DataTypes.STRING(20),
    allowNull: true, // DEFAULT NULL
  },
  password: {
    type: DataTypes.STRING(16),
    allowNull: true, // DEFAULT NULL
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: true, // DEFAULT NULL
    defaultValue: db.literal("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"), // הגדרת העמודה עם הברירת מחדל מתאימה
  },
}, {
  timestamps: false, // מונע הוספת התאריכים האוטומטיים של createdAt ו-updatedAt
  engine: "InnoDB", // סוג המנוע
  charset: "utf8mb4",
  collate: "utf8mb4_0900_ai_ci",
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