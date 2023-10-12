const express = require("express");
const getBlogsControler = require("../../controlers/getControlers/getBlogsControler");
const router = express.Router();
router.get("/blogs", getBlogsControler);
module.exports = router;
