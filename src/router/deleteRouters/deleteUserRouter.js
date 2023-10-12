const express = require("express");
const deleteUserControler = require("../../controlers/deleteControler/deleteUserControler");
const verifyJWT = require("../../middleWare/verifyJWT");
const isAdmin = require("../../middleWare/isAdmin");
const router = express.Router();
router.delete("/delete-user/:id", verifyJWT, isAdmin, deleteUserControler);
module.exports = router;
