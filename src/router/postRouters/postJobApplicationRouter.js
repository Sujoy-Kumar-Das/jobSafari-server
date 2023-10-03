const express = require("express");
const postJobApplicationControler = require("../../controlers/postControlers/postJobApplicationControler");
const router = express.Router();
router.post("/post-application", postJobApplicationControler);
module.exports = router;
