const express = require("express");
const getBlogDetailControler = require("../../controlers/getControlers/getBlogDetailControler");
const router = express.Router();
router.get("/blog/detail/:id", getBlogDetailControler);
module.exports = router;
