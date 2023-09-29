const express = require("express");
const postMyResumeControler = require("../../controlers/postControlers/postMyResumeControler");
const router = express.Router();
router.put("/post-my-resume", postMyResumeControler);
module.exports = router;
