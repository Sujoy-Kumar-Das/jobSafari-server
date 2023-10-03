const { usersCollections } = require("../../models/collections");

const getAllUSersControler = async (req, res) => {
  try {
    const query = {};
    const result = await usersCollections.find(query).toArray();
    if (!result.length) {
      res.send({
        success: false,
        message: "NO USER AVAILABLE YET.",
      });
    } else {
      res.send({
        success: true,
        users: result,
      });
    }
  } catch (error) {
    res.send({
      success: false,
      message: "USERS NOT FOUND SERVER ERROR.",
    });
  }
};

module.exports = getAllUSersControler;
