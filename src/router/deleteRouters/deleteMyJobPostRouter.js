const express = require("express");
const deleteMyJobPostControler = require("../../controlers/deleteControler/deleteMyJobPostControler");
const verifyJWT = require("../../middleWare/verifyJWT");
const router = express.Router();
router.delete("/delete-my-job-post/:id", verifyJWT, deleteMyJobPostControler);
module.exports = router;
