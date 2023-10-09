const express = require("express");
const getAllUSersControler = require("../../controlers/getControlers/getAllUSersControler");
const verifyJWT = require("../../middleWare/verifyJWT");
const isAdmin = require("../../middleWare/isAdmin");
const router = express.Router();
router.get("/all-users",verifyJWT,isAdmin, getAllUSersControler);
module.exports = router;
