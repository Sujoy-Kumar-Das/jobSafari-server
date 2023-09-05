const testControler = async (req, res) => {
  try {
    res.send("server is running");
  } catch (error) {
    console.log(error);
  }
};

module.exports = testControler;


