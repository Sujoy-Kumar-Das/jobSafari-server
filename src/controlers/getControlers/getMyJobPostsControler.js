const { allJobPostCollections } = require("../../models/collections");

const getMyJobPostsControler = async (req, res) => {
  try {
    const { email } = req.query;
    const query = { email: email };
    const result = await allJobPostCollections.find(query).toArray();
    if (!result.length) {
      return res.send({
        success: false,
        message: "You don't have any job post't yet.",
      });
    }

    res.send({
      success: true,
      myJobPosts: result,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Server error while proccessing your requeste.",
    });
  }
};

module.exports = getMyJobPostsControler;
