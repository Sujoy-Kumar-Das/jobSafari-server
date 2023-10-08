const express = require("express");
const getMyResumeControler = require("../../controlers/getControlers/getMyResumeControler");
const verifyJWT = require("../../middleWare/verifyJWT");
const router = express.Router();
router.get("/my-resumes", verifyJWT, getMyResumeControler);
module.exports = router;
