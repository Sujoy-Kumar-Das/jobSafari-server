const { usersCollections } = require("../../models/collections");

const isAdminControler = async (req, res) => {
  try {
    const { email } = req.params;
    const query = { email: email };
    if (!email) {
      return res.send({
        success: false,
        admin: false,
        message: "Unauthorized access.Your are not admin.",
      });
    }
    const user = await usersCollections.findOne(query);
    if (!user) {
      return res.send({
        success: false,
        admin: false,
        message: "Unauthorized access.user not found.",
      });
    }
    if (!user.admin) {
      return res.send({
        success: false,
        admin: false,
        message: "Unauthorized access.You are not a admin.",
      });
    }
    res.send({
      success: true,
      admin: true,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Something went wrong.please try again later.",
    });
  }
};

module.exports = isAdminControler;
