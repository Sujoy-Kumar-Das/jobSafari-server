const { usersCollections } = require("../../models/collections");

const getUserDataControler = async (req, res) => {
  try {
    const { email } = req.query;
    const query = { email: email };
    if (email !== req.decoded) {
      return res.send({
        success: false,
        message:
          "Unauthorized access.You are not a valid user for this request.",
      });
    }
    const result = await usersCollections.findOne(query);
    if (!result) {
      return res.send({
        success: false,
        message: `User not found.`,
      });
    } else {
      res.send({
        success: true,
        user: result,
      });
    }
  } catch (error) {
    res.send({
      success: false,
      message: "something went wrong.user not found.sever error.",
    });
  }
};

module.exports = getUserDataControler;
