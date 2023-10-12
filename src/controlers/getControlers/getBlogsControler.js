const { blogCollections } = require("../../models/collections");

const getBlogsControler = async (req, res) => {
  try {
    const query = {};
    const result = await blogCollections.find(query).toArray();
    if (!result.length) {
      return res.send({
        success: false,
        message: "Sorry we don't have any blogs yet.",
      });
    }
    res.send({
      success: true,
      blogs: result,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Server error while proccessing your request.",
    });
  }
};

module.exports = getBlogsControler;
