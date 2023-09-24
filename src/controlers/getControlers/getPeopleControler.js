const { usersCollections } = require("../../models/collections");

const getPeopleControler = async (req, res) => {
  try {
    // get qurys
    const { name, jobTitle } = req.query;

    // set query
    let query = {};

    if (name && jobTitle) {
      query = {
        name: { $regex: new RegExp(name, "i") },
        post: { $regex: new RegExp(jobTitle, "i") },
      };
    } else if (name) {
      query = {
        name: { $regex: new RegExp(name, "i") },
      };
    } else if (jobTitle) {
      query = {
        post: { $regex: new RegExp(jobTitle, "i") },
      };
    }

    // result
    const result = await usersCollections.find(query).toArray();
    if (!result.length) {
      res.send({
        success: false,
        message: `No user available at this moment.`,
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
      message: `Find people server error.Please try again later.`,
    });
  }
};

module.exports = getPeopleControler;
