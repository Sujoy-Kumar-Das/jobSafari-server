const express = require("express");
const getJobPostControler = require("../controlers/getJobPostControler");
const router = express.Router();
router.get("/job-posts", getJobPostControler);
module.exports = router;
