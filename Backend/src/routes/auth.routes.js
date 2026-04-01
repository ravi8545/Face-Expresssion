const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");
const authMiddleware = require("../middlewares/auth.middleware");




//api/auth
router.post('/register', authController.registerUser);
router.post("/login", authController.loginUser);
router.get("/get-me", authMiddleware.authUser, authController.getMe);
router.get("/logout", authController.logoutUser);

module.exports = router;