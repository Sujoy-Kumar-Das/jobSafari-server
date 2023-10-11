const { blogCollections } = require("../../models/collections");

const postBlogControler = async (req, res) => {
  try {
    const body = req.body;

    if (body.email !== req.decoded) {
      return res.send({
        success: false,
        message: "Unauthorized access.You are not a valid user for post blog.",
      });
    }

    const result = await blogCollections.insertOne(body);
    if (!result.acknowledged) {
      return res.send({
        success: false,
        message: "Something went wrong while proccessing your request.",
      });
    }

    res.send({
      success: true,
      message: "Your blog posted successfully.",
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Something went wrong while proccesing your request.",
    });
  }
};
module.exports = postBlogControler;
