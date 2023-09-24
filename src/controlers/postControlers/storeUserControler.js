const { usersCollections } = require("../../models/collections");

const storeUserControler = async (req, res) => {
  try {
    const email = req.query.email;
    const body = req.body;
    const query = { email: email };
    const updatedDoc = {
      $set: body,
    };
    const option = { upsert: true };
    const isAvailable = await usersCollections.findOne(query);
    if (isAvailable) {
      return res.send({
        success: true,
        message: `Wellcome ${body.name} in Job Safari family.`,
      });
    }
    const result = await usersCollections.updateOne(query, updatedDoc, option);
    if (!result.acknowledged) {
      return res.send({
        success: false,
        message: "Something went wrong for createing your account.",
      });
    }
    res.send({
      success: true,
      message: `Wellcome ${body.name} in Job Safari family.`,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Sever error for creating your account.Please try again later.",
    });
  }
};

module.exports = storeUserControler;
