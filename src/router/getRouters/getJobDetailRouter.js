const express = require("express");
const getJobDetailControler = require("../../controlers/getControlers/getJobDetailControler");
const router = express.Router();
router.get("/job-detail/:id", getJobDetailControler);
module.exports = router;
