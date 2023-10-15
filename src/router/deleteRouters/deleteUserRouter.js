const express = require("express");
const deleteUserControler = require("../../controlers/deleteControler/deleteUserControler");
const verifyJWT = require("../../middleWare/verifyJWT");
const router = express.Router();
router.delete("/delete-user/:id", deleteUserControler);
module.exports = router;
