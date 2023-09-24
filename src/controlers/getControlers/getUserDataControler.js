const { usersCollections } = require("../../models/collections");

const getUserDataControler = async (req, res) => {
  try {
    const { email } = req.query;
    const query = { email: email };
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
