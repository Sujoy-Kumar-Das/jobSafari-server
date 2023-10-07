const express = require("express");
const storeJobApplicationControler = require("../../controlers/postControlers/storeJobApplicationControler");
const router = express.Router();
router.post("/post-application", storeJobApplicationControler);
module.exports = router;
