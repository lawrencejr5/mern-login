const express = require("express");
const router = express.Router();

const { register, login } = require("../controllers/user");
const dashboard = require("../controllers/dashboard");
const auth = require("../middleware/auth");

router.post("/register", register);
router.post("/login", login);
router.get("/dashboard", auth, dashboard);

module.exports = router;
