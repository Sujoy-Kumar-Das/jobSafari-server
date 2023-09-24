const { allJobPostCollections } = require("../../models/collections");

const postJobControler = async (req, res) => {
  try {
    const body = req.body;
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
    console.log(error)
    res.send({
      success: false,
      message: "Sever error.Please try again later.",
    });
  }
};

module.exports = postJobControler;
