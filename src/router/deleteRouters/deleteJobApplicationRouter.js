const express = require("express");
const deleteJobApplicationControler = require("../../controlers/deleteControler/deleteJobApplicationControler");
const verifyJWT = require("../../middleWare/verifyJWT");
const router = express.Router();
router.delete("/delete-my-job-application/:id",verifyJWT, deleteJobApplicationControler);
module.exports = router;
