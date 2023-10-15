const { ObjectId } = require("mongodb");
const { allJobPostCollections } = require("../../models/collections");

const deleteMyJobPostControler = async (req, res) => {
  try {
    const { id } = req.params;
    const query = { _id: new ObjectId(id) };
    const jobPost = await allJobPostCollections.findOne(query);

    // find the job post
    if (!jobPost) {
      return res.send({
        success: false,
        message: "This job post already deleted.",
      });
    }

    // verify jwt email
    if (jobPost.email !== req.decoded) {
      return res.send({
        success: false,
        message: "Unauthorized access.You are not a valid user for deletation.",
      });
    }

    // delete the job post
    const result = await allJobPostCollections.deleteOne(query);

    if (!result.acknowledged) {
      return res.send({
        success: false,
        message: "something went wrong while porccessing your requeste.",
      });
    }

    res.send({
      success: true,
      message: "Job post deleted successfully.",
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Server error while proccessing your request.",
    });
  }
};

module.exports = deleteMyJobPostControler;
