const { testimonialCollections } = require("../../models/collections");

const getTestimonialControler = async (req, res) => {
  try {
    const query = {};
    const result = await testimonialCollections.find(query).toArray();
    if (!result.length) {
      return res.send({
        success: false,
        message: "Currently we don't have any testimonial!",
      });
    }
    res.send({
      success: true,
      testimonials: result,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = getTestimonialControler;
