const express = require("express");
const makeAdminControler = require("../../controlers/postControlers/makeAdminControler");
const router = express.Router();
router.patch("/make-admin/:id", makeAdminControler);

module.exports = router;
