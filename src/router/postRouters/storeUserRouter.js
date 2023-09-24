const express = require("express");
const storeUserControler = require("../../controlers/postControlers/storeUserControler");
const router = express.Router();
router.put("/store-user", storeUserControler);

module.exports = router;
