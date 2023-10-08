const express = require("express");
const isAdminControler = require("../../controlers/getControlers/isAdminControler");
const router = express.Router();
router.get("/is-admin/:email", isAdminControler);

module.exports = router;
