const express = require("express");
const makeAdminControler = require("../../controlers/postControlers/makeAdminControler");
const isAdmin = require("../../middleWare/isAdmin");
const verifyJWT = require("../../middleWare/verifyJWT");
const router = express.Router();
router.patch("/make-admin/:id",verifyJWT, isAdmin, makeAdminControler);

module.exports = router;
