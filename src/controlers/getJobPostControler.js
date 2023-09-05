const { allJobPostCollections } = require("../models/collections");

const getJobPostControler = async (req, res) => {
  try {
    const query = {};
    const jobLimit = parseInt(req.query.limit);
    const result = await allJobPostCollections
      .find(query)
      .limit(jobLimit)
      .toArray();
    if (!result.length) {
      return res.send({
        success: false,
        message: "Currently we have job post.",
      });
    }
    res.send({
      success: true,
      jobPosts: result,
    });
  } catch (error) {
    res.send({
      success: false,
      message:
        "Job post not found.server error.Please check your internet connection.",
    });
  }
};

module.exports = getJobPostControler;
