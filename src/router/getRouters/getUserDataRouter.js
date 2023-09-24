const express = require("express");
const getUserDataControler = require("../../controlers/getControlers/getUserDataControler");
const router = express.Router();
router.get("/user-data", getUserDataControler);
module.exports = router;
