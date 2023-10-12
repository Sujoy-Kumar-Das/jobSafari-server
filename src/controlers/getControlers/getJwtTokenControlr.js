const jwt = require("jsonwebtoken");
const { usersCollections } = require("../../models/collections");

const getJwtTokenControler = async (req, res) => {
  try {
    const { email } = req.query;

    const token = jwt.sign(email, process.env.jwt_Access_Token);

    if (!token) {
      return res.send({
        message: "Unauthorized access.Please login later.",
      });
    }

    res.send({
      success: true,
      token,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "An error occurred while processing your request.",
    });
  }
};

module.exports = getJwtTokenControler;
