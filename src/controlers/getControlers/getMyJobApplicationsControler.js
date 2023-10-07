const { ObjectId } = require("mongodb");
const {
  jobApplicationCollections,
  allJobPostCollections,
} = require("../../models/collections");

const getMyJobApplicationsControler = async (req, res) => {
  try {
    const { email } = req.params;
    const query = { userEmail: email }; // query for search job applications

    const appliedJobs = await jobApplicationCollections.find(query).toArray();

    const allJobs = await allJobPostCollections.find({}).toArray();

    const myApplications = allJobs.filter((job) => {
      return appliedJobs.some((appliedJob) =>
        new ObjectId(appliedJob.jobId).equals(job._id)
      );
    });
    if (!myApplications) {
      return res.send({
        success: false,
        message: "Currently you don't have any job applications.",
      });
    } else {
      res.send({
        success: true,
        jobApplications: myApplications,
      });
    }
  } catch (error) {
    res.send({
      success: false,
      message: "Some thing went wrong.server error,please try agin later.",
    });
  }
};

module.exports = getMyJobApplicationsControler;
