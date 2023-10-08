const express = require("express");
const getJwtTokenControler = require("../../controlers/getControlers/getJwtTokenControlr");
const router = express.Router();
router.get("/get-jwt-token", getJwtTokenControler);
module.exports = router;
