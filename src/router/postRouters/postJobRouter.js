const express = require("express");
const postJobControler = require("../../controlers/postControlers/postJobControler");
const verifyJWT = require("../../middleWare/verifyJWT");
const router = express.Router();
router.post("/post-job",verifyJWT, postJobControler);
module.exports = router;
