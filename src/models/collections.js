const { client } = require("./dbConnect");

const allJobPostCollections = client.db("jobSafari").collection("jobPosts");

module.exports = { allJobPostCollections };
