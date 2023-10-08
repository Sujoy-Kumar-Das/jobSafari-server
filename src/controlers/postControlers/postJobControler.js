const { allJobPostCollections } = require("../../models/collections");

const postJobControler = async (req, res) => {
  try {
    const body = req.body;
    if (req.query.email !== req.decoded) {
      return res.send({
        success: false,
        message: "Unauthorized access.You are not a valid user for post job.",
      });
    }
    const result = await allJobPostCollections.insertOne(body);
    if (!result.acknowledged) {
      return res.send({
        success: false,
        message:
          "Something went wrong you can't post any job yet.Try again later.",
      });
    } else {
      res.send({
        success: true,
        message: "Your job post uploaded successfully.",
      });
    }
  } catch (error) {
    res.send({
      success: false,
      message: "Sever error.Please try again later.",
    });
  }
};

module.exports = postJobControler;
