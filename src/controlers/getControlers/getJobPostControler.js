const { allJobPostCollections } = require("../../models/collections");

const getJobPostControler = async (req, res) => {
  try {
    //querys
    const { location, jobTitle, perPageItem, currentPage } = req.query;

    // items per page want to show
    const itemPerPage = parseInt(perPageItem);

    // current page number
    const currentPageNumber = parseInt(currentPage);

    // conditional query
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

    // count total documents
    const count = await allJobPostCollections.countDocuments(query);

    // result
    const result = await allJobPostCollections
      .find(query)
      .limit(itemPerPage) // per page data limit
      .skip(itemPerPage * (currentPageNumber - 1)) // skip items which items already showed.
      .toArray();
    if (!result.length) {
      return res.send({
        success: false,
        message: "Currently we have no job post.",
      });
    } else {
      res.send({
        success: true,
        jobPosts: result,
        count,
      });
    }
  } catch (error) {
    res.send({
      success: false,
      message:
        "Job post not found.server error.Please check your internet connection.",
    });
  }
};

module.exports = getJobPostControler;
