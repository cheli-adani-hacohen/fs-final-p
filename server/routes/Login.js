const express = require("express");
const router = express.Router();

const bodyParser = require("body-parser");
router.use(bodyParser.json());

const User = require('../models/User');
const Password = require('../models/Password');

router.post("/", async (req, res) => {
  const { password, username } = req.body;

  if (!password || !username) {
    return res.status(400).send("Both username and password are required.");
  }

  try {
    const userId = await Password.authenticateUser(username, password);
    if (!userId) {
      return res.status(401).send("Invalid username or password");
    }

    const userInfo = await User.findUserById(userId);

    if (!userInfo) {
      return res.status(500).send("Internal Server Error");
    }
    res.status(200).json(userInfo);

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).send("An error occurred");
  }
});


module.exports = router;
