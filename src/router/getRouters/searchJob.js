const express = require("express");
const getJobBySearch = require("../../controlers/getControlers/getJobBySearch");
const router = express.Router();
router.get("/search-job", getJobBySearch);
module.exports = router;
