const { allJobPostCollections } = require("../../models/collections");

const getJobPostControler = async (req, res) => {
  try {
    const query = {};
    const page = parseInt(req.query.page) || 1;
    const jobLimit = parseInt(req.query.itemsPerPage) || 6;
    const count = await allJobPostCollections.estimatedDocumentCount(query);
    const result = await allJobPostCollections
      .find(query)
      .skip((page - 1) * jobLimit)
      .limit(jobLimit)
      .toArray();
    if (!count) {
      return res.send({
        success: false,
        message: "Currently we have no job post.",
      });
    }
    res.send({
      success: true,
      jobPosts: result,
      count,
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
