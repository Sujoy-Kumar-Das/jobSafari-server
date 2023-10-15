const { ObjectId } = require("mongodb");
const { usersCollections } = require("../../models/collections");

const makeAdminControler = async (req, res) => {
  try {
    const { id } = req.params;
    const query = { _id: new ObjectId(id) };

    // get admin roles value from headers
    const admin = req.headers.admin;
    const option = { upsert: true };
    const updatedDoc = {
      $set: {
        admin: admin === "true" ? true : false,
      },
    };

    const user = await usersCollections.findOne(query);

    // check is user availeable.
    if (!user) {
      return res.send({
        success: false,
        message: "User not found.",
      });
    }

    // check admins requirment is true then make admin
    if (admin === "true") {
      // check is user already admin.
      if (user.admin) {
        return res.send({
          success: false,
          message: "User already admin.",
        });
      }

      // make admin operation.
      const result = await usersCollections.updateOne(
        query,
        updatedDoc,
        option
      );

      if (!result.acknowledged) {
        return res.send({
          success: false,
          message: `something went wrong please try again later.`,
        });
      }
      res.send({
        success: true,
        message: `${user.name} is now admin.`,
      });
    } else {
      // check users role
      if (!user.admin) {
        return res.send({
          success: false,
          message:
            "You cant remove role as a because this user is not a admin.",
        });
      }

      // remove admin opearation
      const result = await usersCollections.updateOne(
        query,
        updatedDoc,
        option
      );

      if (!result.acknowledged) {
        return res.send({
          success: false,
          message: `something went wrong please try again later.`,
        });
      }
      res.send({
        success: true,
        message: `${user.name} removed from admin..`,
      });
    }
  } catch (error) {
    console.log(error);
    res.send({
      success: false,
      message: "Server error for make admin.Please Try agin later.",
    });
  }
};

module.exports = makeAdminControler;
