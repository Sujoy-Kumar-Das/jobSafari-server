const express = require("express");
const getMyJobPostsControler = require("../../controlers/getControlers/getMyJobPostsControler");
const router = express.Router();
router.get("/my-job-posts", getMyJobPostsControler);
module.exports = router;
