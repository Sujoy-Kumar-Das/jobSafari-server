const { ObjectId } = require("mongodb");
const { blogCollections } = require("../../models/collections");

const deleteMyBlogControler = async (req, res) => {
  try {
    const { id } = req.params;
    const query = { _id: new ObjectId(id) };

    // check is this blog availble ?
    const blog = await blogCollections.findOne(query);

    if (!blog) {
      return res.send({
        success: false,
        message: "This blog already deleted.",
      });
    }

    // verify jwt email
    if (blog.email !== req.decoded) {
      return res.send({
        success: false,
        message: "Unauthorized access.You are not a valid user for show blogs.",
      });
    }

    // delete blog
    const result = await blogCollections.deleteOne(query);

    if (!result.acknowledged) {
      return res.send({
        success: false,
        message: "Something went wrong while proccessing your request.",
      });
    }

    res.send({
      success: true,
      message: "Successfully deleted.",
    });
  } catch (error) {
    res.send({
      success: false,
      message: "server error while processing your request.",
    });
  }
};

module.exports = deleteMyBlogControler;
