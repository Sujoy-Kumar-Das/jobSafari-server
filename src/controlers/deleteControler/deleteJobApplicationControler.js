const { ObjectId } = require("mongodb");
const { jobApplicationCollections } = require("../../models/collections");

const deleteJobApplicationControler = async (req, res) => {
  try {
    const { id } = req.params;
    const query = { jobId: id };

    const isAvailable = await jobApplicationCollections.findOne(query);

    if (!isAvailable) {
      return res.send({
        success: false,
        message: "Your already canceled your application.",
      });
    }

    // verify jwt with email address
    if (isAvailable.userEmail !== req.decoded) {
      return res.send({
        success: false,
        message:
          "Unauthorized access.You are not a valid user for delete this job application.",
      });
    }

    const result = await jobApplicationCollections.deleteOne(query);

    if (!result.acknowledged) {
      return res.send({
        success: false,
        message: "somethig went wrong you cant delete you job post yet.",
      });
    }

    res.send({
      success: true,
      message: "You successfully canceled your job application.",
    });
  } catch (error) {
    res.send({
      success: false,
      message:
        "Something went wrong.sever error you can't cancel your application yet.",
    });
  }
};

module.exports = deleteJobApplicationControler;
