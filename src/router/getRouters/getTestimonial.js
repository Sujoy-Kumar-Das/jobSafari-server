const express = require("express");
const getTestimonialControler = require("../../controlers/getControlers/getTestimonialControler");
const router = express.Router();
router.get("/testimonials", getTestimonialControler);

module.exports = router;
