const { check } = require("express-validator");

exports.registrationRules = [
  check("name")
    .trim()
    .notEmpty()
    .isLength({ max: 30 })
    .withMessage("Name can have max 30 Charecters"),
  check("email").isEmail().withMessage("not a valid email"),
];
