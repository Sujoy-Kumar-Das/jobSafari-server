const express = require("express");
const testControler = require("../../controlers/testControler/testControler");
const router = express.Router();
router.get("/", testControler);

module.exports = router;
