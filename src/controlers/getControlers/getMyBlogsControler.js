const { blogCollections } = require("../../models/collections");

const getMyBlogsControler = async (req, res) => {
  try {
    const { email } = req.query;
    const query = { email: email };

    // verify jwt with email address

    if (email !== req.decoded) {
      return res.send({
        success: false,
        message: "Unauthorized access.You are not a valid user for show blogs.",
      });
    }

    const result = await blogCollections.find(query).toArray();
    if (!result.length) {
      return res.send({
        success: false,
        message: "Currently you don't have any blogs.",
      });
    }
    res.send({
      success: true,
      myBlogs: result,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Something went wrong while proccessing your request.",
    });
  }
};

module.exports = getMyBlogsControler;
