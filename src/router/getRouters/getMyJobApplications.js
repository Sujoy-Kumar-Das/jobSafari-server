const express = require("express");
const getMyJobApplicationsControler = require("../../controlers/getControlers/getMyJobApplicationsControler");
const verifyJWT = require("../../middleWare/verifyJWT");
const router = express.Router();
router.get("/my-job-applications/:email",verifyJWT, getMyJobApplicationsControler);
module.exports = router;
