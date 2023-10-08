const express = require("express");
const deleteJobApplicationControler = require("../../controlers/deleteControler/deleteJobApplicationControler");
const router = express.Router();
router.delete("/delete-my-job-application/:id", deleteJobApplicationControler);
module.exports = router;
