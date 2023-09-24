const express = require("express");
const getPeopleControler = require("../../controlers/getControlers/getPeopleControler");
const router = express.Router();
router.get("/find-peoples", getPeopleControler);
module.exports = router;
