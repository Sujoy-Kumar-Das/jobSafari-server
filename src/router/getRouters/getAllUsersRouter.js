const express = require("express");
const getAllUSersControler = require("../../controlers/getControlers/getAllUSersControler");
const router = express.Router();
router.get("/all-users", getAllUSersControler);
module.exports = router;
