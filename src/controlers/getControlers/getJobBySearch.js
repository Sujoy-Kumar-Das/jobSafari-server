const { allJobPostCollections } = require("../../models/collections");

const getJobBySearch = async (req, res) => {
  try {
    const { location, jobTitle } = req.query;
    let query = {};
    if (location && jobTitle) {
      query = {
        location: { $regex: new RegExp(location, "i") },
        job_title: { $regex: new RegExp(jobTitle, "i") },
      };
    } else if (location) {
      query = {
        location: { $regex: new RegExp(location, "i") },
      };
    } else if (jobTitle) {
      query = {
        job_title: { $regex: new RegExp(jobTitle, "i") },
      };
    }

    const result = await allJobPostCollections.find(query).toArray();
    if (!result.length) {
      return res.status(404).send({
        success: false,
        message: "sorry we haven't found a job for this role yet.",
      });
    }
    res.send({
      success: true,
      jobs: result,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "job search sever error.please check your internet connection.",
    });
  }
};

module.exports = getJobBySearch;
