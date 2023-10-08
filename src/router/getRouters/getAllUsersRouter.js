const express = require("express");
const getAllUSersControler = require("../../controlers/getControlers/getAllUSersControler");
const verifyJWT = require("../../middleWare/verifyJWT");
const router = express.Router();
router.get("/all-users",verifyJWT, getAllUSersControler);
module.exports = router;
