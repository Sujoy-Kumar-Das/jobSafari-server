const { ObjectId } = require("mongodb");
const {
  usersCollections,
  allJobPostCollections,
} = require("../../models/collections");

const deleteUserControler = async (req, res) => {
  try {
    const id = req.params.id;
    const email = req.query.email;
    const query = { _id: new ObjectId(id) };
    const user = await usersCollections.findOne(query);

    console.log(req.decoded);
    // verify jwt email
    if (email !== req.decoded) {
      return res.send({
        success: false,
        message:
          "Unauthorized access.You are not a valid user for deletation.",
      });
    }
    if (!user) {
      return res.send({
        success: false,
        message: "User already deleted.",
      });
    }

    // delete users all job posts
    await allJobPostCollections.deleteMany({
      email: user.email,
    });

    // delete user
    const result = await usersCollections.deleteOne(query);

    if (!result.acknowledged) {
      return res.send({
        success: false,
        message:
          "Something went wrong you can't delete this user yet.Please try again later.",
      });
    }

    res.send({
      success: true,
      message: "User Deleted Successfully.",
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Sever Error.You can't delete user now.Try again later.",
    });
  }
};

module.exports = deleteUserControler;
