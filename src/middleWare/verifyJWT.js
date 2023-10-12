const jwt = require("jsonwebtoken");
const verifyJWT = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.send({
        success: false,
        message: "Unauthorized access. header not found",
      });
    }

    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.jwt_Access_Token, (error, decoded) => {
      if (error) {
        return res.send({
          success: false,
          message: "Forbiden Access.",
        });
      }
      req.decoded = decoded;
      next();
    });
  } catch (error) {
    res.send({
      success: false,
      message: "something went wrong while processing your request.",
    });
  }
};

module.exports = verifyJWT;
