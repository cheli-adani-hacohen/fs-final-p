// controllers/authController.js
const bcrypt = require('bcrypt');
const jwtUtils = require('../utils/jwtUtils'); // פונקציות ה-JWT מקובצים נפרד

const Password = require('../models/Password');

async function authenticateUser(username, password) {
  const userP = await Password.findOne({ username });

  if (!user) {
    return null; // אם המשתמש לא נמצא
  }

  const passwordMatch = await bcrypt.compare(password, userP.password);

  if (!passwordMatch) {
    return null; // אם הסיסמה אינה תואמת
  }

  const token = jwtUtils.generateToken(userP._id);
  return token; // אם האימות הצליח, החזרת ה-Token
}

module.exports = {
  authenticateUser,
};
