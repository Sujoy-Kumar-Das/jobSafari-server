const { ObjectId } = require("mongodb");
const { allJobPostCollections } = require("../../models/collections");

const getJobDetailControler = async (req, res) => {
  try {
    const id = req.params.id;
    const query = { _id: new ObjectId(id) };
    const result = await allJobPostCollections.find(query).toArray();
    if (!result.length) {
      return res.send({
        success: false,
        message: "This job isn't found.",
      });
    }
    res.send({
      success: true,
      jobDetail: result,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "server error.Job Detail not found.",
    });
  }
};

module.exports = getJobDetailControler;
