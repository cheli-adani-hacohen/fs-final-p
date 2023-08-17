const express = require("express");
const router = express.Router();
// const db = require("../database/db");

const bodyParser = require("body-parser");
router.use(bodyParser.json());

const User = require('../moduls/User');
const Password = require('../moduls/Password');

// POST login
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

    const userInfo = await User.findByPk(userId);

    if (!userInfo) {
      return res.status(500).send("Internal Server Error");
    }
    res.status(200).json(userInfo);
    console.log("Logged in successfully");
    console.log("result: " + userInfo.id);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).send("An error occurred");
  }
});

// // POST user
// router.post("/", (req, res) => {
//   const user = {
//     id: 1, // TODO id from DB
//     name: req.body.name,
//     username: req.body.username,
//     email: req.body.email,
//     address: req.body.address,
//     phone: req.body.phone,
//     website: req.body.website,
//     company: req.body.company,
//   };

//   // check if user already exists in DB -> if true, return?
//   // add user to DB

//   res.send(user);
// });

//שינוי סיסמה

module.exports = router;
