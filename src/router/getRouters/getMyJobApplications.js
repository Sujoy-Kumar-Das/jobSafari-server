const express = require("express");
const getMyJobApplicationsControler = require("../../controlers/getControlers/getMyJobApplicationsControler");
const router = express.Router();
router.get("/my-job-applications/:email", getMyJobApplicationsControler);
module.exports = router;
