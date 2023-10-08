const express = require("express");
const getUserDataControler = require("../../controlers/getControlers/getUserDataControler");
const verifyJWT = require("../../middleWare/verifyJWT");
const router = express.Router();
router.get("/user-data", verifyJWT, getUserDataControler);
module.exports = router;
