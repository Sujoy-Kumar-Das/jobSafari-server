const { resumeCollections } = require("../../models/collections");

const getMyResumeControler = async (req, res) => {
  try {
    const email = req.query.email;
    const query = { email: email };
    const result = await resumeCollections.findOne(query);
    if (!result) {
      res.send({
        success: false,
        message: "Currently you don't have any resume.",
      });
    } else {
      res.send({
        success: true,
        resume: result,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = getMyResumeControler;
