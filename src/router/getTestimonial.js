const express = require("express");
const getTestimonialControler = require("../controlers/getTestimonialControler");
const router = express.Router();
router.get("/testimonials", getTestimonialControler);

module.exports = router;
