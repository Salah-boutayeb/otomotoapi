import express from("express");
const router = express.Router();
import { registerUser, userLogin, getUser } from("../controller/user");
import { protect } from("../middleware/authMiddelware");
router.route("/signup").post(registerUser);
router.route("/login").post(userLogin);
router.get("/me", protect, getUser);

module.exports = router;
