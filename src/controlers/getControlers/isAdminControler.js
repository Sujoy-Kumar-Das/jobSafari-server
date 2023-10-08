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
    } else {
      const result = await usersCollections.findOne(query);
      if (!result) {
        return res.send({
          success: false,
          admin: false,
          message: "Unauthorized access.Your are not admin.",
        });
      } else {
        res.send({
          success: true,
          admin: true,
        });
      }
    }
  } catch (error) {
    res.send({
      success: false,
      message: "Something went wrong.please try again later.",
    });
  }
};

module.exports = isAdminControler;
