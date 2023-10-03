const { ObjectId } = require("mongodb");
const {
  jobApplicationCollections,
  allJobPostCollections,
} = require("../../models/collections");

const postJobApplicationControler = async (req, res) => {
  try {
    const body = req.body;
    const { jobId, userEmail } = body;
    const query = {_id: new ObjectId(jobId)}
    const emailQuery = { userEmail: userEmail };
    const idQuery = { jobId: jobId };

    // is job available now
    const jobExists = await allJobPostCollections.findOne(query);

    if (!jobExists) {
      return res.send({
        success: false,
        message: "This job isn't exists.You can't apply this job.",
      });
    } else {
      // is already applied
      const isApplied = await jobApplicationCollections.findOne({
        $and: [emailQuery, idQuery],
      });
      if (isApplied) {
        return res.send({
          success: false,
          message: `You already applied this job as a `,
        });
      } else {
        // post job
        const result = await jobApplicationCollections.insertOne(body);
        if (result.acknowledged) {
          return res.send({
            success: true,
            message: "You application has been submited successfully.",
          });
        } else {
          res.send({
            success: false,
            message: "something went wrong please try again later.",
          });
        }
      }
    }
  } catch (error) {
    console.log(error);
    res.send({
      success: false,
      message: "Server error please try again later.",
    });
  }
};

module.exports = postJobApplicationControler;
