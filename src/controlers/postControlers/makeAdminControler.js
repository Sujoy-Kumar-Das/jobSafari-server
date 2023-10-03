const { ObjectId } = require("mongodb");
const { usersCollections } = require("../../models/collections");

const makeAdminControler = async (req, res) => {
  try {
    const { id } = req.params;
    const query = { _id: new ObjectId(id) };
    const option = { upsert: true };
    const updatedDoc = {
      $set: {
        admin: true,
      },
    };
    const user = await usersCollections.findOne(query);
    if (user.admin) {
      return res.send({
        success: false,
        message: "User already admin.",
      });
    } else {
      const result = await usersCollections.updateOne(
        query,
        updatedDoc,
        option
      );
    }
    if (!result.acknowledged) {
      return res.send({
        success: false,
        message: `something went wrong please try again later.`,
      });
    } else {
      res.send({
        success: true,
        message: `${user.name} is now admin.`,
      });
    }
  } catch (error) {
    res.send({
      success: true,
      message: "Server error for make admin.Please Try agin later.",
    });
  }
};

module.exports = makeAdminControler;
