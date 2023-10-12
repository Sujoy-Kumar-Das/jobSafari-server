const { resumeCollections } = require("../../models/collections");

const getMyResumeControler = async (req, res) => {
  try {
    const email = req.query.email;
    const query = { email: email };
    if (email !== req.decoded) {
      return res.send({
        success: false,
        message:
          "Unauthorized access.You are not a valid user for view this resume.",
      });
    }
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
    res.send({
      success: false,
      message: "Something went wrong while proccessing your requeste.",
    });
  }
};

module.exports = getMyResumeControler;
