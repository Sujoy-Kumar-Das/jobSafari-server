const express = require("express");
const postJobControler = require("../../controlers/postControlers/postJobControler");
const router = express.Router();
router.post("/post-job", postJobControler);
module.exports = router;
