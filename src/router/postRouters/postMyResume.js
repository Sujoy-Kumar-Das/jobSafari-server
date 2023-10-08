const express = require("express");
const postMyResumeControler = require("../../controlers/postControlers/postMyResumeControler");
const verifyJWT = require("../../middleWare/verifyJWT");
const router = express.Router();
router.put("/post-my-resume",verifyJWT, postMyResumeControler);
module.exports = router;
