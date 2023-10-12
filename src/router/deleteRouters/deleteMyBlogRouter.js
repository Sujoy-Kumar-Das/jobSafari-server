const express = require("express");
const deleteMyBlogControler = require("../../controlers/deleteControler/deleteMyBlogControler");
const verifyJWT = require("../../middleWare/verifyJWT");
const router = express.Router();
router.delete("/delete-blog/:id", verifyJWT, deleteMyBlogControler);

module.exports = router;
