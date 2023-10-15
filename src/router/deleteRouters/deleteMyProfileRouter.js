const express = require("express");
const deleteUserControler = require("../../controlers/deleteControler/deleteMyProfileControler");
const verifyJWT = require("../../middleWare/verifyJWT");
const router = express.Router();
router.delete("/delete-user-my-profile/:id", verifyJWT, deleteUserControler);
module.exports = router;
