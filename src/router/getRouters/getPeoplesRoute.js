const express = require("express");
const getMyResumeControler = require("../../controlers/getControlers/getMyResumeControler");
const router = express.Router();
router.get("/my-resume", getMyResumeControler);
module.exports = router;
