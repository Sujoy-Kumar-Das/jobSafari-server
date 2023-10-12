const express = require("express");
const getMyBlogsControler = require("../../controlers/getControlers/getMyBlogsControler");
const verifyJWT = require("../../middleWare/verifyJWT");
const router = express.Router();
router.get("/my-blogs", verifyJWT, getMyBlogsControler);

module.exports = router;
