// middlewares/authMiddleware.js
const jwtUtils = require('../utils/jwtUtils'); // פונקציות ה-JWT מקובצים נפרד

function authenticateToken(req, res, next) {
  const token = req.cookies.authToken;

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  jwtUtils
    .verifyToken(token)
    .then((decoded) => {
      req.user = decoded;
      next();
    })
    .catch(() => {
      res.status(403).json({ message: 'Forbidden' });
    });
}

module.exports = {
  authenticateToken,
};
