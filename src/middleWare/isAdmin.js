const { usersCollections } = require("../models/collections");

const isAdmin = async (req, res, next) => {
  try {
    const email = req.query.email;
    if (!email) {
      return res.send({
        success: false,
        message: "invalid user.Email address not found.",
      });
    }
    const user = await usersCollections.findOne({ email });
    if (!user) {
      return res.send({
        success: false,
        message: "Invalid user. User not found.",
      });
    }
    const admin = user.admin;
    if (!admin) {
      return res.send({
        success: false,
        message:
          "Unauthorized access.You are not a admin for access this page.",
      });
    }
    next();
  } catch (error) {
    res.send({
      success: false,
      message:
        "Server error.Something went wrong while proccessing your request.",
    });
  }
};

module.exports = isAdmin;
