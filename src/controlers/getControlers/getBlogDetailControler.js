const { ObjectId } = require("mongodb");
const { blogCollections } = require("../../models/collections");

const getBlogDetailControler = async (req, res) => {
  try {
    const { id } = req.params;
    const query = { _id: new ObjectId(id) };
    const result = await blogCollections.findOne(query);
    if (!result) {
      return res.send({
        success: false,
        message: "Blog not found.",
      });
    }
    res.send({
      success: true,
      blog: result,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Server error while processign your requeste.",
    });
  }
};

module.exports = getBlogDetailControler;
