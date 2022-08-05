const express = require("express");
const router = express.Router();
const { registerUser, userLogin, getUser } = require("../controller/user");
const { protect } = require("../middleware/authMiddelware");
router.route("/signup").post(registerUser);
router.route("/login").post(userLogin);
router.get("/me", protect, getUser);

module.exports = router;
