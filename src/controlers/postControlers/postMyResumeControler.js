const { resumeCollections } = require("../../models/collections");

const postMyResumeControler = async (req, res) => {
  try {
    const resume = req.body;
    const email = resume.email;
    const filter = { email: email };

    // Document to update or insert
    const updatedDoc = {
      $set: resume,
    };

    // Use upsert: true to insert if the document doesn't exist
    const options = { upsert: true };

    const result = await resumeCollections.updateOne(
      filter,
      updatedDoc,
      options
    );

    if (!result.acknowledged) {
      return res.send({
        success: false,
        message:
          "Something went wrong. Your resume couldn't be updated. Please try again later.",
      });
    } else {
      res.send({
        success: true,
        message: "Your resume updated successfully.",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = postMyResumeControler;
