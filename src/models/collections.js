const { client } = require("./dbConnect");

const allJobPostCollections = client.db("jobSafari").collection("jobPosts");
const testimonialCollections = client.db("jobSafari").collection("testimonial");
module.exports = { allJobPostCollections, testimonialCollections };
