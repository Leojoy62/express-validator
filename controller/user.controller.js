const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const registerUser = (req, res) => {
  try {
    const { name, email, password, dob } = req.body;

    bcrypt.hash(password, saltRounds, async (err, hash) => {
      const newUser = new User({
        name,
        email,
        password: hash,
        dob,
      });
      await newUser.save();
      res.status(201).json({
        message: "user created successfully",
        newUser,
      });
    });
  } catch (error) {
    console.log(error.message);
  }
};

const logInUser = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const user = await User.findOne({ email: email });
    if (user) {
      bcrypt.compare(password, user.password, function (err, result) {
        if (result === true) {
          res.status(200).json("valid User");
        } else {
          res.status(500).json({
            message: "Password did not match",
          });
        }
      });
    } else {
      res.status(404).json("Not a valid User");
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = { registerUser, logInUser };
