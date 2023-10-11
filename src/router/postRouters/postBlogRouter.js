const express = require("express");
const postBlogControler = require("../../controlers/postControlers/postBlogControler");
const verifyJWT = require("../../middleWare/verifyJWT");
const router = express.Router();
router.post("/post-blog", verifyJWT, postBlogControler);
module.exports = router;
