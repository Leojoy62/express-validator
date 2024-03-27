const { registrationRules } = require("../Validation/rules");
const runValidator = require("../Validation/validator");
const { registerUser, logInUser } = require("../controller/user.controller");

const router = require("express").Router();

router.post("/register", registrationRules, runValidator, registerUser);
router.post("/login", logInUser);

module.exports = router;
