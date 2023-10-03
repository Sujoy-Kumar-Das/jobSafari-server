const { ObjectId } = require("mongodb");
const {
  usersCollections,
  allJobPostCollections,
} = require("../../models/collections");

const deleteUserControler = async (req, res) => {
  try {
    const { id } = req.params;
    const query = { _id: new ObjectId(id) };
    const user = await usersCollections.findOne(query);
    if (!user) {
      return res.send({
        success: false,
        message: "User Allready deleted.",
      });
    } else {
      // delete all job posts
      const userEmailQuery = { email: user.email };
      await allJobPostCollections.deleteMany(userEmailQuery);

      //   delete query
      const result = await usersCollections.deleteOne(query);
      if (!result.acknowledged) {
        return res.send({
          success: false,
          message:
            "Something went wrong you can't delete this user yet.Please try again later.",
        });
      } else {
        res.send({
          success: true,
          message: "User Deleted Successfully.",
        });
      }
    }
  } catch (error) {
    res.send({
      success: false,
      message: "Sever Error.You can't delete user now.Try again later.",
    });
  }
};

module.exports = deleteUserControler;
